<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32 pb-20">
      <section class="mx-auto max-w-6xl px-4 py-12 sm:px-8">
        <NuxtLink
          to="/cases"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          ← Terug naar cases
        </NuxtLink>
        <p class="mt-6 text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">
          Case
        </p>
        <h1 class="mt-3 text-5xl font-black text-gray-900">{{ currentCase.title }}</h1>
        <p class="mt-4 text-lg text-gray-600">{{ currentCase.summary }}</p>
      </section>

      <section class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <img
            :src="currentCase.image"
            :alt="currentCase.title"
            class="h-72 w-full rounded-2xl object-cover"
          />

          <p class="mt-6 text-sm font-semibold text-gray-500">{{ currentCase.rating }}</p>
          <p class="mt-2 text-2xl font-semibold text-gray-900">"{{ currentCase.quote }}"</p>
          <p class="mt-4 text-sm text-gray-600">
            {{ currentCase.person }} · {{ currentCase.role }} · {{ currentCase.company }}
          </p>

          <div class="mt-8">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              AITJE solution
            </p>
            <ul class="mt-3 space-y-2 text-sm text-gray-700">
              <li v-for="solution in currentCase.solutions" :key="solution">
                • {{ solution }}
              </li>
            </ul>
          </div>
        </article>

        <article class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Wat is gebouwd
          </p>
          <ul class="mt-4 space-y-3 text-sm text-gray-700">
            <li v-for="point in currentCase.details" :key="point">• {{ point }}</li>
          </ul>

          <NuxtLink
            to="/contact?onderwerp=offerte"
            class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Bespreek een soortgelijke case
          </NuxtLink>
        </article>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { cases } from "@/data/cases";

const route = useRoute();
const slug = String(route.params.slug || "");
const currentCase = cases.find((item) => item.slug === slug);

if (!currentCase) {
  throw createError({
    statusCode: 404,
    statusMessage: "Case niet gevonden",
  });
}
</script>

