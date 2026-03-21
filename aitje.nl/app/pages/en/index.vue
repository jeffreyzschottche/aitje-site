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
              AITJE develops AI solutions for organizations that want to control privacy, data and API costs. <br />
              We offer hardware and software with both local edge AI, and cloud solutions. Always European or Dutch hosting, modern LLMs, space for your own knowledge base, agents, workflows and applications.
            </p>
            <p class="text-sm uppercase tracking-[0.4em] text-gray-400">
              - Edge & <span data-no-knowledge-links="true">cloud</span> - Secure storage - Europe based -
            </p>
            <div class="flex flex-col gap-4 sm:flex-row">
              <NuxtLink
                :to="localePath('/producten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-8 py-3 text-base font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
              >
                View products
              </NuxtLink>
              <NuxtLink
                :to="localePath('/diensten')"
                class="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
              >
                All services
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
                src="/images/aitje-home-animated-egg-boomerang.apng"
                alt="Aitje animated egg"
                class="mx-auto aspect-square w-full max-w-[34rem] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="relative mt-10 pb-20 md:pb-24">
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
              :aria-label="`Go to slide ${idx + 1}`"
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
        <div
          class="pointer-events-none absolute inset-x-6 bottom-0 z-20 translate-y-1/2"
        >
          <div class="mx-auto flex max-w-6xl justify-center md:justify-end">
            <div
              class="pointer-events-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#212121]/95 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur md:mr-6"
            >
              <p class="text-xs uppercase tracking-[0.4em] text-[#facc15]">
                Lost in the jargon?
              </p>
              <p class="mt-2 text-lg font-semibold text-white">
                For explanation of terms check out our knowledge center.
              </p>
              <NuxtLink
                :to="localePath('/kenniscentrum')"
                class="mt-3 inline-flex text-sm font-semibold text-[#facc15] transition hover:text-white"
              >
                To the knowledge center
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#fafafa] px-6 pb-20 pt-36 md:pt-44">
        <div class="mx-auto max-w-6xl text-center">
          <p
            class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
          >
            Why AITJE
          </p>
          <h2 class="mt-4 text-4xl font-black text-gray-900">
            Reasons to choose Local Edge AI
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
                <p class="font-semibold text-gray-900">Now:</p>
                <p>{{ reason.problem }}</p>
              </div>
              <div
                class="flex flex-1 flex-col rounded-2xl bg-[#facc15] p-4 text-sm text-[#212121]"
              >
                <p class="font-semibold">With AITJE:</p>
                <p>{{ reason.solution }}</p>
              </div>
            </div>
          </article>
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
              Products, software and applications
            </h2>
            <p class="mt-3 max-w-3xl text-gray-300">
              An overview of devices, software and solutions that AITJE is proud of, from existing applications to the basis for customization.
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
                  1. AITJE Assistant
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  Local AI devices in multiple forms
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  Available in various tiers and designs, from compact setups to personally built devices on our proprietary OS.
                </p>
              </div>
              <NuxtLink
                :to="localePath('/producten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                More info
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
                    :src="variant.image"
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
                  2. AITJE Assistant
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  From conversation to actionable output
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  Record, structure information and deliver output as a summary, transcript or form appropriate to your process.
                </p>
              </div>
              <NuxtLink
                :to="localePath('/producten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                More info
              </NuxtLink>
            </div>
            <div class="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div
                class="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 p-5"
              >
                <img
                  src="/images/os-screenshots/chatassistent.jpeg"
                  alt="AITJE Assistant"
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
                        Automatically convert conversation, intake or consultation to structured data.
                      </p>
                    </div>
                    <div class="grid gap-3 md:grid-cols-3">
                      <div class="rounded-2xl bg-white p-4 shadow-sm">
                        <p
                          class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                        >
                          Summary
                        </p>
                      </div>
                      <div class="rounded-2xl bg-white p-4 shadow-sm">
                        <p
                          class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                        >
                          Transcription
                        </p>
                      </div>
                      <div class="rounded-2xl bg-white p-4 shadow-sm">
                        <p
                          class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                        >
                          Form
                        </p>
                      </div>
                    </div>
                    <div
                      class="rounded-2xl bg-[#212121] p-4 text-sm text-white"
                    >
                      Delivery via mail, dashboard or internal workflow.
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
                  Existing solutions and integrations
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  A growing set of software, interfaces and workflows for different stacks and use cases.
                </p>
              </div>
              <NuxtLink
                :to="localePath('/producten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                More info
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
                  Examples of applications
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  Preliminary examples of how AITJE can be deployed across teams, processes and platforms.
                </p>
              </div>
              <NuxtLink
                :to="localePath('/diensten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                View services
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
              Our mission
            </p>
            <div class="mt-6 max-w-5xl">
              <p class="text-6xl font-black leading-none text-[#facc15]">"</p>
              <blockquote
                class="mt-4 text-2xl font-semibold leading-tight text-gray-900 md:text-4xl"
              >
                AI is here to stay. The more people and companies use it, the more dependent we become on Big Tech from abroad.
              </blockquote>
              <div
                class="mt-8 space-y-4 text-base leading-7 text-gray-600 md:text-lg"
              >
                <p>
                  With AITJE, AI continues to work even when the Internet or external platforms are down. On the device, information remains available locally through your own environment.
                </p>
                <p>
                  While prices from external providers may rise, we build our solutions so that costs remain manageable and you are less dependent on recurring platform costs.
                </p>
                <p>
                  Working locally is also better for the environment: fewer endless calls to data centers and more efficient use of hardware. Data stays closer to the organization, in Europe and, where necessary, completely local.
                </p>
              </div>
            </div>
            <div class="mt-10">
              <NuxtLink
                :to="localePath('/visie')"
                class="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black hover:text-[#facc15]"
              >
                Read more about our vision
              </NuxtLink>
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
              AITJE's infrastructure
            </p>
            <h2 class="text-4xl font-black text-gray-900">
              From out of the box to custom solutions
            </h2>
            <p class="text-gray-700">
              As a company, we offer local hardware for edge AI, software that connects to it, and solutions that can connect to external platforms, such as knowledge bases and document processing. We also help think about the best use of AI within your organization: sometimes with one of our existing products, sometimes with a custom solution we develop together.
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
                :to="localePath('/roadmap')"
                class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#212121] hover:text-[#facc15]"
              >
                View the roadmap
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
              Useful links
            </p>
            <h2 class="text-4xl font-black text-gray-900">
              Quickly get to the right page
            </h2>
            <p class="text-lg text-gray-700">
              Check out our main pages for products, services, applications, knowledge and contact.
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
              Frequently Asked Questions
            </h3>
            <p class="mt-3 text-sm text-gray-600">
              Brief answers to questions about privacy, backups, customization and how AITJE works in practice.
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
                  Question
                </p>
                <h4 class="text-lg font-semibold text-gray-900">
                  {{ item.question }}
                </h4>
                <p class="text-sm text-gray-600">{{ item.answer }}</p>
              </div>
            </div>
            <div class="mt-6">
              <NuxtLink
                :to="localePath('/faq')"
                class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
              >
                View all frequently asked questions
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

