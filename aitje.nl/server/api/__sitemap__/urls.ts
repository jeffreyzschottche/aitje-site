// Dynamic routes for @nuxtjs/sitemap: products, services, cases and knowledge articles.
import { searchPages } from "~/content/searchCatalog";
import { englishPath } from "#shared/siteLocales";

export default defineSitemapEventHandler(() => {
  return searchPages.map(page => ({ loc: page.path, lastmod: page.lastmod })).flatMap((page) => {
    const en = englishPath(page.loc);
    const alternatives = [{ hreflang: "nl", href: page.loc }, { hreflang: "en", href: en }, { hreflang: "x-default", href: page.loc }];
    return [{ ...page, alternatives }, { ...page, loc: en, alternatives }];
  });
});
