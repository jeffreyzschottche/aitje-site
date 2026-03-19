<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32 pb-20">
      <section class="mx-auto max-w-6xl px-4 py-12 text-center sm:px-8">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          Cases
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Practical examples of AITJE solutions.
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          From local AI implementations to custom workflows, this is how our solutions work in practice.
        </p>
      </section>

      <section class="mx-auto mt-8 max-w-7xl space-y-6">
        <article
          v-for="(item, idx) in cases"
          :key="item.slug"
          class="overflow-hidden rounded-[2.5rem] md:h-[360px]"
          :class="[cardThemes[idx % cardThemes.length]]"
        >
          <div class="grid gap-0 md:grid-cols-2 md:items-stretch">
            <div class="p-6 md:p-8" :class="idx % 2 === 1 ? 'md:order-2' : ''">
              <p class="text-xs font-semibold uppercase tracking-[0.4em]" :class="idx % 3 === 0 ? 'text-black/60' : 'text-white/60'">
                Case {{ idx + 1 }}
              </p>
              <h2 class="mt-3 text-3xl font-black leading-tight">
                {{ item.title }}
              </h2>
              <p class="mt-3 text-base opacity-90">{{ item.summary }}</p>
              <NuxtLink
                :to="localePath(`/cases/${item.slug}`)"
                class="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200"
                :class="idx % 3 === 1 ? 'bg-[#facc15] text-black hover:bg-white' : 'bg-black text-white hover:text-[#facc15]'"
              >
                View case
              </NuxtLink>
            </div>
            <div class="p-6 pt-0 md:h-full md:p-0" :class="idx % 2 === 1 ? 'md:order-1' : ''">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-[260px] w-full rounded-2xl object-cover md:h-full md:rounded-none"
              />
            </div>
          </div>
        </article>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { cases } from "@/data/cases.en";

const { localePath } = useSiteLocale();

const cardThemes = [
  "bg-[#facc15] text-black",
  "bg-[#212121] text-white",
  "bg-white text-gray-900 border border-gray-200",
];
</script>
