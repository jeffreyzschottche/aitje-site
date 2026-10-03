<script setup lang="ts">
import type { Article } from "@/content/knowledge";
defineProps<{ article: Article }>();
</script>

<template>
  <div class="article-photo-header">
    <div class="article-photo-frame">
      <img :src="article.heroImage" :alt="article.imageAlt" :srcset="`${article.thumbnail} 1000w, ${article.heroImage} 2600w`" sizes="(max-width: 767px) 100vw, 1120px" width="2600" height="1600" fetchpriority="high" />
    </div>
    <KnowledgeVisual :slug="article.slug" :topic="article.topic" :visual="article.visual" large />
  </div>
</template>

<style scoped>
.article-photo-header { overflow: hidden; border: 1px solid var(--color-line); border-radius: 24px; background: #fff; }
.article-photo-frame { aspect-ratio: 21 / 9; overflow: hidden; background: var(--color-sand); }
.article-photo-frame img { width: 100%; height: 100%; object-fit: cover; filter: none; }
@media (max-width: 767px) {
  .article-photo-header { border-radius: 18px; }
  .article-photo-frame { aspect-ratio: 4 / 3; }
}
</style>
