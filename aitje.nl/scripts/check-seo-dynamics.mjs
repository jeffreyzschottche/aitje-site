// Regression check using an isolated copy: real price edits and new content,
// without touching the founder's working files or sending mail/analytics.
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { generateAiFiles } from "./generate-ai-files.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const fixture = await fs.mkdtemp(path.join(os.tmpdir(), "aitje-seo-"));
try {
  for (const directory of ["app/content", "app/data", "app/pages", "app/utils", "shared"]) {
    await fs.cp(path.join(root, directory), path.join(fixture, directory), { recursive: true });
  }
  const change = async (name, transform) => {
    const file = path.join(fixture, name);
    await fs.writeFile(file, transform(await fs.readFile(file, "utf8")));
  };
  await change("app/content/pricing.ts", source => source
    .replace("hourlyRate: 75", "hourlyRate: 76")
    .replace("introductory: 395", "introductory: 425")
    .replace("installation: { from: 199", "installation: { from: 229")
    .replace("software: 499, introductoryInstalled: 599", "software: 549, introductoryInstalled: 649")
    .replace("core: { monthly: 49", "core: { monthly: 59"));
  await change("app/content/products.ts", source => source.replace("export const products =", 'productDefinitions.push({ ...productDefinitions[0], slug: "seo-fixture-product", name: "SEO Fixture Product", price: 123 });\nproductDefinitions.push({ ...productDefinitions[0], slug: "seo-fixture-hidden", status: "disabled" });\nexport const products ='));
  await change("app/content/cases.ts", source => source.replace("// Keep case stories", 'cases.push({ ...cases[0], slug: "seo-fixture-case", title: "SEO Fixture Case" });\n// Keep case stories'));
  await generateAiFiles({ rootDir: fixture, quiet: true });
  for (const prefix of ["", "/en"]) {
    const index = await fs.readFile(path.join(fixture, `public${prefix}/llms.txt`), "utf8");
    assert(index.includes("€76"), "Hourly rate did not update in AI index");
    assert(index.includes("€549") && index.includes("€649") && index.includes("€778"), "Product price or installed offer did not update");
    assert(index.includes("€425"), "Scan price did not update");
    assert(index.includes("seo-fixture-product") && index.includes("seo-fixture-case"), "New published content is missing");
    assert(!index.includes("seo-fixture-hidden"), "Unpublished product leaked into AI index");
    const productSection = prefix ? "products" : "producten";
    await fs.access(path.join(fixture, `public/llms/pages${prefix}/${productSection}/seo-fixture-product.md`));
    await fs.access(path.join(fixture, `public/llms/pages${prefix}/cases/seo-fixture-case.md`));
    const support = await fs.readFile(path.join(fixture, `public/llms/pages${prefix}/${prefix ? "services" : "diensten"}/ondersteuning-en-onderhoud.md`), "utf8");
    assert(support.includes("€59"), "Support price did not update");
  }
  const compiled = await build({ stdin: { contents: `
    import { productStructuredData, serviceStructuredData } from './app/utils/structuredData.ts';
    import { products } from './app/content/products.ts';
    import { services } from './app/content/services.ts';
    import { searchPages } from './app/content/searchCatalog.ts';
    export default { products: products.map(productStructuredData), services: services.map(serviceStructuredData), searchPages };`, resolveDir: fixture, loader: "ts" }, bundle: true, write: false, platform: "node", format: "esm", alias: { "@": path.join(fixture, "app") } });
  const data = (await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`)).default;
  const assistant = data.products.find(product => product.sku === "aitje-assistent");
  assert.equal(assistant.offers[0].price, 549);
  assert.equal(assistant.offers[1].price, 649);
  assert.equal(assistant.offers[0].priceSpecification.valueAddedTaxIncluded, false);
  const additional = data.products.find(product => product.sku === "seo-fixture-product");
  assert.equal(additional.offers.length, 1, "Invented installation offer for a new product");
  assert.equal(additional.offers[0].price, 123);
  assert.equal(data.services.find(service => service.name === "AI-scan").offers[0].price, 425);
  assert.equal(data.services.find(service => service.name === "Ondersteuning en onderhoud").offers[0].price, 59);
  assert(data.searchPages.some(page => page.path === "/producten/seo-fixture-product"));
  assert(data.searchPages.some(page => page.path === "/cases/seo-fixture-case"));
  assert(!data.searchPages.some(page => page.path.includes("seo-fixture-hidden")));
  console.log("Passed: price edits, installation bundles, monthly support, new products/cases and unpublished-product exclusion in NL + EN.");
} finally {
  await fs.rm(fixture, { recursive: true, force: true });
}
