<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32">
      <section
        class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white"
      >
        <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Roadmap
            </p>
            <h1 class="mt-4 text-5xl font-black">What AITJE is building</h1>
            <p class="mt-6 max-w-3xl text-lg text-gray-300">
              This roadmap only shows real product status: what already exists, what is in development and what is planned. No broad innovation claims, just concrete direction.
            </p>
          </div>
          <img
            src="/images/chicken-build-road.png"
            alt="Roadmap illustration"
            class="mx-auto w-full max-w-sm rounded-3xl object-cover"
          />
        </div>
      </section>

      <section
        class="mx-auto mt-14 grid w-full max-w-none gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        <article
          v-for="year in roadmapByYear"
          :key="year.year"
          class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Year
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
              <span class="mt-1 inline-block h-1.5 w-1.5 flex-none shrink-0 rounded-full bg-[#facc15]"></span>
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
                  <span class="mt-1 inline-block h-1.5 w-1.5 flex-none shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const roadmapByYear = [
  {
    year: "2025",
    summary: "From first demos and practical feedback to a clearer product direction.",
    points: [
      "First AITJE Assistent demos tested in practice",
      "Direction sharpened around local Edge AI for organizations",
      "Practical feedback used to refine product and positioning",
    ],
  },
  {
    year: "2026",
    summary: "The year in which the product line becomes more concrete and new directions become visible.",
    quarters: [
      {
        label: "Q1",
        title: "AITJE Assistent is in place",
        points: [
          "AITJE Assistent exists as the core product",
          "AITJE Assistent+ is available as a faster variant with better specs",
          "The product structure is reduced to one clearer main route",
        ],
      },
      {
        label: "Q2",
        title: "Sharper foundation",
        points: [
          "PromptPaleis exists as a side project on promptpaleis.nl",
          "Focus stays on a smaller, more credible product line",
          "Preparation for the next product phases continues",
        ],
      },
      {
        label: "Q3",
        title: "In development",
        points: [
          "AITJE Notulist is aimed at Q3 2026",
          "AITJE Prepper enters the test phase",
          "Interest is gathered around the new product directions",
        ],
      },
      {
        label: "Q4",
        title: "From test to live",
        points: [
          "AITJE Prepper is planned to go live in Q4 2026",
          "AITJE Notulist is refined further based on practical use and product goals",
          "The 2027 product line becomes more concrete",
        ],
      },
    ],
  },
  {
    year: "2027",
    summary: "From separate products to a broader local Edge AI line with management and coordination.",
    quarters: [
      {
        label: "Q1",
        title: "Further development",
        points: [
          "Existing products continue to be refined",
          "Usability and practical deployment remain central",
        ],
      },
      {
        label: "Q2",
        title: "AITJE Manager",
        points: [
          "AITJE Manager is planned for Q2 2027",
          "The focus is on installing and managing agents more easily",
          "Local coordination between assistants and agents becomes more central",
        ],
      },
      {
        label: "Q3",
        title: "Expansion",
        points: [
          "Further building on local agentic workflows",
          "Practical management scenarios for organizations are developed further",
        ],
      },
      {
        label: "Q4",
        title: "Defining the next phase",
        points: [
          "New priorities are set based on product use and practical feedback",
          "The roadmap stays product-focused and concrete",
        ],
      },
    ],
  },
];
</script>
