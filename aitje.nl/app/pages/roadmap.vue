<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section class="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#f5f5f5] text-gray-900">
        <div class="grid gap-10 px-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
          <div class="space-y-6">
            <p class="text-sm font-semibold uppercase tracking-[0.45em] text-[#facc15]">
              Roadmap
            </p>
            <h1 class="text-5xl font-black leading-tight">
              Waar AITJE aan bouwt
            </h1>
            <p class="max-w-3xl text-lg text-gray-700">
              Deze roadmap laat zien waar we nu staan en welke onderdelen we
              verder uitbouwen binnen AITJE.
            </p>
            <p class="max-w-3xl text-base leading-8 text-gray-600">
              AITJE is continu bezig met ontwikkeling, research en het volgen
              van veranderingen in de markt. Daarbij proberen we niet te snel te
              schakelen, maar ook niet te sloom te worden. We zoeken steeds naar
              de juiste balans: welke technologie is niet alleen interessant
              vandaag, maar ook stabiel en bruikbaar voor de komende jaren?
            </p>
          </div>

          <div class="self-stretch">
            <article class="h-full overflow-hidden rounded-[2rem]">
              <img
                src="/images/chicken-build-road.png"
                alt="AITJE roadmap illustratie"
                class="h-full min-h-[18rem] w-full object-cover object-center"
              />
            </article>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="space-y-14 md:hidden">
          <section v-for="year in roadmapYears" :key="`mobile-${year.year}`" class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="h-px flex-1 bg-gray-300"></div>
              <div class="rounded-full bg-[#212121] px-6 py-3 text-2xl font-black text-white">
                {{ year.year }}
              </div>
              <div class="h-px flex-1 bg-gray-300"></div>
            </div>

            <article
              v-for="item in year.items"
              :key="`mobile-${year.year}-${item.label}`"
              class="rounded-[2rem] border bg-white p-6 shadow-sm"
              :class="roadmapCardClass(item)"
            >
              <div>
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                    {{ item.label }}
                  </p>
                  <h3 class="mt-2 text-3xl font-black text-gray-900">
                    {{ item.title }}
                  </h3>
                </div>
              </div>
              <p class="mt-4 text-sm leading-7 text-gray-600">{{ item.summary }}</p>
              <ul class="mt-5 space-y-3 text-sm text-gray-700">
                <li
                  v-for="point in item.points"
                  :key="point"
                  class="flex items-start gap-3"
                >
                  <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </article>
          </section>
        </div>

        <div ref="timelineRef" class="relative hidden md:block">
          <div class="absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gray-300"></div>
          <div
            class="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-[#facc15] transition-[height] duration-150 ease-out"
            :style="{ height: `${scrollProgress}%` }"
          ></div>

          <div class="space-y-16">
            <section v-for="year in roadmapYears" :key="year.year" class="space-y-8">
              <div class="relative z-10 flex items-center justify-center">
                <div class="rounded-full bg-[#212121] px-8 py-3 text-2xl font-black text-white shadow-sm ring-8 ring-[#f5f5f5]">
                  {{ year.year }}
                </div>
              </div>

              <article
                v-for="(item, index) in year.items"
                :key="`${year.year}-${item.label}`"
                :ref="(el) => setItemRef(`${year.year}-${item.label}`, el as HTMLElement | null)"
                class="grid grid-cols-[1fr_7rem_1fr] items-center gap-6"
              >
                <div class="flex justify-end" :class="index % 2 === 0 ? '' : 'invisible'">
                  <div
                    class="relative w-full max-w-xl rounded-[2rem] border bg-white p-6 shadow-sm"
                    :class="roadmapCardClass(item)"
                  >
                    <div class="absolute left-full top-1/2 h-0.5 w-12 -translate-y-1/2 bg-gray-300">
                      <div
                        class="absolute right-0 top-0 h-0.5 bg-[#facc15] transition-[width] duration-150 ease-out"
                        :style="{ width: `${getConnectorProgress(`${year.year}-${item.label}`)}%` }"
                      ></div>
                    </div>
                    <p class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                      {{ item.label }}
                    </p>
                    <h3 class="mt-2 text-3xl font-black text-gray-900">
                      {{ item.title }}
                    </h3>
                    <p class="mt-4 text-sm leading-7 text-gray-600">{{ item.summary }}</p>
                    <ul class="mt-5 space-y-3 text-sm text-gray-700">
                      <li
                        v-for="point in item.points"
                        :key="point"
                        class="flex items-start gap-3"
                      >
                        <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="relative z-10 flex items-center justify-center">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f5f5f5] bg-[#facc15] text-sm font-black text-black shadow">
                    {{ item.short }}
                  </div>
                </div>

                <div class="flex justify-start" :class="index % 2 === 1 ? '' : 'invisible'">
                  <div
                    class="relative w-full max-w-xl rounded-[2rem] border bg-white p-6 shadow-sm"
                    :class="roadmapCardClass(item)"
                  >
                    <div class="absolute right-full top-1/2 h-0.5 w-12 -translate-y-1/2 bg-gray-300">
                      <div
                        class="absolute left-0 top-0 h-0.5 bg-[#facc15] transition-[width] duration-150 ease-out"
                        :style="{ width: `${getConnectorProgress(`${year.year}-${item.label}`)}%` }"
                      ></div>
                    </div>
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                          {{ item.label }}
                        </p>
                        <h3 class="mt-2 text-3xl font-black text-gray-900">
                          {{ item.title }}
                        </h3>
                      </div>
                    </div>
                    <p class="mt-4 text-sm leading-7 text-gray-600">{{ item.summary }}</p>
                    <ul class="mt-5 space-y-3 text-sm text-gray-700">
                      <li
                        v-for="point in item.points"
                        :key="point"
                        class="flex items-start gap-3"
                      >
                        <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const timelineRef = ref<HTMLElement | null>(null);
const scrollProgress = ref(0);
const itemRefs = ref<Record<string, HTMLElement>>({});
const connectorProgress = ref<Record<string, number>>({});

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const setItemRef = (key: string, el: HTMLElement | null) => {
  if (el) {
    itemRefs.value[key] = el;
    return;
  }

  delete itemRefs.value[key];
  delete connectorProgress.value[key];
};

const getConnectorProgress = (key: string) => connectorProgress.value[key] ?? 0;

const updateScrollProgress = () => {
  const timeline = timelineRef.value;
  if (!timeline || typeof window === "undefined") {
    scrollProgress.value = 0;
    return;
  }

  const rect = timeline.getBoundingClientRect();
  const visibleDistance = window.innerHeight - rect.top;
  const totalDistance = rect.height + window.innerHeight * 0.55;

  scrollProgress.value = clamp((visibleDistance / totalDistance) * 100, 0, 100);
  const progressHeadY = (scrollProgress.value / 100) * rect.height;

  for (const [key, el] of Object.entries(itemRefs.value)) {
    const itemCenterY = el.offsetTop + el.offsetHeight / 2;
    const connectorFillWindow = 48;
    const connectorStartY = itemCenterY - connectorFillWindow;

    connectorProgress.value[key] = clamp(
      ((progressHeadY - connectorStartY) / connectorFillWindow) * 100,
      0,
      100,
    );
  }
};

onMounted(() => {
  updateScrollProgress();
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollProgress);
  window.removeEventListener("resize", updateScrollProgress);
});

