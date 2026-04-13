import { knowledgeArticles as knowledgeEn } from "@/data/knowledgeArticles.en";
import { knowledgeArticles as knowledgeNl } from "@/data/knowledgeArticles";
import { productCatalogV2 } from "@/data/productCatalogV2";
import { useCasesV2 } from "@/data/useCasesV2";

type LocaleCode = "nl-NL" | "en-US";
type LocaleKey = "nl" | "en";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ResolvedSeoEntry = {
  title: string;
  description: string;
  path: string;
  locale: LocaleCode;
  localeKey: LocaleKey;
  image: string;
  pageType: string;
  breadcrumbs: BreadcrumbItem[];
  alternatePath: string;
  schema: Record<string, unknown>[];
};

const DEFAULT_IMAGE = "/images/aitje-cubes.png";

const staticEntries: Record<string, { title: string; description: string; pageType?: string }> = {
  "/": {
    title: "AITJE | Lokale Edge AI voor organisaties",
    description:
      "Lokale Edge AI voor organisaties die op de lange termijn goedkoper uit willen zijn en aan hun onafhankelijkheid willen werken zonder productiviteit te verliezen.",
  },
  "/producten": {
    title: "Producten | AITJE",
    description: "De vijf productrichtingen van AITJE: AITJE Assistent, AITJE Custom, AITJE Notulist, AITJE Prepper en AITJE Manager.",
  },
  "/diensten": {
    title: "Diensten | AITJE",
    description: "AITJE helpt met AI-strategie, optimalisatieconsultancy, AITJE Custom en SLA.",
    pageType: "Service",
  },
  "/use-cases": {
    title: "Use Cases | AITJE",
    description: "Herkenbare situaties waarin lokale Edge AI en de producten van AITJE relevant kunnen zijn voor een organisatie.",
  },
  "/kenniscentrum": {
    title: "Kenniscentrum | AITJE",
    description: "Begrippen en jargon helder uitgelegd voor organisaties die AITJE en lokale Edge AI beter willen begrijpen.",
  },
  "/roadmap": {
    title: "Roadmap | AITJE",
    description: "Wat bestaat, wat in ontwikkeling is en wat gepland staat binnen de productlijn van AITJE.",
  },
  "/over-aitje": {
    title: "Over AITJE | AITJE",
    description: "Over AITJE als toegankelijk Nederlands bedrijf voor lokale Edge AI, praktische begeleiding en meer regie voor organisaties.",
    pageType: "AboutPage",
  },
  "/faq": {
    title: "FAQ | AITJE",
    description: "Praktische vragen over AITJE, producten, werkwijze, privacy en regie.",
    pageType: "FAQPage",
  },
  "/contact": {
    title: "Contact | AITJE",
    description: "Neem contact op voor een demo, prijslijst, offerte of kennismaking met AITJE.",
    pageType: "ContactPage",
  },
  "/en": {
    title: "AITJE | Local Edge AI for organizations",
    description:
      "Local Edge AI for organizations that want lower long-term costs and more independence without losing productivity.",
  },
  "/en/producten": {
    title: "Products | AITJE",
    description: "The five AITJE product directions: AITJE Assistent, AITJE Custom, AITJE Notulist, AITJE Prepper and AITJE Manager.",
  },
  "/en/diensten": {
    title: "Services | AITJE",
    description: "AITJE helps with AI strategy, optimization consultancy, AITJE Custom and SLA.",
    pageType: "Service",
  },
  "/en/use-cases": {
    title: "Use Cases | AITJE",
    description: "Recognizable situations where local Edge AI and AITJE products can make sense for an organization.",
  },
  "/en/kenniscentrum": {
    title: "Knowledge Center | AITJE",
    description: "Terms and jargon explained clearly for organizations that want to understand AITJE and local Edge AI better.",
  },
  "/en/roadmap": {
    title: "Roadmap | AITJE",
    description: "What exists, what is in development and what is planned across the AITJE product line.",
  },
  "/en/over-aitje": {
    title: "About AITJE | AITJE",
    description: "About AITJE as an accessible Dutch company for local Edge AI, practical guidance and more control for organizations.",
    pageType: "AboutPage",
  },
  "/en/faq": {
    title: "FAQ | AITJE",
    description: "Practical questions about AITJE, products, way of working, privacy and control.",
    pageType: "FAQPage",
  },
  "/en/contact": {
    title: "Contact | AITJE",
    description: "Contact AITJE for a demo, price list, quote or introduction.",
    pageType: "ContactPage",
  },
};

