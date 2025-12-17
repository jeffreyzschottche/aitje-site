<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8">
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          Visie
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Vogelvraie AI die natuur, mens en data beschermt
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Onze visie: elke organisatie verdient een lokaal, goudkleurig AITJE
          dat onafhankelijk draait van Amerikaanse corporaties, je data bij jou
          houdt en minder druk zet op het klimaat. We bouwen het nest zelf –
          hardware, software en diensten – zodat jij altijd dichtbai antwoorden
          vindt.
        </p>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
        <article
          v-for="goal in goals"
          :key="goal.title"
          class="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow"
        >
          <div
            class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
          >
            <component :is="goal.icon" class="h-7 w-7" />
          </div>
          <p
            class="mt-4 text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
          >
            {{ goal.badge }}
          </p>
          <h3 class="mt-2 text-2xl font-semibold text-gray-900">
            {{ goal.title }}
          </h3>
          <p class="mt-3 text-sm text-gray-600">{{ goal.description }}</p>
        </article>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-2">
        <article
          v-for="founder in founders"
          :key="founder.name"
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div class="flex items-center gap-4">
            <component :is="founder.icon" class="h-10 w-10 text-[#facc15]" />
            <div>
              <h2 class="text-2xl font-semibold text-gray-900">
                {{ founder.name }}
              </h2>
              <p class="text-sm text-gray-500">{{ founder.role }}</p>
            </div>
          </div>
          <p class="mt-4 text-gray-700">{{ founder.story }}</p>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li
              v-for="item in founder.highlights"
              :key="item"
              class="flex items-center gap-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-[#facc15]"></span>
              {{ item }}
            </li>
          </ul>
        </article>
      </section>

      <section
        class="mx-auto mt-20 max-w-6xl rounded-3xl border border-gray-200 bg-white p-10 shadow"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
        >
          Missie & waarden
        </p>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <article
            v-for="value in values"
            :key="value.title"
            class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
          >
            <div class="flex items-center gap-3">
              <component :is="value.icon" class="h-6 w-6 text-[#facc15]" />
              <h3 class="text-xl font-semibold text-gray-900">
                {{ value.title }}
              </h3>
            </div>
            <p class="mt-3 text-sm text-gray-600">{{ value.description }}</p>
          </article>
        </div>
      </section>

      <section
        class="mx-auto mt-20 max-w-6xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <article class="rounded-3xl bg-[#212121] p-8 text-white shadow">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Roadmap
          </p>
          <h2 class="mt-3 text-3xl font-black">
            Ons plan uit het businessplan
          </h2>
          <p class="mt-3 text-sm text-gray-200">
            We werken gefaseerd: eerst de kernsoftware, daarna hardware, dan de
            eerste klanten.
          </p>
          <ul class="mt-6 space-y-4 text-sm text-gray-100">
            <li v-for="phase in roadmap" :key="phase.title">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                {{ phase.period }}
              </p>
              <p class="font-semibold">{{ phase.title }}</p>
              <p class="text-gray-300">{{ phase.description }}</p>
            </li>
          </ul>
        </article>
        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Risico's & focus
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Zo houden we koers
          </h2>
        <div class="mt-6 space-y-4">
          <div
            v-for="risk in risks"
            :key="risk.title"
            class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
          >
              <h3 class="text-xl font-semibold text-gray-900">
                {{ risk.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ risk.description }}</p>
              <p class="mt-2 text-xs font-semibold text-gray-900">
                {{ risk.solution }}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-20 max-w-6xl">
        <div class="rounded-3xl border border-gray-200 bg-white p-10 shadow">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Marketing & community
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            We brengen AITJE naar buiten met creatieve tactieken
          </h2>
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            <article
              v-for="move in marketing"
              :key="move.title"
              class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
            >
              <h3 class="text-xl font-semibold text-gray-900">
                {{ move.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ move.description }}</p>
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
  Bird,
  Feather,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";

const goals = [
  {
    title: "Digitale soevereiniteit",
    badge: "Data blijft van jou",
    description:
      "AITJE draait lokaal zodat gemeenten, scholen en bedrijven niet afhankelijk zijn van Amerikaanse platformen.",
    icon: ShieldCheck,
  },
  {
    title: "Natuurvriendelijke infrastructuur",
    badge: "Minder water & energie",
    description:
      "Elke prompt op eigen hardware scheelt liters koelwater en CO₂ uit mega datacenters.",
    icon: Leaf,
  },
  {
    title: "Betaalbare plan B (en A)",
    badge: "Voorspelbare kosten",
    description:
      "Eenmalige hardware + diensten op maat voorkomt prijsstijgingen en storingen van externe AI’s.",
    icon: Sparkles,
  },
];

const founders = [
  {
    name: "Jeffrey Zschöttche",
    role: "Co-founder · Product & strategie",
    story:
      "Jeffrey vertaalde het businessplan naar een strak product: hardware + OS + client. Hij bewaakt dat de AI altijd offline bereikbaar blijft.",
    highlights: [
      "Gebouwde MVP-software",
      "Praat dagelijks met klanten en partners",
      "Verzamelt kennisdatabanken op locatie",
    ],
    icon: Bird,
  },
  {
    name: "Kees van Ruler",
    role: "Co-founder · Technologie & diensten",
    story:
      "Kees zorgt voor de hardwarekeuze, installatieprocessen en de embedding backdoor. Hij brengt rust tijdens storingen en audits.",
    highlights: [
      "Bedenker van de embedding workflow",
      "Stuurt consults en SLA-teams aan",
      "Combineert tech met natuurverhalen",
    ],
    icon: Feather,
  },
];

const values = [
  {
    title: "Lokale controle",
    description:
      "AITJE draait in jouw gebouw, met jouw accounts. We geloven in digitale soevereiniteit.",
    icon: ShieldCheck,
  },
  {
    title: "Natuurlijke eenvoud",
    description:
      "We ontwerpen alsof we een nest bouwen: alles heeft een plek, iedereen voelt zich veilig.",
    icon: Leaf,
  },
  {
    title: "Partnerschap",
    description:
      "We zijn geen anonieme vendor maar sparren persoonlijk met elke klant.",
    icon: HeartHandshake,
  },
  {
    title: "Open verhaal",
    description:
      "We delen onze roadmap, uitdagingen en inspiratie zodat de community kan meedoen.",
    icon: Sparkles,
  },
];

const roadmap = [
  {
    period: "Maand 1",
    title: "Kick-off + research",
    description:
      "Scope vastzetten, businessplan fine-tunen en alle interviews en deskresearch afronden.",
  },
  {
    period: "Maand 2",
    title: "Kernsoftware bouwen",
    description:
      "AITJE OS en client klaarzetten, lokale LLM’s testen en de basis van de kennisbank laden.",
  },
  {
    period: "Maand 3",
    title: "Merk & content",
    description:
      "Website, branding en demo’s afleveren zodat iedereen het gouden kastje kan zien en voelen.",
  },
  {
    period: "Maand 4",
    title: "Hardware iteraties",
    description:
      "Productiepartners kiezen, onderdelen inkopen en de eerste serie behuizingen assembleren.",
  },
  {
    period: "Maand 5",
    title: "Eerste klanten onboarden",
    description:
      "LinkedIn, YouTube en outreach activeren, pilots draaien en supportprocessen schrijven.",
  },
  {
    period: "Maand 6",
    title: "Opschalen & leren",
    description:
      "Content maken zodra MVP draait: video’s, artikelen, demo’s en documentatie voor nieuwe sectoren.",
  },
];

const risks = [
  {
    title: "Te lang hangen in techniek",
    description:
      "We kennen de valkuil van eindeloos debuggen (zoals bij Debian).",
    solution:
      "Roadmap strak volgen, blokken reserveren en hulp vragen wanneer nodig.",
  },
  {
    title: "Feature drift",
    description: "Altijd nieuwe ideeën voor functies geeft vertraging.",
    solution: "Vast product voor versie 1, uitbreidingen pas na lancering.",
  },
  {
    title: "Concurrentie beweegt sneller",
    description:
      "Ook anderen bouwen lokale AI. We moeten gericht tempo houden.",
    solution:
      "Focus op Nederlandse markt, directe klantgesprekken en snelle iteratie.",
  },
  {
    title: "Te laat naar buiten treden",
    description: "Als we wachten op perfectie, mist de doelgroep ons verhaal.",
    solution: "Content maken zodra MVP draait: video’s, artikelen, demo’s.",
  },
];

const marketing = [
  {
    title: "LinkedIn + website + YouTube",
    description:
      "Elke release delen we synchroon via socials en site voor maximale zichtbaarheid.",
  },
  {
    title: "Lokale media en podcasts",
    description:
      "Interviews met kranten, tech-magazines en ondernemersshows uit Nederland.",
  },
  {
    title: "Guerilla acties",
    description:
      "Aanwezig op markten, beurzen en meetups met het fysieke kastje om vertrouwen te winnen.",
  },
  {
    title: "Automatische outreach",
    description:
      "Cold mails, persoonlijke berichten en referenties om de eerste 10-50 klanten te bereiken.",
  },
];
</script>
