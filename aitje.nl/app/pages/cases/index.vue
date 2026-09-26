<script setup lang="ts">
// Cases overview (redesign/pages/cases.md, besluit 51).
import { cases } from "@/content/cases";

usePageSeo({
  title: "Cases",
  description:
    "Zie wat AI in de praktijk voor jouw werk kan doen. Praktijkcases, demo's en voorbeeldsituaties van AITJE: van een eigen ChatGPT op kantoor tot AI-agents voor tickets.",
  breadcrumbs: [{ name: "Cases", path: "/cases" }],
});

const labels = [
  { label: "Praktijkcase" as const, text: "Uitgevoerd werk bij een klant." },
  { label: "Demo" as const, text: "Een demonstratie van een eigen product." },
  { label: "Voorbeeldsituatie" as const, text: "Een realistische toepassing die laat zien wat mogelijk is." },
];
</script>

<template>
  <div>
    <PageHero
      eyebrow="Cases"
      title="Zie wat AI in de praktijk voor jouw werk kan doen."
      subline="Iedere case begint bij een herkenbare vraag. Herken je je eigen situatie? Dan weet je welke route AITJE daarbij kan bieden."
    >
      <ul class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <li v-for="item in labels" :key="item.label" class="flex items-center gap-3 text-sm text-muted">
          <CaseLabel :label="item.label" /> {{ item.text }}
        </li>
      </ul>
    </PageHero>

    <section class="pb-24">
      <div class="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CaseCard v-for="item in cases" :key="item.slug" :item="item" />
      </div>
    </section>

    <CtaBanner title="Herken je jouw situatie niet?" text="Geen probleem. Vertel waar je tegenaan loopt; AITJE laat je weten of en hoe AI daarbij kan helpen." />
  </div>
</template>
