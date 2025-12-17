<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          Shop
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Kies jouw gouden AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Gebaseerd op ons businessplan: drie pakketten met hardware, diensten
          en abonnementen. Allemaal 100% lokaal, natuurvriendelijk en
          onafhankelijk van Amerikaanse corporaties.
        </p>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        <div
          v-for="value in valueProps"
          :key="value.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-5"
        >
          <div class="flex items-center gap-3 text-[#facc15]">
            <component :is="value.icon" class="h-6 w-6" />
            <h3 class="text-lg font-semibold text-gray-900">
              {{ value.title }}
            </h3>
          </div>
          <p class="mt-3 text-sm text-gray-600">{{ value.description }}</p>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-6xl grid gap-8 lg:grid-cols-3">
        <article
          v-for="plan in plans"
          :key="plan.title"
          class="flex flex-col rounded-3xl border-2 p-6 shadow-xl"
          :class="
            plan.featured
              ? 'border-[#facc15] bg-[#facc15]'
              : 'border-gray-200 bg-white'
          "
        >
          <img
            :src="plan.image"
            :alt="plan.title"
            class="mb-6 w-full rounded-2xl border border-white/40 object-cover shadow"
          />
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
          >
            {{ plan.tier }}
          </p>
          <h2 class="mt-2 text-3xl font-black text-gray-900">
            {{ plan.title }}
          </h2>
          <p class="mt-2 text-sm text-gray-600">{{ plan.description }}</p>
          <div
            class="mt-6 rounded-2xl bg-white/80 p-4"
            :class="plan.featured ? 'shadow-lg shadow-[#facc15]/50' : ''"
          >
            <div class="flex items-baseline gap-2">
              <span class="text-4xl font-black text-gray-900">{{
                plan.price
              }}</span>
              <span class="text-sm text-gray-500">eenmalig</span>
            </div>
            <p class="mt-4 text-sm text-gray-700">
              <span class="font-semibold text-gray-900">Terugkerend:</span>
              {{ plan.recurring }}
            </p>
          </div>
          <ul class="mt-8 flex-1 space-y-3 text-sm text-gray-700">
            <li
              v-for="perk in plan.perks"
              :key="perk"
              class="flex items-start gap-3"
            >
              <Check class="mt-1 h-5 w-5 flex-shrink-0 text-[#facc15]" />
              <span>{{ perk }}</span>
            </li>
          </ul>
          <div class="mt-8 rounded-2xl bg-[#fafafa] p-4 text-sm text-gray-600">
            <p class="font-semibold text-gray-900">Services:</p>
            <p>{{ plan.service }}</p>
          </div>
          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              class="w-full rounded-full px-6 py-3 text-sm font-semibold cursor-pointer transition-colors duration-200"
            :class="
              plan.featured
                ? 'bg-black text-white hover:bg-black hover:text-[#facc15]'
                : 'bg-[#facc15] text-black hover:bg-black hover:text-[#facc15]'
            "
            >
              {{ plan.cta }}
            </button>
            <NuxtLink
              :to="plan.moreInfoLink"
              class="inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
            >
              Meer info
            </NuxtLink>
          </div>
        </article>
      </section>

      <section
        class="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 lg:sticky lg:top-24 lg:self-start"
        >
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Wat zit er standaard bij
          </p>
          <h3 class="mt-3 text-3xl font-black text-gray-900">
            Elk AITJE wordt geleverd met
          </h3>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li
              v-for="item in standard"
              :key="item"
              class="flex items-start gap-3"
            >
              <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#facc15]" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Abonnementen & diensten
          </p>
          <div class="mt-4 grid gap-4">
            <article
              v-for="service in services"
              :key="service.title"
              class="rounded-2xl border border-gray-100 p-4"
            >
              <div class="flex items-center gap-3">
                <component :is="service.icon" class="h-8 w-8 text-[#facc15]" />
                <div>
                  <h4 class="text-lg font-semibold text-gray-900">
                    {{ service.title }}
                  </h4>
                  <p class="text-xs uppercase tracking-[0.4em] text-gray-400">
                    {{ service.badge }}
                  </p>
                </div>
              </div>
              <p class="mt-3 text-sm text-gray-600">
                {{ service.description }}
              </p>
            </article>
          </div>
          <NuxtLink
            to="/diensten"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Bekijk alle diensten
          </NuxtLink>
        </div>
      </section>

      <section
        class="mx-auto mt-20 max-w-5xl rounded-[3rem] bg-[#212121] p-10 text-white"
      >
        <div
          class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Waarom nu
            </p>
            <h3 class="mt-3 text-3xl font-black">
              Bescherm jezelf tegen prijsstijgingen
            </h3>
            <p class="mt-3 text-sm text-gray-300">
              In ons businessplan verwachten we dat Big Tech tarieven gaat
              verhogen zodra iedereen afhankelijk is. Met AITJE kies je voor
              vaste hardware + diensten op maat. Geen verrassingen.
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Plan een demo
          </NuxtLink>
        </div>
      </section>

      <section class="mx-auto mt-20 max-w-5xl">
        <h2 class="text-center text-4xl font-black text-gray-900">
          Veelgestelde vragen
        </h2>
        <p class="mt-3 text-center text-sm text-gray-500">
          Gebaseerd op het businessplan en gesprekken met klanten.
        </p>
        <div class="mt-10 space-y-5">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="rounded-3xl border border-gray-200 bg-[#fafafa] p-5"
          >
            <summary class="cursor-pointer text-lg font-semibold text-gray-900">
              {{ faq.question }}
            </summary>
            <p class="mt-3 text-sm text-gray-600">{{ faq.answer }}</p>
          </details>
        </div>
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  Box,
  Check,
  Leaf,
  Lock,
  Package,
  Shield,
  Truck,
} from "lucide-vue-next";

