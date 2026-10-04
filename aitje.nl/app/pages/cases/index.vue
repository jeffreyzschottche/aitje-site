<script setup lang="ts">
// Cases overview; case stories and artwork share one content source.
import { cases } from "@/content/cases";

usePageSeo({
  title: "Cases",
  description:
    "AI in het dagelijkse werk: interne kennis doorzoeken, werkprocessen verbinden en software ontwikkelen. Bekijk de toepassingen en de aanpak van AITJE.",
  breadcrumbs: [{ name: "Cases", path: "/cases" }],
});
useHead({
  link: [{ rel: "preload", as: "image", href: "/img/redesign/cases-greenhouse-workshop.webp", fetchpriority: "high" }],
});

const route = useRoute();
const router = useRouter();
const filters = [
  { key: "alles", label: "Alle toepassingen" },
  { key: "kennis", label: "Kennis & documenten" },
  { key: "processen", label: "Processen & koppelingen" },
  { key: "code", label: "Ontwikkelen" },
];
const active = computed(() =>
  filters.some((f) => f.key === route.query.thema)
    ? String(route.query.thema)
    : "alles",
);
const visible = computed(() =>
  cases.filter(
    (c) =>
      active.value === "alles" ||
      (active.value === "code"
        ? c.icon === "code"
        : active.value === "kennis"
          ? ["message", "file-search", "library"].includes(c.icon)
          : !["message", "file-search", "library", "code"].includes(c.icon)),
  ),
);
const select = (key: string) =>
  router.replace({ query: key === "alles" ? {} : { thema: key } });
</script>

<template>
  <div>
    <PageHero
      class="cases-greenhouse-hero"
      eyebrow="Cases / AI in de praktijk"
      title="Wat kan AI voor jou doen? Van vraag naar oplossing."
      subline="Bekijk hoe we AI laten aansluiten op bestaande processen, systemen en de mensen die ermee werken."
      background="/img/redesign/cases-greenhouse-workshop.webp"
      image="/img/redesign/cases.webp"
      image-alt="Een vogel werkt aan een kleine werkbank op een met mos begroeide rots"
      immersive
      dark
    >
      <template #title>Wat kan AI voor jou doen?<br /><span class="text-brand">Van vraag naar oplossing.</span></template>
      <UiButton href="#toepassingen" arrow>Ontdek de toepassingen</UiButton>
    </PageHero>

    <section id="toepassingen" class="cases-overview py-16 md:py-24">
      <div class="container-page">
        <div class="cases-overview-intro">
        <div class="cases-overview-copy">
          <p class="eyebrow text-brand-ink">Van vraag naar werkwijze</p>
          <h2 class="mt-4 font-heading text-3xl leading-tight font-bold md:text-4xl">Waar wil jij AI inzetten?</h2>
          <p class="mt-4 text-lg leading-relaxed text-muted">Waar AI waarde kan toevoegen, is niet altijd duidelijk. Zeker als je niet dagelijks systemen en workflows bouwt. AITJE brengt AI en software engineering samen om een werkende oplossing voor jouw vraag te bouwen. Daarbij optimaliseren we de workflow, de modelkeuze en de kosten.</p>
          <p class="mt-4 text-lg leading-relaxed text-muted">Bekijk hieronder hoe we organisaties en bedrijven vooruit helpen en doe inspiratie op voor je eigen werk.</p>
        </div>
        <figure class="cases-overview-art">
          <img src="/img/redesign/cases-workflow-workbench.webp" alt="Drie vogels bouwen samen een werkplek met verbonden technologie, omringd door planten en een goudgeel verlicht ei" width="1254" height="1254" loading="lazy" decoding="async" />
        </figure>
        </div>
        <div class="filter-pills" aria-label="Filter toepassingen">
          <button
            v-for="filter in filters"
            :key="filter.key"
            :aria-pressed="active === filter.key"
            @click="select(filter.key)"
          >
            {{ filter.label }}
          </button>
        </div>
        <p class="mb-7 text-sm text-muted" aria-live="polite">
          {{ visible.length }} toepassingen
        </p>
        <div class="grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <CaseCard v-for="item in visible" :key="item.slug" :item="item" />
        </div>
      </div>
    </section>

    <CtaBanner
      title="Herken je jouw situatie niet?"
      text="Geen probleem. Vertel waar je tegenaan loopt; AITJE laat je weten of en hoe AI daarbij kan helpen."
    />
  </div>
</template>

<style scoped>
.cases-overview { scroll-margin-top: 110px; }
.cases-overview-intro { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); align-items: center; gap: 3rem; margin-bottom: 2.5rem; }
.cases-overview-copy { max-width: 42rem; }
.cases-overview-art { margin: 0; min-width: 0; }
.cases-overview-art img { display: block; width: 100%; height: auto; object-fit: contain; filter: drop-shadow(0 15px 18px rgb(31 49 25 / .08)); }
@media (max-width: 1023px) {
  .cases-overview-intro { grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr); gap: 1.5rem; }
}
@media (max-width: 767px) {
  .cases-overview-intro { grid-template-columns: 1fr; gap: 1rem; }
  .cases-overview-art { width: min(100%, 390px); justify-self: center; }
}
.cases-greenhouse-hero { background: #0c211e; border-bottom: 0; }
.cases-greenhouse-hero :deep(.photo-bg) { object-position: 65% center; }
.cases-greenhouse-hero :deep(.photo-wash) {
  background:
    linear-gradient(90deg, rgb(4 19 17 / 0.86), rgb(4 19 17 / 0.73) 35%, rgb(4 19 17 / 0.22) 60%, transparent 85%),
    linear-gradient(180deg, rgb(4 19 17 / 0.12), transparent 40%, rgb(4 19 17 / 0.42));
}
.cases-greenhouse-hero :deep(.page-hero-intro) { color: #e5ebe0; }
.cases-greenhouse-hero :deep(.service-scene) { width: 105%; margin-left: -2.5%; }
.cases-greenhouse-hero :deep(.service-scene-orbit) { opacity: 0.25; }
.cases-greenhouse-hero :deep(.service-scene-subject) { filter: drop-shadow(0 20px 28px rgb(0 0 0 / 0.25)); }
@media (max-width: 767px) {
  .cases-greenhouse-hero :deep(.photo-bg) { object-position: 80% center; }
  .cases-greenhouse-hero :deep(.photo-wash) {
    background: linear-gradient(180deg, rgb(4 19 17 / 0.92), rgb(4 19 17 / 0.85) 48%, rgb(4 19 17 / 0.12) 80%, rgb(4 19 17 / 0.48));
  }
  .cases-greenhouse-hero :deep(.service-scene) { width: 100%; margin-left: 0; }
}
</style>
