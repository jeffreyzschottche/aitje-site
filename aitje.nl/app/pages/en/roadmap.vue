<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32">
      <section
        class="mx-auto max-w-5xl rounded-[3rem] bg-[#212121] px-8 py-14 text-white"
      >
        <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Roadmap
            </p>
            <h1 class="mt-4 text-5xl font-black">What AITJE is building</h1>
            <p class="mt-6 max-w-3xl text-lg text-gray-300">
              This roadmap shows where we are now and what parts we are building on within AITJE.
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
          :class="year.year === '2024' ? 'self-start' : ''"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
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

    <BottomCta />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const roadmapByYear = [
  {
    year: "2024",
    summary: "Research and construction year for the technical foundation of AITJE.",
    points: [
      "Deepening AI workflow integrations via n8n",
      "Research into RAG systems and different platforms",
      "APIs tested for reliability, scalability and management",
      "Token costs and energy consumption quickly proved to be a major risk",
      "First Ollama tests set up as a basis for local deployment",
    ],
  },
  {
    year: "2025",
    summary:
      "From research to product versions, customer work and targeted launches.",
    quarters: [
      {
        label: "Q1",
        title: "Model stack and API base",
        points: [
          "vLLM and Ollama tested and configured side by side",
          "First proprietary API routes for internal production-ready workflows",
          "Foundation laid for production-ready workflow automation",
        ],
      },
      {
        label: "Q2",
        title: "First demos and client work",
        points: [
          "First demo version of AITJE Assistant launched",
          "Active work for first customers on implementation and customization",
          "Preparation for agent-driven workflows",
        ],
      },
      {
        label: "Q3",
        title: "Security and data breach focus",
        points: [
          "Increased focus on data leak risks around AI usage with local edge solutions",
          "Further tightened guardrails, access and logging",
          "Ideation started for Board of Directors",
        ],
      },
      {
        label: "Q4",
        title: "Software launches end of year",
        points: [
          "Completion of the WordPress plugins",
          "Notetaker track further developed",
          "Roadmap 2026 finalized based on practical feedback",
        ],
      },
    ],
  },
  {
    year: "2026",
    summary:
      "Product launches and redesign based on rapid market development.",
    quarters: [
      {
        label: "Q1",
        title: "Launch phase",
        points: [
          "AITJE OS launched",
          "Make AITJE Assistant production-ready",
          "Existing infrastructure revised and scaled up",
        ],
      },
      {
        label: "Q2",
        title: "PromptPaleis",
        points: [
          "PromptPaleis launched",
          "Prompt and guide library further expanded",
          "Practical workflows for teams added",
          "Launch AITJE Notetaker application",
        ],
      },
      {
        label: "Q3",
        title: "Local agents and Board of Directors",
        points: [
          "Local agent architectures rolled out further",
          "Board of Directors delivered",
          "New customization tracks added for organizations",
          "Launch AITJE Notetaker Device",
        ],
      },
      {
        label: "Q4",
        title: "Re-inventory infrastructure",
        points: [
          "Development of AITJE Assistant Finch v2 starts",
          "Infrastructure reassessed based on hardware and model development",
          "New solutions evaluated for stability and impact",
          "The roadmap for 2027 is updated based on technical acceleration",
        ],
      },
    ],
  },
  {
    year: "2027",
    summary: "European expansion, community-building and ongoing R&D.",
    quarters: [
      {
        label: "Q1",
        title: "Community and network",
        points: [
          "The first AITJE Community Meeting is scheduled",
          "Customer feedback is translated directly into product iterations",
          "The support and partner network is further expanded",
        ],
      },
      {
        label: "Q2",
        title: "Europe and server locations",
        points: [
          "Expansion into multiple European markets begins",
          "More server locations are added with an emphasis on the Netherlands and Germany",
          "European compliance and management frameworks are tightened",
        ],
      },
      {
        label: "Q3",
        title: "R&D and market validation",
        points: [
          "Start AITJE Manager (upgrade of AITJE Assistant)",
          "Continuous R&D on models, agent behavior and workflows continues",
          "Market developments are actively monitored and validated",
          "Customer segmentation is sharpened for impact and scalability",
        ],
      },
      {
        label: "Q4",
        title: "International positioning",
        points: [
          "The AI Summit in Geneva is planned for positioning and partnerships",
          "The next multi-year roadmap is prepared based on market and customer data",
          "The expansion strategy for 2028 is finalized",
        ],
      },
    ],
  },
];
</script>
