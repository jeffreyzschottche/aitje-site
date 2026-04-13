<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          Products
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          The AITJE product line
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          No more separate hardware and software pages, but a smaller and clearer
          line with one core product, one custom route and a few logical next steps.
        </p>
      </section>

      <section class="mx-auto mt-8 max-w-6xl">
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="value in valueProps"
            :key="value.title"
            class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
            >
              <component :is="value.icon" class="h-6 w-6" />
            </div>
            <p class="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ value.badge }}
            </p>
            <h2 class="mt-2 text-2xl font-black text-gray-900">{{ value.title }}</h2>
            <p class="mt-3 text-sm leading-7 text-gray-600">{{ value.description }}</p>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-8 max-w-6xl">
        <article
          class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
        >
          <div class="grid gap-0 md:grid-cols-[0.72fr_1.28fr]">
            <div class="border-b border-gray-200 bg-[#faf7ea] md:border-b-0 md:border-r">
              <img
                src="/images/aitje-cubes.png"
                alt="AITJE product line"
                class="h-full min-h-[18rem] w-full object-cover"
              />
            </div>

            <div class="p-8 md:p-10">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                  {{ productSnapshots[0].badge }}
                </p>
                <h2 class="mt-3 text-3xl font-black text-gray-900">
                  {{ productSnapshots[0].title }}
                </h2>
                <p class="mt-3 text-base leading-8 text-gray-600">
                  {{ productSnapshots[0].description }}
                </p>
                <p class="mt-4 text-base leading-8 text-gray-600">
                  {{ productSnapshots[1].description }}
                </p>
              </div>
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
import { Cpu, Layers3, Shield } from "lucide-vue-next";

import { productCatalogV2, productStatusLabel } from "@/data/productCatalogV2";

const products = productCatalogV2.en.products;
const statusLabels = productStatusLabel.en;
const valueProps = [
  {
    badge: "Structure",
    title: "One product line",
    description:
      "The route is now clear: one core product, one custom route and three clear follow-up products.",
    icon: Layers3,
  },
  {
    badge: "Local",
    title: "Local Edge AI",
    description:
      "The focus is on products that give organizations more control over usage, privacy and long-term cost.",
    icon: Shield,
  },
  {
    badge: "Practical",
    title: "Practical in use",
    description:
      "The product line stays smaller and more concrete, so regular organizations can understand faster what fits them.",
    icon: Cpu,
  },
];
const productSnapshots = [
  {
    badge: "Exists now",
    title: "AITJE Assistent",
    description: "The core product for knowledge, documents and day-to-day AI tasks on a dedicated device.",
  },
  {
    badge: "Route beside it",
    title: "AITJE Custom",
    description: "For organizations where the fixed line is not enough or where hardware and workflow differ substantially.",
  },
];
</script>
