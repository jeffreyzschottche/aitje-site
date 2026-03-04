<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          Kenniscentrum
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Begrippen en jargon, helder uitgelegd
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Korte artikelen over termen die je vaak hoort rondom AI en ziet op
          onze website.
        </p>
      </section>

      <section class="mx-auto mt-12 max-w-6xl">
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="article in knowledgeArticles"
            :key="article.slug"
            :to="`/kenniscentrum/${article.slug}`"
            class="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <img
              :src="article.thumbnail"
              :alt="article.title"
              class="h-48 w-full object-cover"
            />
            <div class="p-6">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                {{ article.category }} · {{ article.readTime }}
              </p>
              <h2 class="mt-3 text-2xl font-black text-gray-900">
                {{ article.title }}
              </h2>
              <p class="mt-3 text-sm text-gray-600">
                {{ article.excerpt }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>

    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { knowledgeArticles } from "../../data/knowledgeArticles";
</script>
