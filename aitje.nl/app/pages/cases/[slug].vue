<script setup lang="ts">
// Case page (redesign/pages/case.md, besluit 51).
import { cases, getCase } from "@/content/cases";

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
const primaryOffer = item.offer[0]!;

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
    <section
      class="case-story-hero relative overflow-hidden pt-28 pb-14 md:pt-36"
      :class="{ 'has-photo-bg': item.background, 'page-hero-dark': item.background }"
    >
      <template v-if="item.background">
        <img class="photo-bg" :src="item.background" alt="" aria-hidden="true" fetchpriority="high" />
        <div class="photo-wash" aria-hidden="true" />
      </template>
      <div
        class="pointer-events-none absolute -top-32 -right-32 -z-10 size-[38rem] rounded-full bg-brand/15 blur-3xl"
      />
      <div class="container-page">
        <NuxtLink to="/cases" class="text-sm text-muted hover:text-ink"
          >← Alle cases</NuxtLink
        >
        <div class="mt-6 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div class="flex flex-wrap items-center gap-3">
              <CaseLabel :label="item.label" />
              <span class="text-sm text-muted">{{ item.context }}</span>
            </div>
            <h1
              class="mt-5 font-heading text-[2.5rem] leading-[1.04] font-bold md:text-[3.6rem]"
            >
              {{ item.title }}
            </h1>
            <p v-if="item.dummy" class="draft-note">
              Voorbeeld ter inspiratie. Geen bevestigd klantresultaat.
            </p>
            <p
              class="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl"
            >
              {{ item.summary }}
            </p>
          <div class="mt-8 flex flex-wrap gap-2">
            <NuxtLink
              v-for="offer in item.offer"
              :key="offer.to"
              :to="offer.to"
              class="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium hover:border-ink"
            >
              {{ offer.name }} <AppIcon name="arrow-up-right" :size="14" />
            </NuxtLink>
          </div>
          </div>
          <div>
            <ServiceScene v-if="item.image" :src="item.image" :alt="item.title" />
          </div>
        </div>
      </div>
    </section>

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
          <p
            v-if="item.disclaimer"
            class="rounded-2xl bg-sand p-5 text-sm leading-relaxed text-muted"
          >
            {{ item.disclaimer }}
          </p>
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
            <UiButton :to="primaryOffer.to" variant="light" class="mt-3 w-full"
              >Bekijk {{ primaryOffer.name }}</UiButton
            >
          </div>
        </aside>
      </div>
    </section>

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
