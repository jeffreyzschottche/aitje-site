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
          FAQ
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Veelgestelde vragen over AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Gebaseerd op ons businessplan en gesprekken met organisaties, scholen,
          bibliotheken en ZZP’ers.
        </p>
      </section>

      <section
        class="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.65fr_0.35fr]"
      >
        <div class="space-y-6">
          <article
            v-for="group in faqGroups"
            :key="group.title"
            class="rounded-3xl border border-gray-200 bg-white p-6"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="group.icon" class="h-6 w-6" />
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  {{ group.badge }}
                </p>
                <h2 class="text-2xl font-semibold text-gray-900">
                  {{ group.title }}
                </h2>
              </div>
            </div>
            <div class="mt-6 space-y-4">
              <details
                v-for="item in group.items"
                :key="item.question"
                class="rounded-2xl bg-[#fafafa] p-4"
              >
                <summary
                  class="cursor-pointer text-base font-semibold text-gray-900"
                >
                  {{ item.question }}
                </summary>
                <p class="mt-3 text-sm text-gray-600">{{ item.answer }}</p>
              </details>
            </div>
          </article>
        </div>
        <aside
          class="h-max rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:self-start"
        >
          <h3 class="text-2xl font-semibold text-gray-900">Nog een vraag?</h3>
          <p class="mt-2 text-sm text-gray-600">
            Plan een demo of stuur een bericht. We reageren persoonlijk.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• info@aitje.nl</li>
            <li>• support@aitje.nl</li>
            <li>• +31 20 123 4567</li>
          </ul>
          <NuxtLink
            to="/contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Neem contact op
          </NuxtLink>
          <div class="mt-6 rounded-3xl bg-[#facc15] p-4 text-[#212121]">
            <p class="text-xs font-semibold uppercase tracking-[0.4em]">
              Academy tip
            </p>
            <p class="mt-2 text-sm">
              Onze e-learning (100,- p/j) bevat promptlessen, docs en checklists
              die veel vragen al beantwoorden.
            </p>
          </div>
        </aside>
      </section>

      <section
        class="mx-auto mt-16 max-w-5xl rounded-[3rem] bg-[#212121] p-10 text-white"
      >
        <h2 class="text-3xl font-black">Snelle feiten</h2>
        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <article
            v-for="fact in facts"
            :key="fact.title"
            class="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              {{ fact.badge }}
            </p>
            <h3 class="mt-2 text-xl font-semibold text-white">
              {{ fact.title }}
            </h3>
            <p class="mt-3 text-sm text-gray-200">{{ fact.description }}</p>
          </article>
        </div>
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  BookOpenCheck,
  Leaf,
  Lock,
  PlugZap,
  Shield,
  Sparkles,
} from "lucide-vue-next";

