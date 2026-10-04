<script setup lang="ts">
// Case detail uses the same artwork and content as its preview.
import { cases, getCase } from "@/content/cases";
import CaseProductEnrichment from "@/components/CaseProductEnrichment.vue";
import CaseWorkshopVoice from "@/components/CaseWorkshopVoice.vue";
import CaseRealEstate from "@/components/CaseRealEstate.vue";
import CaseProductModels from "@/components/CaseProductModels.vue";
import CaseGameLevels from "@/components/CaseGameLevels.vue";
import CaseCouncilHub from "@/components/CaseCouncilHub.vue";
import CaseDevelopmentAgency from "@/components/CaseDevelopmentAgency.vue";

const route = useRoute();
const item = getCase(String(route.params.slug));

if (!item) {
  throw createError({
    statusCode: 404,
    statusMessage: "Case niet gevonden",
    fatal: true,
  });
}

const more = cases.filter((c) => c.slug !== item.slug).slice(0, 3);
const primaryOffer = item.offer[0];

usePageSeo({
  title: item.title,
  description: item.summary,
  image: item.image,
  breadcrumbs: [
    { name: "Cases", path: "/cases" },
    { name: item.title, path: `/cases/${item.slug}` },
  ],
});
</script>

<template>
  <div>
    <PageHero
      class="case-detail-hero"
      :class="{ 'product-models-hero': item.productModels || item.gameLevels || item.councilHub || item.developmentAgency }"
      :eyebrow="item.context"
      :title="item.title"
      :subline="item.summary"
      :background="item.background"
      :image="item.image"
      :image-alt="item.title"
      immersive
      dark
    >
      <template #before>
        <NuxtLink to="/cases" class="mb-8 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
          <span aria-hidden="true">←</span> Alle cases
        </NuxtLink>
      </template>
      <div class="mt-6 flex flex-wrap gap-3">
        <NuxtLink
          v-for="offer in item.offer"
          :key="offer.to"
          :to="offer.to"
          class="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-3.5 py-2 text-sm font-medium hover:border-brand hover:text-brand"
        >
          {{ offer.name }} <AppIcon name="arrow-up-right" :size="14" />
        </NuxtLink>
      </div>
    </PageHero>

    <CaseProductEnrichment v-if="item.productEnrichment" :story="item.productEnrichment" />
    <CaseWorkshopVoice v-else-if="item.workshopVoice" :story="item.workshopVoice" />
    <CaseRealEstate v-else-if="item.realEstate" :story="item.realEstate" />
    <CaseProductModels v-else-if="item.productModels" :story="item.productModels" />
    <CaseGameLevels v-else-if="item.gameLevels" :story="item.gameLevels" />
    <CaseCouncilHub v-else-if="item.councilHub" :story="item.councilHub" />
    <CaseDevelopmentAgency v-else-if="item.developmentAgency" :story="item.developmentAgency" />

    <template v-else>
    <!-- Herken je dit? -->
    <section class="pt-16 pb-16">
      <div class="container-page">
        <div class="rounded-panel bg-brand p-8 md:p-12">
          <p class="eyebrow">Herken je dit?</p>
          <ul class="mt-6 grid gap-5 md:grid-cols-3">
            <li
              v-for="point in item.recognize"
              :key="point"
              class="font-heading text-lg leading-snug font-semibold md:text-xl"
            >
              “{{ point }}”
            </li>
          </ul>
          <p
            v-if="item.alsoFor"
            class="mt-8 border-t border-ink/15 pt-6 text-sm"
          >
            <strong>Ook herkenbaar voor:</strong> {{ item.alsoFor }}.
          </p>
        </div>
      </div>
    </section>

    <!-- Verhaal -->
    <section class="pb-20">
      <div class="container-page grid gap-12 lg:grid-cols-[1fr_20rem]">
        <article class="max-w-3xl space-y-12">
          <div v-for="section in item.sections" :key="section.title">
            <h2 class="font-heading text-2xl font-bold md:text-3xl">
              {{ section.title }}
            </h2>
            <RichText
              v-for="(p, i) in section.paragraphs ?? []"
              :key="i"
              :text="p"
              tag="p"
              class="mt-4 text-lg leading-relaxed text-ink/85"
            />
            <div v-if="section.bullets" class="mt-5">
              <CheckList :items="section.bullets" />
            </div>
          </div>
          <blockquote
            v-if="item.quote"
            class="border-l-4 border-brand pl-6 font-heading text-2xl leading-snug font-semibold"
          >
            “{{ item.quote }}”
          </blockquote>

        </article>

        <aside class="lg:sticky lg:top-28 lg:self-start">
          <div class="on-dark rounded-panel bg-ink p-7 text-white">
            <p class="eyebrow text-brand">Dit voor jouw werk?</p>
            <p class="mt-4 font-heading text-xl leading-snug font-semibold">
              Bespreek met AITJE wat er in jouw situatie kan.
            </p>
            <UiButton to="/contact" arrow class="mt-6 w-full"
              >Bespreek je AI-vraag</UiButton
            >
            <UiButton v-if="primaryOffer" :to="primaryOffer.to" variant="light" class="mt-3 w-full"
              >Bekijk {{ primaryOffer.name }}</UiButton
            >
          </div>
        </aside>
      </div>
    </section>

    </template>
    <section class="border-t border-line py-20">
      <div class="container-page">
        <h2 class="font-heading text-2xl font-bold">Andere cases</h2>
        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <CaseCard v-for="other in more" :key="other.slug" :item="other" />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>
.case-detail-hero { margin-bottom: 0; }
.product-models-hero :deep(.photo-bg) { z-index: 0; }
.product-models-hero :deep(.photo-wash) { z-index: 1; }
.product-models-hero :deep(.page-hero-layout) { position: relative; z-index: 2; }
</style>
