<template>
  <div class="bg-white text-gray-900">
    <SiteNavigation />

    <main>
      <section
        class="relative overflow-hidden rounded-[3rem] bg-[#212121] text-white"
      >
        <div class="bird-flight" aria-hidden="true">
          <div class="bird-container bird-container-one">
            <div class="bird"></div>
          </div>
          <div class="bird-container bird-container-two">
            <div class="bird"></div>
          </div>
          <div class="bird-container bird-container-three">
            <div class="bird"></div>
          </div>
          <div class="bird-container bird-container-four">
            <div class="bird"></div>
          </div>
        </div>
        <div
          class="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-32 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div class="space-y-6">
            <p class="text-5xl font-black leading-tight text-white mt-5">
              AITJE
            </p>
            <p class="text-4xl font-black text-[#facc15]">
              {{ phrases[currentPhrase] }}
            </p>
            <p class="text-lg text-gray-200">
              AITJE ontwikkelt AI-oplossingen voor organisaties die grip willen
              houden op privacy, data en API kosten. <br />
              We bieden hardware en software aan met zowel lokale edge AI, als
              met cloud oplossingen. Altijd Europese of Nederlandse hosting,
              moderne LLM's, ruimte voor je eigen kennisbank, agents, workflows
              en toepassingen.
            </p>
            <p class="text-sm uppercase tracking-[0.4em] text-gray-400">
              · Edge & cloud · Veilige opslag · Europe based ·
            </p>
            <div class="flex flex-col gap-4 sm:flex-row">
              <NuxtLink
                to="/producten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-8 py-3 text-base font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
              >
                Bekijk producten
              </NuxtLink>
              <NuxtLink
                to="/diensten"
                class="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
              >
                Alle diensten
              </NuxtLink>
            </div>
            <div class="grid gap-4 sm:grid-cols-3">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p class="text-sm text-gray-300">{{ stat.label }}</p>
                <p class="text-xl font-semibold text-white">{{ stat.value }}</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="rounded-[2.5rem] p-8 backdrop-blur">
              <img
                src="/images/aitje-product.png"
                alt="AITJE systeem"
                class="w-full rounded-3xl border border-white/10 bg-white/80 object-cover"
              />
              <div
                class="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p class="text-xs uppercase tracking-[0.4em] text-[#facc15]">
                  Verdwaald in het jargon?
                </p>
                <p class="mt-2 text-lg font-semibold">
                  Voor uitleg van termen bekijk ons kennis centrum.
                </p>
                <NuxtLink
                  to="/kenniscentrum"
                  class="mt-3 inline-flex text-sm font-semibold text-[#facc15] transition hover:text-white"
                >
                  Naar het kenniscentrum
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-10 pb-16">
        <div class="relative w-full overflow-hidden">
          <div
            class="flex transition-transform duration-700 ease-out"
            :style="{ transform: `translateX(-${currentPillar * 100}%)` }"
          >
            <article
              v-for="pillar in promisePillars"
              :key="pillar.title"
              class="relative min-h-[24rem] w-full shrink-0 bg-white bg-center bg-no-repeat md:min-h-[28rem]"
              :style="{
                backgroundImage: `url('${pillar.image}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center 64%',
              }"
            >
              <div class="relative mx-auto h-full max-w-6xl px-6 py-8 md:py-10">
                <div class="max-w-xl md:absolute md:left-8 md:top-10">
                  <div class="flex items-center gap-3">
                    <div
                      class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
                    >
                      <component :is="pillar.icon" class="h-6 w-6" />
                    </div>
                    <div>
                      <p
                        class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500"
                      >
                        {{ pillar.highlight }}
                      </p>
                      <h3
                        class="text-2xl font-semibold text-gray-900 md:text-3xl"
                      >
                        {{ pillar.title }}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-4 max-w-xl md:absolute md:right-8 md:top-10 md:mt-0 md:ml-auto"
                >
                  <p
                    class="text-left text-base italic text-gray-800 md:text-right md:text-lg"
                  >
                    {{ pillar.description }}
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div
            class="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"
          >
            <button
              v-for="(_, idx) in promisePillars"
              :key="`pillar-dot-${idx}`"
              type="button"
              :aria-label="`Ga naar slide ${idx + 1}`"
              class="h-2.5 w-2.5 rounded-full transition-all"
              :class="
                idx === currentPillar
                  ? 'w-8 bg-[#facc15]'
                  : 'bg-black/30 hover:bg-black/50'
              "
              @click="currentPillar = idx"
            ></button>
          </div>
        </div>
      </section>

      <section class="bg-[#fafafa] px-6 py-20">
        <div class="mx-auto max-w-6xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
          >
            Waarom AITJE
          </p>
          <h2 class="mt-4 text-4xl font-black text-gray-900">
            Redenen om voor Lokale Edge AI te kiezen
          </h2>
        </div>
        <div class="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
          <article
            v-for="reason in reasons"
            :key="reason.title"
            class="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="reason.icon" class="h-6 w-6" />
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  {{ reason.theme }}
                </p>
                <h3 class="text-2xl font-semibold text-gray-900">
                  {{ reason.title }}
                </h3>
              </div>
            </div>
            <div class="mt-4 flex flex-1 flex-col gap-3">
              <div
                class="flex flex-1 flex-col rounded-2xl bg-[#fafafa] p-4 text-sm text-gray-600"
              >
                <p class="font-semibold text-gray-900">Nu:</p>
                <p>{{ reason.problem }}</p>
              </div>
              <div
                class="flex flex-1 flex-col rounded-2xl bg-[#facc15] p-4 text-sm text-[#212121]"
              >
                <p class="font-semibold">Met AITJE:</p>
                <p>{{ reason.solution }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="bg-[#fafafa] px-6 py-20">
        <div
          class="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-gray-200 bg-white p-10 shadow-sm md:p-14"
        >
          <svg
            class="pointer-events-none absolute right-12 top-10 h-24 w-24 text-[#facc15]/18"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="24" fill="currentColor" />
            <path
              d="M60 12v18M60 90v18M108 60H90M30 60H12M93 27 81 39M39 81 27 93M93 93 81 81M39 39 27 27"
              stroke="currentColor"
              stroke-width="6"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="pointer-events-none absolute bottom-8 left-8 h-24 w-24 text-[#212121]/8"
            viewBox="0 0 100 120"
            fill="none"
            aria-hidden="true"
          >
            <ellipse cx="50" cy="60" rx="28" ry="38" fill="currentColor" />
            <path
              d="M37 63c4-7 12-10 19-6 7 4 10 11 8 19"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="pointer-events-none absolute left-1/2 top-10 h-20 w-32 -translate-x-1/2 text-[#212121]/6"
            viewBox="0 0 160 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M38 58h62c13 0 24-9 24-21s-10-21-22-21c-4-11-15-18-28-18-17 0-31 12-33 28h-3C24 26 14 35 14 47s11 11 24 11Z"
              fill="currentColor"
            />
          </svg>
          <svg
            class="pointer-events-none absolute bottom-16 right-20 hidden h-16 w-28 text-[#facc15]/10 md:block"
            viewBox="0 0 160 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M38 58h62c13 0 24-9 24-21s-10-21-22-21c-4-11-15-18-28-18-17 0-31 12-33 28h-3C24 26 14 35 14 47s11 11 24 11Z"
              fill="currentColor"
            />
          </svg>
          <svg
            class="pointer-events-none absolute left-20 top-24 h-14 w-24 text-[#facc15]/10"
            viewBox="0 0 160 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M38 58h62c13 0 24-9 24-21s-10-21-22-21c-4-11-15-18-28-18-17 0-31 12-33 28h-3C24 26 14 35 14 47s11 11 24 11Z"
              fill="currentColor"
            />
          </svg>
          <svg
            class="pointer-events-none absolute bottom-24 right-1/3 h-12 w-20 text-[#212121]/6"
            viewBox="0 0 160 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M38 58h62c13 0 24-9 24-21s-10-21-22-21c-4-11-15-18-28-18-17 0-31 12-33 28h-3C24 26 14 35 14 47s11 11 24 11Z"
              fill="currentColor"
            />
          </svg>
          <svg
            class="pointer-events-none absolute right-32 top-32 hidden h-12 w-20 text-[#212121]/5 md:block"
            viewBox="0 0 160 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M38 58h62c13 0 24-9 24-21s-10-21-22-21c-4-11-15-18-28-18-17 0-31 12-33 28h-3C24 26 14 35 14 47s11 11 24 11Z"
              fill="currentColor"
            />
          </svg>
          <div class="relative z-10">
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Onze missie
            </p>
            <div class="mt-6 max-w-5xl">
              <p class="text-6xl font-black leading-none text-[#facc15]">"</p>
              <blockquote
                class="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-4xl"
              >
                AI is niet meer weg te denken. Hoe meer mensen en bedrijven het
                gebruiken, hoe afhankelijker we worden van Big Tech uit het
                buitenland.
              </blockquote>
              <div
                class="mt-8 space-y-4 text-base leading-7 text-gray-600 md:text-lg"
              >
                <p>
                  Met AITJE blijft AI ook werken wanneer internet of externe
                  platformen uitvallen. Op het device blijft informatie lokaal
                  beschikbaar via je eigen omgeving.
                </p>
                <p>
                  Terwijl prijzen van externe aanbieders kunnen stijgen, bouwen
                  wij onze oplossingen zo dat kosten beheersbaar blijven en je
                  minder afhankelijk bent van terugkerende platformkosten.
                </p>
                <p>
                  Lokaal werken is daarnaast beter voor het milieu: minder
                  eindeloze calls naar datacenters en efficienter gebruik van
                  hardware. Gegevens blijven daarbij dichter bij de organisatie,
                  in Europa en waar nodig volledig lokaal.
                </p>
              </div>
            </div>
            <div class="mt-10">
              <NuxtLink
                to="/visie"
                class="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black hover:text-[#facc15]"
              >
                Lees meer over onze visie
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#212121] px-6 py-20 text-white">
        <div class="mx-auto max-w-6xl space-y-14">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Showcase
            </p>
            <h2 class="mt-4 text-4xl font-black">
              Producten, software en toepassingen
            </h2>
            <p class="mt-3 max-w-3xl text-gray-300">
              Een overzicht van devices, software en oplossingen waar AITJE
              trots op is, van bestaande toepassingen tot de basis voor
              maatwerk.
            </p>
          </div>

          <div
            class="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div
              class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
                >
                  1. AITJE Assistent
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  Lokale AI devices in meerdere vormen
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  Beschikbaar in verschillende tiers en uitvoeringen, van
                  compacte setups tot persoonlijk gebouwde devices op ons eigen
                  OS.
                </p>
              </div>
              <NuxtLink
                to="/producten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Meer info
              </NuxtLink>
            </div>
            <div class="mt-8 grid gap-5 md:grid-cols-3">
              <article
                v-for="variant in assistantVariants"
                :key="variant.title"
                class="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30"
              >
                <div
                  class="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#111] p-5"
                >
                  <img
                    src="/images/aitje-product.png"
                    :alt="variant.title"
                    class="h-full w-full rounded-2xl border border-white/10 bg-white/90 object-cover"
                  />
                </div>
                <div class="p-5">
                  <h4 class="text-lg font-semibold text-white">
                    {{ variant.title }}
                  </h4>
                  <p class="mt-2 text-sm text-gray-300">
                    {{ variant.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div
            class="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div
              class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
                >
                  2. AITJE Notulist
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  Van gesprek naar bruikbare output
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  Neem op, structureer informatie en lever output af als
                  samenvatting, transcriptie of formulier, passend bij je
                  proces.
                </p>
              </div>
              <NuxtLink
                to="/producten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Meer info
              </NuxtLink>
            </div>
            <div class="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div
                class="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 p-5"
              >
                <img
                  src="/images/aitje-product.png"
                  alt="AITJE Notulist"
                  class="h-full w-full rounded-2xl border border-white/10 bg-white/90 object-cover"
                />
              </div>
              <div
                class="rounded-[1.75rem] border border-white/10 bg-[#161616] p-5"
              >
                <div
                  class="rounded-[1.25rem] border border-white/10 bg-[#f7f1e3] p-4 text-black"
                >
                  <div class="flex items-center gap-2">
                    <span class="h-3 w-3 rounded-full bg-[#ff6b6b]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#ffd166]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#06d6a0]"></span>
                    <span
                      class="ml-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"
                    >
                      Meeting Flow
                    </span>
                  </div>
                  <div class="mt-5 space-y-4">
                    <div class="rounded-2xl bg-white p-4 shadow-sm">
                      <p
                        class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                      >
                        Input
                      </p>
                      <p class="mt-2 text-sm text-gray-700">
                        Gesprek, intake of overleg automatisch omzetten naar
                        gestructureerde data.
                      </p>
                    </div>
                    <div class="grid gap-3 md:grid-cols-3">
                      <div class="rounded-2xl bg-white p-4 shadow-sm">
                        <p
                          class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                        >
                          Samenvatting
                        </p>
                      </div>
                      <div class="rounded-2xl bg-white p-4 shadow-sm">
                        <p
                          class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                        >
                          Transcriptie
                        </p>
                      </div>
                      <div class="rounded-2xl bg-white p-4 shadow-sm">
                        <p
                          class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                        >
                          Formulier
                        </p>
                      </div>
                    </div>
                    <div
                      class="rounded-2xl bg-[#212121] p-4 text-sm text-white"
                    >
                      Aflevering via mail, dashboard of interne workflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div
              class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
                >
                  3. Software
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  Bestaande oplossingen en integraties
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  Een groeiende set software, koppelingen en workflows voor
                  verschillende stacks en use cases.
                </p>
              </div>
              <NuxtLink
                to="/producten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Meer info
              </NuxtLink>
            </div>
            <div class="mt-8 flex gap-5 overflow-x-auto pb-2">
              <article
                v-for="item in softwareSlides"
                :key="item.title"
                class="min-w-[280px] flex-1 rounded-[1.75rem] border border-white/10 bg-[#161616] p-4"
              >
                <div
                  class="rounded-[1.25rem] border border-white/10 bg-white text-black"
                >
                  <div
                    class="flex items-center gap-2 border-b border-gray-100 px-4 py-3"
                  >
                    <span class="h-3 w-3 rounded-full bg-[#ff6b6b]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#ffd166]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#06d6a0]"></span>
                    <span
                      class="ml-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"
                    >
                      {{ item.stack }}
                    </span>
                  </div>
                  <div class="p-4">
                    <h4 class="text-lg font-semibold">{{ item.title }}</h4>
                    <p class="mt-2 text-sm text-gray-600">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div
            class="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div
              class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
                >
                  4. Cases
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  Voorbeelden van toepassingen
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  Voorlopige voorbeelden van hoe AITJE ingezet kan worden in
                  teams, processen en platformen.
                </p>
              </div>
              <NuxtLink
                to="/diensten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Bekijk diensten
              </NuxtLink>
            </div>
            <div class="mt-8 flex gap-5 overflow-x-auto pb-2">
              <article
                v-for="item in caseSlides"
                :key="item.title"
                class="min-w-[320px] flex-1 rounded-[1.75rem] border border-white/10 bg-[#161616] p-4"
              >
                <div
                  class="rounded-[1.25rem] border border-white/10 bg-[#f7f1e3] p-5 text-black"
                >
                  <div class="flex items-center gap-2">
                    <span class="h-3 w-3 rounded-full bg-[#ff6b6b]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#ffd166]"></span>
                    <span class="h-3 w-3 rounded-full bg-[#06d6a0]"></span>
                  </div>
                  <p
                    class="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"
                  >
                    {{ item.category }}
                  </p>
                  <h4 class="mt-2 text-lg font-semibold">{{ item.title }}</h4>
                  <p class="mt-2 text-sm text-gray-700">
                    {{ item.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-20">
        <div
          class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div
            class="space-y-6 rounded-3xl border border-gray-200 bg-[#fafafa] p-10"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              De infrastructuur van AITJE
            </p>
            <h2 class="text-4xl font-black text-gray-900">
              Van out of the box tot maatwerkoplossingen
            </h2>
            <p class="text-gray-700">
              Als bedrijf bieden we lokale hardware voor edge AI, software die
              daarop aansluit en oplossingen die kunnen verbinden met externe
              platformen, zoals kennisbanken en documentverwerking. Daarnaast
              denken we mee over de beste inzet van AI binnen je organisatie:
              soms met een van onze bestaande producten, soms met een
              maatwerkoplossing die we samen ontwikkelen.
            </p>
            <ul class="space-y-4">
              <li
                v-for="item in productHighlights"
                :key="item"
                class="flex items-start gap-3 text-gray-700"
              >
                <div
                  class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#212121] text-xs font-bold text-[#facc15]"
                >
                  ✓
                </div>
                <span class="pt-0.5">{{ item }}</span>
              </li>
            </ul>
            <div class="flex flex-col gap-3 sm:flex-row">
              <NuxtLink
                to="/roadmap"
                class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#212121] hover:text-[#facc15]"
              >
                Bekijk de roadmap
              </NuxtLink>
            </div>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <article
              v-for="feature in features"
              :key="feature.title"
              class="flex h-full flex-col rounded-3xl border border-gray-200 p-6 shadow-md"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="feature.icon" class="h-6 w-6" />
              </div>
              <h3 class="mt-4 text-xl font-semibold text-gray-900">
                {{ feature.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">
                {{ feature.description }}
              </p>
              <div class="mt-auto pt-6">
                <NuxtLink
                  :to="feature.link"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
                >
                  {{ feature.cta }}
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="px-6 py-20">
        <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="space-y-6">
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Handige links
            </p>
            <h2 class="text-4xl font-black text-gray-900">
              Snel naar de juiste pagina
            </h2>
            <p class="text-lg text-gray-700">
              Bekijk onze belangrijkste pagina's voor producten, diensten,
              toepassingen, kennis en contact.
            </p>
            <div
              class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 shadow-sm"
            >
              <ul class="space-y-4">
                <li v-for="link in handyLinks" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="text-lg font-semibold text-[#d4a700] transition hover:text-black"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 shadow-sm"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              FAQ
            </p>
            <h3 class="mt-3 text-3xl font-black text-gray-900">
              Veelgestelde vragen
            </h3>
            <p class="mt-3 text-sm text-gray-600">
              Korte antwoorden op vragen over privacy, back-ups, maatwerk en hoe
              AITJE in de praktijk werkt.
            </p>
            <div class="mt-6 space-y-4">
              <div
                v-for="item in homepageFaqs"
                :key="item.question"
                class="rounded-2xl bg-white p-4"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
                >
                  Vraag
                </p>
                <h4 class="text-lg font-semibold text-gray-900">
                  {{ item.question }}
                </h4>
                <p class="text-sm text-gray-600">{{ item.answer }}</p>
              </div>
            </div>
            <div class="mt-6">
              <NuxtLink
                to="/faq"
                class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
              >
                Bekijk alle veelgestelde vragen
              </NuxtLink>
            </div>
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
import {
  AppWindow,
  BookOpen,
  CodeXml,
  Cpu,
  Droplet,
  Globe,
  Handshake,
  Lock,
  Mic,
  Server,
  Shield,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-vue-next";

const phrases = ["Je partner in AI & Edge AI"];
const heroStats = [
  { label: "Werkt zonder internet", value: "100% afhankelijk" },
  { label: "Goed voor het milieu", value: "Geen cloud calls" },
  { label: "AITJE denkt met je mee", value: "Soevereiniteit in AI" },
];

const promisePillars = [
  {
    title: "AITJE, jouw partner in AI",
    highlight: "Strategie",
    description:
      "We ontwikkelen AI-oplossingen in hardware en software, denken mee over implementatie en bouwen ook door voor specifieke behoeften binnen jouw organisatie.",
    icon: Handshake,
    image: "/images/golden-egg.png",
    imageAlt: "Gouden ei",
  },
  {
    title: "Eigen softwarestack",
    highlight: "Software",
    description:
      "We hebben een eigen Operating System, app, agents en out-of-the-box workflows, zodat je direct kunt werken met oplossingen die op elkaar zijn afgestemd.",
    icon: CodeXml,
    image: "/images/egg-loading-screen.png",
    imageAlt: "Ei bij beeldscherm",
  },
  {
    title: "Onafhankelijk van internet",
    highlight: "Hardware",
    description:
      "Onze hardware is ontwikkeld met focus op puur lokale edge AI, zodat je minder afhankelijk bent van API's, Big Tech en oplopende tokenkosten.",
    icon: Wrench,
    image: "/images/ei-internet.png",
    imageAlt: "Ei met internetthema",
  },
];

const reasons = [
  {
    title: "Afhankelijkheid",
    theme: "Bedrijfscontinuiteit",
    problem:
      "Wanneer je een internetstoring ervaart of een extern AI-platform niet beschikbaar is, verlies je direct tijd en continuiteit.",
    solution:
      "AITJE-hardware blijft lokaal werken en is via je eigen netwerk toegankelijk, zodat teams onafhankelijk kunnen doorwerken.",
    icon: Server,
  },
  {
    title: "Financieel",
    theme: "Voorspelbare kosten",
    problem:
      "Gebruikskosten van externe AI-platformen lopen op, terwijl je weinig grip hebt op abonnementen, prijswijzigingen en de keuzes van buitenlandse aanbieders.",
    solution:
      "Met AITJE verlaag je structureel de afhankelijkheid van terugkerende AI-kosten en bepaal je zelf wanneer extra diensten, upgrades of cloudcapaciteit nodig zijn.",
    icon: Sparkles,
  },
  {
    title: "Privacy",
    theme: "Controle op data",
    problem:
      "Gevoelige informatie delen met andere landen of externe partijen brengt extra risico's mee, zeker in tijden van politieke spanningen, hacks en strengere privacy-eisen.",
    solution:
      "Met AITJE houd je bedrijfsinformatie, persoonsgegevens en andere gevoelige data in eigen beheer, lokaal of binnen Europa, passend bij AVG-vereisten.",
    icon: Shield,
  },
  {
    title: "Klimaat",
    theme: "Bewuster gebruik",
    problem:
      "Grote aantallen cloudverzoeken vragen veel rekenkracht, energie en koeling in externe infrastructuur.",
    solution:
      "Door lokaal op het device te werken verminder je onnodig verkeer naar externe datacenters, en voor cloud oplossingen gebruiken we groene hosting.",
    icon: Droplet,
  },
];

const productHighlights = [
  "Advies over waar AI binnen jouw organisatie het meeste effect heeft",
  "Hardware voor lokale edge AI en eigen infrastructuur",
  "Focus op werking zonder internet, data in Europa / Nederland",
  "Agents, maatwerk applicaties en praktische workflows",
];

const features = [
  {
    title: "AITJE Assistent",
    description:
      "Meerdere devices voor verschillende behoeftes, van vaste tiers tot persoonlijk gebouwde oplossingen, allemaal op ons eigen OS met lokale AI en API.",
    icon: Server,
    link: "/aitje-pro",
    cta: "Bekijk product",
  },
  {
    title: "AITJE Notulist",
    description:
      "Neem gesprekken op en bepaal zelf welke informatie je wilt ontvangen: als samenvatting, transcriptie of ingevuld formulier, in het format en via het kanaal dat past.",
    icon: Mic,
    link: "/producten",
    cta: "Bekijk product",
  },
  {
    title: "AITJE Solutions",
    description:
      "Oplossingen op maat, zoals agents, workflows, voice assistants en waar nodig eigen hardware voor jouw toepassing.",
    icon: Cpu,
    link: "/diensten",
    cta: "Bekijk diensten",
  },
  {
    title: "Software marketplace",
    description:
      "Bestaande solutions en integraties voor CMS-systemen en andere veelgebruikte digitale omgevingen.",
    icon: AppWindow,
    link: "/producten",
    cta: "Bekijk product",
  },
];

const assistantVariants = [
  {
    title: "Compact tier",
    description:
      "Voor individuele werkplekken of kleine teams die lokaal willen starten.",
  },
  {
    title: "Team setup",
    description:
      "Voor organisaties die meerdere gebruikers op hetzelfde netwerk willen laten werken.",
  },
  {
    title: "Custom build",
    description:
      "Persoonlijk gebouwde variant voor specifieke performance- of integratiebehoeftes.",
  },
];

const softwareSlides = [
  {
    stack: "WordPress",
    title: "Content Assistant",
    description:
      "Dummy oplossing voor redactie, samenvattingen en interne kennis in WordPress-omgevingen.",
  },
  {
    stack: ".NET",
    title: "Internal Agent",
    description:
      "Dummy workflow voor interne tooling, documentvragen en procesondersteuning binnen .NET stacks.",
  },
  {
    stack: "API",
    title: "Support Flow",
    description:
      "Dummy koppeling voor support, classificatie en automatische opvolging in bestaande systemen.",
  },
  {
    stack: "Intranet",
    title: "Knowledge Search",
    description:
      "Dummy interface voor zoeken, samenvatten en ontsluiten van interne documentatie.",
  },
];

const caseSlides = [
  {
    category: "Onderwijs",
    title: "Interne kennisassistent",
    description:
      "Dummy case voor teams die lesmateriaal, richtlijnen en interne kennis lokaal beschikbaar willen maken.",
  },
  {
    category: "Zorg",
    title: "Notulen & intakeverwerking",
    description:
      "Dummy case voor gesprekken, intakeformulieren en gestructureerde opvolging van informatie.",
  },
  {
    category: "MKB",
    title: "Workflow automatisering",
    description:
      "Dummy case voor terugkerende taken, agents en koppelingen met bestaande processen.",
  },
];

const handyLinks = [
  {
    label: "Producten",
    to: "/producten",
  },
  {
    label: "Diensten",
    to: "/diensten",
  },
  {
    label: "Oplossingen",
    to: "/oplossingen",
  },
  {
    label: "Kenniscentrum",
    to: "/kenniscentrum",
  },
  {
    label: "FAQ",
    to: "/faq",
  },
  {
    label: "Roadmap",
    to: "/roadmap",
  },
  {
    label: "Visie",
    to: "/visie",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const homepageFaqs = [
  {
    question: "Deelt AITJE mijn info?",
    answer:
      "Nee. AITJE is gebouwd om data lokaal en in eigen beheer te houden.",
  },
  {
    question: "Maakt AITJE back-ups?",
    answer:
      "Op aanvraag kunnen we dit voor je inrichten, bijvoorbeeld voor een kennisbank-back-up.",
  },
  {
    question: "Maken jullie ook maatwerkoplossingen?",
    answer:
      "Ja. We begeleiden je waar mogelijk in zowel hardware als software en bouwen ook maatwerk waar dat nodig is.",
  },
  {
    question: "Kan AITJE zonder internet werken?",
    answer:
      "Ja. Lokale edge-opstellingen kunnen ook blijven werken als internet of externe platformen wegvallen.",
  },
  {
    question: "Welke taal modellen ondersteunen jullie?",
    answer:
      "Voor jouw specifieke behoefte kunnen we altijd een ander taalmodel kiezen en gebruiken.",
  },
];

const currentPhrase = ref(0);
const currentPillar = ref(0);
let pillarTimer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  pillarTimer = setInterval(() => {
    currentPillar.value = (currentPillar.value + 1) % promisePillars.length;
  }, 5000);
});

onBeforeUnmount(() => {
  if (pillarTimer) clearInterval(pillarTimer);
});
</script>

<style scoped>
.bird-flight {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0;
}

.bird-container {
  position: absolute;
  left: 0;
  top: 30%;
  transform: scale(0.35) translateX(-16vw);
  will-change: transform;
}

.bird-container-one {
  animation: fly-right-one 11s linear infinite;
  animation-delay: 0s;
}

.bird-container-two {
  animation: fly-right-two 12s linear infinite;
  animation-delay: 2s;
}

.bird-container-three {
  animation: fly-right-three 10.5s linear infinite;
  animation-delay: 4.5s;
}

.bird-container-four {
  animation: fly-right-four 11.5s linear infinite;
  animation-delay: 6.5s;
}

.bird {
  width: 88px;
  height: 125px;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg");
  background-size: auto 100%;
  background-position: 0 0;
  animation: flap 0.95s steps(10) infinite;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

@media (min-width: 1024px) {
  .bird-flight {
    display: block;
  }
}

@keyframes flap {
  100% {
    background-position: -880px 0;
  }
}

@keyframes fly-right-one {
  0% {
    transform: scale(0.35) translateX(-16vw) translateY(6vh);
  }
  20% {
    transform: scale(0.4) translateX(20vw) translateY(1vh);
  }
  45% {
    transform: scale(0.42) translateX(45vw) translateY(-4vh);
  }
  70% {
    transform: scale(0.38) translateX(75vw) translateY(3vh);
  }
  100% {
    transform: scale(0.35) translateX(116vw) translateY(8vh);
  }
}

@keyframes fly-right-two {
  0% {
    transform: scale(0.3) translateX(-18vw) translateY(-5vh);
  }
  30% {
    transform: scale(0.35) translateX(28vw) translateY(-10vh);
  }
  55% {
    transform: scale(0.4) translateX(58vw) translateY(-6vh);
  }
  80% {
    transform: scale(0.34) translateX(90vw) translateY(-12vh);
  }
  100% {
    transform: scale(0.3) translateX(118vw) translateY(-7vh);
  }
}

@keyframes fly-right-three {
  0% {
    transform: scale(0.28) translateX(-20vw) translateY(12vh);
  }
  35% {
    transform: scale(0.32) translateX(35vw) translateY(5vh);
  }
  70% {
    transform: scale(0.3) translateX(78vw) translateY(10vh);
  }
  100% {
    transform: scale(0.26) translateX(118vw) translateY(14vh);
  }
}

@keyframes fly-right-four {
  0% {
    transform: scale(0.24) translateX(-22vw) translateY(-14vh);
  }
  30% {
    transform: scale(0.29) translateX(30vw) translateY(-18vh);
  }
  65% {
    transform: scale(0.27) translateX(70vw) translateY(-12vh);
  }
  100% {
    transform: scale(0.24) translateX(118vw) translateY(-16vh);
  }
}

@media (max-width: 768px) {
  .bird {
    width: 66px;
    height: 94px;
    animation-duration: 1.1s;
    opacity: 0.75;
  }

  .bird-container-one {
    animation-duration: 9.5s;
  }

  .bird-container-two {
    animation-duration: 10.5s;
  }

  .bird-container-three {
    animation-duration: 9s;
  }

  .bird-container-four {
    animation-duration: 10s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bird,
  .bird-container {
    animation: none !important;
  }
}
</style>