const makeCrumbs = (localeKey: LocaleKey, path: string): BreadcrumbItem[] => {
  const homePath = localeKey === "en" ? "/en" : "/";
  const crumbs: BreadcrumbItem[] = [{ name: "AITJE", path: homePath }];
  if (path !== homePath) crumbs.push({ name: path.split("/").filter(Boolean).slice(-1)[0] ?? "AITJE", path });
  return crumbs;
};

const resolveDynamic = (path: string, localeKey: LocaleKey) => {
  const productsPrefix = localeKey === "en" ? "/en/producten/" : "/producten/";
  const useCasesPrefix = localeKey === "en" ? "/en/use-cases/" : "/use-cases/";
  const knowledgePrefix = localeKey === "en" ? "/en/kenniscentrum/" : "/kenniscentrum/";
  const assistantModulePrefix =
    localeKey === "en" ? "/en/producten/aitje-assistent/" : "/producten/aitje-assistent/";

  if (path.startsWith(assistantModulePrefix)) {
    const slug = path.slice(assistantModulePrefix.length);
    const module = productCatalogV2[localeKey].assistantModules[slug];
    if (module) {
      return {
        title: `${module.title} | AITJE`,
        description: module.intro,
        pageType: "WebPage",
      };
    }
  }

  if (path.startsWith(productsPrefix)) {
    const slug = path.slice(productsPrefix.length);
    const product = productCatalogV2[localeKey].products.find((entry) => entry.slug === slug);
    if (product) {
      return {
        title: `${product.title} | AITJE`,
        description: product.summary,
        pageType: "Product",
      };
    }
  }

  if (path.startsWith(useCasesPrefix)) {
    const slug = path.slice(useCasesPrefix.length);
    const item = useCasesV2[localeKey].find((entry) => entry.slug === slug);
    if (item) {
      return {
        title: `${item.title} | AITJE`,
        description: item.summary,
        pageType: "Article",
      };
    }
  }

  if (path.startsWith(knowledgePrefix)) {
    const slug = path.slice(knowledgePrefix.length);
    const article = (localeKey === "en" ? knowledgeEn : knowledgeNl).find((entry) => entry.slug === slug);
    if (article) {
      return {
        title: `${article.title} | AITJE`,
        description: article.excerpt,
        pageType: "Article",
      };
    }
  }

  return null;
};

export const resolveSeoEntry = (path: string, siteUrl: string): ResolvedSeoEntry => {
  const localeKey: LocaleKey = path === "/en" || path.startsWith("/en/") ? "en" : "nl";
  const locale: LocaleCode = localeKey === "en" ? "en-US" : "nl-NL";
  const normalizedPath = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  const alternatePath =
    localeKey === "en"
      ? normalizedPath === "/en"
        ? "/"
        : normalizedPath.replace(/^\/en/, "") || "/"
      : normalizedPath === "/"
        ? "/en"
        : `/en${normalizedPath}`;

  const entry = staticEntries[normalizedPath] ?? resolveDynamic(normalizedPath, localeKey) ?? staticEntries[localeKey === "en" ? "/en" : "/"]!;

  return {
    title: entry.title,
    description: entry.description,
    path: normalizedPath,
    locale,
    localeKey,
    image: `${siteUrl}${DEFAULT_IMAGE}`,
    pageType: entry.pageType ?? "WebPage",
    breadcrumbs: makeCrumbs(localeKey, normalizedPath),
    alternatePath,
    schema: [],
  };
};

export const buildAlternateLinks = (entry: ResolvedSeoEntry, siteUrl: string) => [
  {
    rel: "canonical",
    href: `${siteUrl}${entry.path === "/" ? "" : entry.path}`,
  },
  {
    rel: "alternate",
    hreflang: entry.localeKey === "en" ? "nl-NL" : "en-US",
    href: `${siteUrl}${entry.alternatePath === "/" ? "" : entry.alternatePath}`,
  },
  {
    rel: "alternate",
    hreflang: "x-default",
    href: `${siteUrl}`,
  },
];

export const buildSeoGraph = (entry: ResolvedSeoEntry, siteUrl: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "AITJE",
      url: siteUrl,
      logo: `${siteUrl}/images/aitje-logo.png`,
    },
    {
      "@type": entry.pageType,
      name: entry.title,
      description: entry.description,
      url: `${siteUrl}${entry.path === "/" ? "" : entry.path}`,
      inLanguage: entry.localeKey === "en" ? "en" : "nl",
      image: entry.image,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: entry.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
      })),
    },
  ],
});
