<template>
  <section class="mx-auto max-w-6xl">
    <div class="mb-5 flex items-end justify-between gap-4">
      <div>
        <p
          v-if="eyebrow"
          class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
        >
          {{ eyebrow }}
        </p>
        <h2 class="mt-2 text-3xl font-black text-gray-900">
          {{ title }}
        </h2>
      </div>
    </div>

    <div
      class="flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
    >
      <NuxtLink
        v-for="item in items"
        :key="item.slug"
        :to="`${basePath}/${item.slug}`"
        class="group flex min-w-[82%] snap-start flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:min-w-[22rem] md:min-w-0"
      >
        <div class="relative overflow-hidden border-b border-gray-200 bg-gray-100">
          <img
            :src="item.image"
            :alt="item.title"
            class="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 p-6">
            <span
              class="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white"
            >
              Use Case
            </span>
          </div>
        </div>
        <div class="flex flex-1 flex-col p-6">
          <h3
            class="text-2xl font-black text-gray-900 transition group-hover:text-[#facc15]"
          >
            {{ item.title }}
          </h3>
          <p class="mt-3 flex-1 text-sm leading-7 text-gray-600">
            {{ item.summary }}
          </p>
          <div class="mt-5 flex items-center justify-between text-sm">
            <span class="font-semibold text-[#facc15]">{{ ctaLabel }}</span>
            <span
              class="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 transition group-hover:border-[#facc15] group-hover:text-[#facc15]"
            >
              Use Cases
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UseCaseV2 } from "@/data/useCasesV2";

defineProps<{
  title: string;
  items: UseCaseV2[];
  basePath: string;
  eyebrow?: string;
  ctaLabel: string;
}>();
</script>
