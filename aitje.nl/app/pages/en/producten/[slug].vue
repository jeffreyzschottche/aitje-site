<template>
  <div class="bg-[#f3efe5] text-gray-950">
    <SiteNavigation />

    <main v-if="product" class="px-4 pb-24 pt-28 sm:px-6">
      <section class="mx-auto max-w-7xl">
        <div
          class="relative overflow-hidden rounded-[2.75rem] border border-black/10 bg-[#050505] px-6 py-8 text-white shadow-[0_35px_120px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10 lg:py-10"
        >
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute -left-16 top-8 h-40 w-40 rounded-full bg-[#facc15]/20 blur-3xl"></div>
            <div class="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/12 blur-3xl"></div>
            <div class="absolute -bottom-10 right-20 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl"></div>
            <div
              class="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(250,204,21,0.14)_100%)]"
            ></div>
          </div>

          <div class="relative grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <div class="flex flex-wrap items-center gap-3">
                <span
                  class="inline-flex items-center rounded-full border border-[#facc15]/40 bg-[#facc15]/15 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#facc15]"
                >
                  {{ statusLabel }}
                </span>
                <span
                  class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/70"
                >
                  {{ heroChip }}
                </span>
              </div>

              <h1 class="mt-5 max-w-4xl text-[2.8rem] font-black uppercase leading-[0.9] sm:text-[4rem] xl:text-[5.2rem]">
                {{ product.title }}
              </h1>
              <p class="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                {{ product.summary }}
              </p>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  :to="primaryCta"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  {{ product.cta }}
                </NuxtLink>
                <NuxtLink
                  :to="useCasesRoute"
                  class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  View use cases
                </NuxtLink>
              </div>

              <div class="mt-10 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div v-for="item in heroFacts" :key="item.label" class="min-h-20">
                  <p class="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/40">
                    {{ item.label }}
                  </p>
                  <p class="mt-3 max-w-[18rem] text-sm leading-6 text-white/82">
                    {{ item.value }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="relative overflow-hidden rounded-[2.4rem] bg-[radial-gradient(circle_at_top,#1f1f1f_0%,#090909_62%,#050505_100%)] p-6 sm:p-8"
              >
                <div class="rounded-[2rem] p-3">
                  <img
                    :src="heroImage"
                    :alt="product.title"
                    class="h-[20rem] w-full rounded-[1.5rem] object-cover sm:h-[26rem]"
                  />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          {{ introSection.kicker }}
        </p>
        <h2 class="mt-4 text-5xl font-black text-gray-900">
          {{ introSection.title }}
        </h2>
        <p class="mt-6 text-lg text-gray-600">
          {{ introSection.text }}
        </p>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { productCatalogV2, productStatusLabel } from "@/data/productCatalogV2";

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const unavailableSlugs = new Set(["aitje-notulist", "aitje-prepper", "aitje-manager"]);

if (unavailableSlugs.has(slug.value)) {
  await navigateTo("/en/producten", { redirectCode: 302 });
}

const product = computed(() => productCatalogV2.en.products.find((entry) => entry.slug === slug.value));

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const statusLabel = computed(() => productStatusLabel.en[product.value!.status]);
const heroImage = computed(() => {
  const mapping: Record<string, string> = {
    "aitje-assistent": "/images/aitje-cubes.png",
    "aitje-custom": "/images/custom-suited.png",
    "aitje-notulist": "/images/spraakmemowhatsapp.png",
    "aitje-prepper": "/images/ei-internet.png",
    "aitje-manager": "/images/aitje-os-1.png",
  };
  return mapping[slug.value] ?? "/images/aitje-product.png";
});
const primaryCta = computed(() => {
  if (slug.value === "aitje-custom") return "/en/contact?onderwerp=offerte";
  if (slug.value === "aitje-manager") return "/en/contact?onderwerp=kennismaking";
  return "/en/contact?onderwerp=demo";
});
const useCasesRoute = "/en/use-cases";

const heroChip = computed(() => {
  if (product.value!.status === "available") return "Ready to deploy";
  if (product.value!.status === "in-development") return "In build";
  return "Next phase";
});

const heroFacts = computed(() => [
  { label: "Audience", value: product.value!.audience },
  { label: "Use cases", value: `${product.value!.useCases.length} practical directions` },
  {
    label: "Modules",
    value: product.value!.modules?.length ? `${product.value!.modules.length} connected layers` : "Standalone proposition",
  },
]);

const introSection = computed(() => ({
  kicker: product.value!.status === "available" ? "Product" : "In development",
  title: product.value!.title,
  text: product.value!.intro,
}));
</script>
