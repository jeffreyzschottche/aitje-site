<script setup lang="ts">
// Knowledge centre: featured introduction, searchable articles and topic filters.
import { articles, knowledgeCategories, featuredArticleSlugs } from "@/content/knowledge";
import type { KnowledgeCategory } from "@/content/types";

usePageSeo({
  title: "Kenniscentrum",
  description: "Heldere uitleg over AI, modellen en je eigen AI-omgeving. Wat is een LLM, wat is lokale AI, wat doet een agent? Het kenniscentrum van AITJE.",
  breadcrumbs: [{ name: "Kenniscentrum", path: "/kenniscentrum" }],
});
useHead({
  link: [{ rel: "preload", as: "image", href: "/img/redesign/knowledge-jungle-library.webp", fetchpriority: "high" }],
});

const route = useRoute();
const router = useRouter();
const search = ref("");
const active = computed<KnowledgeCategory | null>(() => {
  const value = route.query.categorie;
  return knowledgeCategories.some((c) => c.name === value) ? value as KnowledgeCategory : null;
});
const setCategory = (name: KnowledgeCategory | null) =>
  router.replace({ query: { ...route.query, categorie: name ?? undefined } });

const featured = articles.find(a => a.slug === featuredArticleSlugs[0]);
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("nl-NL").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
const searchIndex = articles.map(article => ({
  article,
  text: normalize([article.title, article.excerpt, article.topic, ...article.sections.map(section => section.title + " " + section.content)].join(" ")),
}));
const matching = computed(() => {
  const terms = normalize(search.value).split(/\s+/).filter(Boolean);
  return searchIndex.filter(entry => terms.every(term => entry.text.includes(term))).map(entry => entry.article);
});
const list = computed(() => active.value ? matching.value.filter(a => a.topic === active.value) : matching.value);
const countFor = (name: KnowledgeCategory) => matching.value.filter(a => a.topic === name).length;
const reset = () => {
  search.value = "";
  setCategory(null);
};
</script>

