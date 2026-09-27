import type { Faq } from "@/content/types";

type Crumb = { name: string; path: string };

type PageSeo = {
  title: string;
  description: string;
  image?: string;
  breadcrumbs?: Crumb[];
  faq?: Faq[];
  schema?: Record<string, unknown>[];
};

const stripLinks = (text: string) =>
  text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export const organizationSchema = (siteUrl: string) => ({
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "AITJE",
  url: siteUrl,
  logo: `${siteUrl}/img/logo-dark.png`,
  slogan: "Je partner in AI.",
  email: "contact@aitje.com",
  areaServed: "NL",
});

export function usePageSeo(seo: PageSeo) {
  const route = useRoute();
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
  const url = `${siteUrl}${route.path === "/" ? "" : route.path}`;
  const image = `${siteUrl}${seo.image ?? "/img/redesign/owl-hero.webp"}`;
  const fullTitle = route.path === "/" ? seo.title : `${seo.title} | AITJE`;

  const graph: Record<string, unknown>[] = [
    organizationSchema(siteUrl),
    ...(seo.schema ?? []),
  ];

  if (seo.breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...seo.breadcrumbs].map(
        (crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${siteUrl}${crumb.path === "/" ? "" : crumb.path}`,
        }),
      ),
    });
  }

  if (seo.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: seo.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: stripLinks(item.a) },
      })),
    });
  }

  useHead({
    title: fullTitle,
    link: [{ rel: "canonical", href: url }],
    meta: [
      { name: "description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AITJE" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: seo.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    script: [
      {
        type: "application/ld+json",
        key: "structured-data",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      },
    ],
  });
}