const now = new Date();
const currentYear = now.getFullYear();
const currentQuarter = Math.floor(now.getMonth() / 3) + 1;

const isRoadmapItemActive = (itemYear: string, itemQuarterEnd: number) => {
  const numericYear = Number(itemYear);

  if (numericYear < currentYear) {
    return true;
  }

  if (numericYear > currentYear) {
    return false;
  }

  return itemQuarterEnd <= currentQuarter;
};

const roadmapCardClass = (item: { year: string; quarterEnd: number }) =>
  isRoadmapItemActive(item.year, item.quarterEnd)
    ? "border-[#facc15] bg-[#fff8db]"
    : "border-gray-200 bg-white";

const roadmapYears = [
  {
    year: "2024",
    items: [
      {
        year: "2024",
        quarterEnd: 2,
        short: "H1",
        label: "Q1-Q2",
        title: "Onderzoek en fundering",
        summary:
          "In 2024 lag de nadruk op technische verkenning en het bouwen van de basis voor lokale Edge AI.",
        points: [
          "Verdieping in AI-workflows, RAG en lokale modellen.",
          "Vroege tests met onder meer Ollama en infrastructuurkeuzes.",
        ],
      },
      {
        year: "2024",
        quarterEnd: 4,
        short: "H2",
        label: "Q3-Q4",
        title: "Richting bepalen",
        summary:
          "In de tweede helft van 2024 werd duidelijk waar de echte productkansen en risico's lagen.",
        points: [
          "Meer focus op kosten, energieverbruik en afhankelijkheid van externe AI-platformen.",
          "De basis gelegd voor een kleinere en duidelijkere productlijn.",
        ],
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        year: "2025",
        quarterEnd: 1,
        short: "Q1",
        label: "Q1",
        title: "Eerste productbasis",
        summary:
          "De basis voor AITJE Assistent werd inhoudelijk verder aangescherpt.",
        points: [
          "Doorontwikkeling van de productbasis.",
          "Richting en inzet van de productlijn verder uitgewerkt.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "Demo's en praktijkfeedback",
        summary:
          "De eerste demoversies en klantfeedback maakten duidelijk welke lijn geloofwaardig genoeg was om door te zetten.",
        points: [
          "Eerste demoversies van AITJE Assistent in de praktijk getest.",
          "Praktijkfeedback gebruikt om product en positionering aan te scherpen.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "Focus versmallen",
        summary:
          "De roadmap werd teruggebracht van losse ideeën naar een kleiner en helderder geheel.",
        points: [
          "Minder losse zijpaden, meer focus op de kern van AITJE.",
          "De productstructuur voorbereid op een eenvoudiger verhaal en navigatie.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "Voorbereiding op 2026",
        summary:
          "Eind 2025 lag de basis voor een productlijn met duidelijke status: wat bestaat, wat loopt en wat later komt.",
        points: [
          "Roadmap 2026 opgesteld op basis van praktijk en positionering.",
          "De lijn richting Assistent, Notulist, Off-Grid en Manager concreter gemaakt.",
        ],
      },
    ],
  },
  {
    year: "2026",
    items: [
      {
        year: "2026",
        quarterEnd: 1,
        short: "Q1",
        label: "Q1",
        title: "Assistent staat er",
        summary:
          "Het kernproduct van AITJE is nu concreet zichtbaar in de markt.",
        points: [
          "AITJE Assistent bestaat als kernproduct.",
          "AITJE Assistent+ bestaat als variant met betere specs en andere kleur.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "Heldere basis",
        summary:
          "Niet alles hoeft hoofdproduct te zijn. Juist daardoor wordt de lijn sterker.",
        points: [
          "PromptPaleis bestaat al op promptpaleis.nl als apart platform.",
          "De productlijn blijft bewust kleiner en productgerichter.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "Nieuwe richtingen in ontwikkeling",
        summary:
          "Vanaf Q3 verschuift de aandacht naar de eerstvolgende uitbreidingen van de productlijn.",
        points: [
          "AITJE Notulist richt zich op Q3 2026.",
          "AITJE Off-Grid gaat in Q3 2026 de testfase in.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "Van test naar live",
        summary:
          "De tweede helft van het jaar draait om het concretiseren van de volgende live stap en het starten van een nieuwe ontwikkellijn.",
        points: [
          "AITJE Off-Grid staat gepland om live te gaan in Q4 2026.",
          "AITJE Notulist wordt verder aangescherpt op basis van praktijk en productdoel.",
          "AITJE Coder gaat in Q4 2026 de ontwikkelfase in.",
        ],
      },
    ],
  },
  {
    year: "2027",
    items: [
      {
        year: "2027",
        quarterEnd: 1,
        short: "Q1",
        label: "Q1",
        title: "Doorontwikkeling",
        summary:
          "De bestaande lijn wordt eerst verder aangescherpt voordat er weer verbreed wordt.",
        points: [
          "Bestaande producten worden inhoudelijk verder aangescherpt.",
          "Gebruikservaring en praktische inzetbaarheid blijven leidend.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "AITJE Manager",
        summary:
          "De volgende grote stap is een beheerslaag bovenop de productlijn.",
        points: [
          "AITJE Manager staat gepland voor Q2 2027.",
          "Focus ligt op agents sneller installeren, beheren en laten samenwerken.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "Uitbouw",
        summary:
          "Na de Manager-fase verschuift de aandacht naar verdere verbreding van de praktische inzet.",
        points: [
          "Doorbouwen op lokale agentic workflows binnen organisaties.",
          "Praktische beheerscenario's verder uitwerken.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "Volgende fase bepalen",
        summary:
          "Aan het eind van 2027 wordt de lijn opnieuw beoordeeld op basis van productgebruik en praktijk.",
        points: [
          "Nieuwe prioriteiten bepalen op basis van productgebruik en feedback.",
          "De roadmap gekoppeld houden aan echte status en concrete vraag.",
        ],
      },
    ],
  },
];
</script>
