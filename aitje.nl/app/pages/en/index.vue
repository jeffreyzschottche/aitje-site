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
                <filter id="hero-network-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g class="hero-network-lines">
                <path d="M40 240L180 170L320 245L465 165L615 230L770 175L930 240L1085 170L1240 235L1390 160" />
                <path d="M10 470L150 395L280 470L430 390L595 450L740 375L900 445L1050 385L1205 455L1380 390" />
                <path d="M85 690L235 610L385 675L535 600L690 665L860 590L1015 650L1170 590L1330 660" />
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
                <circle cx="180" cy="170" r="5" style="animation-delay: -2.8s" />
                <circle cx="320" cy="245" r="4" style="animation-delay: -0.8s" />
                <circle cx="465" cy="165" r="4" style="animation-delay: -3.6s" />
                <circle cx="615" cy="230" r="5" style="animation-delay: -1.9s" />
                <circle cx="770" cy="175" r="4" style="animation-delay: -4.2s" />
                <circle cx="930" cy="240" r="5" style="animation-delay: -2.1s" />
                <circle cx="1085" cy="170" r="4" style="animation-delay: -5.1s" />
                <circle cx="1240" cy="235" r="5" style="animation-delay: -2.7s" />
                <circle cx="1390" cy="160" r="4" style="animation-delay: -0.5s" />
                <circle cx="10" cy="470" r="4" style="animation-delay: -4.6s" />
                <circle cx="150" cy="395" r="5" style="animation-delay: -1.1s" />
                <circle cx="280" cy="470" r="4" style="animation-delay: -3.9s" />
                <circle cx="430" cy="390" r="5" style="animation-delay: -2.4s" />
                <circle cx="595" cy="450" r="4" style="animation-delay: -5.5s" />
                <circle cx="740" cy="375" r="5" style="animation-delay: -1.7s" />
                <circle cx="900" cy="445" r="4" style="animation-delay: -4.9s" />
                <circle cx="1050" cy="385" r="5" style="animation-delay: -2.9s" />
                <circle cx="1205" cy="455" r="4" style="animation-delay: -0.9s" />
                <circle cx="1380" cy="390" r="5" style="animation-delay: -3.1s" />
                <circle cx="85" cy="690" r="4" style="animation-delay: -2.2s" />
                <circle cx="235" cy="610" r="5" style="animation-delay: -4.4s" />
                <circle cx="385" cy="675" r="4" style="animation-delay: -1.4s" />
                <circle cx="535" cy="600" r="5" style="animation-delay: -5.2s" />
                <circle cx="690" cy="665" r="4" style="animation-delay: -2.6s" />
                <circle cx="860" cy="590" r="5" style="animation-delay: -3.4s" />
                <circle cx="1015" cy="650" r="4" style="animation-delay: -0.7s" />
                <circle cx="1170" cy="590" r="5" style="animation-delay: -4.8s" />
                <circle cx="1330" cy="660" r="4" style="animation-delay: -1.6s" />
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
            style="background-image: url(&quot;/images/home-header-test.png&quot;)"
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
              AITJE develops AI solutions for organizations that want to stay in
              control of privacy, data and API costs.<br
                class="hidden md:block"
              />
              We offer hardware and software with local edge AI. Always European
              or Dutch hosting, modern LLMs, room for your own knowledge base,
              agents, workflows and applications.
            </p>
            <p
              class="mt-6 text-xs uppercase tracking-[0.45em] text-gray-400 sm:text-sm"
            >
              · Edge AI · Secure storage · Europe based ·
            </p>
            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink
                :to="localePath('/producten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-8 py-3 text-base font-semibold text-black transition-colors duration-200 hover:bg-white"
              >
                View products
              </NuxtLink>
              <NuxtLink
                :to="localePath('/diensten')"
                class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
              >
                All services
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
              About AITJE
            </p>
            <h2 class="mt-4 text-4xl font-black text-gray-900">
              A look at who we are, what we do and what we stand for
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              AITJE is a Dutch company that helps organizations use AI in a
              smarter, more independent and future-ready way. Not as a vague AI
              label, but as a partner with clear products, clear choices and
              practical guidance.
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
                  Send over the YouTube link and we can place the embed here
                  directly.
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
              Products, software and applications
            </h2>
            <p class="mt-3 max-w-3xl text-gray-300">
              An overview of devices, software and solutions AITJE is proud of,
              from existing applications to the foundation for custom work.
            </p>
            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <NuxtLink
                :to="localePath('/producten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                View all products
              </NuxtLink>
              <NuxtLink
                :to="localePath('/diensten')"
                class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Go to services
              </NuxtLink>
              <NuxtLink
                :to="localePath('/cases')"
                class="inline-flex items-center justify-center text-sm font-semibold text-[#facc15] transition hover:text-white"
              >
                Or view cases
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
                  1. Products
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  Direct view of our product line
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  See which AITJE products already exist and where we are
                  building next. From AITJE Assistant and AITJE Assistant+ to
                  AITJE Custom and new products still in development.
                </p>
              </div>
              <NuxtLink
                :to="localePath('/producten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                View products
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
                  2. Services
                </p>
                <h3 class="mt-3 text-3xl font-black">
                  How we help organizations with implementation and custom work
                </h3>
                <p class="mt-3 max-w-3xl text-sm text-gray-300">
                  AITJE thinks strategically with you about how AI really adds
                  value inside your organization. View our services to quickly
                  see where we support on content, technology and operations.
                </p>
              </div>
              <NuxtLink
                :to="localePath('/diensten')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
              >
                View services
              </NuxtLink>
            </div>
            <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <article
                v-for="service in homeServices"
                :key="service.key"
                class="flex h-full min-h-[26rem] flex-col rounded-[1.75rem] border border-white/10 bg-[#161616] p-6"
              >
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p
                      class="text-xs font-semibold uppercase tracking-[0.3em] text-[#facc15]"
                    >
                      {{ service.focus }}
                    </p>
                    <h4 class="mt-3 text-2xl font-semibold text-white">
                      {{ service.title }}
                    </h4>
                  </div>
                  <span
                    class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-300"
                  >
                    Service
                  </span>
                </div>
                <p class="mt-4 text-sm leading-7 text-gray-300">
                  {{ service.description }}
                </p>
                <p class="mt-4 text-sm leading-7 text-gray-300">
                  {{ service.result }}
                </p>
                <p class="mt-5 text-sm leading-7 text-gray-400">
                  {{ service.fit }}
                </p>
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
              AITJE infrastructure
            </p>
            <h2 class="text-4xl font-black text-gray-900">
              From out of the box to custom solutions
            </h2>
            <p class="text-gray-700">
              As a company, we offer local hardware for edge AI, software that
              connects to it and solutions that can connect with external
              platforms, such as knowledge bases and document processing. We
              also think along about the best use of AI within your
              organization: sometimes with one of our existing products,
              sometimes with a custom solution we develop together.
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

      <section class="bg-[#212121] px-6 pb-20 pt-24 text-white md:pt-28">
        <div class="mx-auto max-w-6xl">
          <div class="text-center">
            <p
              class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Why AITJE
            </p>
            <h2 class="mt-4 text-4xl font-black md:text-5xl">
              Reasons to choose Local Edge AI
            </h2>
            <p class="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300">
              For organizations, it is not only about what AI can do today, but
              also whether it stays stable, affordable and manageable once it
              really becomes part of daily operations.
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
                      What we solve
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

      <section class="bg-[#fafafa] px-6 py-20">
        <div
          class="mx-auto max-w-5xl rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <div class="mx-auto max-w-4xl text-center">
            <div class="overflow-hidden rounded-[2rem] bg-[#f5f5f5]">
              <img
                src="/images/wanneer-aitje.png"
                alt="Our mission"
                class="h-[16rem] w-full object-cover md:h-[22rem]"
              />
            </div>

            <p
              class="mt-8 text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Our mission
            </p>
            <p class="mt-4 text-5xl font-black leading-none text-[#facc15]">
              "
            </p>
            <blockquote
              class="mx-auto mt-4 max-w-3xl text-2xl font-semibold leading-tight text-gray-900 md:text-3xl"
            >
              AI is here to stay. The more people and companies use it, the
              more dependent we become on Big Tech from abroad.
            </blockquote>
            <div
              class="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-7 text-gray-600"
            >
              <p>
                With AITJE, AI keeps working even when the internet or external
                platforms fail. On the device, information remains available
                locally through your own environment.
              </p>
              <p>
                While prices of external providers may rise, we build our
                solutions so that costs remain manageable and you become less
                dependent on recurring platform costs.
              </p>
              <p>
                Working locally is also better for the environment: fewer
                endless calls to data centers and more efficient use of
                hardware. Data stays closer to the organization, in Europe and
                where needed fully local.
              </p>
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

      <section class="bg-[#fafafa] px-6 pt-28 pb-20">
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
              Check out our main pages for products, services, applications,
              knowledge and contact.
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
              Frequently asked questions
            </h3>
            <p class="mt-3 text-sm text-gray-600">
              Short answers to questions about privacy, backups, custom work
              and how AITJE works in practice.
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

    <BottomCta :with-top-margin="false" />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { serviceCatalog } from "@/data/serviceCatalog";
