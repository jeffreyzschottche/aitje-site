import { buildAlternateLinks, buildSeoGraph, resolveSeoEntry } from "@/utils/seo";

export default defineNuxtPlugin(() => {
  const route = useRoute();
  const {
    public: { siteUrl },
  } = useRuntimeConfig();
  const normalizedSiteUrl = siteUrl.replace(/\/$/, "");

  useHead(() => {
    const entry = resolveSeoEntry(route.path, normalizedSiteUrl);
    const graph = buildSeoGraph(entry, normalizedSiteUrl);

    return {
      htmlAttrs: {
        lang: entry.localeKey === "en" ? "en" : "nl",
      },
      title: entry.title,
      link: buildAlternateLinks(entry, normalizedSiteUrl),
      meta: [
        {
          name: "description",
          content: entry.description,
        },
        {
          name: "robots",
          content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        },
        {
          name: "theme-color",
          content: "#212121",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "AITJE",
        },
        {
          property: "og:locale",
          content: entry.locale,
        },
        {
          property: "og:title",
          content: entry.title,
        },
        {
          property: "og:description",
          content: entry.description,
        },
        {
          property: "og:url",
          content: `${normalizedSiteUrl}${entry.path === "/" ? "" : entry.path}`,
        },
        {
          property: "og:image",
          content: entry.image,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: entry.title,
        },
        {
          name: "twitter:description",
          content: entry.description,
        },
        {
          name: "twitter:image",
          content: entry.image,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          key: "aitje-structured-data",
          innerHTML: JSON.stringify(graph),
        },
      ],
    };
  });
});
