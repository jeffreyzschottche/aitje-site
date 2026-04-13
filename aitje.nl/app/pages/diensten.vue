<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pb-20 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          Diensten
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Praktische begeleiding naast de producten van AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Simpel gehouden: geen breed dienstenmenu, maar gerichte begeleiding
          die logisch aansluit op de productlijn.
        </p>
      </section>

      <section class="mx-auto mt-6 max-w-6xl">
        <article
          class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
        >
          <div class="grid gap-0 md:grid-cols-[0.72fr_1.28fr]">
            <div class="border-b border-gray-200 bg-[#faf7ea] md:border-b-0 md:border-r">
              <img
                src="/images/custom-suited.png"
                alt="AITJE dienstverlening"
                class="h-full min-h-[18rem] w-full object-cover"
              />
            </div>

            <div class="p-8 md:p-10">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Opzet
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Kleiner, duidelijker en direct bruikbaar
              </h2>
              <div class="mt-5 space-y-4 text-base leading-8 text-gray-600">
                <p>
                  Geen breed agency-menu meer. De diensten van AITJE zijn bewust
                  teruggebracht naar vier routes die logisch aansluiten op de
                  productlijn: AI-strategie, consultancy, custom en SLA.
                </p>
                <p>
                  We denken mee over richting, inzet en implementatie zonder er
                  een wollig consultancyverhaal van te maken.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-8 max-w-6xl">
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="card in introCards"
            :key="card.title"
            class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
            >
              <component :is="card.icon" class="h-6 w-6" />
            </div>
            <p class="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ card.badge }}
            </p>
            <h2 class="mt-2 text-2xl font-black text-gray-900">
              {{ card.title }}
            </h2>
            <p class="mt-3 text-sm leading-7 text-gray-600">
              {{ card.description }}
            </p>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside class="rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Diensten
            </p>
            <div class="mt-5 space-y-3">
              <button
                v-for="service in servicePanels"
                :key="service.key"
                type="button"
                class="w-full rounded-[1.5rem] border px-5 py-4 text-left transition"
                :class="selectedServiceKey === service.key
                  ? 'border-[#facc15] bg-[#212121] text-white'
                  : 'border-gray-200 bg-[#fafafa] text-gray-900 hover:border-[#facc15]'"
                @click="selectedServiceKey = service.key"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-[0.32em]"
                  :class="selectedServiceKey === service.key ? 'text-[#facc15]' : 'text-gray-400'"
                >
                  {{ service.sidebarLabel }}
                </p>
                <h2 class="mt-2 text-lg font-semibold">
                  {{ service.title }}
                </h2>
              </button>
            </div>
          </aside>

          <article class="rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ activeService.focus }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-900">
              {{ activeService.title }}
            </h2>
            <p class="mt-5 max-w-3xl text-base leading-8 text-gray-600">
              {{ activeService.description }}
            </p>

            <div class="mt-8 rounded-[1.75rem] bg-[#fafafa] p-5">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                Resultaat
              </p>
              <p class="mt-2 text-sm leading-7 text-gray-700">
                {{ activeService.result }}
              </p>
            </div>

            <div class="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div class="rounded-[1.75rem] border border-gray-100 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                  Wat we opleveren
                </p>
                <ul class="mt-4 space-y-3 text-sm text-gray-700">
                  <li
                    v-for="item in activeService.details"
                    :key="item"
                    class="flex items-start gap-3"
                  >
                    <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div class="rounded-[1.75rem] bg-[#212121] p-5 text-white">
                <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                  Past bij
                </p>
                <p class="mt-3 text-sm leading-7 text-gray-300">
                  {{ activeService.fit }}
                </p>
                <NuxtLink
                  :to="activeService.link"
                  class="mt-6 inline-flex rounded-full bg-[#facc15] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  {{ activeService.cta }}
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article class="rounded-[2.5rem] bg-[#212121] px-8 py-10 text-white lg:px-10">
            <div class="mx-auto flex max-w-2xl flex-col justify-center">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
                Prijs & volgende stap
              </p>
              <h2 class="mt-3 text-4xl font-black">
                Vraag een prijslijst of offerte aan
              </h2>
              <p class="mt-4 text-sm leading-7 text-gray-300">
                Producten, diensten en SLA zijn bewust niet uitgewerkt als losse
                prijsblokjes op de pagina. We houden de site helder en sturen door
                naar een prijslijst, offerte of kennismaking zodra de vraag concreet is.
              </p>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  to="/contact?onderwerp=prijslijst"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Prijslijst aanvragen
                </NuxtLink>
                <NuxtLink
                  to="/contact?onderwerp=offerte"
                  class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  Offerte aanvragen
                </NuxtLink>
              </div>
            </div>
          </article>

          <article class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/aitje-product.png"
              alt="AITJE producten en diensten"
              class="h-56 w-full object-cover"
            />
            <div class="p-8">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                Waarom dit smaller is
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Minder grootspraak, meer focus
              </h2>
              <ul class="mt-6 space-y-3 text-sm text-gray-700">
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Duidelijker onderscheid tussen product, dienst en custom route.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Betere aansluiting op organisaties die geen vaag maatwerkverhaal zoeken.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Een geloofwaardiger site waarin begeleiding de productlijn versterkt.</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  ClipboardPenLine,
  Leaf,
  PlugZap,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";
