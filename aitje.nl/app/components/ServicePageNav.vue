<script setup lang="ts">
import type { ServiceHighlight } from "@/content/types";

withDefaults(defineProps<{
  highlights: ServiceHighlight[];
  sections: { label: string; href: string }[];
  label?: string;
}>(), { label: "Op deze dienstpagina" });

function keepFocusedLinkVisible(event: FocusEvent) {
  const link = event.target as HTMLAnchorElement;
  const row = link.parentElement;
  if (row && row.scrollWidth > row.clientWidth) {
    link.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
  }
}
</script>

<template>
  <div class="service-page-nav">
    <div class="service-summary-bar">
      <div class="container-page service-summary-inner">
        <span v-for="highlight in highlights" :key="highlight.text">
          <AppIcon :name="highlight.icon" :size="20" />
          {{ highlight.text }}
        </span>
      </div>
    </div>
    <nav class="product-jumpnav" :aria-label="label">
      <div class="container-page">
        <a v-for="section in sections" :key="section.href" :href="section.href" @focus="keepFocusedLinkVisible">{{ section.label }}</a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* The AI-scan's summary and navigation are the shared service-page pattern. */
.service-summary-bar { background: var(--color-brand); color: var(--color-ink); }
.service-summary-inner { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-block: 1.25rem; }
.service-summary-inner > span { display: flex; align-items: center; gap: .7rem; font-size: .9rem; font-weight: 600; }
.service-summary-inner svg { flex: none; }
@media (max-width: 1023px) {
  .service-summary-inner > span { font-size: .78rem; gap: .5rem; }
}
@media (max-width: 767px) {
  .service-summary-inner { flex-wrap: wrap; gap: .85rem; padding-block: 1rem; }
  .service-summary-inner > span { flex-basis: 100%; }
  .service-summary-inner svg { width: 17px; height: 17px; }
}
</style>
