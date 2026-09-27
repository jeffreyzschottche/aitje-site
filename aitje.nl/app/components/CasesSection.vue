<script setup lang="ts">
// Case previews for home, product and service pages (pages/cases.md: previews share one source).
import { getCases } from "@/content/cases";

const props = withDefaults(
  defineProps<{
    slugs: string[];
    title?: string;
    intro?: string;
    dark?: boolean;
  }>(),
  {
    title: "Herken je dit?",
    intro:
      "Herkenbare voorbeeldsituaties laten zien hoe AI bij je werk kan passen. Ontdek de vraag, de aanpak en een mogelijke oplossing.",
    dark: false,
  },
);

const items = computed(() => getCases(props.slugs).slice(0, 3));
</script>

<template>
  <section
    v-if="items.length"
    :class="dark ? 'on-dark bg-ink py-24 text-white' : 'py-24'"
  >
    <div class="container-page">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Cases"
          :title="title"
          :intro="intro"
          :dark="dark"
        />
        <UiButton to="/cases" :variant="dark ? 'light' : 'secondary'" arrow
          >Bekijk alle cases</UiButton
        >
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CaseCard
          v-for="item in items"
          :key="item.slug"
          :item="item"
          :dark="dark"
        />
      </div>
    </div>
  </section>
</template>
