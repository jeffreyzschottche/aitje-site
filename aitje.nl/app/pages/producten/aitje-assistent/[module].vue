<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main v-if="moduleContent" class="px-6 pb-20 pt-32">
      <section class="mx-auto max-w-5xl rounded-[2.5rem] border border-gray-200 bg-white p-10">
        <NuxtLink
          to="/producten/aitje-assistent"
          class="text-sm font-semibold text-gray-500 transition hover:text-gray-900"
        >
          Terug naar AITJE Assistent
        </NuxtLink>
        <p class="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">Onderdeel van AITJE Assistent</p>
        <h1 class="mt-3 text-4xl font-black text-gray-900">{{ moduleContent.title }}</h1>
        <p class="mt-6 text-base leading-8 text-gray-700">{{ moduleContent.intro }}</p>
        <ul class="mt-8 space-y-3 text-sm text-gray-700">
          <li v-for="point in moduleContent.points" :key="point" class="flex gap-3">
            <span class="mt-2 h-2 w-2 rounded-full bg-[#facc15]"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { productCatalogV2 } from "@/data/productCatalogV2";

const route = useRoute();
const moduleSlug = computed(() => String(route.params.module));
const moduleContent = computed(() => productCatalogV2.nl.assistantModules[moduleSlug.value]);

if (!moduleContent.value) {
  throw createError({ statusCode: 404, statusMessage: "Pagina niet gevonden" });
}
</script>
