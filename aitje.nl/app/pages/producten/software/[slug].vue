<template>
  <div v-if="item" class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl">
        <NuxtLink
          to="/producten/software"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Terug naar software
        </NuxtLink>
        <div class="mt-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <img
            :src="item.image"
            :alt="item.title"
            class="h-72 w-full"
            :class="item.imageFit === 'contain' ? 'bg-white object-contain' : 'object-cover'"
          />
          <div class="p-8">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Producten / Software
            </p>
            <h1 class="mt-3 text-4xl font-black text-gray-900">
              {{ item.title }}
            </h1>
            <p class="mt-4 text-lg text-gray-600">
              {{ item.heroDescription }}
            </p>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-12 max-w-5xl space-y-6">
        <article
          v-for="section in item.sections"
          :key="section.title"
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <h2 class="text-2xl font-black text-gray-900">
            {{ section.title }}
          </h2>
          <p class="mt-3 text-base leading-7 text-gray-600">
            {{ section.content }}
          </p>
        </article>
      </section>

      <section
        v-if="item.galleryImages?.length"
        class="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2"
      >
        <article
          v-for="image in item.galleryImages"
          :key="image"
          class="overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-4 shadow-sm"
        >
          <img
            :src="image"
            :alt="`${item.title} screenshot`"
            class="h-72 w-full bg-white object-contain"
          />
        </article>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { softwareCatalog } from "../../../data/softwareCatalog";

const route = useRoute();

const item = computed(() =>
  softwareCatalog.find((entry) => entry.slug === route.params.slug)
);

if (!item.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Softwarepagina niet gevonden",
  });
}
</script>
