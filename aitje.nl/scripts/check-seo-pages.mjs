// Audit server-rendered metadata and AI snapshots on a running local preview.
// Usage: npm run seo:audit -- --base-url http://127.0.0.1:3018
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = fileURLToPath(new URL("../", import.meta.url));
const option = process.argv.indexOf("--base-url");
const baseUrl = (option >= 0 ? process.argv[option + 1] : "http://127.0.0.1:3000").replace(/\/$/, "");
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || "https://aitje.com").replace(/\/$/, "");
const bundled = await build({ stdin: { contents: `
import { searchPages } from './app/content/searchCatalog.ts';
import { getProduct } from './app/content/products.ts';
import { getProductTrailer } from './app/content/productTrailers.ts';
import { englishPath } from './shared/siteLocales.ts';
import { loadEnglishTranslations, translateText } from './shared/siteTranslations.ts';
await loadEnglishTranslations();
export default { searchPages, englishPath, translateText, getProduct, getProductTrailer };`, resolveDir: root, loader: "ts" }, bundle: true, write: false, platform: "node", format: "esm", alias: { "@": path.join(root, "app") } });
const { searchPages, englishPath, translateText, getProduct, getProductTrailer } = (await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString("base64")}`)).default;
const get = async pathname => {
  const response = await fetch(`${baseUrl}${pathname}`, { signal: AbortSignal.timeout(30000), redirect: "manual" });
  assert.equal(response.status, 200, `${pathname}: HTTP ${response.status}`);
  return { text: await response.text(), headers: response.headers };
};
const attributes = element => Object.fromEntries([...element.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
const decode = text => text.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const sitemap = (await get("/sitemap.xml")).text;
const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(decode(match[1])).pathname);
const pages = searchPages.flatMap(page => [{ ...page, locale: "nl", route: page.path }, { ...page, locale: "en", route: englishPath(page.path) }]);
assert.equal(new Set(sitemapPaths).size, pages.length, "Sitemap page count mismatch");
const failures = [];
let inspected = 0;
const queue = [...pages];
const inspect = async page => {
  assert(sitemapPaths.includes(page.route), `${page.route} missing from sitemap`);
  const { text: html } = await get(page.route);
  assert(html.includes(`lang="${page.locale}"`), `${page.route}: document language`);
  assert(/<h1\b/.test(html), `${page.route}: no rendered heading`);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attributes(match[0]));
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => attributes(match[0]));
  const canonical = `${siteUrl}${page.route === "/" ? "" : page.route}`;
  assert.equal(links.filter(link => link.rel === "canonical").length, 1);
  assert.equal(links.find(link => link.rel === "canonical").href, canonical);
  for (const [language, route] of [["nl", page.path], ["en", englishPath(page.path)], ["x-default", page.path]]) {
    assert.equal(links.find(link => link.hreflang === language)?.href, `${siteUrl}${route === "/" ? "" : route}`, `${page.route}: ${language} alternate`);
  }
  const description = decode(meta.find(item => item.name === "description")?.content ?? "");
  assert.equal(description, translateText(page.description, page.locale), `${page.route}: inconsistent page description`);
  assert(!meta.some(item => item.name === "robots" && /noindex/.test(item.content)), `${page.route}: indexing blocked`);
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, `${page.route}: JSON-LD block count`);
  const json = JSON.parse(scripts[0][1]);
  assert.equal(json["@context"], "https://schema.org");
  const graph = json["@graph"];
  const organization = graph.find(item => item["@type"] === "Organization");
  assert.equal(organization["@id"], `${siteUrl}/#organization`);
  assert.equal(organization.email, "contact@aitje.com");
  assert.equal(organization.areaServed.identifier, "NL");
  assert(organization.description.includes(page.locale === "en" ? "Dutch" : "Nederlandse"));
  assert(!organization.telephone && !organization.aggregateRating, "Placeholder phone or ratings published");
  assert(graph.some(item => item["@id"] === `${siteUrl}/#website`));
  const webpage = graph.find(item => item["@id"] === `${canonical}#webpage`);
  assert.equal(webpage.inLanguage, page.locale);
  assert.equal(webpage.url, canonical);
  assert.equal(webpage.description, description);
  const ids = graph.map(item => item["@id"]);
  assert.equal(new Set(ids).size, ids.length, `${page.route}: duplicate entity IDs`);
  if (page.route !== "/" && page.route !== "/en") {
    const breadcrumb = graph.find(item => item["@type"] === "BreadcrumbList");
    assert.equal(breadcrumb.itemListElement.at(-1).item, canonical);
    assert.equal(breadcrumb.itemListElement[0].item, `${siteUrl}${page.locale === "en" ? "/en" : ""}`);
  }
  const entityType = { product: "Product", service: "Service", case: "Article", article: "Article" }[page.kind];
  if (entityType || page.path === "/diensten/voor-it-bedrijven") {
    const entity = graph.find(item => item["@type"] === (entityType || "Service"));
    assert(entity, `${page.route}: missing main entity`);
    assert.equal(entity.url, canonical);
    assert(entity.image?.startsWith(siteUrl), `${page.route}: relative or missing image`);
    if (entityType === "Article") {
      assert.equal(entity.inLanguage, page.locale);
      assert.equal(entity.mainEntityOfPage["@id"], webpage["@id"]);
    }
    if (entityType === "Product") {
      const product = getProduct(page.path.split("/").at(-1));
      const trailer = getProductTrailer(product.slug);
      if (trailer) {
        const video = graph.find(item => item["@type"] === "VideoObject");
        assert(video, `${page.route}: missing trailer structured data`);
        assert.equal(video.name, translateText(trailer.title, page.locale));
        assert.equal(video.embedUrl, trailer.embedUrl);
        assert.equal(video.thumbnailUrl, trailer.thumbnailUrl);
        assert.equal(video.uploadDate, trailer.uploadDate);
        assert.equal(video.duration, trailer.duration);
        assert.equal(video.inLanguage, "nl");
        assert.equal(entity.subjectOf["@id"], video["@id"]);
        assert.equal(video.about["@id"], entity["@id"]);
        assert.equal(entity.additionalProperty.length, product.features.length);
        assert(html.includes(trailer.embedUrl.replaceAll("&", "&amp;")), `${page.route}: schema trailer is not embedded`);
      }
      if (product.status === "available" && product.price !== undefined) assert(entity.offers?.length, `${page.route}: missing priced offers`);
      else assert(!entity.offers, `${page.route}: invented price for planned/unpriced product`);
      for (const offer of entity.offers ?? []) {
        assert.equal(offer.url, canonical);
        assert.equal(offer.priceSpecification.priceCurrency, "EUR");
        assert.equal(offer.priceSpecification.valueAddedTaxIncluded, false);
      }
    }
  }
  const list = graph.find(item => item["@type"] === "ItemList");
  if (list) {
    assert.equal(list.numberOfItems, list.itemListElement.length);
    for (const item of list.itemListElement) {
      assert(new URL(item.item.url).pathname.startsWith(page.locale === "en" ? "/en/" : "/"));
      assert(sitemapPaths.includes(new URL(item.item.url).pathname), "List links to an unpublished page");
    }
  }
  if (webpage["@type"] === "FAQPage") {
    assert(webpage.mainEntity.length > 0);
    assert(webpage.mainEntity.every(question => question["@type"] === "Question" && question.acceptedAnswer.text));
  }
  const markdown = links.find(link => link.type === "text/markdown");
  assert(markdown, `${page.route}: no Markdown discovery link`);
  const snapshot = await get(new URL(markdown.href).pathname);
  assert(snapshot.headers.get("content-type").includes("text/markdown"));
  assert(snapshot.text.includes(canonical), "Markdown canonical does not match HTML");
  if (["/producten/aitje-assistent", "/producten/aitje-coder"].includes(page.path)) {
    for (const term of ["BOSGAME M5", "BOSGAME M6", "Mac mini", "Hetzner", "DigitalOcean", "Nebius", "demo-fysiek", "demo-endpoint"]) assert(snapshot.text.includes(term), `${page.route}: enriched AI snapshot missing ${term}`);
    assert(snapshot.text.includes(page.path.endsWith("assistent") ? "pgvector" : "GitHub"));
  }
  inspected++;
};
await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const page = queue.shift();
    try { await inspect(page); } catch (error) { failures.push(`${page.route}: ${error.message}`); }
  }
}));
for (const prefix of ["", "/en"]) {
  const index = (await get(`${prefix}/llms.txt`)).text;
  const full = (await get(`${prefix}/llms-full.txt`)).text;
  for (const page of searchPages) {
    const route = prefix ? englishPath(page.path) : page.path;
    const canonical = `${siteUrl}${route === "/" ? "" : route}`;
    assert(index.includes(canonical) && full.includes(canonical), `AI index missing ${route}`);
  }
}
const robots = (await get("/robots.txt")).text;
assert(/User-Agent:\s*\*\s+Disallow:\s*(?:\n|$)/i.test(robots), "Public crawling is blocked");
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else console.log(`Passed: ${inspected} NL + EN server-rendered pages, JSON-LD, prices, canonical/hreflang, sitemap, Markdown alternatives and AI files.`);
