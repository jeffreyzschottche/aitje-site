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
          Korte artikelen over AI-, software- en technische termen die je vaak
          hoort rondom onze oplossingen en terugziet op de website.
        </p>
      </section>

      <section class="mx-auto mt-12 max-w-6xl">
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="(article, index) in knowledgeArticles"
            :key="article.slug"
            :to="`/kenniscentrum/${article.slug}`"
            class="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="relative overflow-hidden border-b border-gray-200 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.28),_transparent_48%),linear-gradient(135deg,_#fff9db_0%,_#ffffff_55%,_#f8fafc_100%)] p-6"
            >
              <div class="absolute right-4 top-4 h-20 w-20 rounded-full border border-white/60 bg-white/40 blur-2xl" />
              <p
                class="relative text-xs font-semibold uppercase tracking-[0.4em] text-[#b88a00]"
              >
                {{ article.category }} - {{ article.readTime }}
              </p>
              <div class="relative mt-8 flex items-end justify-between">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-sm font-black text-gray-900 shadow-sm"
                >
                  {{ String(index + 1).padStart(2, "0") }}
                </div>
                <span
                  class="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-500"
                >
                  Artikel
                </span>
              </div>
            </div>
            <div class="p-6">
              <h2
                class="text-2xl font-black text-gray-900 transition group-hover:text-[#9a6f00]"
              >
                {{ article.title }}
              </h2>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ article.excerpt }}
              </p>
              <div class="mt-5 flex items-center justify-between text-sm">
                <span class="font-semibold text-[#b88a00]">Lees artikel</span>
                <span
                  class="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 transition group-hover:border-[#facc15] group-hover:text-gray-700"
                >
                  Kenniscentrum
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
import { knowledgeArticles } from "../../data/knowledgeArticles";
</script>
