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
          No more separate hardware and software pages, but a smaller and
          clearer line with a core product, a custom route and a few logical
          next steps.
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

      <section class="mx-auto mt-12 max-w-6xl">
        <div class="mb-8 max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Overview
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            Products that connect logically
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            Below you can see the current AITJE product line. Not as a store,
            but as a quick way to see which product already exists, what is in
            development and which direction follows next within
            <a
              :href="localePath('/kenniscentrum/wat-is-edge-ai')"
              class="knowledge-link"
              data-knowledge-link="true"
            >
              local AI
            </a>
            .
          </p>
        </div>

        <div class="space-y-8">
          <article
            v-for="product in productBanners"
            :key="product.slug"
            class="group overflow-hidden rounded-[2.5rem] border shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
            :class="product.cardClass"
            :role="product.isUnavailable ? 'button' : undefined"
            :tabindex="product.isUnavailable ? 0 : undefined"
            @click="product.isUnavailable ? openWaitlistModal(product) : undefined"
            @keydown.enter.prevent="product.isUnavailable ? openWaitlistModal(product) : undefined"
            @keydown.space.prevent="product.isUnavailable ? openWaitlistModal(product) : undefined"
          >
            <div class="grid gap-0 md:grid-cols-[0.72fr_1.28fr]">
              <div
                class="relative border-b border-gray-200 md:border-b-0 md:border-r"
                :class="product.imagePanelClass"
              >
                <div
                  class="absolute inset-0"
                  :class="product.isUnavailable
                    ? 'bg-gradient-to-br from-white/8 via-[#1f1f1f]/18 to-[#090909]/52'
                    : 'bg-gradient-to-br from-white/10 via-transparent to-black/30'"
                />
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="relative h-full min-h-[20rem] w-full object-cover transition"
                  :class="product.isUnavailable ? 'scale-[1.02] blur-sm saturate-[0.75] brightness-[0.72]' : ''"
                  loading="lazy"
                />
              </div>

              <div class="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div class="flex flex-wrap items-center gap-3">
                    <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                      {{ product.kicker }}
                    </p>
                    <span
                      class="rounded-full border border-[#facc15] bg-[#facc15] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#212121]"
                    >
                      {{ product.statusLabel }}
                    </span>
                  </div>

                  <h3 class="mt-4 text-3xl font-black text-[#facc15] md:text-[2.6rem] md:leading-[1.05]">
                    {{ product.title }}
                  </h3>
                  <p class="mt-4 max-w-2xl text-base leading-8 text-white/78">
                    {{ product.summary }}
                  </p>
                  <p class="mt-4 max-w-2xl text-base leading-8 text-white/70">
                    {{ product.extra }}
                  </p>
                </div>

                <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div class="flex items-center gap-3">
                    <div class="h-1.5 w-10 rounded-full bg-[#facc15]" />
                    <p class="text-sm font-medium text-white/62">
                      {{ product.audience }}
                    </p>
                  </div>

                  <button
                    v-if="product.isUnavailable"
                    type="button"
                    class="inline-flex min-w-[12.5rem] items-center justify-center rounded-full bg-[#facc15] px-9 py-4 text-sm font-semibold whitespace-nowrap text-[#212121] transition hover:bg-white hover:text-black"
                    @click.stop="openWaitlistModal(product)"
                  >
                    Keep me updated
                  </button>

                  <NuxtLink
                    v-else
                    :to="product.link"
                    class="inline-flex min-w-[9.5rem] items-center justify-center rounded-full bg-[#facc15] px-7 py-3 text-sm font-semibold whitespace-nowrap text-[#212121] transition hover:bg-white hover:text-black"
                  >
                    More info
                  </NuxtLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <div
      v-if="waitlistModalOpen"
      class="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 px-4"
      @click="closeWaitlistModal"
    >
      <div
        class="w-full max-w-xl rounded-[2rem] border border-[#facc15] bg-white p-7 shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:p-8"
        @click.stop
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              Currently in development
            </p>
            <h2 class="mt-3 text-3xl font-black text-gray-900">
              {{ selectedWaitlistProduct?.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              This product is not live yet. Enter your email address and we will
              add you to the mailing list and update you once this product
              becomes available.
            </p>
          </div>

          <button
            type="button"
            class="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-gray-300 hover:text-gray-900"
            aria-label="Close"
            @click="closeWaitlistModal"
          >
            <span class="absolute left-1/2 top-1/2 text-2xl leading-none -translate-x-1/2 -translate-y-1/2">×</span>
          </button>
        </div>

        <form class="mt-8 space-y-4" @submit.prevent="submitWaitlist">
          <div>
            <label class="text-sm font-semibold text-gray-900" for="waitlist-email">
              Email address
            </label>
            <input
              id="waitlist-email"
              v-model="waitlistEmail"
              type="email"
              inputmode="email"
              autocomplete="email"
              placeholder="you@email.com"
              class="mt-2 w-full rounded-2xl border border-gray-200 bg-[#faf7ea] px-4 py-3 text-base text-gray-900 outline-none transition focus:border-[#facc15]"
            />
          </div>

          <p v-if="waitlistError" class="text-sm font-medium text-red-600">
            {{ waitlistError }}
          </p>
          <p v-if="waitlistSuccess" class="text-sm font-medium text-green-700">
            {{ waitlistSuccess }}
          </p>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-gray-500">
              {{ selectedWaitlistProduct?.title }}
            </p>

            <button
              type="submit"
              :disabled="waitlistSubmitting"
              class="inline-flex min-w-[12rem] items-center justify-center rounded-full bg-[#facc15] px-7 py-3 text-sm font-semibold text-[#212121] transition hover:bg-[#212121] hover:text-[#facc15] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ waitlistSubmitting ? "Saving..." : "Join the list" }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Cpu, Layers3, Shield } from "lucide-vue-next";

import { productCatalogV2, productStatusLabel } from "@/data/productCatalogV2";

const { localePath } = useSiteLocale();

const products = productCatalogV2.en.products;
const statusLabels = productStatusLabel.en;

const valueProps = [
  {
    badge: "Structure",
    title: "One product line",
    description:
      "The route is now clear: a core product, a custom route and three clear follow-up products.",
    icon: Layers3,
  },
  {
    badge: "Local",
    title: "Local Edge AI",
    description:
      "The focus is on products that give organizations more control over usage, privacy and long-term costs.",
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
    description: "The core product for knowledge, documents and daily AI tasks on a dedicated device.",
  },
  {
    badge: "Parallel route",
    title: "AITJE Custom",
    description: "For organizations where the fixed line is not a good enough fit or where hardware and workflow differ.",
  },
];

const productBannerImages: Record<string, string> = {
  "aitje-assistent": "/images/aitje-cubes.png",
  "aitje-custom": "/images/custom-suited.png",
  "aitje-notulist": "/images/spraakmemowhatsapp.png",
  "aitje-prepper": "/images/ei-internet.png",
  "aitje-manager": "/images/aitje-os-1.png",
  "aitje-coder": "/images/aitje-product.png",
};

const productBannerKickers: Record<string, string> = {
  "aitje-assistent": "Core product",
  "aitje-custom": "Custom route",
  "aitje-notulist": "Conversation to output",
  "aitje-prepper": "Offline and mobile",
  "aitje-manager": "Local agent control",
  "aitje-coder": "Build with AI",
};

const productBannerExtras: Record<string, string> = {
  "aitje-assistent":
    "The foundation for organizations that want to use AI practically on their own device, with OS, Client and Knowledge Base as parts of the same line.",
  "aitje-custom":
    "The route for organizations that do not get far enough with a standard setup and need a more concrete translation from idea to workable hardware or workflow.",
  "aitje-notulist":
    "Focused on conversations, meetings and intake processes that need to land quickly as transcript, summary or structured output.",
  "aitje-prepper":
    "For situations where connectivity is not guaranteed and knowledge, files and assistance need to remain available locally.",
  "aitje-manager":
    "The next product phase for organizations that want to install, manage and coordinate multiple local agents in a controlled way.",
  "aitje-coder":
    "For teams that want to use AI for coding, technical changes and internal tooling, with more control over context, environment and development flow.",
};

const productBannerPanelClasses: Record<string, string> = {
  "aitje-assistent": "bg-[#f6f0dc]",
  "aitje-custom": "bg-[#f5ede2]",
  "aitje-notulist": "bg-[#efece5]",
  "aitje-prepper": "bg-[#f3edd8]",
  "aitje-manager": "bg-[#ece8de]",
  "aitje-coder": "bg-[#efe9de]",
};

const waitlistModalOpen = ref(false);
const waitlistEmail = ref("");
const waitlistError = ref("");
const waitlistSuccess = ref("");
const waitlistSubmitting = ref(false);
const selectedWaitlistProduct = ref<null | {
  slug: string;
  title: string;
}>(null);

const productBanners = products.map((product) => ({
  slug: product.slug,
  title: product.title,
  summary: product.summary,
  audience: product.audience,
  statusLabel: statusLabels[product.status],
  kicker: productBannerKickers[product.slug] ?? "Product",
  extra: productBannerExtras[product.slug] ?? product.intro,
  image: productBannerImages[product.slug] ?? "/images/aitje-product.png",
  imagePanelClass: productBannerPanelClasses[product.slug] ?? "bg-[#faf7ea]",
  cardClass: product.status !== "available"
    ? "border-white/12 bg-[#2a2a2a] text-white"
    : "border-[#facc15]/55 bg-[#050505] text-white",
  isUnavailable: product.status !== "available",
  link: localePath(`/producten/${product.slug}`),
}));

const openWaitlistModal = (product: { slug: string; title: string }) => {
  selectedWaitlistProduct.value = {
    slug: product.slug,
    title: product.title,
  };
  waitlistModalOpen.value = true;
  waitlistError.value = "";
  waitlistSuccess.value = "";
};

const closeWaitlistModal = () => {
  waitlistModalOpen.value = false;
  waitlistError.value = "";
  waitlistSuccess.value = "";
};

const submitWaitlist = async () => {
  const email = waitlistEmail.value.trim();
  const selectedProduct = selectedWaitlistProduct.value;

  waitlistError.value = "";
  waitlistSuccess.value = "";

  if (!selectedProduct) {
    waitlistError.value = "No product selected.";
    return;
  }

  if (!email) {
    waitlistError.value = "Enter an email address.";
    return;
  }

  waitlistSubmitting.value = true;

  try {
    const response = await $fetch<{ ok: boolean; alreadyExists?: boolean }>("/api/waitlist", {
      method: "POST",
      body: {
        email,
        locale: "en",
        productSlug: selectedProduct.slug,
        productTitle: selectedProduct.title,
      },
    });

    waitlistSuccess.value = response.alreadyExists
      ? "You were already on the mailing list. We will keep you updated."
      : "You are on the mailing list. We will let you know once this product goes live.";
    waitlistEmail.value = "";
  } catch (error) {
    waitlistError.value =
      error instanceof Error && error.message
        ? error.message
        : "Saving failed. Try again later.";
  } finally {
    waitlistSubmitting.value = false;
  }
};
</script>
