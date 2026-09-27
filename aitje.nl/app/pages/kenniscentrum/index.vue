<script setup lang="ts">
// Knowledge centre overview (redesign/pages/knowledge.md, besluit 51: four categories, no search at launch).
import {
  articles,
  knowledgeCategories,
  featuredArticleSlugs,
} from "@/content/knowledge";
import type { KnowledgeCategory } from "@/content/types";

usePageSeo({
  title: "Kenniscentrum",
  description:
    "Heldere uitleg over AI, modellen en je eigen AI-omgeving. Wat is een LLM, wat is lokale AI, wat doet een agent? Het kenniscentrum van AITJE.",
  breadcrumbs: [{ name: "Kenniscentrum", path: "/kenniscentrum" }],
});

const route = useRoute();
const router = useRouter();

const active = computed<KnowledgeCategory | null>(() => {
  const value = route.query.categorie;
  return knowledgeCategories.some((c) => c.name === value)
    ? (value as KnowledgeCategory)
    : null;
});

const setCategory = (name: KnowledgeCategory | null) =>
  router.replace({ query: name ? { categorie: name } : {} });

const featured = computed(() =>
  featuredArticleSlugs
    .map((slug) => articles.find((a) => a.slug === slug)!)
    .filter(Boolean),
);
const list = computed(() =>
  active.value ? articles.filter((a) => a.topic === active.value) : articles,
);
const countFor = (name: KnowledgeCategory) =>
  articles.filter((a) => a.topic === name).length;
</script>

<template>
  <div>
    <PageHero
      eyebrow="Kenniscentrum"
      title="AI in gewone taal."
      subline="Heldere uitleg over AI, modellen en je eigen AI-omgeving. Zonder hype, met de nuance die je nodig hebt om goede keuzes te maken."
      image="/img/redesign/knowledge.webp"
      immersive
      image-alt="Een Vlaamse gaai op een stapel oude boeken met leesbril en lampje, naast het gloeiende AITJE-ei"
    />

    <section v-if="!active" class="pb-16">
      <div class="container-page">
        <NuxtLink
          v-if="featured[0]"
          :to="`/kenniscentrum/${featured[0].slug}`"
          class="article-feature"
          ><div class="article-feature-photo">
            <img :src="featured[0].heroImage" :alt="featured[0].imageAlt" width="1200" height="800" />
          </div>
          <div>
            <p class="eyebrow text-brand-ink">Begin hier / Uitgelicht</p>
            <h2 class="section-title mt-4">{{ featured[0].title }}</h2>
            <p class="mt-5 text-muted leading-relaxed">
              {{ featured[0].excerpt }}
            </p>
            <span class="text-link mt-5"
              >Lees de uitleg <AppIcon name="arrow-up-right" :size="18"
            /></span></div
        ></NuxtLink>
      </div>
    </section>

    <section class="pb-24">
      <div class="container-page">
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <button
            v-for="category in knowledgeCategories"
            :key="category.name"
            type="button"
            class="flex items-start gap-3 rounded-card border p-5 text-left transition-colors"
            :class="
              active === category.name
                ? 'border-ink bg-ink text-white'
                : 'border-line bg-surface hover:border-ink/40'
            "
            :aria-pressed="active === category.name"
            @click="
              setCategory(active === category.name ? null : category.name)
            "
          >
            <span
              class="grid size-10 shrink-0 place-items-center rounded-xl"
              :class="
                active === category.name ? 'bg-brand text-ink' : 'bg-brand/25'
              "
            >
              <AppIcon :name="category.icon" :size="19" />
            </span>
            <span>
              <span class="block font-heading font-semibold">{{
                category.name
              }}</span>
              <span
                class="mt-0.5 block text-sm"
                :class="
                  active === category.name ? 'text-white/70' : 'text-muted'
                "
              >
                {{ category.question }} · {{ countFor(category.name) }}
              </span>
            </span>
          </button>
        </div>

        <div class="mt-10 flex items-center justify-between gap-4">
          <h2 class="font-heading text-2xl font-bold">
            {{ active ?? "Alle artikelen" }}
          </h2>
          <button
            v-if="active"
            type="button"
            class="text-sm font-semibold underline decoration-brand underline-offset-4"
            @click="setCategory(null)"
          >
            Toon alles
          </button>
        </div>
        <div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            v-for="article in list"
            :key="article.slug"
            :article="article"
          />
        </div>
      </div>
    </section>

    <CtaBanner
      title="Wil je weten wat dit voor jouw werk betekent?"
      text="Uitleg is een begin. AITJE kijkt graag mee naar jouw situatie en vertaalt het naar concrete keuzes."
    />
  </div>
</template>
