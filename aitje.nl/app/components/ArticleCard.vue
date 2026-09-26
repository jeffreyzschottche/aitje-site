<script setup lang="ts">
import type { Article } from "@/content/knowledge";

defineProps<{ article: Article }>();
</script>

<template>
  <NuxtLink
    :to="`/kenniscentrum/${article.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
  >
    <div class="aspect-[16/9] overflow-hidden bg-sand">
      <img
        :src="article.thumbnail"
        :alt="article.imageAlt"
        loading="lazy"
        class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </div>
    <div class="flex flex-1 flex-col p-5">
      <p class="eyebrow text-brand-ink">{{ article.topic }}</p>
      <h3 class="mt-2 font-heading text-lg leading-snug font-semibold">{{ article.title }}</h3>
      <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{{ article.excerpt }}</p>
      <p class="mt-auto pt-4 font-mono text-xs text-muted">{{ article.readTime }} lezen</p>
    </div>
  </NuxtLink>
</template>
