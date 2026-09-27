<script setup lang="ts">
import type { Article } from "@/content/knowledge";
defineProps<{ article: Article }>();
</script>
<template>
  <NuxtLink :to="`/kenniscentrum/${article.slug}`" class="article-card group"
    ><div class="article-card-photo">
      <img :src="article.thumbnail" :alt="article.imageAlt" loading="lazy" width="720" height="540" />
    </div>
    <div class="article-card-copy">
      <p class="eyebrow text-brand-ink">{{ article.topic }}</p>
      <h3>{{ article.title }}</h3>
      <p>{{ article.excerpt }}</p>
      <div>
        <span>{{ article.readTime }} lezen</span
        ><AppIcon name="arrow-up-right" :size="18" />
      </div></div
  ></NuxtLink>
</template>