const { localePath } = useSiteLocale();

const phrases = ["Your partner in AI & Edge AI"];
const heroStats = [
  { label: "Works without internet", value: "100% independent" },
  { label: "Good for the environment", value: "No cloud calls" },
  { label: "AITJE thinks with you", value: "Sovereignty in AI" },
];

const promisePillars = [
  {
    title: "AITJE, your partner in AI",
    highlight: "Strategy",
    description:
      "We develop AI solutions in hardware and software, think about implementation and also build on for specific needs within your organization.",
    icon: Handshake,
    image: "/images/golden-egg.png",
    imageAlt: "Golden egg",
  },
  {
    title: "Proprietary software stack",
    highlight: "Software",
    description:
      "We have our own Operating System, app, agents and out-of-the-box workflows, so you can work directly with solutions that are aligned.",
    icon: CodeXml,
    image: "/images/egg-loading-screen.png",
    imageAlt: "Egg by screen",
  },
  {
    title: "Internet independent",
    highlight: "Hardware",
    description:
      "Our hardware is designed with a focus on pure local edge AI, so you have less reliance on APIs, Big Tech and rising token costs.",
    icon: Wrench,
    image: "/images/ei-internet.png",
    imageAlt: "Egg with internet theme",
  },
];

const reasons = [
  {
    title: "Dependency",
    theme: "Business continuity",
    problem:
      "When you experience an Internet outage or a remote AI platform is unavailable, you immediately lose time and continuity.",
    solution:
      "AITJE hardware continues to work locally and is accessible through your own network, allowing teams to continue working independently.",
    icon: Server,
  },
  {
    title: "Financial",
    theme: "Predictable costs",
    problem:
      "Usage costs of third-party AI platforms add up, while you have little control over subscriptions, price changes and foreign provider choices.",
    solution:
      "With AITJE, you structurally reduce reliance on recurring AI costs and determine when additional services, upgrades or cloud capacity are needed.",
    icon: Sparkles,
  },
  {
    title: "Privacy",
    theme: "Control of data",
    problem:
      "Sharing sensitive information with other countries or external parties carries additional risks, especially in times of political tension, hacks and stricter privacy requirements.",
    solution:
      "With AITJE, you keep corporate information, personal data and other sensitive data under your own control, locally or within Europe, appropriate to AVG requirements.",
    icon: Shield,
  },
  {
    title: "Climate",
    theme: "More conscious use",
    problem:
      "Large numbers of cloud requests require a lot of computing power, energy and cooling in external infrastructure.",
    solution:
      "Working locally on the device reduces unnecessary traffic to remote data centers, and for cloud solutions we use green hosting.",
    icon: Droplet,
  },
];