import {
  AppWindow,
  Cpu,
  Droplet,
  Mic,
  Server,
  Shield,
  Sparkles,
} from "lucide-vue-next";

const { localePath } = useSiteLocale();

const phrases = ["Your partner in AI & Edge AI"];
const heroStats = [
  { label: "Works without internet", value: "100% independent" },
  { label: "Better for the environment", value: "No cloud calls" },
  { label: "AITJE thinks along", value: "Sovereignty in AI" },
];

const reasons = [
  {
    title: "Dependency",
    theme: "Business continuity",
    problem:
      "When you experience an internet outage or an external AI platform becomes unavailable, you immediately lose time and continuity.",
    solution:
      "AITJE hardware keeps working locally and remains accessible through your own network, so teams can continue working independently.",
    summary:
      "When you experience an internet outage or an external AI platform becomes unavailable, you immediately lose time and continuity. AITJE hardware keeps working locally and remains accessible through your own network, so teams can continue working independently.",
    icon: Server,
  },
  {
    title: "Financial",
    theme: "Predictable costs",
    problem:
      "Usage costs of external AI platforms add up, while you have little control over subscriptions, price changes and the choices of foreign providers.",
    solution:
      "With AITJE, you structurally reduce dependence on recurring AI costs and decide yourself when extra services, upgrades or cloud capacity are needed.",
    summary:
      "Usage costs of external AI platforms add up, while you have little control over subscriptions, price changes and the choices of foreign providers. With AITJE, you structurally reduce dependence on recurring AI costs and decide yourself when extra services, upgrades or cloud capacity are needed.",
    icon: Sparkles,
  },
  {
    title: "Privacy",
    theme: "Control over data",
    problem:
      "Sharing sensitive information with other countries or external parties brings extra risks, especially during political tension, hacks and stricter privacy requirements.",
    solution:
      "With AITJE, you keep company information, personal data and other sensitive data under your own control, locally or within Europe, in line with GDPR requirements.",
    summary:
      "Sharing sensitive information with other countries or external parties brings extra risks, especially during political tension, hacks and stricter privacy requirements. With AITJE, you keep company information, personal data and other sensitive data under your own control, locally or within Europe, in line with GDPR requirements.",
    icon: Shield,
  },
  {
    title: "Climate",
    theme: "More conscious use",
    problem:
      "Large numbers of cloud requests require a lot of compute power, energy and cooling in external infrastructure.",
    solution:
      "By working locally on the device, you reduce unnecessary traffic to external data centers, and for cloud solutions we use green hosting.",
    summary:
      "Large numbers of cloud requests require a lot of compute power, energy and cooling in external infrastructure. By working locally on the device, you reduce unnecessary traffic to external data centers, and for cloud solutions we use green hosting.",
    icon: Droplet,
  },
];

