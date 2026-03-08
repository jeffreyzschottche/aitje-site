<template>
  <div v-if="item" class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl">
        <NuxtLink
          to="/producten/hardware"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Terug naar hardware
        </NuxtLink>
        <div
          class="mt-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
        >
          <img
            :src="
              isCustom
                ? '/images/custom-suited.png'
                : isAssistent
                  ? '/images/aitje-cubes.png'
                  : item.image
            "
            :alt="item.title"
            class="h-72 w-full"
            :class="
              isCustom
                ? 'object-cover object-[center_33%]'
                : isAssistent
                  ? 'bg-white object-contain'
                  : 'object-cover'
            "
          />
          <div class="p-8">
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Producten / Hardware
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

      <section v-if="isCustom" class="mx-auto mt-12 max-w-6xl space-y-6">
        <article
          class="overflow-hidden rounded-[2.5rem] bg-[#212121] text-white"
        >
          <div class="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div class="p-8 md:p-10">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Wanneer kies je AITJE Custom
              </p>
              <h2 class="mt-3 text-3xl font-black leading-tight">
                Voor organisaties met specifieke eisen buiten de
                standaardoplossing
              </h2>
              <p class="mt-4 text-base text-gray-200">
                AITJE Custom is bedoeld voor situaties waarin een persoonlijke
                AI-oplossing nodig is die ook hardware vereist. In dat traject
                denken we mee over de beste route voor performance,
                beschikbaarheid en implementatie in de praktijk. Denk aan een
                oplossing met SCAN devices (barcodes, ISBN), documentverwerking,
                visuele input uitlezen, een LLM die werkt met stroomuitval en AI
                zonder internet.
              </p>
            </div>
            <div class="p-8 pt-0 md:p-0">
              <img
                src="/images/aitje-custom.png"
                :alt="item.title"
                class="h-[260px] w-full rounded-2xl object-cover md:h-full md:rounded-none"
              />
            </div>
          </div>
        </article>

        <article
          class="overflow-hidden rounded-[2.5rem] bg-[#facc15] text-black"
        >
          <div class="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <div class="p-8 md:order-2 md:p-10">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-black/60"
              >
                Hardwarestrategie
              </p>
              <h2 class="mt-3 text-3xl font-black leading-tight">
                Zo efficient en prijsbewust als kan
              </h2>
              <p class="mt-4 text-base text-black/80">
                Eigen hardware bouwen blijkt in veel trajecten onpraktisch.
                Daarom kijken we meestal naar een efficiente samenkoppeling van
                meerdere hardwareproducten, of we zoeken in ons netwerk naar een
                aanbieder met een exact of vergelijkbaar product.
              </p>
              <p class="mt-4 text-base text-black/80">
                Als die route nodig is, ondersteunt AITJE je als AI-partner in
                de technische en operationele afwegingen.
              </p>
            </div>
            <div class="p-8 pt-0 md:order-1 md:p-0">
              <img
                src="/images/wanneer-aitje.png"
                alt="Maatwerkroute voor hardware en AI"
                class="h-[260px] w-full rounded-2xl object-cover md:h-full md:rounded-none"
              />
            </div>
          </div>
        </article>

        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Meestal genoeg
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            AITJE Assistent
          </h2>
          <p class="mt-4 text-base leading-7 text-gray-600">
            In 95% van de use-cases is dit al een efficiente oplossing. Onze
            out-of-the-box oplossing combineert een door ons ontwikkeld
            operating system, geoptimaliseerd voor de hardware, met een externe
            embedding-omgeving, een client-applicatie en lokale
            API-bereikbaarheid op het netwerk.
          </p>
          <NuxtLink
            to="/producten/hardware/aitje-assistent"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#facc15]"
          >
            Bekijk AITJE Assistent
          </NuxtLink>
        </article>

        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Waar AITJE Custom voor is
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            We kijken naar wat werkt voor jou
          </h2>
          <ul class="mt-5 space-y-3 text-base leading-7 text-gray-600">
            <li>• Extra hardware-specificaties boven standaardprofielen</li>
            <li>
              • Applicaties of workflows die volledig offline moeten draaien
            </li>
            <li>
              • Verbeterde versie van een Aitje Assistent Cube V1 voor
              specifieke behoeftes
            </li>
            <li>
              • Hardwarebehoeften waarvoor nog geen out-of-the-box oplossing
              bestaat
            </li>
          </ul>
          <NuxtLink
            to="/contact?onderwerp=kennismaking"
            class="mt-8 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Bespreek AITJE Custom
          </NuxtLink>
        </article>
      </section>

      <section
        v-else-if="isAssistent"
        class="mx-auto mt-12 max-w-6xl space-y-6"
      >
        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Kies je systeem
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Onze operating systems voor AITJE Assistent
          </h2>
          <p class="mt-3 max-w-4xl text-base text-gray-600">
            Onze operating systems zijn ontwikkeld voor de hardware. Ze zorgen
            dat LLM inference stabiel draait en het meeste uit de hardware
            haalt.
          </p>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border p-5 text-left transition"
              :class="
                selectedOs === 'toekan'
                  ? 'border-[#facc15] bg-[#fff8db]'
                  : 'border-gray-200 bg-white hover:border-[#facc15]/60'
              "
              @click="selectedOs = 'toekan'"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-xl font-black text-gray-900">
                    AITJE - Toekan (v1)
                  </p>
                  <p
                    class="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"
                  >
                    Release 2025
                  </p>
                </div>
                <span
                  class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border text-xs font-black"
                  :class="
                    selectedOs === 'toekan'
                      ? 'border-[#facc15] bg-[#facc15] text-black'
                      : 'border-gray-300 bg-white text-transparent'
                  "
                >
                  ✓
                </span>
              </div>
              <p class="mt-2 text-sm text-gray-600">
                Een systeem dat zorgt dat LLM inference het meeste uit de
                hardware haalt.
              </p>
            </button>
            <button
              type="button"
              disabled
              class="cursor-not-allowed rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left opacity-80"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-xl font-black text-gray-900">
                    AITJE - Vink (v2)
                  </p>
                  <p
                    class="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"
                  >
                    Release soon
                  </p>
                </div>
                <span
                  class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-white text-transparent"
                >
                  ✓
                </span>
              </div>
              <p class="mt-2 text-sm text-gray-600">Meer informatie volgt.</p>
            </button>
          </div>
        </article>

        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Kies je device
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            De markt evolueert, onze hardware ook
          </h2>
          <p class="mt-3 max-w-4xl text-base text-gray-600">
            We proberen continu het gemiddeld beste product te kiezen wanneer
            wij deze selecteren voor productie, omdat de markt snel verandert.
            Uitbreiden is mogelijk en upgraden naar een beter device ook, via
            AITJE Custom.
          </p>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <button
              v-for="device in deviceOptions"
              :key="device.id"
              type="button"
              class="rounded-2xl border p-5 text-left transition"
              :class="
                selectedDevice === device.id
                  ? 'border-[#facc15] bg-[#fff8db]'
                  : 'border-gray-200 bg-white hover:border-[#facc15]/60'
              "
              @click="selectedDevice = device.id"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3">
                  <img
                    :src="device.image"
                    :alt="device.name"
                    class="h-14 w-14 rounded-xl object-cover"
                  />
                  <div>
                    <p class="text-xl font-black text-gray-900">
                      {{ device.name }}
                    </p>
                    <p class="mt-2 text-sm text-gray-600">
                      {{ device.description }}
                    </p>
                  </div>
                </div>
                <span
                  class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border text-xs font-black"
                  :class="
                    selectedDevice === device.id
                      ? 'border-[#facc15] bg-[#facc15] text-black'
                      : 'border-gray-300 bg-white text-transparent'
                  "
                >
                  ✓
                </span>
              </div>
            </button>
            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3">
                  <img
                    src="/images/birds.png"
                    alt="Custom Device Route"
                    class="h-14 w-14 rounded-xl object-cover"
                  />
                  <div>
                    <p class="text-xl font-black text-gray-900">
                      Custom Device Route
                    </p>
                    <p class="mt-2 text-sm text-gray-600">
                      Voor afwijkende hardwarebehoeften ondersteunen we je via
                      AITJE Custom.
                    </p>
                  </div>
                </div>
                <NuxtLink
                  to="/producten/hardware/aitje-custom"
                  class="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-[#facc15] bg-[#facc15] px-2 text-xs font-black text-black transition hover:bg-black hover:text-[#facc15]"
                >
                  →
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            v-if="selectedDeviceOption"
            class="mt-6 overflow-hidden rounded-2xl border border-gray-200"
          >
            <table class="w-full border-collapse bg-white text-sm">
              <thead class="bg-[#fafafa]">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Spec
                  </th>
                  <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    {{ selectedDeviceOption.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in selectedDeviceOption.specs"
                  :key="`${selectedDeviceOption.id}-${row.label}`"
                  class="border-t border-gray-100"
                >
                  <td class="px-4 py-3 font-semibold text-gray-800">
                    {{ row.label }}
                  </td>
                  <td class="px-4 py-3 text-gray-600">
                    {{ row.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article
          v-if="selectedOs === 'toekan' && selectedDeviceOption"
          class="rounded-3xl border border-gray-200 bg-[#212121] p-8 text-white shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Configuratie gekozen
          </p>
          <h2 class="mt-3 text-3xl font-black">Vraag een offerte aan</h2>
          <p class="mt-3 max-w-3xl text-sm text-gray-300">
            Je hebt {{ selectedDeviceOption.name }} met AITJE - Toekan geselecteerd.
            Vraag direct een offerte aan.
          </p>
          <NuxtLink
            :to="{
              path: '/contact',
              query: {
                onderwerp: 'offerte',
                bericht: offerMessage,
              },
            }"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
          >
            Vraag een offerte aan
          </NuxtLink>
        </article>

        <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Platform overzicht
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Wat je krijgt met AITJE Assistent
          </h2>
          <p class="mt-3 max-w-4xl text-base text-gray-600">
            Een helder overzicht van de belangrijkste onderdelen: van OS en client tot
            privacy, samenwerking en operationele stabiliteit.
          </p>

          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <article
              v-for="section in assistantSections"
              :key="section.number"
              class="rounded-2xl border border-gray-200 bg-[#fafafa] p-5"
            >
              <div class="flex items-start justify-between gap-3">
                <p class="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#facc15] px-2 text-sm font-black text-black">
                  {{ section.number }}
                </p>
                <p class="pt-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {{ section.label }}
                </p>
              </div>
              <h3 class="mt-3 text-xl font-black text-gray-900">
                {{ section.title }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                {{ section.description }}
              </p>
              <ul v-if="section.points" class="mt-3 space-y-2 text-sm text-gray-600">
                <li v-for="point in section.points" :key="point">• {{ point }}</li>
              </ul>
              <img
                :src="section.image"
                :alt="section.alt"
                class="mt-4 h-44 w-full rounded-xl object-cover"
              />
            </article>
          </div>
        </article>

      </section>

      <section v-else class="mx-auto mt-12 max-w-5xl space-y-6">
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
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { hardwareCatalog } from "../../../data/hardwareCatalog";

const route = useRoute();

const item = computed(() =>
  hardwareCatalog.find((entry) => entry.slug === route.params.slug),
);

const isCustom = computed(() => item.value?.slug === "aitje-custom");
const isAssistent = computed(() => item.value?.slug === "aitje-assistent");
const selectedOs = ref("");
const selectedDevice = ref("");

const deviceOptions = [
  {
    id: "cube-v1",
    name: "Aitje Cube 1",
    image: "/images/aitje-assistent-cube-v1.png",
    offerLabel: "cube 1",
    description: "Gebalanceerde uitvoering voor dagelijkse AI-taken en teams.",
    specs: [
      { label: "CPU-profiel", value: "Balanced inference" },
      { label: "Werkgeheugen", value: "Standaard productieprofiel" },
      { label: "Opslag", value: "Lokale data + modelcache" },
      { label: "Netwerk", value: "Lokaal LAN + API" },
      { label: "Gebruik", value: "Algemene organisatieworkflows" },
    ],
  },
  {
    id: "cube-v2",
    name: "Aitje Cube 2",
    image: "/images/aitje-assistent-cube-v2.jpg",
    offerLabel: "cube 2",
    description: "Meer rekenruimte voor zwaardere modellen en grotere context.",
    specs: [
      { label: "CPU/GPU-profiel", value: "Enhanced inference" },
      { label: "Werkgeheugen", value: "Uitgebreid modelprofiel" },
      { label: "Opslag", value: "Extra ruimte voor datasets en embeddings" },
      { label: "Netwerk", value: "Lokaal LAN + API + hogere throughput" },
      { label: "Gebruik", value: "Middelzware tot zware AI-workloads" },
    ],
  },
  {
    id: "cube-v3",
    name: "Aitje Cube 3",
    image: "/images/aitje-assistent-cube-v2.jpg",
    offerLabel: "cube 3",
    description: "Voor intensieve parallelle workflows en toekomstige opschaling.",
    specs: [
      { label: "CPU/GPU-profiel", value: "High-performance inference" },
      { label: "Werkgeheugen", value: "Opschaalbaar enterprise-profiel" },
      { label: "Opslag", value: "Hoge capaciteit voor lange termijn data" },
      { label: "Netwerk", value: "Lokaal LAN + API voor multi-user belasting" },
      { label: "Gebruik", value: "Intensieve en schaalbare AI-omgevingen" },
    ],
  },
];

const selectedDeviceOption = computed(() =>
  deviceOptions.find((device) => device.id === selectedDevice.value),
);

const offerMessage = computed(() => {
  const label = selectedDeviceOption.value?.offerLabel;
  if (!label) return "";
  return `ik neem contact op voor de aitje assistent, ${label} met toekan software.`;
});

const assistantSections = [
  {
    number: "1",
    label: "Basis",
    title: "Wat is AITJE Assistent?",
    description:
      "AITJE Assistent is een lokale AI-oplossing op hardware in je eigen omgeving. Je teams werken via het lokale netwerk met chat, kennis en workflows zonder continue afhankelijkheid van externe platformen.",
    image: "/images/aitje-product.png",
    alt: "Wat is AITJE Assistent",
  },
  {
    number: "2",
    label: "Operating system",
    title: "Wat is het OS?",
    description:
      "AITJE - Toekan OS is door ons gebouwd en geoptimaliseerd voor het device. Hierop draaien AI-processen, lokale API-services, accountbeheer en koppelingen met client en kennisstromen.",
    image: "/images/birds.png",
    alt: "AITJE OS versieoverzicht",
  },
  {
    number: "3",
    label: "Impact",
    title: "Welke problemen lost dit op?",
    description:
      "AITJE Assistent verlaagt afhankelijkheden en maakt AI stabiel inzetbaar in de dagelijkse operatie.",
    points: [
      "Minder afhankelijkheid van externe AI-platformen en API-prijzen",
      "Lokale beschikbaarheid, ook bij instabiel internet",
      "Meer grip op privacy, data en toegangsrechten",
      "Consistentere workflows voor kennisvragen en operationele taken",
    ],
    image: "/images/ei-internet.png",
    alt: "Problemen die AITJE Assistent oplost",
  },
  {
    number: "4",
    label: "Client",
    title: "AITJE Assistent Client",
    description:
      "De client-applicatie is de dagelijkse werklaag voor medewerkers. Vanuit de client krijg je toegang tot chat, output, kennisvragen en gekoppelde functionaliteiten binnen je eigen organisatieomgeving.",
    image: "/images/aitje-product.png",
    alt: "AITJE Assistent Client",
  },
  {
    number: "5",
    label: "Kennislaag",
    title: "Embedding omgeving en versiebeheer",
    description:
      "AITJE Assistent werkt met een externe embedding-omgeving voor documentcontext en zoekkwaliteit. Met versiebeheer en backups houd je grip op wijzigingen en kun je data- en kennislagen gecontroleerd terugzetten.",
    image: "/images/golden-egg.png",
    alt: "Embedding en versiebeheer",
  },
  {
    number: "6",
    label: "Samenwerking",
    title: "Hoe werkt dit samen?",
    description:
      "Kennisbank-sync, RAG-chat, contacten en offline maps draaien als samenhangende keten. Nieuwe data uit je kennisbank wordt verwerkt, waarna teams via de client of API direct relevante context kunnen opvragen.",
    points: [
      "Syncen vanaf kennisbank",
      "RAG-chat op lokale context",
      "Contacten en interne gegevens direct beschikbaar",
      "Offline maps en lokale bereikbaarheid",
    ],
    image: "/images/chicken-build-road.png",
    alt: "Samenwerking van modules",
  },
  {
    number: "7",
    label: "Toegang",
    title: "Accounts en privacy",
    description:
      "AITJE Assistent werkt via het lokale netwerk. Accounts worden aangemaakt op het OS/device zelf. Werknemers die verbonden zijn met hetzelfde modem/router-netwerk kunnen met hun account inloggen via de client op laptop of computer. Zo beheer je toegang centraal en blijft data dichter bij de organisatie.",
    image: "/images/egg-loading-screen.png",
    alt: "Accounts en privacy op lokaal netwerk",
  },
];

if (!item.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Hardwarepagina niet gevonden",
  });
}
</script>
