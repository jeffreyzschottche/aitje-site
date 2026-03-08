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

      <section class="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <img
            :src="currentCase.image"
            :alt="currentCase.title"
            class="h-72 w-full rounded-2xl object-cover"
          />
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
            <li v-for="(point, pointIdx) in currentCase.details" :key="point">
              • {{ point }}
              <div
                v-if="currentCase.slug === 'rijschool-whatsapp-notulist' && pointIdx === 0"
                class="mt-4"
              >
                <img
                  src="/images/spraakmemowhatsapp.png"
                  alt="Spraakmemo via WhatsApp"
                  class="h-40 w-full rounded-xl object-cover"
                />
              </div>
              <div
                v-if="currentCase.slug === 'rijschool-whatsapp-notulist' && pointIdx === 1"
                class="mt-4"
              >
                <img
                  src="/images/summary-spraakemo.png"
                  alt="Samenvatting van spraakmemo"
                  class="h-40 w-full rounded-xl object-cover"
                />
              </div>
              <div
                v-if="currentCase.slug === 'boekenwinkel-rag-isbn' && pointIdx === 0"
                class="mt-4"
              >
                <img
                  src="/images/bieb-app-1.png"
                  alt="Bieb app stap 1"
                  class="h-auto w-full rounded-xl object-contain"
                />
              </div>
              <div
                v-if="currentCase.slug === 'boekenwinkel-rag-isbn' && pointIdx === 1"
                class="mt-4"
              >
                <img
                  src="/images/bieb-app-2.png"
                  alt="Bieb app stap 2"
                  class="h-auto w-full rounded-xl object-contain"
                />
              </div>
              <div
                v-if="currentCase.slug === 'boekenwinkel-rag-isbn' && pointIdx === 2"
                class="mt-4"
              >
                <img
                  src="/images/ollama.png"
                  alt="Ollama output"
                  class="h-40 w-full rounded-xl object-cover"
                />
              </div>
            </li>
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
