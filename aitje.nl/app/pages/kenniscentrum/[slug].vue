<script setup lang="ts">
// Knowledge article (redesign/pages/knowledge.md: article template, "Laatst bijgewerkt").
import { articles, getArticle } from "@/content/knowledge";

const route = useRoute();
const article = getArticle(String(route.params.slug));

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: "Artikel niet gevonden",
    fatal: true,
  });
}

const linked = (article.links ?? [])
  .map((l) => getArticle(l.slug))
  .filter((a) => a !== undefined);
const related = [
  ...linked,
  ...articles.filter(
    (a) =>
      a.topic === article.topic &&
      a.slug !== article.slug &&
      !linked.includes(a),
  ),
].slice(0, 3);

const updated = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date(article.lastUpdated));

usePageSeo({
  title: article.title,
  description: article.excerpt,
  image: article.heroImage,
  breadcrumbs: [
    { name: "Kenniscentrum", path: "/kenniscentrum" },
    { name: article.title, path: `/kenniscentrum/${article.slug}` },
  ],
  schema: [
    {
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      dateModified: article.lastUpdated,
      author: { "@id": `${useRuntimeConfig().public.siteUrl}/#organization` },
      publisher: {
        "@id": `${useRuntimeConfig().public.siteUrl}/#organization`,
      },
    },
  ],
});
</script>

<template>
  <div>
    <section class="pt-28 pb-12 md:pt-36">
      <div class="container-page max-w-4xl">
        <NuxtLink to="/kenniscentrum" class="text-sm text-muted hover:text-ink"
          >← Kenniscentrum</NuxtLink
        >
        <p class="eyebrow mt-8 text-brand-ink">
          <NuxtLink
            :to="{
              path: '/kenniscentrum',
              query: { categorie: article.topic },
            }"
            class="hover:underline"
            >{{ article.topic }}</NuxtLink
          >
        </p>
        <h1
          class="mt-4 font-heading text-[2.4rem] leading-[1.05] font-bold md:text-[3.4rem]"
        >
          {{ article.title }}
        </h1>
        <p class="mt-6 text-xl leading-relaxed text-ink/80">
          {{ article.excerpt }}
        </p>
        <p
          class="mt-6 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-muted"
        >
          <span>{{ article.readTime }} lezen</span>
          <span>Laatst bijgewerkt: {{ updated }}</span>
        </p>
      </div>
    </section>

    <section class="pb-12">
      <div class="container-page max-w-5xl">
        <KnowledgeVisual :slug="article.slug" :topic="article.topic" large />
      </div>
    </section>

    <section class="pb-20">
      <div class="container-page article-layout">
        <nav class="article-toc" aria-label="In dit artikel">
          <p class="eyebrow text-brand-ink">In dit artikel</p>
          <a
            v-for="(section, i) in article.sections"
            :key="section.title"
            :href="`#uitleg-${i}`"
            >{{ section.title }}</a
          >
        </nav>
        <div class="article-body">
          <div class="space-y-10">
            <section
              v-for="(section, i) in article.sections"
              :id="`uitleg-${i}`"
              :key="section.title"
            >
              <h2 class="font-heading text-2xl font-bold">
                {{ section.title }}
              </h2>
              <p
                class="mt-4 text-lg leading-relaxed text-ink/85"
                :class="i === 0 ? 'rounded-2xl bg-brand/15 p-6' : ''"
              >
                {{ section.content }}
              </p>
            </section>
          </div>

          <div
            class="on-dark mt-16 rounded-panel bg-ink p-8 text-white md:p-10"
          >
            <p class="eyebrow text-brand">Van uitleg naar toepassing</p>
            <p class="mt-4 font-heading text-2xl leading-snug font-semibold">
              Wil je weten wat dit voor jouw werk betekent?
            </p>
            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
              <UiButton to="/contact" arrow>Bespreek je AI-vraag</UiButton>
              <UiButton to="/diensten/ai-scan" variant="light"
                >Bekijk de AI-scan</UiButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="related.length" class="border-t border-line py-20">
      <div class="container-page">
        <h2 class="font-heading text-2xl font-bold">Lees ook</h2>
        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <ArticleCard
            v-for="item in related"
            :key="item.slug"
            :article="item"
          />
        </div>
      </div>
    </section>
  </div>
</template>
