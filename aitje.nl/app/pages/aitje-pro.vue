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
              MKB / organisaties
            </p>
            <h1 class="mt-3 text-5xl font-black">AITJE Pro</h1>
            <p class="mt-4 text-lg text-gray-600">
              Een compleet traject voor teams uit het businessplan. We combineren
              installatie, consults, SLA en Academy-toegang zodat je direct kunt
              opschalen.
            </p>
            <dl class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-gray-100 bg-[#fafafa] p-4">
                <dt class="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Investering
                </dt>
                <dd class="mt-2 text-3xl font-black text-gray-900">€ 5.499</dd>
                <p class="text-sm text-gray-600">€ 1.200 p/j SLA + Academy</p>
              </div>
              <div class="rounded-2xl border border-gray-100 bg-[#fafafa] p-4">
                <dt class="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Inclusief
                </dt>
                <dd class="mt-2 text-base font-semibold text-gray-900">
                  Installatie + consult + kennisupdate
                </dd>
              </div>
            </dl>
          </div>
          <img
            src="/images/aitje-product.png"
            alt="AITJE Pro"
            class="w-full rounded-3xl border border-gray-100 object-cover shadow-lg"
          />
        </div>
      </section>

      <section class="rounded-3xl border border-gray-200 bg-white p-8 space-y-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-3xl font-black">Analytics & benchmarks</h2>
            <p class="mt-2 text-sm text-gray-600">
              Gebaseerd op pilots met gemeenten, scholen en bibliotheken.
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
          <h3 class="text-2xl font-semibold text-gray-900">Inhoud van het traject</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in inhoud" :key="item">• {{ item }}</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-900">Onboarding & governance</h3>
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
            <h2 class="text-3xl font-black text-[#212121]">Pro traject starten?</h2>
            <p class="mt-2 text-sm text-[#212121]">
              Vraag een demo aan of vergelijk opnieuw met de andere pakketten.
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
              Plan een demo
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
    title: "Teams tegelijk",
    value: "4 spaces",
    detail: "Chat/audio/API per afdeling",
  },
  {
    title: "Prompt throughput",
    value: "250/uur",
    detail: "Met SLA monitoring",
  },
  {
    title: "Uptime",
    value: "99,1%",
    detail: "Met health checks",
  },
];

const benchmarkBars = [
  { label: "Prompt snelheid", context: "12 simultane sessies", width: "80%" },
  { label: "Embedding batch", context: "150 documenten", width: "75%" },
  { label: "Support response", context: "SLA monitoring", width: "90%" },
];

const inhoud = [
  "On-site installatie (2,5 uur + 50,-)",
  "Eerste consult digitaal (±1 uur gratis)",
  "Eigen kennisupdate (embedding workflow)",
];

const diensten = [
  "Roll-out plan voor 3-5 teams",
  "Coachingscall voor prompt leads",
  "Privacy officer / FG checklist",
];

const hardware = [
  "12-core CPU + 64GB RAM",
  "4TB NVMe + redundante cache",
  "Dual NIC + admin port",
  "Rack of desktop variant",
];

const software = [
  "AITJE OS Pro met multi-workspace",
  "LLM mix (13B generatief + 7B retrieval)",
  "Monitoring dashboard + SLA alerts",
  "Integraties met M365/Google",
];

const benchmarks = [
  {
    scenario: "Collectieve chat",
    result: "220 ms",
    notes: "Vier teams parallel",
  },
  {
    scenario: "Bulk embedding",
    result: "43 min",
    notes: "150 documenten",
  },
  {
    scenario: "Audio notulen",
    result: "Realtime +3%",
    notes: "Automatische actiepunten",
  },
];

const strengths = [
  "Dedicated support en health checks",
  "SLA en Academy verkorten leercurves",
  "Kennisupdates inbegrepen",
];

const limitations = [
  "Vraagt projectleider (privacy + ICT)",
  "Vaste plek en koelruimte nodig",
  "Custom features vallen buiten SLA",
];
</script>
