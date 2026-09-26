<script setup lang="ts">
import type { CaseStudy } from "@/content/types";

withDefaults(defineProps<{ item: CaseStudy; dark?: boolean }>(), { dark: false });
</script>

<template>
  <NuxtLink
    :to="`/cases/${item.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-panel border transition-all duration-300 hover:-translate-y-1"
    :class="dark ? 'border-line-dark bg-charcoal text-white hover:border-brand/50' : 'border-line bg-surface hover:shadow-lift'"
  >
    <div
      class="relative aspect-[16/10] overflow-hidden"
      :class="item.image ? 'bg-sand' : dark ? 'bg-graphite' : 'bg-gradient-to-br from-brand/25 via-sand to-page'"
    >
      <img
        v-if="item.image"
        :src="item.image"
        alt=""
        loading="lazy"
        class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <div v-else class="absolute inset-0 grid place-items-center">
        <span class="grid size-20 place-items-center rounded-[1.75rem] bg-surface text-ink shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <AppIcon :name="item.icon" :size="34" :stroke-width="1.5" />
        </span>
      </div>
      <CaseLabel :label="item.label" class="absolute top-4 left-4" />
    </div>
    <div class="flex flex-1 flex-col p-6">
      <p class="text-xs font-medium" :class="dark ? 'text-muted-dark' : 'text-muted'">{{ item.context }}</p>
      <h3 class="mt-2 font-heading text-xl leading-snug font-semibold">{{ item.title }}</h3>
      <p class="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed" :class="dark ? 'text-muted-dark' : 'text-muted'">
        {{ item.summary }}
      </p>
      <span class="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold">
        Bekijk deze case
        <AppIcon name="arrow-right" :size="16" class="transition-transform group-hover:translate-x-1" />
      </span>
    </div>
  </NuxtLink>
</template>
