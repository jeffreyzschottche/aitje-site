// Dynamic routes for @nuxtjs/sitemap: products, services, cases and knowledge articles.
import { products } from "~/content/products";
import { services } from "~/content/services";
import { cases } from "~/content/cases";
import { articles } from "~/content/knowledge";

export default defineSitemapEventHandler(() => [
  ...products.map((p) => ({ loc: `/producten/${p.slug}` })),
  ...services.map((s) => ({ loc: `/diensten/${s.slug}` })),
  ...cases.map((c) => ({ loc: `/cases/${c.slug}` })),
  ...articles.map((a) => ({ loc: `/kenniscentrum/${a.slug}`, lastmod: a.lastUpdated })),
]);
