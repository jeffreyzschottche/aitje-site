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
              What AITJE is building
            </h1>
            <p class="max-w-3xl text-lg text-gray-700">
              This roadmap shows where we are now and which parts we are
              continuing to build within AITJE.
            </p>
            <p class="max-w-3xl text-base leading-8 text-gray-600">
              We build local AI step by step for organizations that need
              practical control. This page shows which parts are available now,
              which choices we are sharpening and which product directions come
              later.
            </p>
          </div>

          <div class="self-stretch">
            <article class="h-full overflow-hidden rounded-[2rem]">
              <img
                src="/images/chicken-build-road.png"
                alt="AITJE roadmap illustration"
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
        title: "Research and foundation",
        summary:
          "In 2024, we explored which local AI technology was reliable enough for day-to-day use.",
        points: [
          "Tested AI workflows, RAG and local models for practical use.",
          "Made early infrastructure choices for a local assistant environment.",
        ],
      },
      {
        year: "2024",
        quarterEnd: 4,
        short: "H2",
        label: "Q3-Q4",
        title: "Defining direction",
        summary:
          "In the second half of 2024, we focused more sharply on products that improve control, cost and continuity.",
        points: [
          "More focus on reducing dependency on external AI platforms.",
          "Laid the foundation for a clear product line around local AI.",
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
        title: "Product foundation sharpened",
        summary:
          "AITJE Assistant gained a clearer role within the product line.",
        points: [
          "Worked out the local assistant environment in more detail.",
          "Defined where AITJE Assistant is most useful.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "Demos and practical feedback",
        summary:
          "Demos and customer conversations made clear where organizations see the most value.",
        points: [
          "Tested AITJE Assistant in practice through early demos.",
          "Used feedback to sharpen the product, explanation and positioning.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "Simplifying the product line",
        summary:
          "The product line was reduced to a smaller and clearer whole.",
        points: [
          "Fewer loose directions, more focus on the core of AITJE.",
          "Prepared the site and navigation for a clearer product story.",
        ],
      },
      {
        year: "2025",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "Preparing for 2026",
        summary:
          "By the end of 2025, the next product direction was clear.",
        points: [
          "The 2026 roadmap was defined based on practical experience and positioning.",
          "The roles of AITJE Assistant, AITJE Assistant+ and AITJE Coder became sharper.",
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
        title: "AITJE Assistant development completed",
        summary:
          "AITJE Assistant is ready for organizations that want to use local AI in a controlled way.",
        points: [
          "AITJE Assistant is available for organizations that want to use AI locally and manageably.",
          "For heavier use cases, AITJE Assistant+ offers better specs and more intelligence.",
          "For organizations with specific requirements, AITJE Custom supports tailored solutions.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "Clear foundation",
        summary:
          "The focus is on stable use, clear explanation and further optimization.",
        points: [
          "Finalize and optimize AITJE Coder toward a more stable product.",
          "Monitor AITJE Assistant for usage, reliability and practical deployment.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "New directions in development",
        summary:
          "From Q3 onward, we continue building the next expansion of the product line.",
        points: [
          "Prepare AITJE Coder further for technical work with AI.",
          "Keep the existing line compact, so each product has a clear status and role.",
        ],
      },
      {
        year: "2026",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "From test to live",
        summary:
          "The second half of the year is about launching the next product line.",
        points: [
          "AITJE Coder launches in Q4 2026.",
          "The first live phase focuses on controlled use and technical AI workflows.",
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
        title: "Further development",
        summary:
          "We improve what is already in place before the product line grows further.",
        points: [
          "Improve existing products further in substance and usability.",
          "User experience and practical deployment remain leading.",
          "Base new product choices on recurring questions from custom projects.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 2,
        short: "Q2",
        label: "Q2",
        title: "Notulist and Off-Grid",
        summary:
          "Attention shifts to products for recurring real-world questions.",
        points: [
          "Focus on AITJE Notulist for minutes, summaries and knowledge retention.",
          "Focus on AITJE Off-Grid for AI use in situations where internet or power is not a given.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 3,
        short: "Q3",
        label: "Q3",
        title: "Monitoring and landing",
        summary:
          "Q3 is about measuring, learning and understanding what customers need in practice.",
        points: [
          "Gather usage and feedback around AITJE Coder and AITJE Assistant.",
          "Monitor and adjust the development of AITJE Off-Grid and AITJE Notulist.",
        ],
      },
      {
        year: "2027",
        quarterEnd: 4,
        short: "Q4",
        label: "Q4",
        title: "Defining the next phase",
        summary:
          "At the end of 2027, we decide which next product steps add the most value.",
        points: [
          "Set new priorities based on product usage and feedback.",
          "Keep the roadmap tied to real product status and concrete customer demand.",
          "Re-evaluate the tech and hardware stack, because AI developments continue to move quickly.",
        ],
      },
    ],
  },
];
</script>