<template>
  <div>
    <PageHero
      class="knowledge-library-hero"
      eyebrow="Kenniscentrum"
      title="AI in gewone taal."
      subline="Kennis delen hoort bij samenwerken. Als jouw AI-partner helpen we je de wereld van AI te ontdekken en beter te begrijpen."
      image="/img/redesign/knowledge-soft-cheek-cutout.webp"
      background="/img/redesign/knowledge-jungle-library.webp"
      dark
      immersive
      image-alt="Een Vlaamse gaai op een stapel oude boeken met leesbril en lampje, naast het gloeiende AITJE-ei"
    >
      <template #title>
        AI in <span class="knowledge-library-title">gewone taal.</span>
      </template>
    </PageHero>


    <section v-if="featured" class="pb-12 md:pb-16" aria-label="Uitgelicht artikel">
      <div class="container-page">
        <NuxtLink :to="`/kenniscentrum/${featured.slug}`" class="article-feature knowledge-featured">
          <div class="knowledge-featured-photo">
            <img :src="featured.heroImage" :srcset="`${featured.thumbnail} 1000w, ${featured.heroImage} 2600w`" sizes="(max-width: 767px) 100vw, 50vw" :alt="featured.imageAlt" width="1200" height="800" loading="lazy" />
            <span class="knowledge-featured-badge"><AppIcon name="library" :size="16" /> Uitgelicht</span>
          </div>
          <div class="knowledge-featured-copy">
            <p class="knowledge-featured-eyebrow">Begin bij de basis</p>
            <h2>{{ featured.title }}</h2>
            <p class="knowledge-featured-excerpt">{{ featured.excerpt }}</p>
            <div class="knowledge-featured-footer">
              <span class="knowledge-featured-cta">Lees de uitleg <AppIcon name="arrow-right" :size="19" /></span>
              <span class="knowledge-featured-time">{{ featured.readTime }} lezen</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="pb-24" aria-labelledby="knowledge-browse-heading">
      <div class="container-page">
        <div class="knowledge-browser">
          <div class="knowledge-browser-top">
            <div>
              <h2 id="knowledge-browse-heading">Vind je antwoord</h2>
              <p>Zoek een begrip of filter de artikelen op onderwerp.</p>
            </div>
            <div class="knowledge-search">
              <label for="knowledge-search-input">Zoek in het kenniscentrum</label>
              <div class="knowledge-search-field">
                <AppIcon name="search" :size="21" />
                <input id="knowledge-search-input" v-model="search" type="search" placeholder="Bijvoorbeeld tokens, RAG of lokale AI" autocomplete="off" aria-controls="knowledge-results" @keydown.esc="search = ''" />
                <button v-if="search" type="button" aria-label="Wis zoekopdracht" @click="search = ''"><AppIcon name="x" :size="18" /></button>
              </div>
            </div>
          </div>
          <div class="knowledge-filters" role="group" aria-label="Filter op onderwerp">
            <p class="knowledge-filter-label">Filter op onderwerp</p>
            <div class="knowledge-filter-options">
              <button type="button" class="knowledge-filter" :class="{ 'is-active': !active }" :aria-pressed="!active" aria-controls="knowledge-results" @click="setCategory(null)">
                <span class="knowledge-filter-icon"><AppIcon name="library" :size="17" /></span>
                Alle artikelen <span class="knowledge-filter-count">{{ matching.length }}</span>
              </button>
              <button v-for="category in knowledgeCategories" :key="category.name" type="button" class="knowledge-filter" :class="{ 'is-active': active === category.name }" :aria-pressed="active === category.name" aria-controls="knowledge-results" @click="setCategory(active === category.name ? null : category.name)">
                <span class="knowledge-filter-icon"><AppIcon :name="category.icon" :size="17" /></span>
                {{ category.name }} <span class="knowledge-filter-count">{{ countFor(category.name) }}</span>
              </button>
            </div>
          </div>
        </div>

        <div class="knowledge-results-heading">
          <h3>{{ active ?? "Alle artikelen" }}</h3>
          <p role="status" aria-live="polite" aria-atomic="true">{{ list.length }} {{ list.length === 1 ? "artikel" : "artikelen" }}{{ search.trim() ? " gevonden" : "" }}</p>
          <button v-if="active || search" type="button" @click="reset">Wis zoeken en filters <AppIcon name="x" :size="15" /></button>
        </div>
        <div v-if="list.length" id="knowledge-results" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard v-for="article in list" :key="article.slug" :article="article" />
        </div>
        <div v-else id="knowledge-results" class="knowledge-empty">
          <span class="knowledge-empty-icon"><AppIcon name="search" :size="27" /></span>
          <h3>Geen artikelen gevonden</h3>
          <p>Probeer een ander zoekwoord of kies een ander onderwerp.</p>
          <button type="button" @click="reset">Toon alle artikelen <AppIcon name="arrow-right" :size="18" /></button>
        </div>
      </div>
    </section>

    <CtaBanner title="Wil je weten wat dit voor jouw werk betekent?" text="Uitleg is een begin. AITJE kijkt graag mee naar jouw situatie en vertaalt het naar concrete keuzes." />
  </div>
</template>

<style scoped>

.knowledge-library-hero {
  background: #0b211c;
  border-bottom: 0;
  margin-bottom: 45px;
}
.knowledge-library-title {
  color: #facc15;
}
.knowledge-library-hero :deep(.photo-bg) {
  object-position: 65% center;
}
.knowledge-library-hero :deep(.photo-wash) {
  background:
    linear-gradient(90deg, rgb(4 19 16 / 0.84), rgb(4 19 16 / 0.68) 35%, rgb(4 19 16 / 0.2) 60%, transparent 85%),
    linear-gradient(180deg, rgb(4 19 16 / 0.12), transparent 40%, rgb(4 19 16 / 0.42));
}
.knowledge-library-hero :deep(.page-hero-intro) {
  color: #e5ebe0;
}
.knowledge-library-hero :deep(.service-scene) {
  width: 105%;
  margin-left: -2.5%;
}
.knowledge-library-hero :deep(.service-scene-orbit) {
  opacity: 0.25;
}
.knowledge-library-hero :deep(.service-scene-subject) {
  filter: drop-shadow(0 20px 28px rgb(0 0 0 / 0.25));
}
@media (max-width: 767px) {
  .knowledge-library-hero {
    margin-bottom: 30px;
  }
  .knowledge-library-hero :deep(.photo-bg) {
    object-position: 80% center;
  }
  .knowledge-library-hero :deep(.photo-wash) {
    background: linear-gradient(180deg, rgb(4 19 16 / 0.9), rgb(4 19 16 / 0.82) 40%, rgb(4 19 16 / 0.12) 75%, rgb(4 19 16 / 0.48));
  }
  .knowledge-library-hero :deep(.service-scene) {
    width: 100%;
    margin-left: 0;
  }
}

