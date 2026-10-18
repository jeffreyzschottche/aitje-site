// Generate public AI-readable files from the same published content as the site.
// No keys, network requests, private content or invented customer claims.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { parse as parseSfc } from "@vue/compiler-sfc";
import { parse as parseTemplate } from "@vue/compiler-dom";

export async function generateAiFiles({ check = false, quiet = false, rootDir } = {}) {
  const root = rootDir ?? fileURLToPath(new URL("../", import.meta.url));
  const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || "https://aitje.com").replace(/\/$/, "");
  const modules = ["searchCatalog", "products", "services", "cases", "knowledge", "faq", "seo", "pricing", "custom"];
  const entry = modules.map((name, i) => `import * as m${i} from './app/content/${name}.ts';`).join("\n") + `
  import { localizedPath } from './shared/siteLocales.ts';
  import { loadEnglishTranslations, translateText } from './shared/siteTranslations.ts';
  await loadEnglishTranslations();
  export default { ${modules.map((name, i) => `${name}: m${i}`).join(",")}, localizedPath, translateText };`;
  const bundled = await build({ stdin: { contents: entry, resolveDir: root, loader: "ts" }, bundle: true, write: false, platform: "node", format: "esm", alias: { "@": path.join(root, "app") } });
  const data = (await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString("base64")}`)).default;
  const { searchPages } = data.searchCatalog;
  if (new Set(searchPages.map(page => page.path)).size !== searchPages.length) throw new Error("Duplicate published page in AI index.");
  const output = new Map();
  const staticBodies = new Map();
  const sections = {
    nl: { page: "AITJE en overzicht", product: "AI-producten", service: "AI-diensten", case: "Cases", article: "Kenniscentrum" },
    en: { page: "AITJE and overview", product: "AI products", service: "AI services", case: "Case studies", article: "Knowledge centre" },
  };
  const labels = {
    nl: { canonical: "Officiële pagina", summary: "Samenvatting", who: "Voor wie", features: "Mogelijkheden", included: "Inbegrepen", excluded: "Apart af te spreken", steps: "De aanpak", results: "Wat je krijgt", pricing: "Prijzen en voorwaarden", faq: "Veelgestelde vragen", sources: "Bronnen", status: "Status", available: "Beschikbaar", planned: "In ontwikkeling", hourly: "Uurtarief", vat: "Alle prijzen zijn exclusief btw.", contact: "Contact", infrastructure: "Hardware, serverhuur, reis- of locatiekosten en aanvullende inrichting worden apart begroot." },
    en: { canonical: "Official page", summary: "Summary", who: "Who it is for", features: "Capabilities", included: "Included", excluded: "Agreed separately", steps: "The approach", results: "Deliverables", pricing: "Prices and conditions", faq: "Frequently asked questions", sources: "Sources", status: "Status", available: "Available", planned: "In development", hourly: "Hourly rate", vat: "All prices exclude VAT.", contact: "Contact", infrastructure: "Hardware, server rental, travel or on-site costs and additional configuration are quoted separately." },
  };

  // Supplement static pages with their own static prose, excluding conditional UI.
  for (const page of searchPages.filter(page => page.kind === "page")) {
    const file = page.path === "/" ? "index.vue" : ["/producten", "/diensten", "/cases", "/kenniscentrum"].includes(page.path) ? `${page.path.slice(1)}/index.vue` : `${page.path.slice(1)}.vue`;
    const source = await fs.readFile(path.join(root, "app/pages", file), "utf8");
    const template = parseSfc(source).descriptor.template?.content;
    const blocks = [];
    const textFragments = node => {
      if (node.type === 2) return [node.content];
      if (node.type !== 1) return [];
      if (node.children.some(child => child.type === 5)) return null;
      const children = node.children.map(textFragments);
      return children.some(value => value === null) ? null : children.flat();
    };
    const visit = node => {
      if (node.type === 1 && node.props.some(prop => prop.type === 7 && ["if", "else", "else-if", "for"].includes(prop.name))) return;
      if (node.type === 1 && ["p", "h2", "h3"].includes(node.tag)) {
        // Keep atomic text nodes intact so the site's existing translation is reused.
        const fragments = textFragments(node)?.map(text => text.replace(/\s+/g, " ").trim()).filter(Boolean);
        if (fragments?.some(text => /\p{L}/u.test(text))) blocks.push({ heading: node.tag !== "p", fragments });
        return;
      }
      for (const child of node.children ?? []) visit(child);
    };
    if (template) visit(parseTemplate(template));
    staticBodies.set(page.path, blocks);
  }

  for (const locale of ["nl", "en"]) {
    const L = labels[locale];
    const local = destination => data.localizedPath(destination, locale);
    const url = destination => `${siteUrl}${local(destination) === "/" ? "" : local(destination)}`;
    const markdownPath = destination => `/llms/pages${local(destination) === "/" ? "/index" : local(destination)}.md`;
    const text = value => String(data.translateText(value, locale)).replace(/\]\((\/[^)]+)\)/g, (_, destination) => `](${url(destination)})`);
    const money = amount => `€${new Intl.NumberFormat(locale === "en" ? "en-GB" : "nl-NL", { maximumFractionDigits: 0 }).format(amount)}`;
    const paragraph = lines => lines.map(text).join("\n\n");
    const bullets = lines => lines.map(value => `- ${text(value)}`).join("\n");
    const list = pages => pages.map(page => `- [${text(page.title)}](${url(page.path)}): ${text(page.description)}`).join("\n");
    const questionAnswers = items => items.map(item => `### ${text(item.q)}\n\n${text(item.a)}`).join("\n\n");
    const titled = items => items.map(item => `### ${text(item.title ?? item.name)}\n\n${text(item.text ?? item.content ?? "")}${item.examples ? `\n\n${bullets(item.examples)}` : ""}`).join("\n\n");
    const priceOverview = () => {
      const { pricing: prices, introduction, getInstalledProductOffer } = data.pricing;
      return [
        `${L.hourly}: ${money(prices.hourlyRate)}. ${L.vat}`,
        ...data.products.availableProducts.map(product => {
          const offer = getInstalledProductOffer(product.slug);
          const condition = offer?.introductory ? text(data.pricing.productIntroductionNote) : "";
        const softwarePrice = product.price === undefined ? (locale === "en" ? "on request" : "op aanvraag") : money(product.price);
        return `${product.name}: ${softwarePrice} (${locale === "en" ? "self-installation" : "zelfinstallatie"}); ${offer ? `${money(offer.price)} (${locale === "en" ? "with basic installation" : "met basisinstallatie"}; ${locale === "en" ? "regularly from" : "regulier vanaf"} ${money(offer.standard)}).` : ""} ${condition}`;
        }),
        `AI-scan: ${money(data.pricing.scanPrice)} (${locale === "en" ? "regular" : "regulier"} ${money(prices.scan.standard)}). ${introduction.scan.active ? text(data.pricing.scanIntroductionNote) : ""}`,
        L.infrastructure,
      ].join("\n\n");
    };

    const documents = [];
    for (const page of searchPages) {
      const slug = page.path.split("/").at(-1);
      const body = [`# ${text(page.title)}`, `${L.canonical}: ${url(page.path)}`, `> ${text(page.description)}`];
      if (page.kind === "product") {
        const product = data.products.products.find(item => item.slug === slug);
        body.push(`${L.status}: ${product.status === "available" ? L.available : L.planned}`, paragraph(product.intro), `## ${L.who}\n\n${bullets(product.forWho)}`);
        if (product.features?.length) body.push(`## ${L.features}\n\n${titled(product.features)}`);
        if (product.included?.length) body.push(`## ${L.included}\n\n${bullets(product.included)}`);
        if (product.notIncluded?.length) body.push(`## ${L.excluded}\n\n${bullets(product.notIncluded)}`);
        if (product.technical?.length) body.push(titled(product.technical));
        if (product.faq?.length) body.push(`## ${L.faq}\n\n${questionAnswers(product.faq)}`);
      } else if (page.kind === "service") {
        const service = data.services.services.find(item => item.slug === slug);
        body.push(paragraph(service.intro), `## ${L.who}\n\n${bullets(service.forWho)}`, `## ${L.steps}\n\n${titled(service.steps)}`, `## ${L.results}\n\n${bullets(service.deliverables)}`, `## ${L.pricing}\n\n${text(service.price.label)}. ${L.vat}\n\n${text(service.price.note)}`);
        if (service.parts?.length) body.push(service.parts.map(part => `### ${text(part.name)}\n\n${text(part.text)}\n\n${text(part.price)}. ${L.vat}`).join("\n\n"));
        if (slug === "ai-scan" && data.pricing.introduction.scan.active) body.push(text(data.pricing.scanIntroductionNote));
        if (slug === "aitje-custom") body.push(`## ${L.features}\n\n${titled(data.custom.customPossibilities)}`, data.custom.customToolGroups.map(group => `### ${text(group.title)}\n\n${text(group.text)}\n\n${bullets(group.tools)}`).join("\n\n"));
        if (slug === "ondersteuning-en-onderhoud") body.push(data.services.slaPlans.map(plan => `### ${plan.name}\n\n${text(plan.price)} / ${locale === "en" ? "month" : "maand"}; ${text(plan.timeLabel)}\n\n${bullets(plan.features)}`).join("\n\n"));
        body.push(`## ${L.excluded}\n\n${bullets(service.notIncluded)}`, `## ${L.faq}\n\n${questionAnswers(service.faq)}`);
      } else if (page.kind === "case") {
        const item = data.cases.cases.find(item => item.slug === slug);
        body.push(`${text(item.label)} — ${text(item.context)}`);
        // Case labels remain visible; example situations are never claimed as reviews.
        if (item.recognize?.length) body.push(bullets(item.recognize));
        for (const section of item.sections) body.push(`## ${text(section.title)}\n\n${paragraph(section.paragraphs ?? [])}${section.bullets?.length ? `\n\n${bullets(section.bullets)}` : ""}`);
        for (const key of ["developmentAgency", "councilHub", "gameLevels", "productModels", "realEstate", "workshopVoice", "productEnrichment"]) {
          const story = item[key];
          if (!story) continue;
          if (story.intro) body.push(paragraph(Array.isArray(story.intro) ? story.intro : [story.intro]));
          if (story.workflow) body.push(`## ${L.steps}\n\n${story.workflow.map(step => `### ${text(step.title)}\n\n${text(step.text ?? step.description ?? "")}`).join("\n\n")}`);
        }
        if (item.disclaimer) body.push(text(item.disclaimer));
      } else if (page.kind === "article") {
        const article = data.knowledge.articles.find(item => item.slug === slug);
        body.push(titled(article.sections));
        if (article.sources?.length) body.push(`## ${L.sources}\n\n${article.sources.map(source => `- [${text(source.title)}](${source.url})`).join("\n")}`);
      } else {
        body.push(text(data.seo.companyProfile.description));
        if (page.path === "/faq") body.push(data.faq.faqGroups.map(group => `## ${text(group.title)}\n\n${questionAnswers(group.items)}`).join("\n\n"));
        else if (page.path === "/producten") body.push(list(searchPages.filter(item => item.kind === "product")), `## ${L.pricing}\n\n${priceOverview()}`);
        else if (page.path === "/diensten") body.push(list(searchPages.filter(item => item.kind === "service" || item.path === "/diensten/voor-it-bedrijven")));
        else if (page.path === "/cases") body.push(list(searchPages.filter(item => item.kind === "case")));
        else if (page.path === "/kenniscentrum") body.push(list(searchPages.filter(item => item.kind === "article")));
        else if (page.path === "/") body.push(bullets([...data.seo.companyProfile.expertise]), list(searchPages.filter(item => ["/producten", "/diensten", "/cases", "/over-aitje", "/contact"].includes(item.path))));
        body.push(...staticBodies.get(page.path).map(block => `${block.heading ? "## " : ""}${block.fragments.map(text).join(" ")}`));
      }
      body.push(`## ${L.contact}\n\n[${locale === "en" ? "Contact AITJE" : "Neem contact op met AITJE"}](${url("/contact")}) — contact@aitje.com`);
      const markdown = body.filter(Boolean).join("\n\n").replace(/\n{3,}/g, "\n\n") + "\n";
      output.set(`public${markdownPath(page.path)}`, markdown);
      documents.push(markdown);
    }

    const prefix = locale === "en" ? "/en" : "";
    const otherPrefix = locale === "en" ? "" : "/en";
    const index = [
      "# AITJE",
      `> ${text(data.seo.companyProfile.description)}`,
      `${locale === "en" ? "Official website" : "Officiële website"}: ${siteUrl}. ${locale === "en" ? "This index covers all published English pages. Dutch is the original site language." : "Deze index bevat alle gepubliceerde Nederlandse pagina’s. Nederlands is de oorspronkelijke taal van de site."}`,
      `${locale === "en" ? "The situation determines whether local, external or hybrid AI is appropriate. AITJE can also arrange suitable infrastructure; customers do not need to already own a server." : "De situatie bepaalt of lokale, externe of hybride AI past. AITJE kan ook passende infrastructuur regelen; klanten hoeven niet al een server te hebben."}`,
      `## ${L.pricing}\n\n${priceOverview()}`,
      `## ${locale === "en" ? "Language and complete text" : "Taal en volledige tekst"}\n\n- [${locale === "en" ? "Nederlandse index" : "English index"}](${siteUrl}${otherPrefix}/llms.txt)\n- [${locale === "en" ? "Complete English page text" : "Volledige Nederlandse paginatekst"}](${siteUrl}${prefix}/llms-full.txt)\n- [Sitemap](${siteUrl}/sitemap.xml)`,
    ];
    for (const kind of ["page", "product", "service", "case", "article"]) {
      index.push(`## ${sections[locale][kind]}\n\n${searchPages.filter(page => page.kind === kind).map(page => `- [${text(page.title)}](${siteUrl}${markdownPath(page.path)}): ${text(page.description)} ${locale === "en" ? "Web page" : "Webpagina"}: ${url(page.path)}`).join("\n")}`);
    }
    output.set(`public${prefix}/llms.txt`, index.join("\n\n") + "\n");
    output.set(`public${prefix}/llms-full.txt`, `# AITJE — ${locale === "en" ? "complete English content" : "volledige Nederlandse inhoud"}\n\n${text(data.seo.companyProfile.description)}\n\n${documents.join("\n---\n\n")}`);
  }

  const mismatches = [];
  for (const [name, contents] of output) {
    const file = path.join(root, name);
    if (check) {
      if (await fs.readFile(file, "utf8").catch(() => "") !== contents) mismatches.push(name);
    } else {
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, contents);
    }
  }
  const filesIn = async directory => {
    const entries = await fs.readdir(directory, { withFileTypes: true }).catch(() => []);
    return (await Promise.all(entries.map(entry => entry.isDirectory() ? filesIn(path.join(directory, entry.name)) : [path.join(directory, entry.name)]))).flat();
  };
  // Only prune this generator's own page snapshots, when a page is unpublished.
  for (const file of await filesIn(path.join(root, "public/llms/pages"))) {
    const name = path.relative(root, file);
    if (!output.has(name)) {
      if (check) mismatches.push(name); else await fs.unlink(file);
    }
  }
  if (mismatches.length) {
    console.error(`AI files are stale. Run npm run seo:generate.\n${mismatches.join("\n")}`);
    process.exitCode = 1;
  } else if (!quiet) console.log(`${check ? "Checked" : "Generated"} ${output.size} AI files for ${searchPages.length} NL + ${searchPages.length} EN pages.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await generateAiFiles({ check: process.argv.includes("--check") });
}
