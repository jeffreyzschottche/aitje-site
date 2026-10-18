import type { Faq } from "@/content/types";
import { companyProfile } from "@/content/seo";

type Crumb = { name: string; path: string };

type PageSeo = {
  title: string;
  description: string;
  image?: string;
  breadcrumbs?: Crumb[];
  faq?: Faq[];
  schema?: Record<string, unknown>[];
  pageType?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage" | "FAQPage";
  items?: { name: string; path: string; description?: string }[];
};

const stripLinks = (text: string) =>
  text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export const organizationSchema = (siteUrl: string) => ({
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: companyProfile.name,
  url: siteUrl,
  logo: `${siteUrl}/img/logo-dark.png`,
  slogan: companyProfile.slogan,
  description: companyProfile.description,
  email: companyProfile.email,
  areaServed: { "@type": "Country", identifier: "NL", name: "Nederland" },
  knowsAbout: [...companyProfile.expertise],
  contactPoint: {
    "@type": "ContactPoint",
    email: companyProfile.email,
    contactType: "customer support",
    availableLanguage: ["nl", "en"],
  },
});

export function usePageSeo(seo: PageSeo) {
  const route = useRoute();
  const { locale, basePath, text, localePath } = useSiteLanguage();
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
  useHead(() => {
    const url = `${siteUrl}${route.path === "/" ? "" : route.path}`;
    const absoluteUrl = (path: string) => new URL(path, `${siteUrl}/`).href;
    const pageUrl = (path: string) => `${siteUrl}${localePath(path) === "/" ? "" : localePath(path)}`;
    const image = absoluteUrl(seo.image ?? "/img/redesign/owl-hero.webp");
    const fullTitle = basePath.value === "/" ? text(seo.title) : `${text(seo.title)} | AITJE`;

    const fixedSchemaFields = new Set(["@type", "@id", "url", "image", "logo", "item", "dateModified", "datePublished", "price", "minPrice", "priceCurrency", "availability", "sku", "identifier", "inLanguage", "availableLanguage", "billingDuration", "unitCode", "contactType", "citation"]);
    const translateSchema = (value: unknown, key = ""): unknown => {
      if (fixedSchemaFields.has(key)) return value;
      if (typeof value === "string") return text(value);
      if (Array.isArray(value)) return value.map((item) => translateSchema(item));
      if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([name, item]) => [name, translateSchema(item, name)]));
      return value;
    };

    const organizationId = `${siteUrl}/#organization`;
    const websiteId = `${siteUrl}/#website`;
    const pageId = `${url}#webpage`;
    const entitySchemas = (seo.schema ?? []).map((source) => {
      const item = translateSchema(source) as Record<string, unknown>;
      const type = String(item["@type"]);
      const id = `${url}#${type.toLowerCase()}`;
      return {
        ...item,
        "@id": id,
        url,
        mainEntityOfPage: { "@id": pageId },
        ...(typeof item.image === "string" ? { image: absoluteUrl(item.image) } : {}),
        ...(type === "Service" ? { provider: { "@id": organizationId } } : {}),
        ...(type === "Article" ? {
          image,
          inLanguage: locale.value,
          author: { "@id": organizationId },
          publisher: { "@id": organizationId },
          isPartOf: { "@id": websiteId },
        } : {}),
        ...(Array.isArray(item.offers) ? {
          offers: item.offers.map((offer, i) => ({
            ...(offer as Record<string, unknown>),
            "@id": `${id}-offer-${i + 1}`,
            url,
            seller: { "@id": organizationId },
          })),
        } : {}),
      };
    });
    const page: Record<string, unknown> = {
      "@type": seo.faq?.length ? "FAQPage" : seo.pageType ?? "WebPage",
      "@id": pageId,
      url,
      name: fullTitle,
      description: text(seo.description),
      inLanguage: locale.value,
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationId },
      about: entitySchemas.length ? entitySchemas.map(entity => ({ "@id": entity["@id"] })) : { "@id": organizationId },
      primaryImageOfPage: { "@type": "ImageObject", url: image },
      ...(entitySchemas.length ? { mainEntity: entitySchemas.map(entity => ({ "@id": entity["@id"] })) } : {}),
      ...(seo.pageType === "AboutPage" || seo.pageType === "ContactPage" ? { mainEntity: { "@id": organizationId } } : {}),
    };
    const graph: Record<string, unknown>[] = [
      translateSchema(organizationSchema(siteUrl)) as Record<string, unknown>,
      { "@type": "WebSite", "@id": websiteId, url: siteUrl, name: "AITJE", inLanguage: ["nl", "en"], publisher: { "@id": organizationId } },
      page,
      ...entitySchemas,
    ];

    if (seo.items?.length) {
      const listId = `${url}#list`;
      page.mainEntity = { "@id": listId };
      graph.push({
        "@type": "ItemList", "@id": listId,
        name: text(seo.title), numberOfItems: seo.items.length,
        itemListElement: seo.items.map((item, index) => ({
          "@type": "ListItem", position: index + 1,
          item: { "@type": "WebPage", "@id": `${pageUrl(item.path)}#webpage`, url: pageUrl(item.path), name: text(item.name), ...(item.description ? { description: text(item.description) } : {}) },
        })),
      });
    }

    if (seo.breadcrumbs?.length) {
      graph.push({
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [{ name: "Home", path: "/" }, ...seo.breadcrumbs].map(
          (crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: text(crumb.name),
            item: `${siteUrl}${localePath(crumb.path) === "/" ? "" : localePath(crumb.path)}`,
          }),
        ),
      });
      page.breadcrumb = { "@id": `${url}#breadcrumb` };
    }

    if (seo.faq?.length) {
      page.mainEntity = seo.faq.map((item) => ({
          "@type": "Question",
          name: text(item.q),
          acceptedAnswer: { "@type": "Answer", text: stripLinks(text(item.a)) },
        }));
    }

    return {
      title: fullTitle,
      link: [
        { rel: "canonical", href: url },
        { rel: "alternate", hreflang: "nl", href: `${siteUrl}${localePath(route.path, "nl") === "/" ? "" : localePath(route.path, "nl")}` },
        { rel: "alternate", hreflang: "en", href: `${siteUrl}${localePath(route.path, "en")}` },
        { rel: "alternate", hreflang: "x-default", href: `${siteUrl}${basePath.value === "/" ? "" : basePath.value}` },
        { rel: "alternate", type: "text/markdown", href: `${siteUrl}/llms/pages${route.path === "/" ? "/index" : route.path}.md` },
        { rel: "describedby", type: "text/plain", href: `${siteUrl}${locale.value === "en" ? "/en" : ""}/llms.txt` },
      ],
      meta: [
        { name: "description", content: text(seo.description) },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { property: "og:type", content: entitySchemas.some(item => item["@type"] === "Article") ? "article" : "website" },
        { property: "og:site_name", content: "AITJE" },
        { property: "og:locale", content: locale.value === "en" ? "en_GB" : "nl_NL" },
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: text(seo.description) },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: fullTitle },
        { name: "twitter:description", content: text(seo.description) },
        { name: "twitter:image", content: image },
      ],
      script: [
        {
          type: "application/ld+json",
          key: "structured-data",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": graph,
          }).replace(/</g, "\\u003c"),
        },
      ],
    };
  });
}
