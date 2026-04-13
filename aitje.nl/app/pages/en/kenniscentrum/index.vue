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
          Knowledge Center
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Concepts and jargon, clearly explained
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Short articles about AI, software and technical terms you often hear around our solutions and see reflected on the website.
        </p>
      </section>

      <section class="mx-auto mt-12 max-w-6xl">
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="article in knowledgeArticles"
            :key="article.slug"
            :to="localePath(`/kenniscentrum/${article.slug}`)"
            class="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div class="relative overflow-hidden border-b border-gray-200 bg-gray-100">
              <img
                :src="article.thumbnail"
                :alt="article.imageAlt"
                class="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div class="absolute inset-x-0 bottom-0 p-6">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
                >
                  {{ article.category }} - {{ article.readTime }}
                </p>
                <div class="mt-5 flex items-end justify-end">
                  <span
                    class="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white"
                  >
                    Article
                  </span>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h2
                class="text-2xl font-black text-gray-900 transition group-hover:text-[#facc15]"
              >
                {{ article.title }}
              </h2>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ article.excerpt }}
              </p>
              <div class="mt-5 flex items-center justify-between text-sm">
                <span class="font-semibold text-[#facc15]">Read article</span>
                <span
                  class="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 transition group-hover:border-[#facc15] group-hover:text-[#facc15]"
                >
                  Knowledge
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </main>

    <BottomCta />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { knowledgeArticles } from "@/data/knowledgeArticles.en";

const { localePath } = useSiteLocale();
</script>
