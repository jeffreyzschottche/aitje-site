<template>
  <div class="bg-white text-gray-900">
    <SiteNavigation />

    <main>
      <section class="pt-2">
        <div
          class="relative w-full overflow-hidden bg-[#212121] text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)]"
        >
          <div
            class="hero-network pointer-events-none absolute inset-0 z-[1] opacity-60"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1440 900"
              class="h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
            >
              <defs>
                <filter
                  id="hero-network-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g class="hero-network-lines">
                <path
                  d="M40 240L180 170L320 245L465 165L615 230L770 175L930 240L1085 170L1240 235L1390 160"
                />
                <path
                  d="M10 470L150 395L280 470L430 390L595 450L740 375L900 445L1050 385L1205 455L1380 390"
                />
                <path
                  d="M85 690L235 610L385 675L535 600L690 665L860 590L1015 650L1170 590L1330 660"
                />
                <path d="M180 170L150 395L235 610" />
                <path d="M320 245L280 470L385 675" />
                <path d="M465 165L430 390L535 600" />
                <path d="M615 230L595 450L690 665" />
                <path d="M770 175L740 375L860 590" />
                <path d="M930 240L900 445L1015 650" />
                <path d="M1085 170L1050 385L1170 590" />
                <path d="M1240 235L1205 455L1330 660" />
                <path d="M320 245L430 390L595 450L740 375L900 445L1050 385" />
                <path d="M180 170L320 245L430 390L535 600" />
                <path d="M615 230L740 375L860 590L1015 650" />
              </g>

              <g class="hero-network-points">
                <circle cx="40" cy="240" r="4" style="animation-delay: -1.2s" />
                <circle
                  cx="180"
                  cy="170"
                  r="5"
                  style="animation-delay: -2.8s"
                />
                <circle
                  cx="320"
                  cy="245"
                  r="4"
                  style="animation-delay: -0.8s"
                />
                <circle
                  cx="465"
                  cy="165"
                  r="4"
                  style="animation-delay: -3.6s"
                />
                <circle
                  cx="615"
                  cy="230"
                  r="5"
                  style="animation-delay: -1.9s"
                />
                <circle
                  cx="770"
                  cy="175"
                  r="4"
                  style="animation-delay: -4.2s"
                />
                <circle
                  cx="930"
                  cy="240"
                  r="5"
                  style="animation-delay: -2.1s"
                />
                <circle
                  cx="1085"
                  cy="170"
                  r="4"
                  style="animation-delay: -5.1s"
                />
                <circle
                  cx="1240"
                  cy="235"
                  r="5"
                  style="animation-delay: -2.7s"
                />
                <circle
                  cx="1390"
                  cy="160"
                  r="4"
                  style="animation-delay: -0.5s"
                />
                <circle cx="10" cy="470" r="4" style="animation-delay: -4.6s" />
                <circle
                  cx="150"
                  cy="395"
                  r="5"
                  style="animation-delay: -1.1s"
                />
                <circle
                  cx="280"
                  cy="470"
                  r="4"
                  style="animation-delay: -3.9s"
                />
                <circle
                  cx="430"
                  cy="390"
                  r="5"
                  style="animation-delay: -2.4s"
                />
                <circle
                  cx="595"
                  cy="450"
                  r="4"
                  style="animation-delay: -5.5s"
                />
                <circle
                  cx="740"
                  cy="375"
                  r="5"
                  style="animation-delay: -1.7s"
                />
                <circle
                  cx="900"
                  cy="445"
                  r="4"
                  style="animation-delay: -4.9s"
                />
                <circle
                  cx="1050"
                  cy="385"
                  r="5"
                  style="animation-delay: -2.9s"
                />
                <circle
                  cx="1205"
                  cy="455"
                  r="4"
                  style="animation-delay: -0.9s"
                />
                <circle
                  cx="1380"
                  cy="390"
                  r="5"
                  style="animation-delay: -3.1s"
                />
                <circle cx="85" cy="690" r="4" style="animation-delay: -2.2s" />
                <circle
                  cx="235"
                  cy="610"
                  r="5"
                  style="animation-delay: -4.4s"
                />
                <circle
                  cx="385"
                  cy="675"
                  r="4"
                  style="animation-delay: -1.4s"
                />
                <circle
                  cx="535"
                  cy="600"
                  r="5"
                  style="animation-delay: -5.2s"
                />
                <circle
                  cx="690"
                  cy="665"
                  r="4"
                  style="animation-delay: -2.6s"
                />
                <circle
                  cx="860"
                  cy="590"
                  r="5"
                  style="animation-delay: -3.4s"
                />
                <circle
                  cx="1015"
                  cy="650"
                  r="4"
                  style="animation-delay: -0.7s"
                />
                <circle
                  cx="1170"
                  cy="590"
                  r="5"
                  style="animation-delay: -4.8s"
                />
                <circle
                  cx="1330"
                  cy="660"
                  r="4"
                  style="animation-delay: -1.6s"
                />
              </g>

              <g class="hero-network-glow" filter="url(#hero-network-glow)">
                <circle cx="280" cy="470" r="52" />
                <circle cx="690" cy="665" r="72" />
                <circle cx="1205" cy="455" r="64" />
                <circle cx="930" cy="240" r="48" />
              </g>
            </svg>
          </div>
          <div
            class="absolute inset-0 z-0 bg-cover bg-center"
            style="
              background-image: url(&quot;/images/home-header-test.png&quot;);
            "
            aria-hidden="true"
          ></div>
          <div
            class="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(10,10,10,0.42)_0%,rgba(10,10,10,0.68)_38%,rgba(10,10,10,0.88)_100%)]"
            aria-hidden="true"
          ></div>
          <div
            class="absolute inset-x-0 bottom-0 z-[4] h-40 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.82)_58%,#000_100%)]"
            aria-hidden="true"
          ></div>
          <div
            class="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_34%)]"
            aria-hidden="true"
          ></div>

          <div
            class="relative z-10 mx-auto flex min-h-[42rem] max-w-6xl flex-col items-center justify-center px-6 pb-12 pt-28 text-center md:min-h-[48rem]"
          >
            <img
              src="/images/aitjelogo.png"
              alt="AITJE"
              class="h-16 w-auto md:h-20"
            />
            <p class="mt-4 text-4xl font-black text-[#facc15] md:text-5xl">
              {{ phrases[currentPhrase] }}
            </p>
            <p
              class="mt-8 max-w-4xl text-lg leading-8 text-gray-200 md:text-xl"
            >
              AITJE ontwikkelt AI-oplossingen voor organisaties die grip willen
              houden op privacy, data en API kosten.<br
                class="hidden md:block"
              />
              We bieden hardware en software aan met lokale edge AI. Altijd
              Europese of Nederlandse hosting, moderne LLM&apos;s, ruimte voor
              je eigen kennisbank, agents, workflows en toepassingen.
            </p>
            <p
              class="mt-6 text-xs uppercase tracking-[0.45em] text-gray-400 sm:text-sm"
            >
              · Edge AI · Veilige opslag · Europe based ·
            </p>
            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink
                to="/producten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-8 py-3 text-base font-semibold text-black transition-colors duration-200 hover:bg-white"
              >
                Bekijk producten
              </NuxtLink>
              <NuxtLink
                to="/diensten"
                class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
              >
                Alle diensten
              </NuxtLink>
            </div>

            <div class="mt-12 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="rounded-2xl border border-white/10 bg-black/30 p-4 text-left backdrop-blur-sm"
              >
                <p class="text-sm text-gray-300">{{ stat.label }}</p>
                <p class="text-xl font-semibold text-white">{{ stat.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#f5f5f5] px-6 py-20">
        <div
          class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
            >
              Over AITJE
            </p>
            <h2 class="mt-4 text-4xl font-black text-gray-900">
              Een blik op wie we zijn, wat we doen en waar we voor staan
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              AITJE is een Nederlands bedrijf dat organisaties helpt om AI
              slimmer, zelfstandiger en toekomstbestendiger in te zetten. Niet
              als vaag AI-label, maar als partner met duidelijke producten,
              heldere keuzes en praktische begeleiding.
            </p>
          </div>

          <div
            class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
          >
            <div
              class="flex aspect-video items-center justify-center px-8 text-center"
            >
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
                >
                  YouTube video
                </p>
                <p class="mt-3 text-base text-gray-600">
                  Stuur de YouTube-link even door, dan zet ik de embed hier
                  direct goed in.
                </p>
              </div>
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
            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <NuxtLink
                to="/producten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                Bekijk alle producten
              </NuxtLink>
              <NuxtLink
                to="/diensten"
                class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Naar diensten
              </NuxtLink>
              <NuxtLink
                to="/cases"
                class="inline-flex items-center justify-center text-sm font-semibold text-[#facc15] transition hover:text-white"
              >
                Of bekijk cases
              </NuxtLink>
            </div>
          </div>

          <div
            class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div
              class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
                >
                  Producten
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  Direct zicht op onze productlijn
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  Bekijk welke AITJE-producten er nu al zijn en waar we naartoe
                  bouwen. Van AITJE Assistent en AITJE Assistent+ tot AITJE
                  Custom en nieuwe producten die nog in ontwikkeling zijn.
                </p>
              </div>
              <NuxtLink
                to="/producten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Bekijk producten
              </NuxtLink>
            </div>
            <div class="relative mt-8 overflow-hidden">
              <div class="showcase-marquee flex w-max gap-5">
                <article
                  v-for="(item, idx) in productShowcaseMarquee"
                  :key="`${item.title}-${idx}`"
                  class="w-[280px] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#161616]"
                >
                  <div
                    class="aspect-[4/3] border-b border-white/10 bg-black/30 p-4"
                  >
                    <img
                      :src="item.image"
                      :alt="item.title"
                      class="h-full w-full rounded-2xl bg-white object-contain p-3"
                    />
                  </div>
                  <div class="p-5">
                    <div class="flex items-center justify-between gap-3">
                      <p
                        class="text-xs font-semibold uppercase tracking-[0.3em] text-[#facc15]"
                      >
                        {{ item.label }}
                      </p>
                      <span
                        v-if="item.status"
                        class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-300"
                      >
                        {{ item.status }}
                      </span>
                    </div>
                    <h4 class="mt-2 text-lg font-semibold text-white">
                      {{ item.title }}
                    </h4>
                    <p class="mt-2 text-sm text-gray-300">
                      {{ item.description }}
                    </p>
                    <NuxtLink
                      v-if="item.link"
                      :to="item.link"
                      class="mt-4 inline-flex text-sm font-semibold text-[#facc15] transition hover:text-white"
                    >
                      {{ item.cta }}
                    </NuxtLink>
                    <span
                      v-else
                      class="mt-4 inline-flex text-sm font-semibold text-gray-400"
                    >
                      {{ item.cta }}
                    </span>
                  </div>
                </article>
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
                  Diensten
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  Hoe we organisaties helpen met implementatie en maatwerk
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  AITJE denkt strategisch met je mee over hoe AI echt waarde
                  toevoegt binnen je organisatie. Bekijk onze diensten om snel
                  te zien waar we inhoudelijk, technisch en operationeel op
                  ondersteunen.
                </p>
              </div>
              <NuxtLink
                to="/diensten"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                Bekijk diensten
              </NuxtLink>
            </div>
            <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <article
                v-for="service in homeServices"
                :key="service.key"
                class="flex flex-col rounded-[1.75rem] border border-white/10 bg-[#161616] p-6"
              >
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p
                      class="text-xs font-semibold uppercase tracking-[0.3em] text-[#facc15]"
                    >
                      {{ service.focus }}
                    </p>
                    <h4
                      class="mt-3 text-2xl font-semibold text-white md:whitespace-nowrap"
                    >
                      {{ service.title }}
                    </h4>
                  </div>
                  <span
                    class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-300"
                  >
                    Dienst
                  </span>
                </div>
                <p class="mt-4 text-sm leading-7 text-gray-300">
                  {{ service.description }}
                </p>
                <p class="mt-4 text-sm leading-7 text-gray-300">
                  {{ service.result }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#fafafa] px-6 py-20">
        <div
          ref="missionSectionRef"
          class="mx-auto max-w-6xl rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <div class="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div class="overflow-hidden rounded-[2rem] bg-[#f5f5f5]">
                <img
                  src="/images/wanneer-aitje.png"
                  alt="Onze missie"
                  class="h-[16rem] w-full object-cover md:h-[22rem]"
                />
              </div>

              <p
                class="mt-8 text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Onze missie
              </p>
              <p class="mt-4 text-5xl font-black leading-none text-[#facc15]">
                "
              </p>
              <blockquote
                class="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-gray-900 md:text-3xl"
              >
                AI is niet meer weg te denken. Hoe meer mensen en bedrijven het
                gebruiken, hoe afhankelijker we worden van Big Tech uit het
                buitenland.
              </blockquote>
              <div
                class="mt-8 max-w-2xl space-y-4 text-base leading-7 text-gray-600"
              >
                <p>
                  AITJE verkoopt niet alleen AI, maar vooral meer controle over
                  continuiteit, kosten en data. Dat is commercieel vaak
                  waardevoller dan nog een snellere cloudtool.
                </p>
                <p>
                  Als externe platformen duurder, drukker of instabieler worden,
                  wil je een partner die AI dichter op je eigen organisatie zet
                  en niet verder ervan af.
                </p>
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

            <div
              class="rounded-[2rem] bg-[#111111] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.14)] md:p-8"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]"
              >
                Waarom dit telt
              </p>
              <h3 class="mt-4 max-w-lg text-3xl font-black leading-tight">
                Edge AI wordt logisch zodra risico, kosten en afhankelijkheid
                oplopen.
              </h3>
              <p class="mt-4 max-w-xl text-sm leading-7 text-white/72">
                Dit raakt direct aan continuiteit, maandlasten, security en
                regie. Daar maakt lokale AI voor organisaties een praktisch
                verschil.
              </p>

              <div class="mt-8">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.32em] text-white/50"
                >
                  Zonder Edge AI
                </p>
                <div class="mt-4 space-y-3">
                  <article
                    v-for="item in missionRiskMetrics"
                    :key="item.label"
                    class="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <div class="flex items-baseline justify-between gap-4">
                      <p
                        class="text-sm font-semibold text-white/88 md:text-base"
                      >
                        {{ item.label }}
                      </p>
                      <p
                        class="text-xl font-black leading-none text-[#facc15] md:text-2xl"
                      >
                        {{ formatMissionMetric(item) }}
                      </p>
                    </div>
                  </article>
                </div>

                <p
                  class="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-white/50"
                >
                  Met Edge AI
                </p>
                <div class="mt-4 space-y-3">
                  <article
                    v-for="item in missionEdgeMetrics"
                    :key="item.label"
                    class="rounded-[1.35rem] border border-[#facc15]/20 bg-[#facc15]/6 px-4 py-4"
                  >
                    <div class="flex items-baseline justify-between gap-4">
                      <p
                        class="text-sm font-semibold text-white/88 md:text-base"
                      >
                        {{ item.label }}
                      </p>
                      <p
                        class="text-xl font-black leading-none text-[#facc15] md:text-2xl"
                      >
                        {{ formatMissionMetric(item) }}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-20">
        <div
          class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div
            class="space-y-6 rounded-3xl border border-gray-200 bg-[#fafafa] p-6 md:p-10"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              De infrastructuur van AITJE
            </p>
            <h2 class="text-3xl font-black text-gray-900 md:text-4xl">
              Van out of the box tot maatwerk&shy;oplossingen
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

      <section class="bg-[#212121] px-6 pb-20 pt-24 text-white md:pt-28">
        <div class="mx-auto max-w-6xl">
          <div class="text-center">
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Waarom AITJE
            </p>
            <h2 class="mt-4 text-4xl font-black md:text-5xl">
              Redenen om voor Lokale Edge AI te kiezen
            </h2>
            <p class="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300">
              Voor organisaties telt niet alleen wat AI vandaag kan, maar ook of
              het stabiel, betaalbaar en beheersbaar blijft zodra het echt
              onderdeel wordt van de dagelijkse operatie.
            </p>
          </div>

          <div
            class="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
          >
            <div
              class="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#161616] shadow-[0_24px_70px_rgba(0,0,0,0.2)]"
            >
              <div class="border-b border-white/8 px-5 py-4">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-[#ffd166]"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-[#06d6a0]"></span>
                </div>
              </div>
              <div class="p-4 md:p-5">
                <img
                  src="/images/aitje-client-screens.png"
                  alt="AITJE interface"
                  class="h-[24rem] w-full rounded-[1.6rem] border border-white/8 object-cover md:h-[31rem]"
                />
              </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
              <article
                v-for="reason in reasons"
                :key="reason.title"
                class="flex h-full flex-col rounded-[1.7rem] border border-white/10 bg-[#161616] p-5"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#facc15]/12 text-[#facc15]"
                  >
                    <component :is="reason.icon" class="h-5 w-5" />
                  </div>
                  <div>
                    <p
                      class="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/35"
                    >
                      Wat wij oplossen
                    </p>
                    <h3 class="mt-1 text-base font-black text-white">
                      {{ reason.title }}
                    </h3>
                    <p
                      class="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#facc15]"
                    >
                      {{ reason.theme }}
                    </p>
                  </div>
                </div>
                <div class="mt-4">
                  <p class="text-[13px] leading-6 text-gray-300">
                    {{ reason.summary }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#fafafa] px-6 pt-28 pb-20">
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
              class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
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
            class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
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

    <BottomCta :with-top-margin="false" />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { serviceCatalog } from "../data/serviceCatalog";
import {
  AppWindow,
  BookOpen,
  Cpu,
  Droplet,
  Globe,
  Lock,
  Mic,
  Server,
  Shield,
  Sparkles,
  Zap,
} from "lucide-vue-next";

const phrases = ["Je partner in AI & Edge AI"];
const heroStats = [
  { label: "Werkt zonder internet", value: "100% onafhankelijk" },
  { label: "Goed voor het milieu", value: "Geen cloud calls" },
  { label: "AITJE denkt met je mee", value: "Soevereiniteit in AI" },
];

const missionSectionRef = ref<HTMLElement | null>(null);
const missionCounterStarted = ref(false);
const missionAnimationFrame = ref<number | null>(null);
const missionObserver = ref<IntersectionObserver | null>(null);

const missionRiskMetrics = ref([
  {
    label: "AI-incidenten",
    target: 223,
    suffix: " / mnd",
    decimals: 0,
    value: 0,
  },
  {
    label: "Bureaukosten",
    target: 4300,
    prefix: "€",
    suffix: " / mnd",
    decimals: 0,
    value: 0,
  },
  {
    label: "Waterverbruik",
    target: 765,
    suffix: " mld l/jaar",
    decimals: 0,
    value: 0,
  },
  {
    label: "Outages per jaar",
    target: 20,
    suffix: "+",
    decimals: 0,
    value: 0,
  },
  {
    label: "Records gelekt",
    target: 195,
    suffix: " mln",
    decimals: 0,
    value: 0,
  },
]);

const missionEdgeMetrics = ref([
  {
    label: "Cloud dependency",
    target: 0,
    decimals: 0,
    value: 0,
  },
  {
    label: "Vaste omgeving",
    target: 1,
    decimals: 0,
    value: 0,
  },
  {
    label: "Beschikbaar intern",
    target: 24,
    suffix: "/7",
    decimals: 0,
    value: 0,
  },
  {
    label: "Extra per prompt lokaal",
    target: 0,
    prefix: "€",
    decimals: 0,
    value: 0,
  },
]);

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

const formatMissionMetric = (item: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const formattedValue =
    item.decimals && item.decimals > 0
      ? item.value.toFixed(item.decimals)
      : Math.round(item.value).toLocaleString("nl-NL");

  return `${item.prefix ?? ""}${formattedValue}${item.suffix ?? ""}`;
};

const startMissionCounters = () => {
  if (missionCounterStarted.value || typeof window === "undefined") {
    return;
  }

  missionCounterStarted.value = true;
  const duration = 1800;
  const start = window.performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOutCubic(progress);

    missionRiskMetrics.value = missionRiskMetrics.value.map((item) => ({
      ...item,
      value: item.target * eased,
    }));

    missionEdgeMetrics.value = missionEdgeMetrics.value.map((item) => ({
      ...item,
      value: item.target * eased,
    }));

    if (progress < 1) {
      missionAnimationFrame.value = window.requestAnimationFrame(tick);
    }
  };

  missionAnimationFrame.value = window.requestAnimationFrame(tick);
};

onMounted(() => {
  if (typeof window === "undefined" || !missionSectionRef.value) {
    return;
  }

  missionObserver.value = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry?.isIntersecting) return;
      startMissionCounters();
      missionObserver.value?.disconnect();
    },
    {
      threshold: [0.2],
      rootMargin: "0px 0px -20% 0px",
    },
  );

  missionObserver.value.observe(missionSectionRef.value);
});

