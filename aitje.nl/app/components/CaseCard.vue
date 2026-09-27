<script setup lang="ts">
import type { CaseStudy } from "@/content/types";

withDefaults(defineProps<{ item: CaseStudy; dark?: boolean }>(), {
  dark: false,
});
</script>

<template>
  <NuxtLink
    :to="`/cases/${item.slug}`"
    class="case-card group flex h-full flex-col overflow-hidden rounded-panel border transition-all duration-300 hover:-translate-y-1"
    :class="
      dark
        ? 'border-line-dark bg-charcoal text-white hover:border-brand/50'
        : 'border-line bg-surface hover:shadow-lift'
    "
  >
    <div
      class="case-illustration"
      :class="{ 'case-illustration-code': item.icon === 'code' }"
    >
      <img
        v-if="item.background"
        class="case-card-photo"
        :src="item.background"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <OrbitGraphic />
      <img
        v-if="item.image?.includes('/redesign/case-')"
        class="case-illustration-scene"
        :src="item.image.replace(/\.webp$/, '-cutout.webp')"
        alt=""
        loading="lazy"
        width="1024"
        height="1024"
      />
      <div v-else class="case-illustration-core">
        <AppIcon :name="item.icon" :size="38" :stroke-width="1.2" />
      </div>
      <span class="case-illustration-label"
        >{{ item.offer[0]?.name }} / TOEPASSING</span
      ><CaseLabel :label="item.label" class="absolute top-4 left-4" />
    </div>
    <div class="flex flex-1 flex-col p-6">
      <p
        class="text-xs font-medium"
        :class="dark ? 'text-muted-dark' : 'text-muted'"
      >
        {{ item.context }}
      </p>
      <h3 class="mt-2 font-heading text-xl leading-snug font-semibold">
        {{ item.title }}
      </h3>
      <p
        class="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed"
        :class="dark ? 'text-muted-dark' : 'text-muted'"
      >
        {{ item.summary }}
      </p>
      <span
        class="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold"
      >
        Bekijk deze case
        <AppIcon
          name="arrow-right"
          :size="16"
          class="transition-transform group-hover:translate-x-1"
        />
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.case-card-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.82;
  filter: saturate(1.08);
  transition: transform 0.6s ease, opacity 0.4s ease;
}
.case-card:hover .case-card-photo {
  transform: scale(1.04);
  opacity: 0.95;
}
.case-illustration-scene {
  position: absolute;
  inset: 6% 12% 0;
  width: 76%;
  height: 94%;
  object-fit: contain;
  z-index: 1;
  filter: drop-shadow(0 14px 18px rgb(0 0 0 / 0.14));
  transition: transform 0.5s ease;
}
.case-card:hover .case-illustration-scene {
  transform: translateY(-4px) scale(1.03);
}
</style>
