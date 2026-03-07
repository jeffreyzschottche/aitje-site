<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32">
      <section
        class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
        >
          Roadmap
        </p>
        <h1 class="mt-4 text-5xl font-black">Waar AITJE aan bouwt</h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          Deze roadmap laat zien waar we nu staan en welke onderdelen we verder
          uitbouwen binnen AITJE.
        </p>
      </section>

      <section
        class="mx-auto mt-14 grid w-full max-w-none gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        <article
          v-for="year in roadmapByYear"
          :key="year.year"
          class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Jaar
          </p>
          <h2 class="mt-3 text-2xl font-black text-gray-900">
            {{ year.year }}
          </h2>
          <p class="mt-3 text-sm text-gray-600">{{ year.summary }}</p>
          <ul v-if="year.points" class="mt-6 space-y-2">
            <li
              v-for="point in year.points"
              :key="`${year.year}-${point}`"
              class="flex items-start gap-2 text-sm text-gray-600"
            >
              <span
                class="mt-1 inline-block h-1.5 w-1.5 flex-none shrink-0 rounded-full bg-[#facc15]"
              ></span>
              <span>{{ point }}</span>
            </li>
          </ul>
          <ul v-else class="mt-6 space-y-3 text-sm text-gray-700">
            <li
              v-for="quarter in year.quarters"
              :key="`${year.year}-${quarter.label}`"
              class="rounded-2xl bg-[#fafafa] p-4"
            >
              <p class="text-sm font-semibold text-gray-900">
                {{ quarter.label }} — {{ quarter.title }}
              </p>
              <ul class="mt-2 space-y-2">
                <li
                  v-for="point in quarter.points"
                  :key="`${quarter.label}-${point}`"
                  class="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span
                    class="mt-1 inline-block h-1.5 w-1.5 flex-none shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
    </main>

    <BottomCta class="mt-20" />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const roadmapByYear = [
  {
    year: "2024",
    summary: "Onderzoek- en bouwjaar voor de technische fundering van AITJE.",
    points: [
      "Verdieping in AI-workflows koppelen via n8n",
      "Onderzoek naar RAG-systemen en verschillende platformen",
      "API's getest op betrouwbaarheid, schaalbaarheid en beheer",
      "Tokenkosten en energieverbruik bleken snel een belangrijk risico",
      "Eerste Ollama-tests opgezet als basis voor lokale inzet",
    ],
  },
  {
    year: "2025",
    summary:
      "Van onderzoek naar productversies, klantwerk en gerichte lanceringen.",
    quarters: [
      {
        label: "Q1",
        title: "Modelstack en API-basis",
        points: [
          "VLLM en Ollama naast elkaar getest en ingericht",
          "Eerste eigen API-routes voor interne productieklare workflows",
          "Basis gelegd voor productieklare workflow-automatisering",
        ],
      },
      {
        label: "Q2",
        title: "Eerste demo's en klantwerk",
        points: [
          "Eerste demoversie van AITJE Assistent live gebracht",
          "Actief werk voor eerste klanten op implementatie en maatwerk",
          "Voorbereiding op agent-gedreven workflows",
        ],
      },
      {
        label: "Q3",
        title: "Veiligheid en datalekfocus",
        points: [
          "Focus vergroot op datalek-risico's rondom AI-gebruik met lokale edge-oplossingen",
          "Guardrails, toegang en logging verder aangescherpt",
          "Ideevorming gestart voor Raad van Bestuur",
        ],
      },
      {
        label: "Q4",
        title: "Softwarelanceringen einde jaar",
        points: [
          "Afronding van de WordPress-plugins",
          "Notulist-traject doorontwikkeld",
          "Roadmap 2026 vastgesteld op basis van praktijkfeedback",
        ],
      },
    ],
  },
  {
    year: "2026",
    summary:
      "Productlanceringen en herinrichting op basis van snelle marktontwikkeling.",
    quarters: [
      {
        label: "Q1",
        title: "Lanceringsfase",
        points: [
          "AITJE OS gelanceerd",
          "AITJE Notulist productie ready maken",
          "Bestaande infrastructuur herzien en opgeschaald",
        ],
      },
      {
        label: "Q2",
        title: "PromptPaleis",
        points: [
          "PromptPaleis gelanceerd",
          "Prompt- en guidebibliotheek verder uitgebreid",
          "Praktische workflows voor teams toegevoegd",
          "Aitje Notulist applicatie in de lucht schieten",
        ],
      },
      {
        label: "Q3",
        title: "Lokale agents en Raad van Bestuur",
        points: [
          "Lokale agentarchitecturen worden verder uitgerold",
          "Raad van Bestuur wordt opgeleverd",
          "Nieuwe maatwerktrajecten worden toegevoegd voor organisaties",
          "Aitje Notulist Device lanceren",
        ],
      },
      {
        label: "Q4",
        title: "Herinventarisatie infrastructuur",
        points: [
          "De infrastructuur wordt opnieuw beoordeeld op hardware- en modelontwikkeling",
          "Nieuwe oplossingen worden geëvalueerd op stabiliteit en impact",
          "De roadmap voor 2027 wordt bijgewerkt op basis van technische versnelling",
        ],
      },
    ],
  },
  {
    year: "2027",
    summary: "Europese uitbreiding, community-opbouw en doorlopende R&D.",
    quarters: [
      {
        label: "Q1",
        title: "Community en netwerk",
        points: [
          "De eerste AITJE Community Meeting staat gepland",
          "Klantfeedback wordt direct vertaald naar productiteraties",
          "Het support- en partnernetwerk wordt verder uitgebreid",
        ],
      },
      {
        label: "Q2",
        title: "Europa en serverlocaties",
        points: [
          "Uitbreidingen naar meerdere Europese markten worden gestart",
          "Er worden meer serverlocaties toegevoegd met nadruk op Nederland en Duitsland",
          "Europese compliance- en beheerkaders worden aangescherpt",
        ],
      },
      {
        label: "Q3",
        title: "R&D en marktvalidatie",
        points: [
          "Doorlopende R&D op modellen, agentgedrag en workflows wordt voortgezet",
          "Marktontwikkelingen worden actief gemonitord en gevalideerd",
          "Klantsegmentatie wordt aangescherpt op impact en schaalbaarheid",
        ],
      },
      {
        label: "Q4",
        title: "Internationale positionering",
        points: [
          "De AI Summit in Geneva staat op de planning voor positionering en partnerships",
          "De volgende meerjaren-roadmap wordt voorbereid op basis van markt- en klantdata",
          "De uitbreidingsstrategie voor 2028 wordt vastgesteld",
        ],
      },
    ],
  },
];
</script>
