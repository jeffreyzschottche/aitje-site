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
          Diensten & Custom Solutions
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          We zijn jouw strategische AI-partner
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AITJE is meer dan een hardware product of een applicatie. We helpen je
          organisatie toekomstbestendig te maken op de juiste manier via de
          manier die bij jou en je organisatie past. Wanneer een van onze vaste
          solutions niet de solution voor jou is, ontwikkelen we graag een
          maatwerk product dat dat wel is.
        </p>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        <article
          v-for="value in heroValues"
          :key="value.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-5 text-left"
        >
          <component :is="value.icon" class="h-8 w-8 text-[#facc15]" />
          <h3 class="mt-4 text-lg font-semibold text-gray-900">
            {{ value.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-600">{{ value.description }}</p>
        </article>
      </section>

      <section class="mx-auto mt-16 max-w-6xl space-y-6">
        <article
          v-for="service in services"
          :key="service.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 md:p-10"
        >
          <div class="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div class="flex gap-4">
              <div
                class="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="service.icon" class="h-7 w-7" />
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                >
                  {{ service.focus }}
                </p>
                <h2 class="text-2xl font-semibold text-gray-900">
                  {{ service.title }}
                </h2>
                <p class="mt-4 text-sm text-gray-600">
                  {{ service.description }}
                </p>
                <p class="mt-3 text-sm text-gray-700">
                  <span class="font-semibold text-gray-900">Resultaat:</span>
                  {{ service.result }}
                </p>
              </div>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-5">
              <p
                class="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a700]"
              >
                Wat we opleveren
              </p>
              <ul class="mt-3 space-y-2 text-sm text-gray-700">
                <li v-for="item in service.details" :key="item">
                  • {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section
        class="mx-auto mt-16 max-w-6xl rounded-[3rem] bg-[#212121] p-10 text-white"
      >
        <div
          class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Investering & rendement
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Voorspelbare jaarlijkse kosten
            </h2>
            <p class="mt-2 text-sm text-gray-300">
              We bouwen AI-oplossingen die je met een eenmalige investering
              duurzaam in eigen regie brengt. Optimaliseren we je huidige stack,
              dan verlagen we structureel kosten, verhogen we controle en
              verminderen we afhankelijkheid.
            </p>
          </div>
          <NuxtLink
            to="/contact?onderwerp=offerte"
            class="inline-flex shrink-0 whitespace-nowrap items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Offerte aanvragen
          </NuxtLink>
        </div>
      </section>

      <section
        class="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Strategisch partnerschap
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Van kennismaking tot het warme nest van AITJE
          </h2>
          <div class="mt-6 space-y-4">
            <div
              v-for="(step, idx) in steps"
              :key="step.title"
              class="rounded-3xl border border-gray-100 p-5"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Stap {{ idx + 1 }}
              </p>
              <h3 class="mt-2 text-xl font-semibold text-gray-900">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </article>
        <article
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 lg:sticky lg:top-24 lg:self-start"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Waarom nu
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Wees problemen voor
          </h2>
          <p class="mt-3 text-sm text-gray-600">
            De AI-wereld verandert razendsnel. Zonder partner riskeer je de
            komende jaren hogere kosten, losse systemen en onnodige
            datarisico's.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• Voorkom dure ad-hoc keuzes en vendor lock-in.</li>
            <li>
              • Beperk datalekrisico's met een veilige, doordachte architectuur.
            </li>
            <li>
              • Maak je organisatie toekomstbestendig en klaar voor innovatie.
            </li>
          </ul>
          <NuxtLink
            to="/contact?onderwerp=demo"
            class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Plan een demo
          </NuxtLink>
        </article>
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  BookOpenCheck,
  ClipboardPenLine,
  Cog,
  Leaf,
  PlugZap,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";

const heroValues = [
  {
    title: "Onafhankelijkheid",
    description:
      "Niet afhankelijk van externe bronnen en het liefst ook niet afhankelijk van internet.",
    icon: PlugZap,
  },
  {
    title: "Strategisch partnerschap",
    description:
      "We denken met je mee met een focus op een systeem dat voor jouw organisatie werkt.",
    icon: Sparkles,
  },
  {
    title: "Natuur & privacy",
    description:
      "We bouwen zuinig: minder requests, groene of serverloze infrastructuur.",
    icon: Leaf,
  },
];

const services = [
  {
    title: "AI-strategie uitdenken",
    focus: "Strategie",
    description:
      "We denken mee over waar AI nu de meeste waarde oplevert voor jouw organisatie en welke stappen logisch zijn om te zetten.",
    result:
      "Een duidelijk plan waarmee je direct kunt starten, zonder te verdwalen in alle AI-opties.",
    details: [
      "Waar AI nu direct meerwaarde geeft in je organisatie",
      "Welke tools je vandaag al slim kunt inzetten",
      "Roadmap met heldere prioriteiten en vervolgstappen",
      "Praktische keuzes voor tooling en aanpak",
    ],
    icon: PlugZap,
  },
  {
    title: "Consultancy: verbruik optimaliseren",
    focus: "Kosten & stabiliteit",
    description:
      "We analyseren je huidige AI-gebruik en maken je stack goedkoper, stabieler en minder afhankelijk van 1 partij.",
    result:
      "Lagere kosten, betere performance en meer grip op je leveranciers.",
    details: [
      "Analyse van tokenverbruik, kosten en latency",
      "Slim routeren tussen meerdere modellen",
      "Vendor-onafhankelijke opzet met meerdere aanbieders",
      "API-architectuur en fallback-scenario's",
    ],
    icon: ClipboardPenLine,
  },
  {
    title: "RAG-chat & maatwerkoplossingen",
    focus: "Kennisgedreven AI",
    description:
      "Van AITJE-assistent tot maatwerk software: chat in, antwoord terug met gematchte context uit je eigen kennis.",
    result:
      "Direct bruikbare antwoorden op basis van je eigen documenten en bedrijfscontext.",
    details: [
      "RAG-chat met documenten, beleid en interne kennis",
      "Betrouwbare context-matching met broncontrole",
      "Integratie in bestaande processen en teams",
      "Onderhoud, monitoring en doorontwikkeling",
    ],
    icon: BookOpenCheck,
  },
  {
    title: "Software-oplossingen op maat",
    focus: "Maatwerk ontwikkeling",
    description:
      "We bouwen software en applicaties op maat die AI logisch onderdeel maken van je dagelijkse operatie.",
    result:
      "Tools die precies aansluiten op je workflow in plaats van generieke software eromheen.",
    details: [
      "Web- en mobiele applicaties op maat",
      "Interne tools voor teams en operationele processen",
      "Generators voor content, rapportages en simpele acties",
      "Koppelingen met CRM, MCP, ERP en interne API's",
    ],
    icon: Sparkles,
  },
  {
    title: "Lokale LLM-installatie",
    focus: "Continuiteit & onafhankelijkheid",
    description:
      "We installeren een lokale LLM op je eigen infrastructuur, zodat je bedrijf blijft draaien zonder afhankelijk te zijn van externe AI-platformen.",
    result:
      "AI-beschikbaarheid op je eigen omgeving, ook als externe diensten uitvallen.",
    details: [
      "Lokale setup en beveiligde configuratie",
      "Modelkeuze per use-case en hardwareprofiel",
      "Fallback-architectuur en beheerafspraken",
      "Je bedrijf zit niet zonder AI zolang je stroom hebt",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Maatwerk agents",
    focus: "Agentic automation",
    description:
      "We bouwen een persoonlijke agent die past bij je processen, team en datastromen.",
    result:
      "Herhaalbaar werk wordt automatisch afgehandeld met duidelijke controle.",
    details: [
      "Agentontwerp per afdeling of rol",
      "Koppeling met interne tools en databronnen",
      "Veiligheden, rechten en auditability ingebouwd",
      "Iteratief verbeteren op basis van gebruik",
    ],
    icon: Cog,
  },
  {
    title: "AI-workflows met of zonder human-in-the-loop",
    focus: "Workflow orchestration",
    description:
      "We automatiseren stappen waar het kan en voegen menselijke controle toe waar het moet.",
    result:
      "Snellere processen met de juiste balans tussen automatisering en menselijke regie.",
    details: [
      "Workflows met goedkeuringsstappen voor kritieke acties",
      "Volledig geautomatiseerde flows voor routinetaken",
      "Escalaties, fallback en kwaliteitscontroles",
      "Meetbare SLA's en continue optimalisatie",
    ],
    icon: ShieldCheck,
  },
];

const steps = [
  {
    title: "Kennismaken",
    description: "We verkennen je doelen, context en ambities met AI.",
  },
  {
    title: "Huidige organisatie leren kennen",
    description:
      "We kijken naar processen, systemen, teams en huidige AI-inzet.",
  },
  {
    title: "Knelpunten en wensen in kaart brengen",
    description:
      "We bepalen waar winst te halen is in kwaliteit, kosten en snelheid.",
  },
  {
    title: "Eerste implementaties toepassen",
    description:
      "We zetten de eerste oplossingen live en borgen ze in je organisatie.",
  },
  {
    title: "Monitoren, verbeteren, uitbreiden en optimaliseren",
    description:
      "Op basis van gebruiksdata verbeteren we continu je AI-landschap.",
  },
  {
    title: "Lang partnerschap in AI",
    description: "We blijven beschikbaar voor vragen, keuzes en nieuwe kansen.",
  },
];
</script>