const productHighlights = [
  "Advice on where AI has the greatest impact within your organization",
  "Hardware for local edge AI and your own infrastructure",
  "Focus on operation without internet, with data in Europe / the Netherlands",
  "Agents, custom applications and practical workflows",
];

const features = [
  {
    title: "AITJE Assistant",
    description:
      "Multiple devices for different needs, from fixed tiers to personally built solutions, all on our own OS with local AI and API.",
    icon: Server,
    link: localePath("/aitje-pro"),
    cta: "View product",
  },
  {
    title: "AITJE Assistant",
    description:
      "Record conversations and decide what information you want to receive: as a summary, transcript or completed form, in the format and through the channel that suits.",
    icon: Mic,
    link: localePath("/producten"),
    cta: "View product",
  },
  {
    title: "AITJE Solutions",
    description:
      "Custom solutions such as agents, workflows, voice assistants and, where necessary, proprietary hardware for your application.",
    icon: Cpu,
    link: localePath("/diensten"),
    cta: "View services",
  },
  {
    title: "Software marketplace",
    description:
      "Existing solutions and integrations for CMS systems and other commonly used digital environments.",
    icon: AppWindow,
    link: localePath("/producten"),
    cta: "View product",
  },
];

const assistantVariants = [
  {
    title: "Compact tier",
    description:
      "For individual workplaces or small teams that want to start locally.",
    image: "/images/aitje-cubes.png",
  },
  {
    title: "Team setup",
    description:
      "For organizations that want to have multiple users working on the same network.",
    image: "/images/os-screenshots/chatassistent.jpeg",
  },
  {
    title: "Custom build",
    description:
      "Personally built variant for specific performance or integration needs.",
    image: "/images/custom-suited.png",
  },
];

const softwareSlides = [
  {
    stack: "WordPress",
    title: "Content Assistant",
    description:
      "Dummy solution for editing, summaries and internal knowledge in WordPress environments.",
  },
  {
    stack: ".NET",
    title: "Internal Agent",
    description:
      "Dummy workflow for internal tooling, document queries and process support within .NET stacks.",
  },
  {
    stack: "API",
    title: "Support Flow",
    description:
      "Dummy link for support, classification and automatic follow-up in existing systems.",
  },
  {
    stack: "Intranet",
    title: "Knowledge Search",
    description:
      "Dummy interface for searching, summarizing and accessing internal documentation.",
  },
];

const caseSlides = [
  {
    category: "Education",
    title: "Internal knowledge assistant",
    description:
      "Dummy case for teams wanting to make learning materials, guidelines and internal knowledge available locally.",
  },
  {
    category: "Care",
    title: "Minutes & intake processing",
    description:
      "Dummy case for interviews, intake forms and structured follow-up information.",
  },
  {
    category: "SME",
    title: "Workflow automation",
    description:
      "Dummy case for recurring tasks, agents and links to existing processes.",
  },
];

const handyLinks = [
  {
    label: "Products",
    to: localePath("/producten"),
  },
  {
    label: "Services",
    to: localePath("/diensten"),
  },
  {
    label: "Solutions",
    to: localePath("/oplossingen"),
  },
  {
    label: "Knowledge Center",
    to: localePath("/kenniscentrum"),
  },
  {
    label: "FAQ",
    to: localePath("/faq"),
  },
  {
    label: "Roadmap",
    to: localePath("/roadmap"),
  },
  {
    label: "Vision",
    to: localePath("/visie"),
  },
  {
    label: "Contact",
    to: localePath("/contact"),
  },
];

const homepageFaqs = [
  {
    question: "Does AITJE share my info?",
    answer:
      "No. AITJE was built to keep data local and in-house.",
  },
  {
    question: "Does AITJE make backups?",
    answer:
      "Upon request, we can set this up for you, such as for a knowledge base backup.",
  },
  {
    question: "Do you also make custom solutions?",
    answer:
      "Yes. We guide you where possible in both hardware and software and also build custom solutions where needed.",
  },
  {
    question: "Can AITJE work without the Internet?",
    answer:
      "Yes. Local edge setups can continue to work even if the Internet or external platforms go down.",
  },
  {
    question: "What language models do you support?",
    answer:
      "For your specific need, we can always choose and use a different language model.",
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
