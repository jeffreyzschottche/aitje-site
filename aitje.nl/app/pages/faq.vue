<script setup lang="ts">
// General FAQ (redesign/pages/faq.md, besluiten 50-51: complete overview, FAQPage structured data).
import { faqGroups } from "@/content/faq";

usePageSeo({
  title: "Veelgestelde vragen",
  description:
    "Antwoorden over AITJE, de AI-producten, diensten, samenwerking, data en kosten. Staat je vraag er niet tussen? Bespreek je AI-vraag met AITJE.",
  breadcrumbs: [{ name: "Veelgestelde vragen", path: "/faq" }],
  faq: faqGroups.flatMap((g) => g.items),
});
useHead({
  link: [{ rel: "preload", as: "image", href: "/img/redesign/faq-forest-paths.webp", fetchpriority: "high" }],
});
const search = ref("");
const filteredGroups = computed(() =>
  faqGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        `${item.q} ${item.a}`
          .toLocaleLowerCase("nl")
          .includes(search.value.trim().toLocaleLowerCase("nl")),
      ),
    }))
    .filter((group) => group.items.length),
);
</script>

<template>
  <div>
    <PageHero
      class="faq-forest-hero"
      eyebrow="Veelgestelde vragen"
      title="Meer weten? We helpen je op weg."
      subline="Over de techniek, de keuzes en wat werkt in jouw situatie. Ontdek onze antwoorden en neem gerust contact op als jouw vraag er niet tussen staat."
      image="/img/redesign/faq.webp"
      background="/img/redesign/faq-forest-paths.webp"
      dark
      immersive
      image-alt="Een koolmees op een houten wegwijzer, met het gloeiende AITJE-ei in een nestje eronder"
    >
      <template #title>
        Meer weten? <span class="faq-forest-title">We helpen je op weg.</span>
      </template>
    </PageHero>

    <section class="pb-24">
      <div class="container-page mb-10">
        <label class="faq-search"
          ><AppIcon name="scan" :size="20" /><span class="sr-only"
            >Zoek in veelgestelde vragen</span
          ><input
            v-model="search"
            type="search"
            placeholder="Zoek bijvoorbeeld op hardware, kosten of installatie"
          /><span aria-live="polite"
            >{{
              filteredGroups.reduce(
                (total, group) => total + group.items.length,
                0,
              )
            }}
            vragen</span
          ></label
        >
      </div>
      <div class="container-page grid gap-12 lg:grid-cols-[16rem_1fr]">
        <nav class="lg:sticky lg:top-28 lg:self-start" aria-label="Categorieën">
          <ul class="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            <li v-for="group in filteredGroups" :key="group.id">
              <a
                :href="`#${group.id}`"
                class="block rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium hover:border-ink lg:rounded-xl lg:border-0 lg:bg-transparent lg:px-3 lg:hover:bg-sand"
              >
                {{ group.title }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="space-y-16">
          <p v-if="!filteredGroups.length" role="status" class="text-muted">
            Geen antwoord gevonden. Probeer een andere zoekterm of stel je vraag
            via contact.
          </p>
          <section
            v-for="group in filteredGroups"
            :id="group.id"
            :key="group.id"
            class="scroll-mt-28"
          >
            <div class="mb-4 flex items-end justify-between gap-4">
              <h2 class="font-heading text-2xl font-bold md:text-3xl">
                {{ group.title }}
              </h2>
              <NuxtLink
                v-if="group.link"
                :to="group.link.to"
                class="shrink-0 text-sm font-semibold underline decoration-brand underline-offset-4"
              >
                {{ group.link.label }}
              </NuxtLink>
            </div>
            <FaqList :items="group.items" />
          </section>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Staat je vraag er niet tussen?"
      text="Stel hem gewoon. AITJE denkt mee en geeft een eerlijk antwoord."
    />
  </div>
</template>

<style scoped>
.faq-forest-hero {
  background: #0c211d;
  border-bottom: 0;
  margin-bottom: 45px;
}
.faq-forest-title {
  color: #facc15;
}
.faq-forest-hero :deep(.photo-bg) {
  object-position: 65% center;
}
.faq-forest-hero :deep(.photo-wash) {
  background:
    linear-gradient(90deg, rgb(4 19 16 / 0.84), rgb(4 19 16 / 0.68) 35%, rgb(4 19 16 / 0.24) 60%, transparent 85%),
    linear-gradient(180deg, rgb(4 19 16 / 0.12), transparent 40%, rgb(4 19 16 / 0.42));
}
.faq-forest-hero :deep(.page-hero-intro) {
  color: #e5ebe0;
}
.faq-forest-hero :deep(.service-scene) {
  width: 105%;
  margin-left: -2.5%;
}
.faq-forest-hero :deep(.service-scene-orbit) {
  opacity: 0.25;
}
.faq-forest-hero :deep(.service-scene-subject) {
  filter: drop-shadow(0 20px 28px rgb(0 0 0 / 0.25));
}
@media (max-width: 767px) {
  .faq-forest-hero {
    margin-bottom: 30px;
  }
  .faq-forest-hero :deep(.photo-bg) {
    object-position: 80% center;
  }
  .faq-forest-hero :deep(.photo-wash) {
    background: linear-gradient(180deg, rgb(4 19 16 / 0.9), rgb(4 19 16 / 0.82) 40%, rgb(4 19 16 / 0.12) 75%, rgb(4 19 16 / 0.48));
  }
  .faq-forest-hero :deep(.service-scene) {
    width: 100%;
    margin-left: 0;
  }
}
</style>
