<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section
        class="mx-auto max-w-5xl rounded-3xl bg-white px-8 py-12 text-center shadow"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          Oplossingen
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          AITJE voor scholen, bibliotheken en gemeenten
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Eén compact device dat je offline AI, kennisbank en client dashboard
          samenbrengt. Van onderwijs en bibliotheken tot zorg, ondernemers en
          gemeentes: je houdt regie over kennis, kosten en privacy – ook als de
          rest van de wereld even stilvalt.
        </p>
        <div class="mt-10 grid gap-8 md:grid-cols-3">
          <article
            v-for="item in solutionHighlights"
            :key="item.title"
            class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <component :is="item.icon" class="h-10 w-10 text-[#facc15]" />
            <h3 class="mt-4 text-2xl font-semibold">{{ item.title }}</h3>
            <p class="mt-3 text-sm text-gray-600">{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-20 max-w-6xl">
        <div class="grid gap-8 lg:grid-cols-2">
          <article
            v-for="area in solutionAreas"
            :key="area.title"
            class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div class="flex items-center gap-3">
              <component :is="area.icon" class="h-10 w-10 text-[#facc15]" />
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  {{ area.kicker }}
                </p>
                <h3 class="text-3xl font-semibold text-gray-900">
                  {{ area.title }}
                </h3>
              </div>
            </div>
            <p class="mt-4 text-gray-600">{{ area.description }}</p>
            <ul class="mt-6 space-y-3 text-sm text-gray-600">
              <li
                v-for="point in area.points"
                :key="point"
                class="flex items-center gap-2"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-[#facc15]"></span>
                {{ point }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section
        class="mx-auto mt-20 max-w-6xl rounded-3xl bg-[#212121] p-10 text-white shadow"
      >
        <div class="grid gap-8 lg:grid-cols-2">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Scenario's
            </p>
            <h2 class="mt-4 text-3xl font-black">
              Waar AITJE het verschil maakt
            </h2>
            <p class="mt-4 text-gray-300">
              We gebruiken AITJE dagelijks in situaties waar afhankelijkheid van
              externe platforms pijn doet. Elke oplossing is gebaseerd op vier
              pijlers.
            </p>
          </div>
          <div class="space-y-6">
            <article
              v-for="scenario in scenarios"
              :key="scenario.title"
              class="rounded-2xl border border-white/10 bg-white/10 p-5"
            >
              <div class="flex items-center gap-3 text-[#facc15]">
                <component :is="scenario.icon" class="h-5 w-5" />
                <p class="text-xs font-semibold uppercase tracking-[0.4em]">
                  {{ scenario.kicker }}
                </p>
              </div>
              <h3 class="mt-2 text-xl font-semibold text-white">
                {{ scenario.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-200">
                {{ scenario.description }}
              </p>
              <NuxtLink
                v-if="scenario.to"
                :to="scenario.to"
                class="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#facc15] transition hover:text-gray-900"
              >
                Lees meer
                <ArrowUpRight class="h-3.5 w-3.5" />
              </NuxtLink>
            </article>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-20 max-w-5xl">
        <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Aanpak
          </p>
          <h2 class="mt-3 text-3xl font-black">We bouwen het samen</h2>
          <div class="mt-8 grid gap-6 md:grid-cols-3">
            <article
              v-for="step in processSteps"
              :key="step.title"
              class="rounded-2xl border border-gray-100 bg-[#fafafa] p-6"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
              >
                {{ step.phase }}
              </p>
              <h3 class="mt-2 text-xl font-semibold text-gray-900">
                {{ step.title }}
              </h3>
              <p class="mt-3 text-sm text-gray-600">{{ step.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-20 max-w-6xl">
        <div class="rounded-[32px] border border-gray-200 bg-white p-10 shadow">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Nest van scenario's
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Bento-kaarten per sector
          </h2>
          <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="card in nestCards"
              :key="card.title"
              class="rounded-[28px] border border-gray-200 p-5"
              :style="{ backgroundColor: card.background }"
            >
              <div class="flex items-center gap-3 text-gray-900">
                <component :is="card.icon" class="h-6 w-6" />
                <p class="text-xs font-semibold uppercase tracking-[0.4em]">
                  {{ card.kicker }}
                </p>
              </div>
              <h3 class="mt-3 text-2xl font-black text-gray-900">
                {{ card.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-700">{{ card.description }}</p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  ArrowUpRight,
  Bird,
  BookOpen,
  Briefcase,
  Building2,
  GraduationCap,
  Leaf,
  Library,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-vue-next";

const solutionHighlights = [
  {
    title: "Lokale intelligentie",
    description:
      "AITJE draait op je eigen netwerk met een actueel Nederlands model en kennisbank.",
    icon: ShieldCheck,
  },
  {
    title: "Verhalen en workflows",
    description:
      "Van intakegesprekken tot bibliotheekvragen: we modelleren het echte werk in je eigen taal.",
    icon: BookOpen,
  },
  {
    title: "Partnerschap",
    description:
      "Installatie, trainingsdagen, kennisupdates en SLA’s op maat – wanneer jij dat wilt.",
    icon: Sparkles,
  },
];

const solutionAreas = [
  {
    title: "Scholen en opleidingen",
    kicker: "Educatie",
    description:
      "Onderwijsinstellingen gebruiken AITJE voor lesvoorbereiding, toetsvragen en begeleiding, zonder leerlingdata te delen.",
    points: [
      "Lesplannen genereren op basis van eigen curriculum",
      "Audio- en spraakmodus voor inclusieve lessen",
      "Privacy-proof inzetbaar binnen het klasnetwerk",
    ],
    icon: GraduationCap,
  },
  {
    title: "Bibliotheken en kenniscentra",
    kicker: "Bibliotheken",
    description:
      "Een lokale assistent die catalogi kent, bezoekers helpt en paraat staat bij storingen.",
    points: [
      "Integreer lokale archieven en collecties",
      "Altijd bereikbaar, ook offline",
      "Rapportages voor subsidieverantwoording",
    ],
    icon: Library,
  },
  {
    title: "Gemeentes & non-profits",
    kicker: "Publieke sector",
    description:
      "Burgerzaken, communicatie en beleidsteams houden gevoelige dossiers binnenshuis en kunnen toch versnellen met AI.",
    points: [
      "API integratie met intranet",
      "Toegangsrechten per afdeling",
      "Consult en SLA voor continuïteit",
    ],
    icon: Building2,
  },
  {
    title: "MKB & ondernemers",
    kicker: "Bedrijven",
    description:
      "Een plan B wanneer internationale AI-platformen duurder of onbereikbaar worden.",
    points: [
      "Geen terugkerende API-kosten",
      "Eigen klantspecifieke kennis",
      "Support op afroep",
    ],
    icon: Briefcase,
  },
];

const scenarios = [
  {
    title: "Afhankelijkheid van één platform doorbroken",
    kicker: "Afhankelijkheid",
    description:
      "Bij stroom- of internetstoringen valt je team vaak stil. AITJE draait lokaal door en bewaart gesprekken veilig op het device.",
    icon: PlugZap,
  },
  {
    title: "Kosten blijven onder controle",
    kicker: "Financieel",
    description:
      "AI-kosten zijn nu nog laag, maar stijgen zodra platformen mainstream zijn. Je betaalt bij AITJE eenmalig en plant optionele diensten in.",
    icon: Wallet,
  },
  {
    title: "Privacy compliant by design",
    kicker: "Privacy",
    description:
      "Geen data naar Amerikaanse of Chinese clouds. Je voldoet moeiteloos aan AVG- en sectorregels.",
    icon: ShieldCheck,
  },
  {
    title: "Klein kastje, grote klimaatwinst",
    kicker: "Klimaat",
    description:
      "Elke lokale vraag betekent minder servercalls en minder verspilling van water en energie in enorme datacenters.",
    icon: Leaf,
  },
  {
    title: "Realtime hulp voor burgers en studenten",
    kicker: "Gebruik",
    description:
      "Een bibliotheekmedewerker of docent start een chat, uploadt documenten of neemt audio op. AITJE reageert meteen, zonder afhankelijkheid van de cloud.",
    icon: Zap,
  },
];

const processSteps = [
  {
    phase: "Stap 1",
    title: "Inventarisatie",
    description:
      "We bespreken jouw scenario’s en bepalen welke kennis en toegangsniveaus nodig zijn.",
  },
  {
    phase: "Stap 2",
    title: "Implementatie",
    description:
      "Plaatsing van hardware, inrichting van het OS en training van beheerders en gebruikers.",
  },
  {
    phase: "Stap 3",
    title: "Activatie & borging",
    description:
      "Kennisupdates, SLA en evaluaties om AITJE onderdeel te maken van dagelijkse processen.",
  },
];

const nestCards = [
  {
    kicker: "Onderwijs",
    title: "AI per klas",
    description: "Voor elk vak een aparte promptbibliotheek met eigen toegang.",
    background: "#FFF7D6",
    icon: GraduationCap,
  },
  {
    kicker: "Bibliotheken",
    title: "Digitale balie",
    description: "Bezoekers krijgen antwoorden op basis van lokale archieven.",
    background: "#FFE8EB",
    icon: Library,
  },
  {
    kicker: "Gemeentes",
    title: "Plan B bij storingen",
    description: "Burgerzaken blijven draaien met lokale AI workflows.",
    background: "#E6F0FF",
    icon: Building2,
  },
  {
    kicker: "Bedrijven",
    title: "Eigen API-lab",
    description: "Teams bouwen prototypes zonder pay-per-prompt.",
    background: "#E4FFE4",
    icon: Bird,
  },
];
</script>
