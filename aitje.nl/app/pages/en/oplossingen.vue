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
          Solutions
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          AITJE for schools, libraries and municipalities
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          One compact device that brings together your offline AI, knowledge base and client dashboard. From education and libraries to healthcare, entrepreneurs and municipalities, you stay in control of knowledge, costs and privacy - even when the rest of the world shuts down for a moment.
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
              Scenarios
            </p>
            <h2 class="mt-4 text-3xl font-black">
              Where AITJE makes a difference
            </h2>
            <p class="mt-4 text-gray-300">
              We use AITJE every day in situations where dependence on external platforms hurts. Each solution is based on four pillars.
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
                Read more
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
            Approach
          </p>
          <h2 class="mt-3 text-3xl font-black">We build it together</h2>
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
            Nest of scenarios
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Bento maps by sector
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

    <BottomCta />

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
    title: "Local intelligence",
    description:
      "AITJE runs on your own network with an up-to-date Dutch model and knowledge base.",
    icon: ShieldCheck,
  },
  {
    title: "Stories and workflows",
    description:
      "From intake interviews to library questions, we model the real thing in your own language.",
    icon: BookOpen,
  },
  {
    title: "Partnership",
    description:
      "Custom installation, training days, knowledge updates and SLAs - whenever you want.",
    icon: Sparkles,
  },
];

const solutionAreas = [
  {
    title: "Schools and training",
    kicker: "Education",
    description:
      "Educational institutions use AITJE for lesson preparation, test questions and guidance, without sharing student data.",
    points: [
      "Generate lesson plans based on your own curriculum",
      "Audio and voice mode for inclusive lessons",
      "Privacy-proof deployment within the classroom network",
    ],
    icon: GraduationCap,
  },
  {
    title: "Libraries and knowledge centers",
    kicker: "Libraries",
    description:
      "A local assistant who knows catalogs, helps visitors and is on standby during breakdowns.",
    points: [
      "Integrate local archives and collections",
      "Always available, even offline",
      "Reports for subsidy accountability",
    ],
    icon: Library,
  },
  {
    title: "Municipalities & non-profits",
    kicker: "Public sector",
    description:
      "Civil affairs, communications and policy teams keep sensitive files in-house and can still accelerate with AI.",
    points: [
      "API integration with intranet",
      "Access rights per department",
      "Consult and SLA for continuity",
    ],
    icon: Building2,
  },
  {
    title: "SMEs & entrepreneurs",
    kicker: "Companies",
    description:
      "A plan B when international AI platforms become more expensive or unattainable.",
    points: [
      "No recurring API costs",
      "Proprietary customer-specific knowledge",
      "On-demand support",
    ],
    icon: Briefcase,
  },
];

const scenarios = [
  {
    title: "Breaking dependence on one platform",
    kicker: "Dependency",
    description:
      "During power or Internet outages, your team often falls silent. AITJE runs locally and stores calls securely on the device.",
    icon: PlugZap,
  },
  {
    title: "Costs remain under control",
    kicker: "Financial",
    description:
      "AI costs are low now, but will rise once platforms go mainstream. You pay a one-time fee at AITJE and schedule optional services.",
    icon: Wallet,
  },
  {
    title: "Privacy compliant by design",
    kicker: "Privacy",
    description:
      "No data to U.S. or Chinese clouds. You effortlessly comply with AVG and industry regulations.",
    icon: ShieldCheck,
  },
  {
    title: "Small cabinet, big climate gain",
    kicker: "Climate",
    description:
      "Each local demand means fewer server calls and less wasted water and energy in huge data centers.",
    icon: Leaf,
  },
  {
    title: "Real-time help for citizens and students",
    kicker: "Use",
    description:
      "A librarian or teacher starts a chat, uploads documents or records audio. AITJE responds immediately, without dependence on the cloud.",
    icon: Zap,
  },
];

const processSteps = [
  {
    phase: "Step 1",
    title: "Inventory",
    description:
      "We discuss your scenarios and determine what knowledge and access levels are needed.",
  },
  {
    phase: "Step 2",
    title: "Implementation",
    description:
      "Installation of hardware, setup of OS and training of administrators and users.",
  },
  {
    phase: "Step 3",
    title: "Activation & assurance",
    description:
      "Knowledge updates, SLA and evaluations to make AITJE part of daily processes.",
  },
];

const nestCards = [
  {
    kicker: "Education",
    title: "AI per class",
    description: "A separate prompt library for each subject with its own access.",
    background: "#FFF7D6",
    icon: GraduationCap,
  },
  {
    kicker: "Libraries",
    title: "Digital counter",
    description: "Visitors get answers based on local archives.",
    background: "#FFE8EB",
    icon: Library,
  },
  {
    kicker: "Municipalities",
    title: "Plan B in case of breakdowns",
    description: "Civil Affairs continue to run with local AI workflows.",
    background: "#E6F0FF",
    icon: Building2,
  },
  {
    kicker: "Companies",
    title: "Proprietary API lab",
    description: "Teams build prototypes without pay-per-prompt.",
    background: "#E4FFE4",
    icon: Bird,
  },
];
</script>