onBeforeUnmount(() => {
  missionObserver.value?.disconnect();
  if (typeof window !== "undefined" && missionAnimationFrame.value) {
    window.cancelAnimationFrame(missionAnimationFrame.value);
  }
});

const reasons = [
  {
    title: "Afhankelijkheid",
    theme: "Bedrijfscontinuiteit",
    problem:
      "Wanneer je een internetstoring ervaart of een extern AI-platform niet beschikbaar is, verlies je direct tijd en continuiteit.",
    solution:
      "AITJE-hardware blijft lokaal werken en is via je eigen netwerk toegankelijk, zodat teams onafhankelijk kunnen doorwerken.",
    summary:
      "Wanneer je een internetstoring ervaart of een extern AI-platform niet beschikbaar is, verlies je direct tijd en continuiteit. AITJE-hardware blijft lokaal werken en is via je eigen netwerk toegankelijk, zodat teams onafhankelijk kunnen doorwerken.",
    icon: Server,
  },
  {
    title: "Financieel",
    theme: "Voorspelbare kosten",
    problem:
      "Gebruikskosten van externe AI-platformen lopen op, terwijl je weinig grip hebt op abonnementen, prijswijzigingen en de keuzes van buitenlandse aanbieders.",
    solution:
      "Met AITJE verlaag je structureel de afhankelijkheid van terugkerende AI-kosten en bepaal je zelf wanneer extra diensten, upgrades of cloudcapaciteit nodig zijn.",
    summary:
      "Gebruikskosten van externe AI-platformen lopen op, terwijl je weinig grip hebt op abonnementen, prijswijzigingen en de keuzes van buitenlandse aanbieders. Met AITJE verlaag je structureel de afhankelijkheid van terugkerende AI-kosten en bepaal je zelf wanneer extra diensten, upgrades of cloudcapaciteit nodig zijn.",
    icon: Sparkles,
  },
  {
    title: "Privacy",
    theme: "Controle op data",
    problem:
      "Gevoelige informatie delen met andere landen of externe partijen brengt extra risico's mee, zeker in tijden van politieke spanningen, hacks en strengere privacy-eisen.",
    solution:
      "Met AITJE houd je bedrijfsinformatie, persoonsgegevens en andere gevoelige data in eigen beheer, lokaal of binnen Europa, passend bij AVG-vereisten.",
    summary:
      "Gevoelige informatie delen met andere landen of externe partijen brengt extra risico's mee, zeker in tijden van politieke spanningen, hacks en strengere privacy-eisen. Met AITJE houd je bedrijfsinformatie, persoonsgegevens en andere gevoelige data in eigen beheer, lokaal of binnen Europa, passend bij AVG-vereisten.",
    icon: Shield,
  },
  {
    title: "Klimaat",
    theme: "Bewuster gebruik",
    problem:
      "Grote aantallen cloudverzoeken vragen veel rekenkracht, energie en koeling in externe infrastructuur.",
    solution:
      "Door lokaal op het device te werken verminder je onnodig verkeer naar externe datacenters, en voor cloud oplossingen gebruiken we groene hosting.",
    summary:
      "Grote aantallen cloudverzoeken vragen veel rekenkracht, energie en koeling in externe infrastructuur. Door lokaal op het device te werken verminder je onnodig verkeer naar externe datacenters, en voor cloud oplossingen gebruiken we groene hosting.",
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

const hardwareShowcase = [
  {
    label: "Hardware",
    title: "AITJE Assistent",
    image: "/images/aitje-cubes.png",
    link: "/producten/hardware/aitje-assistent",
    description:
      "De lokale AI-assistent op eigen hardware met kennisbank, offline bereikbaarheid en API-toegang.",
  },
  {
    label: "Hardware",
    title: "AITJE Custom",
    image: "/images/custom-suited.png",
    link: "/producten/hardware/aitje-custom",
    description:
      "Voor situaties waar standaardhardware niet precies past en je meer performance of specifieke integraties nodig hebt.",
  },
  {
    label: "Software",
    title: "AITJE Assistent OS",
    image: "/images/os-screenshots/chatassistent.jpeg",
    link: "/producten/software/aitje-assistent-os",
    description:
      "De lokale cockpit op de cube waar chat, kennis, kaarten, apparaten en beheer samenkomen.",
  },
];

const productShowcase = [
  {
    label: "Product",
    title: "AITJE Assistent",
    image: "/images/aitje-cubes.png",
    link: "/producten/hardware/aitje-assistent",
    description:
      "De lokale AI-assistent op eigen hardware met kennisbank, offline bereikbaarheid en API-toegang.",
    cta: "Bekijk product",
  },
  {
    label: "Product",
    title: "AITJE Assistent+",
    image: "/images/aitje-cubes.png",
    link: "/producten/hardware/aitje-assistent",
    description:
      "De uitgebreidere variant van AITJE Assistent voor organisaties die meer kracht, ruimte en doorgroei willen.",
    cta: "Bekijk product",
  },
  {
    label: "Product",
    title: "AITJE Custom",
    image: "/images/custom-suited.png",
    link: "/producten/hardware/aitje-custom",
    description:
      "Voor situaties waar standaardhardware niet precies past en je meer performance of specifieke integraties nodig hebt.",
    cta: "Bekijk product",
  },
  {
    label: "Product",
    title: "AITJE Notulist",
    image: "/images/birds.png",
    description:
      "Voor opname, transcriptie en gestructureerde output die direct aansluit op je workflow.",
    status: "In ontwikkeling",
    cta: "Nog niet gelanceerd",
  },
  {
    label: "Product",
    title: "AITJE Off-Grid",
    image: "/images/birds.png",
    description:
      "Een mobiele richting voor zelfstandig werken met lokale kennis, bestanden en AI onderweg.",
    status: "In ontwikkeling",
    cta: "Nog niet gelanceerd",
  },
  {
    label: "Product",
    title: "AITJE Manager",
    image: "/images/birds.png",
    description:
      "De volgende stap voor het organiseren van lokale agents, installaties en samenwerking binnen je omgeving.",
    status: "In ontwikkeling",
    cta: "Nog niet gelanceerd",
  },
  {
    label: "Product",
    title: "AITJE Coder",
    image: "/images/birds.png",
    description:
      "Voor organisaties en teams die sneller willen coderen, aanpassen en bouwen met AI in een gecontroleerde omgeving.",
    status: "In ontwikkeling",
    cta: "Nog niet gelanceerd",
  },
];

const productShowcaseMarquee = [...productShowcase, ...productShowcase];

const homeServices = serviceCatalog;

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
</script>

<style scoped>
.hero-network {
  mix-blend-mode: screen;
}

.hero-network-lines {
  stroke: rgba(250, 204, 21, 0.2);
  stroke-width: 1.4;
  stroke-dasharray: 4 8;
  animation: hero-network-drift 18s linear infinite;
}

.hero-network-points {
  fill: rgba(250, 204, 21, 0.92);
}

.hero-network-points circle {
  transform-origin: center;
  animation: hero-network-twinkle 6.5s ease-in-out infinite;
}

.hero-network-glow {
  fill: rgba(250, 204, 21, 0.18);
  animation: hero-network-pulse 8s ease-in-out infinite alternate;
  transform-origin: center;
}

@keyframes hero-network-drift {
  0% {
    stroke-dashoffset: 0;
    transform: translate3d(0, 0, 0);
  }
  50% {
    stroke-dashoffset: -28;
    transform: translate3d(8px, -6px, 0);
  }
  100% {
    stroke-dashoffset: -56;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes hero-network-twinkle {
  0% {
    opacity: 0.35;
    transform: scale(0.88);
  }
  50% {
    opacity: 1;
    transform: scale(1.18);
  }
  100% {
    opacity: 0.45;
    transform: scale(0.92);
  }
}

@keyframes hero-network-pulse {
  0% {
    opacity: 0.45;
    transform: scale(0.98);
  }
  100% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

.bird-flight {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: clip;
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

.showcase-marquee {
  animation: showcase-marquee 42s linear infinite;
}

.showcase-marquee:hover {
  animation-play-state: paused;
}

@keyframes showcase-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 0.625rem));
  }
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
