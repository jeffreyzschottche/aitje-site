// One published-page inventory for the bilingual sitemap and generated AI files.
import { products } from "./products";
import { services } from "./services";
import { cases } from "./cases";
import { articles } from "./knowledge";
import { staticPageSeo } from "./seo";

export const searchPages = [
  ...Object.entries(staticPageSeo).map(([path, page]) => ({ path, title: page.title, description: page.description, kind: "page", lastmod: undefined as string | undefined })),
  ...products.map(p => ({ path: `/producten/${p.slug}`, title: p.status === "available" ? `${p.name}: ${p.headline}` : `${p.name} (in ontwikkeling)`, description: p.seoDescription, kind: "product", lastmod: undefined })),
  ...services.map(s => ({ path: `/diensten/${s.slug}`, title: `${s.name}: ${s.headline}`, description: s.seoDescription, kind: "service", lastmod: undefined })),
  ...cases.map(c => ({ path: `/cases/${c.slug}`, title: c.title, description: c.summary, kind: "case", lastmod: undefined })),
  ...articles.map(a => ({ path: `/kenniscentrum/${a.slug}`, title: a.title, description: a.excerpt, kind: "article", lastmod: a.lastUpdated })),
];