import { serviceCatalog } from "../data/serviceCatalog";

const introCards = [
  {
    badge: "Strategie",
    title: "Niet alles tegelijk",
    description:
      "We helpen eerst bepalen wat logisch is, voordat er gebouwd of uitgebreid wordt.",
    icon: PlugZap,
  },
  {
    badge: "Custom",
    title: "Alleen als standaard niet past",
    description:
      "AITJE Custom blijft bestaan, maar als gerichte route in plaats van een breed maatwerklabel. Kleiner en duidelijker.",
    icon: Sparkles,
  },
  {
    badge: "Continuiteit",
    title: "Regie en continuiteit",
    description:
      "De focus ligt op meer grip op AI-gebruik, minder afhankelijkheid en keuzes die op lange termijn houdbaar zijn.",
    icon: Leaf,
  },
];

const servicePanels = serviceCatalog;

const selectedServiceKey = ref<(typeof servicePanels)[number]["key"]>("installation");

const activeService = computed(
  () =>
    servicePanels.find((service) => service.key === selectedServiceKey.value)
    ?? servicePanels[0],
);

const services = [
  {
    title: "AI-strategie",
    focus: "Strategie",
    description:
      "We helpen bepalen waar AI nu de meeste waarde oplevert, wat Edge AI wel en niet logisch maakt en welke eerste stappen realistisch zijn.",
    result:
      "Een concreet plan waarmee je verder kunt zonder te verdwalen in alle AI-opties.",
    details: [
      "Waar AI nu direct waarde kan toevoegen",
      "Welke inzet logisch is voor jouw organisatie",
      "Heldere eerste keuzes in plaats van losse ideeën",
    ],
    fit: "Voor organisaties die eerst helderheid willen over richting, kansen en de rol van lokale Edge AI.",
    image: "/images/golden-egg.png",
    icon: PlugZap,
    link: "/diensten/ai-strategie",
  },
  {
    title: "Consultancy: huidig gebruik optimaliseren",
    focus: "Kosten & stabiliteit",
    description:
      "We analyseren huidig AI-gebruik en kijken waar kosten, stabiliteit en afhankelijkheid verbeterd kunnen worden.",
    result:
      "Meer grip op verbruik, leveranciers en praktische inzet van AI.",
    details: [
      "Analyse van huidige AI-stack en verbruik",
      "Lagere afhankelijkheid van externe platformen waar logisch",
      "Advies over lokale software of Edge AI in de workflow",
    ],
    fit: "Voor teams die al AI gebruiken, maar onvoldoende overzicht hebben op kosten, risico en continuiteit.",
    image: "/images/aitje-client-screens.png",
    icon: ClipboardPenLine,
    link: "/diensten/consultancy",
  },
  {
    title: "AITJE Custom",
    focus: "Custom route",
    description:
      "Voor organisaties waar de vaste oplossingen niet goed passen en waar AITJE mee moet denken over hardware, workflows of agentic inzet.",
    result:
      "Een route die beter aansluit op de echte situatie van de organisatie.",
    details: [
      "Strategisch meedenken over Edge AI",
      "Alternatieve hardware wanneer standaard niet past",
      "Praktische vertaalslag van idee naar aanpak",
    ],
    fit: "Voor organisaties met afwijkende eisen, specifieke hardwarewensen of complexere processen dan de vaste lijn ondersteunt.",
    image: "/images/custom-suited.png",
    icon: Sparkles,
    link: "/diensten/aitje-custom",
  },
  {
    title: "SLA",
    focus: "Maandelijkse samenwerking",
    description:
      "Een maandelijkse samenwerking voor support, updates, gereserveerde tijd, installatiehulp en advies rond producten en Edge AI-implementaties.",
    result:
      "Doorlopende ondersteuning zonder alles ad hoc te hoeven oplossen.",
    details: [
      "Vaste tijd en ondersteuning per maand",
      "Updates van modellen en software wanneer nodig",
      "5 euro PromptPaleis tegoed per maand voor klanten met SLA",
    ],
    fit: "Voor organisaties die continuiteit willen, zonder steeds per incident opnieuw te hoeven schakelen.",
    image: "/images/promptpaleis-home-screen.png",
    icon: ShieldCheck,
    link: "/diensten/sla",
  },
];

</script>