const faqGroups = [
  {
    title: "Product & techniek",
    badge: "Kastje & OS",
    icon: PlugZap,
    items: [
      {
        question: "Wat is AITJE precies?",
        answer:
          "Een mini computer met eigen operating system, een lokaal LLM en een kennisbank die we op maat kunnen vullen. Je praat via chat, audio of API en alles draait offline.",
      },
      {
        question: "Wat heb ik nodig om te starten?",
        answer:
          "Stroom, netwerk en optioneel een scherm/toetsenbord voor de eerste setup. Daarna kun je via je laptop, tablet of telefoon verbinden.",
      },
      {
        question: "Ondersteunt AITJE API’s?",
        answer:
          "Ja. We gebruiken dezelfde structuur als de ChatGPT API, zodat je makkelijk kan omschakelen.",
      },
    ],
  },
  {
    title: "Privacy & natuur",
    badge: "Lokale soevereiniteit",
    icon: Lock,
    items: [
      {
        question: "Waar blijft mijn data?",
        answer:
          "In jouw kastje. We sturen niks naar Amerikaanse corporaties of cloudplatformen. Daarom kiest de publieke sector graag voor AITJE.",
      },
      {
        question: "Hoe helpt dit de natuur?",
        answer:
          "Elke prompt die lokaal draait, scheelt energie en liters koelwater die anders in gigantische datacenters worden gebruikt. In het businessplan benoemen we dit als groot klimaatvoordeel.",
      },
      {
        question: "Kan AITJE offline doorwerken?",
        answer:
          "Ja. Alleen voor updates heb je soms internet nodig. Verder blijft alles draaien – handig bij storingen of audits.",
      },
    ],
  },
  {
    title: "Diensten & abonnementen",
    badge: "Partnerschap",
    icon: Sparkles,
    items: [
      {
        question: "Welke diensten bied je aan?",
        answer:
          "Installatie (2,5 uur + 50,- voorrijkosten), consults (eerste gratis, daarna 100,- p/u), kennisupdates (1.250,-), LLM upgrades (250,- per kwartaal) en SLA/e-learning volgens het businessplan.",
      },
      {
        question: "Wat kost e-learning?",
        answer:
          "€ 100 per jaar. Je krijgt promptlessen, docs en cheatsheets via de AITJE Academy.",
      },
      {
        question: "Wat houdt het SLA in?",
        answer:
          "Voor € 250 per kwartaal reserveren we 4 uur support. Meerwerk rekenen we per uur door.",
      },
    ],
  },
  {
    title: "Doelgroep & gebruik",
    badge: "Persona’s",
    icon: BookOpenCheck,
    items: [
      {
        question: "Voor wie is AITJE bedoeld?",
        answer:
          "Voor ZZP’ers, MKB, gemeenten, scholen, bibliotheken en grotere organisaties die lokale AI willen zonder afhankelijkheid.",
      },
      {
        question: "Welke pakketten zijn er?",
        answer:
          "AITJE (€ 2.399), AITJE Pro (€ 3.500 + € 1.200 p/j) en AITJE Custom (€ 5.000 + € 2.500-3.750 p/j).",
      },
      {
        question: "Kan ik jullie inhuren zonder dienstenpakket?",
        answer:
          "Voor particulieren leveren we vooral het product. Voor organisaties combineren we hardware met diensten vanaf de start.",
      },
    ],
  },
  {
    title: "Veiligheid & continuïteit",
    badge: "Zekerheid",
    icon: Shield,
    items: [
      {
        question: "Wat als er een storing is?",
        answer:
          "Omdat alles lokaal draait, merk je weinig. Met een UPS houd je zelfs bij stroomuitval toegang. SLA-klanten krijgen direct support.",
      },
      {
        question: "Kun je meerdere gebruikers beheren?",
        answer:
          "Ja. Je maakt accounts, API keys en rollen aan op het device. Zo blijft toegang controleerbaar.",
      },
      {
        question: "Hebben jullie een roadmap?",
        answer:
          "In het businessplan staat onze planning: MVP, hardware, eerste klanten en daarna doorontwikkeling. We delen updates via Academy en consults.",
      },
    ],
  },
  {
    title: "Academy & prompts",
    badge: "Vliegles",
    icon: Leaf,
    items: [
      {
        question: "Wat leer ik in de Academy?",
        answer:
          "Je krijgt promptlessen, sector-scenario’s en workflows voor eigen kennis. Denk aan een Udemy maar dan volledig gericht op AITJE.",
      },
      {
        question: "Krijg ik templates?",
        answer:
          "Ja. We leveren cheatsheets, documentatie en voorbeeldprompts die passen bij jouw sector en persona’s uit het businessplan.",
      },
      {
        question: "Hoe vaak komen er nieuwe lessen?",
        answer:
          "Regelmatig. Zeker na een nieuwe LLM upgrade of kennisupdate delen we nieuwe modules.",
      },
    ],
  },
];

const facts = [
  {
    title: "Lokale verwerking",
    badge: "100% data van jou",
    description: "Geen enkele prompt of kennisbank gaat naar de cloud.",
  },
  {
    title: "Eénmalige kosten",
    badge: "Voorspelbaar",
    description:
      "Je investeert in hardware en kiest daarna bewust voor diensten.",
  },
  {
    title: "Natuurvriendelijk",
    badge: "Klimaat",
    description:
      "Minder serverwater, minder energie en dus een lichter voetafdruk.",
  },
];
</script>
