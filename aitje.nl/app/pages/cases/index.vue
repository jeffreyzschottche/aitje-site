<script setup lang="ts">
// Cases overview (redesign/pages/cases.md, besluit 51).
import { cases } from "@/content/cases";

usePageSeo({
  title: "Cases",
  description:
    "Ontdek wat AI voor jouw werk kan doen. Herkenbare voorbeeldsituaties: van een eigen chatassistent op kantoor tot agents die tickets voorbereiden.",
  breadcrumbs: [{ name: "Cases", path: "/cases" }],
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
      eyebrow="Cases"
      title="Zie wat AI in de praktijk voor jouw werk kan doen."
      subline="Iedere case begint bij een herkenbare vraag. Herken je je eigen situatie? Dan weet je welke route AITJE daarbij kan bieden."
      image="/img/redesign/cases.webp"
      background="/img/cases/bg-archive.webp"
      immersive
      image-alt="Een boomklever aan het werk aan een kleine werkbank met gereedschap en tandwielen, naast het gloeiende AITJE-ei"
    >
      <p class="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
        Deze voorbeeldsituaties laten zien wat mogelijk is. Ze zijn geen
        bevestigde klantresultaten of garanties.
      </p>
    </PageHero>

    <section class="pb-24">
      <div class="container-page">
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