const valueProps = [
  {
    title: "Natuurvriendelijke AI",
    description:
      "Elke lokale prompt bespaart water en energie in externe datacenters.",
    icon: Leaf,
  },
  {
    title: "100% data eigendom",
    description:
      "Je deelt niets met Amerikaanse corporaties. Alles blijft in je eigen kastje.",
    icon: Lock,
  },
  {
    title: "Plug & play hardware",
    description:
      "Geïnspireerd op ons businessplan: tested hardware, ondersteuning en diensten.",
    icon: Box,
  },
];

const plans = [
  {
    title: "AITJE",
    tier: "Solo & ZZP",
    price: "€ 3.999",
    recurring: "€ 0,- per jaar",
    description:
      "Het basis kastje voor individuen die zekerheid en autonomie zoeken.",
    perks: [
      "Plug & play hardware + OS",
      "Chat + API + audio interface",
      "Eigen accounts en API keys",
      "Community support",
    ],
    service: "We leveren handleidingen en optioneel een installatiecall.",
    cta: "Bestel",
    image: "/images/aitje-product.png",
    moreInfoLink: "/aitje",
  },
  {
    title: "AITJE Pro",
    tier: "MKB / organisaties",
    price: "€ 5.499",
    recurring: "€ 1.200 p/j (SLA + e-learning + consult)",
    description:
      "Voor MKB, scholen en bibliotheken uit het businessplan die begeleiding willen.",
    perks: [
      "Installatie + voorbereiding (2,5 uur + 50,- reiskosten)",
      "Eerste consult (digitaal, ±1 uur gratis)",
      "Eigen kennis update 1x (embedding workflow)",
      "Prioriteit bij support & tickets",
    ],
    service: "SLA + e-learning platform + jaarlijkse health check.",
    cta: "Bestel",
    featured: true,
    image: "/images/aitje-product.png",
    moreInfoLink: "/aitje-pro",
  },
  {
    title: "AITJE Custom",
    tier: "Strategisch partnerschap",
    price: "€ 7.500+",
    recurring: "€ 2.500 - 3.750 p/j",
    description:
      "Voor grotere organisaties die samen met ons willen doorontwikkelen.",
    perks: [
      "Maatwerk hardware en optimalisaties",
      "Kennisupdates wanneer jij het nodig hebt (1250,- p/sessie)",
      "LLM upgrades (250,- p kwartaal + rapport)",
      "Consults en roadmap sessies (100,- p uur)",
    ],
    service: "Toegewijde account + backdoor embedding + governance advies.",
    cta: "Bestel",
    image: "/images/aitje-product.png",
    moreInfoLink: "/aitje-custom",
  },
];

const standard = [
  "AITJE kastje + kabels + documentatie",
  "Voorgeïnstalleerde lokale LLM en kennisbank",
  "Beheer voor gebruikers, API keys en logging",
  "Ondersteuning via mail en ticketing",
  "Toegang tot onze community-updates",
];

const services = [
  {
    title: "Installatie & voorbereiden",
    badge: "2,5 uur + 50,- voorrijkosten",
    description:
      "We zetten het kastje neer, koppelen beeldscherm/muis/toetsenbord en zorgen dat alles perfect draait.",
    icon: Truck,
  },
  {
    title: "Consults",
    badge: "Eerste call gratis",
    description:
      "Daarna 100,- per uur. Samen kijken we naar governance, prompts of nieuwe toepassingen.",
    icon: Shield,
  },
  {
    title: "Eigen kennis updaten",
    badge: "€ 1.250 per update",
    description:
      "Upload documenten in onze embedding omgeving, wij plaatsen de kennis op jouw kastje.",
    icon: Package,
  },
];

const faqs = [
  {
    question: "Waarom zijn er drie pakketten?",
    answer:
      "In het businessplan onderscheiden we drie persona’s: solo gebruikers, MKB en grotere organisaties. Elk pakket heeft de juiste mix van hardware, diensten en abonnementen voor die persona.",
  },
  {
    question: "Wat als ik extra diensten nodig heb?",
    answer:
      "Je boekt diensten los: consults à €100 per uur, kennisupdates à €1.250, LLM upgrades à €250 per kwartaal en SLA/E-learning volgens de bedragen hierboven.",
  },
  {
    question: "Helpt dit echt de natuur?",
    answer:
      "Ja. Elke prompt die je lokaal verwerkt, scheelt energie én liters koelwater ten opzichte van gigantische serverhallen die voor elke vraag aan moeten.",
  },
  {
    question: "Ben ik afhankelijk van Amerikaanse corporaties?",
    answer:
      "Nee. AITJE draait volledig lokaal. Je data verlaat je netwerk niet en je bepaalt zelf wanneer je updates uitvoert.",
  },
  {
    question: "Kan ik later upgraden?",
    answer:
      "Je kunt altijd overstappen naar Pro of Custom, extra diensten bijboeken of hardware upgraden. We bespreken samen het beste pad.",
  },
];
</script>
