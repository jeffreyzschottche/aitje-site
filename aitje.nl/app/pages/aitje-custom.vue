<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="mx-auto max-w-6xl px-6 pt-32 pb-20 space-y-16">
      <section
        class="rounded-[3rem] border border-gray-200 bg-white px-10 py-12 shadow-sm"
      >
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Strategisch partnerschap
            </p>
            <h1 class="mt-3 text-5xl font-black">AITJE Custom</h1>
            <p class="mt-4 text-lg text-gray-600">
              Voor organisaties die lokale AI als kern van hun beleid zien. We
              ontwerpen hardware, workflows en governance samen, inclusief
              roadmap en dedicated account.
            </p>
            <dl class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-gray-100 bg-[#fafafa] p-4">
                <dt class="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Investering
                </dt>
                <dd class="mt-2 text-3xl font-black text-gray-900">€ 7.500+</dd>
                <p class="text-sm text-gray-600">Afhankelijk van scope</p>
              </div>
              <div class="rounded-2xl border border-gray-100 bg-[#fafafa] p-4">
                <dt class="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Partnership
                </dt>
                <dd class="mt-2 text-base font-semibold text-gray-900">
                  Dedicated account + roadmap sessies
                </dd>
              </div>
            </dl>
          </div>
          <img
            src="/images/aitje-product.png"
            alt="AITJE Custom"
            class="w-full rounded-3xl border border-gray-100 object-cover shadow-lg"
          />
        </div>
      </section>

      <section class="rounded-3xl border border-gray-200 bg-white p-8 space-y-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-3xl font-black">Analytics & roadmap data</h2>
            <p class="mt-2 text-sm text-gray-600">
              Inzichten vanuit strategische trajecten met publieke en private organisaties.
            </p>
          </div>
          <div class="grid gap-4 sm:grid-cols-3">
            <div
              v-for="metric in analytics"
              :key="metric.title"
              class="rounded-2xl border border-gray-100 bg-[#fafafa] p-4"
            >
              <p class="text-xs uppercase tracking-[0.4em] text-gray-400">
                {{ metric.title }}
              </p>
              <p class="mt-2 text-xl font-semibold text-gray-900">
                {{ metric.value }}
              </p>
              <p class="text-sm text-gray-600">{{ metric.detail }}</p>
            </div>
          </div>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <div
            v-for="bar in benchmarkBars"
            :key="bar.label"
            class="rounded-2xl border border-gray-100 p-4"
          >
            <p class="text-sm font-semibold text-gray-900">{{ bar.label }}</p>
            <p class="text-xs text-gray-500">{{ bar.context }}</p>
            <div class="mt-3 h-3 rounded-full bg-gray-100">
              <div
                class="h-full rounded-full bg-[#facc15]"
                :style="{ width: bar.width }"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <article class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-900">Co-creatie traject</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in inhoud" :key="item">• {{ item }}</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-900">Services inbegrepen</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in diensten" :key="item">• {{ item }}</li>
          </ul>
        </article>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <article class="rounded-3xl border border-gray-200 bg-white p-6">
          <h3 class="text-2xl font-semibold text-gray-900">Hardware stack</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="spec in hardware" :key="spec">• {{ spec }}</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-6">
          <h3 class="text-2xl font-semibold text-gray-900">Software stack</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="spec in software" :key="spec">• {{ spec }}</li>
          </ul>
        </article>
      </section>

      <section class="rounded-3xl border border-gray-200 bg-white p-8">
        <h3 class="text-2xl font-semibold text-gray-900">Benchmark cases</h3>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <article
            v-for="row in benchmarks"
            :key="row.scenario"
            class="rounded-2xl border border-gray-100 bg-[#fafafa] p-4"
          >
            <p class="text-sm font-semibold text-gray-900">{{ row.scenario }}</p>
            <p class="text-lg font-bold text-gray-900">{{ row.result }}</p>
            <p class="text-xs text-gray-500">{{ row.notes }}</p>
          </article>
        </div>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <article class="rounded-3xl border border-gray-200 bg-white p-6">
          <h4 class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Sterk in
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in strengths" :key="item">• {{ item }}</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-6">
          <h4 class="text-sm font-semibold uppercase tracking-[0.4em] text-gray-400">
            Let op
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in limitations" :key="item">• {{ item }}</li>
          </ul>
        </article>
      </section>

      <section class="rounded-[3rem] border border-[#facc15] bg-[#facc15] px-10 py-12 shadow-sm">
        <div class="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 class="text-3xl font-black text-[#212121]">
              Plan een custom traject
            </h2>
            <p class="mt-2 text-sm text-[#212121]">
              We starten met een strategische workshop en vertalen die naar
              concrete milestones.
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/shop"
              class="inline-flex items-center justify-center rounded-full border border-[#212121] px-6 py-3 text-sm font-semibold text-[#212121] transition hover:bg-[#212121] hover:text-[#facc15]"
            >
              Terug naar shop
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-[#212121] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Neem contact op
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const analytics = [
  {
    title: "Clusters",
    value: "Tot 3 nodes",
    detail: "Mesh of luchtgap architectuur",
  },
  {
    title: "Governance",
    value: "ISO-ready",
    detail: "Audit-logging en policy templates",
  },
  {
    title: "Roadmap cadence",
    value: "6 weken",
    detail: "Gezamenlijke iteraties",
  },
];

const benchmarkBars = [
  { label: "Roll-out tempo", context: "Van intake tot live", width: "70%" },
  { label: "Governance tooling", context: "Policy + logging", width: "90%" },
  { label: "Kennisupdates", context: "Op aanvraag", width: "80%" },
];

const inhoud = [
  "Strategische kick-off met bestuur/ICT",
  "Architectuurdocument + impactmeting natuur",
  "Dedicated account en embedding team",
];

const diensten = [
  "Kennisupdates (1250,- per sessie)",
  "LLM upgrades met rapportage",
  "Consults en roadmap sessies (100,- p/u)",
];

const hardware = [
  "Dubbele GPU/TPU configuraties",
  "Tot 128GB RAM + hot-swappable storage",
  "Out-of-band beheer",
  "Rack- of flightcase-opstelling",
];

const software = [
  "Multi-tenant AITJE OS met RBAC",
  "Policy engine voor compliance",
  "Observability stack lokaal",
  "API bridge naar data lakes",
];

const benchmarks = [
  {
    scenario: "Nationaal beleid + sector docs",
    result: "2.5 s synthese",
    notes: ">3M tokens kennisbanken",
  },
  {
    scenario: "Realtime transcript + vertaling",
    result: "RT +1%",
    notes: "Meertalige directiecall",
  },
  {
    scenario: "Roadmap sprint",
    result: "6 weken",
    notes: "Van intake tot feature launch",
  },
];

const strengths = [
  "Maatwerk hardware en governance",
  "Eigen roadmap en dedicated account",
  "Schaalt over meerdere locaties",
];

const limitations = [
  "Vereist intern team (tech + beleid)",
  "Langere levertijd door maatwerk",
  "Managementtijd nodig voor sessies",
];
</script>
