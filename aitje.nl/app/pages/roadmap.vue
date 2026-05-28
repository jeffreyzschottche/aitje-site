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
              We bouwen stap voor stap aan lokale AI die organisaties echt
              kunnen gebruiken. Op deze pagina zie je welke onderdelen al
              beschikbaar zijn, welke keuzes we nu aanscherpen en welke
              productrichtingen later volgen.
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
          "In 2024 onderzochten we welke lokale AI-techniek betrouwbaar genoeg is voor dagelijks gebruik.",
        points: [
          "AI-workflows, RAG en lokale modellen getest op praktische inzetbaarheid.",
          "Vroege infrastructuurkeuzes gemaakt voor een lokale assistentomgeving.",
        ],
      },
      {
        year: "2024",
        quarterEnd: 4,
        short: "H2",
        label: "Q3-Q4",
        title: "Richting bepalen",
        summary:
          "In de tweede helft van 2024 kozen we scherper voor producten die controle, kosten en continuïteit verbeteren.",
        points: [
          "Meer focus op minder afhankelijkheid van externe AI-platformen.",
          "De basis gelegd voor een overzichtelijke productlijn rond lokale AI.",
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
        title: "Productbasis aangescherpt",
        summary:
          "AITJE Assistent kreeg een duidelijkere rol binnen de productlijn.",
        points: [
          "De lokale assistentomgeving verder uitgewerkt.",
          "Scherper bepaald waarvoor AITJE Assistent het meest geschikt is.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "Demo's en praktijkfeedback",
        summary:
          "Demo's en klantgesprekken maakten duidelijk waar organisaties de meeste waarde zien.",
        points: [
          "AITJE Assistent in de praktijk getest met vroege demo's.",
          "Feedback gebruikt om product, uitleg en positionering scherper te maken.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "Productlijn versimpeld",
        summary:
          "We brachten de productlijn terug naar een kleiner en duidelijker geheel.",
        points: [
          "Minder losse richtingen, meer focus op de kern van AITJE.",
          "De site en navigatie voorbereid op een duidelijker productverhaal.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "Voorbereiding op 2026",
        summary:
          "Eind 2025 lag er een duidelijke productrichting voor de volgende fase.",
        points: [
          "Roadmap 2026 bepaald op basis van praktijkervaring en positionering.",
          "De rol van AITJE Assistent, AITJE Assistent+ en AITJE Coder scherper gemaakt.",
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
        title: "AITJE Assistent ontwikkeling afgerond",
        summary:
          "AITJE Assistent is klaar voor organisaties die lokale AI beheersbaar willen inzetten.",
        points: [
          "AITJE Assistent is beschikbaar voor organisaties die AI lokaal en beheersbaar willen inzetten.",
          "Voor zwaardere toepassingen is er AITJE Assistent+ met betere specs en meer intelligentie.",
          "Voor organisaties met specifieke wensen werken we via AITJE Custom aan maatwerkoplossingen.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "Heldere basis",
        summary:
          "De focus ligt op stabiel gebruik, duidelijke uitleg en verdere optimalisatie.",
        points: [
          "AITJE Coder verder afronden en optimaliseren richting een stabiel product.",
          "AITJE Assistent volgen op gebruik, betrouwbaarheid en praktische inzetbaarheid.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "Nieuwe richtingen in ontwikkeling",
        summary:
          "Vanaf Q3 werken we verder aan de volgende uitbreiding van de productlijn.",
        points: [
          "AITJE Coder verder voorbereiden voor technisch werk met AI.",
          "De bestaande lijn compact houden, zodat elk product een duidelijke status en rol heeft.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "Van test naar live",
        summary:
          "De tweede helft van het jaar draait om de livegang van de volgende productlijn.",
        points: [
          "AITJE Coder wordt in Q4 2026 gelanceerd.",
          "De eerste livefase staat in het teken van gecontroleerd gebruik en technische workflows met AI.",
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
          "We verbeteren eerst wat er staat voordat de productlijn verder groeit.",
        points: [
          "Bestaande producten verder verbeteren op inhoud en gebruiksgemak.",
          "Gebruikservaring en praktische inzetbaarheid blijven leidend.",
          "Nieuwe productkeuzes baseren op terugkerende vragen uit maatwerktrajecten.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "Notulist en Off-Grid",
        summary:
          "De aandacht verschuift naar producten voor terugkerende vragen uit de praktijk.",
        points: [
          "Focus op AITJE Notulist voor verslaglegging, samenvatting en kennisborging.",
          "Focus op AITJE Off-Grid voor AI-gebruik in situaties waar internet of stroom niet vanzelfsprekend is.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "Monitoren en landen",
        summary:
          "Q3 draait om meten, leren en bepalen wat klanten in de praktijk nodig hebben.",
        points: [
          "Gebruik en feedback rond AITJE Coder en AITJE Assistent verzamelen.",
          "De ontwikkeling van AITJE Off-Grid en AITJE Notulist monitoren en bijsturen.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "Volgende fase bepalen",
        summary:
          "Aan het eind van 2027 bepalen we welke productstappen daarna het meeste waarde toevoegen.",
        points: [
          "Nieuwe prioriteiten bepalen op basis van productgebruik en feedback.",
          "De roadmap gekoppeld houden aan echte productstatus en concrete klantvraag.",
          "De tech- en hardwarestack opnieuw evalueren, omdat ontwikkelingen in AI snel blijven gaan.",
        ],
      },
    ],
  },
];
</script>