const productHighlights = [
  "Advice on where AI has the most impact within your organization",
  "Hardware for local edge AI and your own infrastructure",
  "Focus on working without internet, with data in Europe / the Netherlands",
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
    title: "AITJE Notetaker",
    description:
      "Record conversations and decide which information you want back: as a summary, transcript or completed form, in the format and through the channel that fits.",
    icon: Mic,
    link: localePath("/producten"),
    cta: "View product",
  },
  {
    title: "AITJE Solutions",
    description:
      "Custom solutions such as agents, workflows, voice assistants and where needed your own hardware for the application.",
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

const productShowcase = [
  {
    label: "Product",
    title: "AITJE Assistant",
    image: "/images/aitje-cubes.png",
    link: localePath("/producten/aitje-assistent"),
    description:
      "The local AI assistant on its own hardware with knowledge base, offline availability and API access.",
    cta: "View product",
  },
  {
    label: "Product",
    title: "AITJE Assistant+",
    image: "/images/aitje-cubes.png",
    link: localePath("/producten/aitje-assistent"),
    description:
      "The expanded variant of AITJE Assistant for organizations that want more power, room and growth.",
    cta: "View product",
  },
  {
    label: "Product",
    title: "AITJE Custom",
    image: "/images/custom-suited.png",
    link: localePath("/producten/aitje-custom"),
    description:
      "For situations where standard hardware is not an exact fit and you need more performance or specific integrations.",
    cta: "View product",
  },
  {
    label: "Product",
    title: "AITJE Notetaker",
    image: "/images/birds.png",
    description:
      "For recording, transcription and structured output that connects directly to your workflow.",
    status: "In development",
    cta: "Not launched yet",
  },
  {
    label: "Product",
    title: "AITJE Prepper",
    image: "/images/birds.png",
    description:
      "A mobile direction for independent work with local knowledge, files and AI on the go.",
    status: "In development",
    cta: "Not launched yet",
  },
  {
    label: "Product",
    title: "AITJE Manager",
    image: "/images/birds.png",
    description:
      "The next step for organizing local agents, installations and collaboration inside your environment.",
    status: "In development",
    cta: "Not launched yet",
  },
];

const productShowcaseMarquee = [...productShowcase, ...productShowcase];

const homeServices = serviceCatalog.map((service) => ({
  ...service,
  sidebarLabel: service.sidebarLabel,
  title:
    service.key === "installation" ? "Product installation" :
    service.key === "expansion" ? "Product expansion" :
    service.key === "custom" ? "AITJE Custom" :
    service.key === "consultancy" ? "Consultancy" :
    service.key === "strategy" ? "AI strategy" :
    "SLA",
  focus:
    service.key === "installation" ? "Implementation" :
    service.key === "expansion" ? "Further development" :
    service.key === "custom" ? "Custom route" :
    service.key === "consultancy" ? "Cost & stability" :
    service.key === "strategy" ? "Strategy" :
    "Monthly collaboration",
  description:
    service.key === "installation"
      ? "We help with installation, permissions, knowledge base sync and technical setup so AITJE products land in your environment ready to use."
      : service.key === "expansion"
        ? "We expand existing AITJE setups in a focused way when more users, extra modules, integrations or additional setup are needed."
        : service.key === "custom"
          ? "For organizations where fixed solutions do not fit well and where AITJE needs to think along on hardware, workflows or agentic deployment."
          : service.key === "consultancy"
            ? "We analyze current AI use and look at where cost, stability and dependency can be improved."
            : service.key === "strategy"
              ? "We help determine where AI adds the most value now, what Edge AI does and does not make sense for and which first steps are realistic."
              : "A monthly collaboration for support, updates, reserved time, installation help and advice around products and Edge AI implementations.",
  result:
    service.key === "installation"
      ? "A stable start without loose technical ends or unclear handover."
      : service.key === "expansion"
        ? "A next step that connects logically to what is already there, without starting over."
        : service.key === "custom"
          ? "A route that better matches the real situation of the organization."
          : service.key === "consultancy"
            ? "More control over usage, vendors and practical AI deployment."
            : service.key === "strategy"
              ? "A concrete plan that lets you move forward without getting lost in all the AI options."
              : "Ongoing support without having to solve everything ad hoc.",
  fit:
    service.key === "installation"
      ? "For organizations choosing a product and wanting the go-live to be right from the start."
      : service.key === "expansion"
        ? "For organizations already working with AITJE and wanting to scale or broaden in a controlled way."
        : service.key === "custom"
          ? "For organizations with unusual requirements, specific hardware wishes or more complex processes than the fixed line supports."
          : service.key === "consultancy"
            ? "For teams already using AI but lacking enough overview of cost, risk and continuity."
            : service.key === "strategy"
              ? "For organizations that first want clarity on direction, opportunities and the role of local Edge AI."
              : "For organizations that want continuity without having to switch per incident every time.",
}));

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
    question: "Does AITJE share my information?",
    answer:
      "No. AITJE is built to keep data local and under your own control.",
  },
  {
    question: "Does AITJE make backups?",
    answer:
      "On request we can set this up for you, for example for a knowledge base backup.",
  },
  {
    question: "Do you also build custom solutions?",
    answer:
      "Yes. We guide you where possible in both hardware and software and also build custom work where needed.",
  },
  {
    question: "Can AITJE work without internet?",
    answer:
      "Yes. Local edge setups can keep working even if internet or external platforms go down.",
  },
  {
    question: "Which language models do you support?",
    answer:
      "For your specific need, we can always choose and use a different language model.",
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
</style>
