// Generate the public English dictionary with DeepL. The key is read only here,
// never added to Nuxt runtime config or sent to a browser. Cached strings are reused.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseJs } from "@babel/parser";
import { parse as parseSfc } from "@vue/compiler-sfc";
import { build } from "esbuild";
import { localizeTemplate, normalizeText } from "./lib/localize-template.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const dictionaryPath = path.join(root, "shared/translations/en.json");
const sources = new Set();
const schemaIdentifiers = new Set(["Country", "ContactPoint", "customer support", "minPrice", "identifier", "inLanguage", "availableLanguage", "billingDuration", "unitCode", "contactType", "citation", "WebSite", "WebPage", "CollectionPage", "AboutPage", "ContactPage", "ItemList", "ImageObject", "Offer", "PriceSpecification", "UnitPriceSpecification", "EUR", "P1M"]);
const shouldTranslate = (text) => /\p{L}/u.test(text) &&
  !schemaIdentifiers.has(text) && !/^\{\{\d+\}\}[^\s]*[-/#][^\s]*$/.test(text) &&
  !/^(?:https?:|mailto:|tel:|\/|#|data:)/.test(text) && !/^\S+@\S+\.\S+$/.test(text) &&
  !/^[a-z\d]+(?:[-_.:/][a-z\d]*)+$/i.test(text.replace(/\{\{\d+\}\}/g, "")) &&
  !text.startsWith(".") && !/^(?:pointerdown|pointerup|click|focusout|keydown)$/.test(text) &&
  !/(?:^| )(?:bg-|text-(?:xs|sm|base|lg|xl|[2-9]xl|white|black|brand|ink|muted|left|center|right|\[)|rounded-|border-|font-|hover:|md:|lg:|size-|w-|h-|px-|py-|mt-|grid-cols-)/.test(text) &&
  !/[{}<>]/.test(text.replace(/\{\{\d+\}\}/g, ""));
const add = (value) => { const text = normalizeText(value); if (shouldTranslate(text)) sources.add(text); };
const filesIn = async (directory) => {
  const files = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesIn(file)); else files.push(file);
  }
  return files;
};
const collectJs = (source) => {
  const ast = parseJs(source, { sourceType: "module", plugins: ["typescript"], errorRecovery: true });
  const visit = (node, parent, field) => {
    if (!node || typeof node !== "object") return;
    if (node.type === "StringLiteral" && field !== "key" && parent?.type !== "ImportDeclaration" && !parent?.type?.startsWith("TS")) add(node.value);
    if (node.type === "TemplateLiteral") add(node.quasis.map((part, i) => part.value.cooked + (i < node.expressions.length ? `{{${i}}}` : "")).join(""));
    for (const [key, value] of Object.entries(node)) {
      if (["loc", "comments", "extra", "tokens", "errors"].includes(key)) continue;
      if (Array.isArray(value)) value.forEach((item) => visit(item, node, key));
      else if (value && typeof value === "object") visit(value, node, key);
    }
  };
  visit(ast);
};
for (const file of await filesIn(path.join(root, "app"))) {
  if (!/\.(?:ts|vue)$/.test(file)) continue;
  const source = await fs.readFile(file, "utf8");
  if (file.endsWith(".vue")) {
    const { descriptor } = parseSfc(source, { filename: file });
    if (descriptor.scriptSetup) collectJs(descriptor.scriptSetup.content);
    if (descriptor.script) collectJs(descriptor.script.content);
    localizeTemplate(source, file, (value, kind) => {
      if (kind === "expression") collectJs(`const value = (${value});`);
      else if (/\p{L}/u.test(value)) sources.add(normalizeText(value));
    });
  } else collectJs(source);
}
collectJs(await fs.readFile(path.join(root, "shared/contactTopics.ts"), "utf8"));
collectJs(await fs.readFile(path.join(root, "shared/deploymentOptions.ts"), "utf8"));
// Translate validation messages in the form without changing the working mail endpoint.
const contactEndpoint = await fs.readFile(path.join(root, "server/api/contact.post.ts"), "utf8");
for (const match of contactEndpoint.matchAll(/statusMessage:\s*"([^"]+)"/g)) add(match[1]);
// Evaluate composed content too: prices, FAQs and article paragraphs include template literals.
const modules = ["products", "services", "cases", "knowledge", "faq", "site", "custom", "pricing", "seo"];
const entry = modules.map((name, i) => `import * as m${i} from './app/content/${name}.ts';`).join("\n") + `\nexport default [${modules.map((_, i) => `m${i}`).join(",")}];`;
const bundled = await build({ stdin: { contents: entry, resolveDir: root, loader: "ts" }, bundle: true, write: false, platform: "node", format: "esm", alias: { "@": path.join(root, "app") } });
const content = (await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString("base64")}`)).default;
const visitContent = (value) => {
  if (typeof value === "string") add(value);
  else if (Array.isArray(value)) value.forEach(visitContent);
  else if (value && typeof value === "object") Object.values(value).forEach(visitContent);
};
visitContent(content);
let dictionary = JSON.parse(await fs.readFile(dictionaryPath, "utf8"));
const overrides = JSON.parse(await fs.readFile(path.join(root, "shared/translations/overrides.en.json"), "utf8"));
Object.assign(dictionary, overrides);
const pending = [...sources].filter((text) => !dictionary[text]);
const chars = pending.reduce((sum, text) => sum + [...text].length, 0);
console.log(JSON.stringify({ uniqueStrings: sources.size, cached: sources.size - pending.length, pending: pending.length, characters: chars }));
if (process.argv.includes("--check")) { if (pending.length) { console.log(pending.slice(0, 15)); process.exitCode = 1; } process.exit(); }
if (process.argv.includes("--dry-run")) process.exit();
let key = process.env.DEEPL_KEY;
if (!key) for (const file of [path.join(root, "../.env"), path.join(root, ".env")]) {
  const env = await fs.readFile(file, "utf8").catch(() => "");
  const match = env.match(/^\s*(?:export\s+)?DEEPL_KEY\s*=\s*(.+)\s*$/m);
  if (match) { key = match[1].trim().replace(/^['"]|['"]$/g, ""); break; }
}
if (!key) throw new Error("DEEPL_KEY ontbreekt in de omgeving.");
const api = key.endsWith(":fx") ? "https://api-free.deepl.com" : "https://api.deepl.com";
const request = async (url, options = {}) => {
  const response = await fetch(api + url, { ...options, headers: { Authorization: `DeepL-Auth-Key ${key}`, "Content-Type": "application/json" }, signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`DeepL ${response.status}: ${await response.text()}`);
  return response.json();
};
const usage = await request("/v2/usage");
console.log(JSON.stringify({ usedCharacters: usage.character_count, characterLimit: usage.character_limit }));
if (process.argv.includes("--usage")) process.exit();
if (usage.character_limit && usage.character_count + chars > usage.character_limit) throw new Error("Deze vertaalronde past niet binnen het resterende DeepL-tegoed.");
for (let start = 0; start < pending.length; start += 40) {
  const batch = pending.slice(start, start + 40);
  const response = await request("/v2/translate", { method: "POST", body: JSON.stringify({ text: batch, source_lang: "NL", target_lang: "EN-GB", model_type: "prefer_quality_optimized", preserve_formatting: true, context: "AITJE is a Dutch AI consultancy providing local and external AI, automation, apps, workflows and installation. Use clear, natural British English. AITJE and AITJE Assistent are brand names: preserve their spelling and capitalisation. Preserve prices, Markdown links, numbered {{0}} placeholders and technical model names. 'Eigen regie' means control and independence; 'inrichting' means setup. 'AI-scan' is an AI assessment. Prices exclude VAT." }) });
  if (response.translations?.length !== batch.length) throw new Error("DeepL gaf een onvolledige batch terug.");
  response.translations.forEach((item, i) => {
    let translated = item.text.trim().replace(/(?<![@./])\bAitje\b/gi, "AITJE");
    const destinations = [...batch[i].matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
    let linkIndex = 0;
    translated = translated.replace(/\]\([^)]+\)/g, () => `](${destinations[linkIndex++]})`);
    if (linkIndex !== destinations.length) throw new Error("DeepL heeft een Markdown-link gewijzigd; controleer deze vertaling.");
    if (!translated) throw new Error(`DeepL returned an empty translation for: ${batch[i]}`);
    const placeholders = (text) => [...text.matchAll(/\{\{\d+\}\}/g)].map((match) => match[0]).sort().join("|");
    if (placeholders(translated) !== placeholders(batch[i])) throw new Error("Een placeholder is gewijzigd bij het vertalen.");
    dictionary[batch[i]] = translated;
  });
  dictionary = Object.fromEntries(Object.entries(dictionary).sort(([a], [b]) => a.localeCompare(b)));
  await fs.writeFile(dictionaryPath, JSON.stringify(dictionary, null, 2) + "\n");
  console.log(`DeepL: ${Math.min(start + batch.length, pending.length)}/${pending.length}`);
}
console.log("English dictionary saved. Review navigation, headlines, terms and pricing before release.");
Object.assign(dictionary, overrides);
await fs.writeFile(dictionaryPath, JSON.stringify(dictionary, null, 2) + "\n");
