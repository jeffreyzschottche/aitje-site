<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="mx-auto max-w-6xl px-6 pt-32 pb-20 space-y-16">
      <section
        class="rounded-[3rem] border border-gray-200 bg-white px-10 py-12 shadow-sm"
      >
        <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Solo & ZZP
            </p>
            <h1 class="mt-3 text-5xl font-black">AITJE</h1>
            <p class="mt-4 text-lg text-gray-600">
              Het basis kastje uit het businessplan. Plug & play hardware, lokale
              LLM en promptlessen voor pioniers die onafhankelijk willen werken.
            </p>
            <dl class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-gray-100 bg-[#fafafa] p-4">
                <dt class="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Investering
                </dt>
                <dd class="mt-2 text-3xl font-black text-gray-900">€ 3.999</dd>
                <p class="text-sm text-gray-600">Geen jaarlijkse kosten</p>
              </div>
              <div class="rounded-2xl border border-gray-100 bg-[#fafafa] p-4">
                <dt class="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Inclusief
                </dt>
                <dd class="mt-2 text-base font-semibold text-gray-900">
                  Handleidingen, community, optionele installatiecall
                </dd>
              </div>
            </dl>
          </div>
          <img
            src="/images/aitje-product.png"
            alt="AITJE Solo"
            class="w-full rounded-3xl border border-gray-100 object-cover shadow-lg"
          />
        </div>
      </section>

      <section class="rounded-3xl border border-gray-200 bg-white p-8">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-3xl font-black text-gray-900">Analytics & benchmarks</h2>
            <p class="mt-2 text-sm text-gray-600">
              Gemeten tijdens interne tests met dezelfde setup als in het businessplan.
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
        <div class="mt-6 grid gap-4 md:grid-cols-3">
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
          <h3 class="text-2xl font-semibold text-gray-900">Inhoud van het pakket</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in inhoud" :key="item">• {{ item }}</li>
          </ul>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-900">Onboarding & diensten</h3>
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
        <h3 class="text-2xl font-semibold text-gray-900">Benchmark details</h3>
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
              Klaar om AITJE te testen?
            </h2>
            <p class="mt-2 text-sm text-[#212121]">
              Boek een demo of ga terug naar de shop voor de andere pakketten.
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
    title: "Latency",
    value: "~120 ms",
    detail: "Response op 1.200 token prompt",
  },
  {
    title: "Energie",
    value: "45 W piek",
    detail: "Gemiddeld 28 W idle",
  },
  {
    title: "Offline uptime",
    value: "3 dagen",
    detail: "Getest zonder internet",
  },
];

const benchmarkBars = [
  {
    label: "Prompt snelheid",
    context: "Chat + contextinjectie",
    width: "85%",
  },
  {
    label: "Audio transcriptie",
    context: "Real-time + 5%",
    width: "75%",
  },
  {
    label: "Kennisopslag",
    context: "2TB NVMe",
    width: "70%",
  },
];

const inhoud = [
  "AITJE kastje + kabels + documentatie",
  "Voorgeconfigureerde chat/audio/API clients",
  "Community toegang en prompt templates",
];

const diensten = [
  "Installatiecall van 45 minuten (optioneel)",
  "Checklist privacy & governance",
  "Academy proefles en roadmap update",
];

const hardware = [
  "8-core ARM + 32GB RAM",
  "2TB NVMe opslag",
  "HDMI, 4×USB, audio I/O",
  "WiFi + Gigabit Ethernet",
];

const software = [
  "AITJE OS met secure boot",
  "NL-LLM 13B voor beleid/educatie",
  "Embedded kennisbank + vector search",
  "Webclient, CLI en lokale API",
];

const benchmarks = [
  {
    scenario: "Prompt analyse",
    result: "0,9 s respons",
    notes: "Met context en governance-check",
  },
  {
    scenario: "Audio → acties",
    result: "Realtime + 5%",
    notes: "Transcript en samenvatting",
  },
  {
    scenario: "Kennisupdate",
    result: "12 min",
    notes: "50 pagina PDF indexeren",
  },
];

const strengths = [
  "Volledig lokaal en stil",
  "Geen afhankelijkheid van externe API’s",
  "Community support en Academy klaar",
];

const limitations = [
  "Beperkt tot 2 gelijktijdige audio sessies",
  "LLM upgrades vragen downtime",
  "Geen multi-tenant beheer (alleen single user)",
];
</script>
