<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32">
      <section class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          Producten / Hardware
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Lokale hardware voor AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Overzicht van onze hardwarelijnen voor lokale AI, van basis tot maatwerk.
        </p>
        <div class="mx-auto mt-8 max-w-xl rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm">
          <label class="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Snel naar hardwarepagina
          </label>
          <select
            v-model="selectedSlug"
            class="mt-3 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-[#facc15] focus:outline-none"
            @change="goToHardwarePage"
          >
            <option value="">Kies een hardware-oplossing</option>
            <option v-for="item in hardwareItems" :key="item.slug" :value="item.slug">
              {{ item.title }}
            </option>
          </select>
        </div>
      </section>

      <section class="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        <article
          v-for="item in hardwareItems"
          :key="item.slug"
          class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="h-44 w-full rounded-2xl border border-gray-200 object-cover"
          />
          <h2 class="mt-4 text-2xl font-black text-gray-900">
            {{ item.title }}
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            {{ item.shortDescription }}
          </p>
          <NuxtLink
            :to="`/producten/hardware/${item.slug}`"
            class="mt-5 inline-flex items-center justify-center rounded-full bg-[#facc15] px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
          >
            Meer info
          </NuxtLink>
        </article>
      </section>
    </main>

    <BottomCta class="mt-20" />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { hardwareCatalog as hardwareItems } from "../../../data/hardwareCatalog";

const selectedSlug = ref("");

const goToHardwarePage = async () => {
  if (!selectedSlug.value) return;
  await navigateTo(`/producten/hardware/${selectedSlug.value}`);
};
</script>
