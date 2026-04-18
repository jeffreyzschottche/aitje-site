<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          Producten
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          De productlijn van AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Geen losse hardware- en softwarepagina&apos;s meer, maar een kleinere en
          duidelijkere lijn met een kernproduct, een custom route en een paar
          logische vervolgstappen.
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
                alt="AITJE productlijn"
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
            Overzicht
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            Producten die logisch op elkaar aansluiten
          </h2>
          <p class="mt-4 text-base leading-8 text-gray-600">
            Hieronder zie je de huidige productlijn van AITJE. Niet als winkel,
            maar als snelle manier om te zien welk product nu bestaat, wat in
            ontwikkeling is en welke richting daarna volgt binnen
            <a
              href="/kenniscentrum/wat-is-edge-ai"
              class="knowledge-link"
              data-knowledge-link="true"
            >
              lokale AI
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
                    Houd me op de hoogte
                  </button>

                  <NuxtLink
                    v-else
                    :to="product.link"
                    class="inline-flex min-w-[9.5rem] items-center justify-center rounded-full bg-[#facc15] px-7 py-3 text-sm font-semibold whitespace-nowrap text-[#212121] transition hover:bg-white hover:text-black"
                  >
                    Meer info
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
              Momenteel in ontwikkeling
            </p>
            <h2 class="mt-3 text-3xl font-black text-gray-900">
              {{ selectedWaitlistProduct?.title }}
            </h2>
            <p class="mt-4 text-base leading-8 text-gray-600">
              Dit product is nog niet live. Vul je e-mailadres in, dan zetten we
              je op de mailinglist en updaten we je zodra dit product beschikbaar is.
            </p>
          </div>

          <button
            type="button"
            class="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-gray-300 hover:text-gray-900"
            aria-label="Sluiten"
            @click="closeWaitlistModal"
          >
            <span class="absolute left-1/2 top-1/2 text-2xl leading-none -translate-x-1/2 -translate-y-1/2">×</span>
          </button>
        </div>

        <form class="mt-8 space-y-4" @submit.prevent="submitWaitlist">
          <div>
            <label class="text-sm font-semibold text-gray-900" for="waitlist-email">
              E-mailadres
            </label>
            <input
              id="waitlist-email"
              v-model="waitlistEmail"
              type="email"
              inputmode="email"
              autocomplete="email"
              placeholder="je@email.nl"
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
              {{ waitlistSubmitting ? "Opslaan..." : "Schrijf me in" }}
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

const products = productCatalogV2.nl.products;
const statusLabels = productStatusLabel.nl;

const valueProps = [
  {
    badge: "Structuur",
    title: "Eén productlijn",
    description:
      "De route is nu helder: een kernproduct, een custom route en drie duidelijke vervolgproducten.",
    icon: Layers3,
  },
  {
    badge: "Lokaal",
    title: "Lokale Edge AI",
    description:
      "De focus ligt op producten die organisaties meer regie geven over gebruik, privacy en lange termijnkosten.",
    icon: Shield,
  },
  {
    badge: "Praktisch",
    title: "Praktisch inzetbaar",
    description:
      "De productlijn blijft kleiner en concreter, zodat gewone organisaties sneller begrijpen wat bij hen past.",
    icon: Cpu,
  },
];

const productSnapshots = [
  {
    badge: "Bestaat nu",
    title: "AITJE Assistent",
    description: "Het kernproduct voor kennis, documenten en dagelijkse AI-taken op een eigen device.",
  },
  {
    badge: "Route ernaast",
    title: "AITJE Custom",
    description: "Voor organisaties waar de vaste lijn niet goed genoeg past of waar hardware en workflow afwijken.",
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
  "aitje-assistent": "Kernproduct",
  "aitje-custom": "Custom Route",
  "aitje-notulist": "Gesprek naar output",
  "aitje-prepper": "Offline en mobiel",
  "aitje-manager": "Lokale agentregie",
  "aitje-coder": "Ontwikkelen met AI",
};

const productBannerExtras: Record<string, string> = {
  "aitje-assistent":
    "De basis voor organisaties die AI praktisch willen inzetten op een eigen device, met OS, Client en Kennisbank als onderdelen van dezelfde lijn.",
  "aitje-custom":
    "De route voor organisaties die niet uitkomen met een standaardopzet en een concretere vertaling nodig hebben van idee naar werkbare hardware of workflow.",
  "aitje-notulist":
    "Gericht op gesprekken, meetings en intakeprocessen die snel moeten landen als transcript, samenvatting of gestructureerde output.",
  "aitje-prepper":
    "Voor situaties waar bereik niet vanzelfsprekend is en kennis, bestanden en assistentie lokaal beschikbaar moeten blijven.",
  "aitje-manager":
    "De volgende productfase voor organisaties die meerdere lokale agents gecontroleerd willen installeren, beheren en samen laten werken.",
  "aitje-coder":
    "Voor teams die AI willen inzetten bij coderen, technische wijzigingen en interne tooling, met meer grip op context, omgeving en ontwikkelproces.",
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
  link: `/producten/${product.slug}`,
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
    waitlistError.value = "Er is geen product geselecteerd.";
    return;
  }

  if (!email) {
    waitlistError.value = "Vul een e-mailadres in.";
    return;
  }

  waitlistSubmitting.value = true;

  try {
    const response = await $fetch<{ ok: boolean; alreadyExists?: boolean }>("/api/waitlist", {
      method: "POST",
      body: {
        email,
        locale: "nl",
        productSlug: selectedProduct.slug,
        productTitle: selectedProduct.title,
      },
    });

    waitlistSuccess.value = response.alreadyExists
      ? "Je stond al op de mailinglist. We houden je op de hoogte."
      : "Je staat op de mailinglist. We laten het weten zodra dit product live is.";
    waitlistEmail.value = "";
  } catch (error) {
    waitlistError.value =
      error instanceof Error && error.message
        ? error.message
        : "Opslaan mislukt. Probeer het later opnieuw.";
  } finally {
    waitlistSubmitting.value = false;
  }
};

</script>