.knowledge-featured { grid-template-columns: 1fr 1fr; align-items: stretch; gap: 0; overflow: hidden; border: 1px solid #20352b; border-radius: 26px; background: #14251f; box-shadow: 0 16px 40px -28px #14251f66; }
.knowledge-featured-photo { position: relative; overflow: hidden; min-height: 380px; background: var(--color-sand); }
.knowledge-featured-photo img { width: 100%; height: 100%; object-fit: cover; filter: none; transition: transform .5s ease; }
.knowledge-featured:hover .knowledge-featured-photo img { transform: scale(1.035); }
.knowledge-featured-badge { position: absolute; top: 24px; left: 24px; display: flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 999px; background: var(--color-brand); color: var(--color-ink); font-size: 11px; font-weight: 700; }
.knowledge-featured-copy { display: flex; flex-direction: column; justify-content: center; padding: clamp(28px, 3.6vw, 52px); color: #fff; }
.knowledge-featured-eyebrow { color: var(--color-brand); font: 10px var(--font-mono); letter-spacing: .16em; text-transform: uppercase; }
.knowledge-featured-copy h2 { margin-top: 18px; color: #fff; font-size: clamp(28px, 3vw, 44px); font-weight: 700; line-height: 1.15; }
.knowledge-featured-excerpt { margin-top: 22px; color: #d0dad3; font-size: 15px; line-height: 1.8; }
.knowledge-featured-footer { display: flex; align-items: center; flex-wrap: wrap; gap: 20px; margin-top: 30px; }
.knowledge-featured-cta { display: inline-flex; align-items: center; gap: 18px; padding: 14px 20px; border-radius: 999px; background: var(--color-brand); color: var(--color-ink); font-size: 13px; font-weight: 700; }
.knowledge-featured-time { color: #b3c5ba; font: 10px var(--font-mono); }
.knowledge-browser { padding: 28px 30px; border: 1px solid var(--color-line); border-radius: 22px; background: #fff; }
.knowledge-browser-top { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 32px; }
.knowledge-browser-top h2 { font-size: 25px; font-weight: 700; line-height: 1.25; }
.knowledge-browser-top p { margin-top: 8px; color: var(--color-muted); font-size: 13px; line-height: 1.6; }
.knowledge-search { width: 100%; max-width: 500px; justify-self: end; }
.knowledge-search label { display: block; margin-bottom: 8px; font-size: 11px; font-weight: 600; }
.knowledge-search-field { display: flex; align-items: center; gap: 12px; min-height: 54px; padding: 0 16px; border: 1px solid #c4c6bd; border-radius: 12px; background: var(--color-page); }
.knowledge-search-field:focus-within { border-color: var(--color-ink); box-shadow: 0 0 0 3px var(--color-brand); background: #fff; }
.knowledge-search-field > :deep(svg) { flex: none; }
.knowledge-search-field input { width: 100%; min-width: 0; padding: 15px 0; background: transparent; outline: none; font-size: 13px; }
.knowledge-search-field input::placeholder { color: #6d7168; }
.knowledge-search-field input::-webkit-search-cancel-button { appearance: none; }
.knowledge-search-field button { display: grid; flex: none; width: 30px; height: 30px; place-items: center; border-radius: 50%; background: var(--color-brand); }
.knowledge-filters { padding-top: 24px; margin-top: 24px; border-top: 1px solid var(--color-line); }
.knowledge-filter-label { margin-bottom: 12px; font: 10px var(--font-mono); letter-spacing: .1em; text-transform: uppercase; color: var(--color-muted); }
.knowledge-filter-options { display: flex; flex-wrap: wrap; gap: 9px; }
.knowledge-filter { display: inline-flex; align-items: center; gap: 9px; min-height: 44px; padding: 6px 12px 6px 7px; border: 1px solid var(--color-line); border-radius: 999px; background: #fff; color: var(--color-ink); font-size: 11px; font-weight: 600; transition: border-color .15s, background-color .15s; }
.knowledge-filter:hover { border-color: #c4a10a; }
.knowledge-filter.is-active { border-color: var(--color-brand); background: var(--color-brand); }
.knowledge-filter-icon { display: grid; width: 29px; height: 29px; flex: none; place-items: center; border-radius: 50%; background: var(--color-brand); }
.knowledge-filter.is-active .knowledge-filter-icon { background: #ffffff4d; }
.knowledge-filter-count { display: grid; min-width: 23px; height: 23px; padding-inline: 4px; place-items: center; border-radius: 50%; background: var(--color-page); color: var(--color-muted); font: 10px var(--font-mono); }
.knowledge-filter.is-active .knowledge-filter-count { background: #ffffff66; color: var(--color-ink); }
.knowledge-results-heading { display: flex; align-items: baseline; flex-wrap: wrap; gap: 10px 18px; margin: 32px 0 22px; }
.knowledge-results-heading h3 { font-size: 22px; font-weight: 700; }
.knowledge-results-heading p { color: var(--color-muted); font-size: 12px; }
.knowledge-results-heading button { display: inline-flex; align-items: center; gap: 7px; margin-left: auto; font-size: 11px; text-decoration: underline; text-decoration-color: var(--color-brand); text-underline-offset: 4px; }
.knowledge-empty { display: flex; align-items: center; flex-direction: column; padding: 56px 24px; border: 1px solid var(--color-line); border-radius: 20px; background: #fff; text-align: center; }
.knowledge-empty-icon { display: grid; width: 60px; height: 60px; place-items: center; border-radius: 18px; background: var(--color-brand); }
.knowledge-empty h3 { margin-top: 20px; font-size: 22px; font-weight: 700; }
.knowledge-empty p { margin-top: 10px; color: var(--color-muted); font-size: 14px; line-height: 1.6; }
.knowledge-empty button { display: flex; align-items: center; gap: 12px; margin-top: 24px; padding: 14px 20px; border-radius: 999px; background: var(--color-brand); font-size: 13px; font-weight: 600; }
.knowledge-featured:focus-visible, .knowledge-filter:focus-visible, .knowledge-search-field button:focus-visible, .knowledge-empty button:focus-visible, .knowledge-results-heading button:focus-visible { outline: 3px solid var(--color-ink); outline-offset: 4px; }
@media (max-width: 1023px) {
  .knowledge-featured-copy { padding: 28px; }
  .knowledge-featured-excerpt { font-size: 13px; }
}
@media (max-width: 767px) {
  .knowledge-featured { grid-template-columns: 1fr; border-radius: 20px; }
  .knowledge-featured-photo { min-height: 0; aspect-ratio: 16 / 10; }
  .knowledge-featured-badge { top: 18px; left: 18px; }
  .knowledge-featured-copy { padding: 28px 24px; }
  .knowledge-featured-copy h2 { font-size: 28px; }
  .knowledge-featured-excerpt { font-size: 14px; }
  .knowledge-featured-footer { margin-top: 24px; gap: 16px; }
  .knowledge-browser { padding: 24px 18px; border-radius: 18px; }
  .knowledge-browser-top { grid-template-columns: 1fr; gap: 22px; }
  .knowledge-browser-top h2 { font-size: 23px; }
  .knowledge-search { max-width: none; }
  .knowledge-search-field { padding-inline: 12px; gap: 9px; }
  .knowledge-search-field input { font-size: 12px; }
  .knowledge-filter-options { gap: 8px; }
  .knowledge-filter { font-size: 10px; gap: 7px; padding-right: 10px; }
  .knowledge-results-heading { gap: 8px 12px; }
  .knowledge-results-heading h3 { font-size: 20px; }
  .knowledge-results-heading button { width: 100%; margin-left: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .knowledge-featured-photo img { transition: none; }
}
</style>
