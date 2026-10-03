<script setup lang="ts">
import type { CaseStudy } from "@/content/types";

withDefaults(defineProps<{ item: CaseStudy; dark?: boolean }>(), { dark: false });
</script>

<template>
  <NuxtLink :to="`/cases/${item.slug}`" class="case-card group flex h-full flex-col" :class="dark ? 'text-white' : 'text-ink'">
    <div class="case-card-visual">
      <img v-if="item.background" :src="item.background" :alt="item.photoAlt ?? ''" width="1200" height="800" loading="lazy" class="case-card-photo" />
      <div class="case-card-orbit" aria-hidden="true"><OrbitGraphic /></div>
      <img v-if="item.image" :src="item.image.replace(/\.webp$/, '-cutout.webp')" alt="" width="1024" height="1024" loading="lazy" class="case-card-scene" />
    </div>
    <div class="case-card-copy flex flex-1 flex-col">
      <p class="case-card-context" :class="dark ? 'text-muted-dark' : 'text-muted'">{{ item.context }}</p>
      <h3 class="mt-3 font-heading text-xl leading-snug font-semibold">{{ item.title }}</h3>
      <p class="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed" :class="dark ? 'text-muted-dark' : 'text-muted'">{{ item.summary }}</p>
      <span class="mt-auto inline-flex items-center justify-between gap-2 pt-6 text-sm font-semibold">
        Bekijk de aanpak
        <AppIcon name="arrow-up-right" :size="19" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.case-card-visual {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #e8e7e1;
}
.case-card-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.82; transition: transform 0.6s ease; }
.case-card:hover .case-card-photo { transform: scale(1.045); }
.case-card-orbit { position: absolute; inset: 6% 8%; opacity: 0.55; }
.case-card-scene {
  position: absolute;
  inset: 6% 12% 0;
  width: 76%;
  height: 94%;
  object-fit: contain;
  z-index: 1;
  filter: drop-shadow(0 14px 18px rgb(0 0 0 / 0.14));
  transition: transform 0.5s ease;
}
.case-card:hover .case-card-scene { transform: translateY(-4px) scale(1.03); }
.case-card-context { font-size: 0.8rem; line-height: 1.5; }
@media (prefers-reduced-motion: reduce) { .case-card-photo, .case-card-scene { transition: none; } }
</style>
