<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section class="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#212121] text-white">
        <div class="grid gap-10 px-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
          <div class="space-y-6">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">About AITJE</p>
            <h1 class="text-5xl font-black leading-tight">
              Local Edge AI, explained clearly and made practical for organizations
            </h1>
            <p class="max-w-3xl text-lg text-gray-300">
              AITJE is a Dutch company that helps organizations use AI in a smarter, more independent and future-ready way. Not as a vague AI label, but as a partner with clear products, clear choices and practical guidance.
            </p>
            <div class="grid gap-4 sm:grid-cols-3">
              <div
                v-for="stat in heroStats"
                :key="stat.title"
                class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
              >
                <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">{{ stat.badge }}</p>
                <h2 class="mt-2 text-xl font-semibold text-white">{{ stat.title }}</h2>
                <p class="mt-2 text-sm text-gray-300">{{ stat.text }}</p>
              </div>
            </div>
          </div>

          <article class="rounded-[2.5rem] border border-white/10 bg-white/5 p-6">
            <img
              src="/images/birds.png"
              alt="AITJE brand visual"
              class="h-72 w-full rounded-[2rem] object-cover"
            />
            <div class="mt-6 rounded-[2rem] border border-white/10 bg-black/20 p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">What we stand for</p>
              <ul class="mt-4 space-y-4 text-sm leading-7 text-gray-300">
                <li class="flex items-start gap-3">
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>More control over data, knowledge and the way AI is used inside the organization.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Less dependence on large external platforms and unclear cost structures.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"></span>
                  <span>Clear language, practical choices and solutions that still make sense a few years from now.</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article class="rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">Our vision</p>
            <h2 class="mt-3 text-4xl font-black text-gray-900">
              AI should make the organization stronger, not more dependent
            </h2>
            <div class="mt-6 space-y-5 text-base leading-8 text-gray-700">
              <p>
                AITJE believes organizations should be able to make conscious choices about how they use AI. Not everything needs to be local, but it should be clear what can stay local, what truly needs to be external and where long-term dependence starts to build up.
              </p>
              <p>
                That is why we do not only look at what is technically possible, but mainly at what remains useful, responsible and workable. The newest tool is not automatically the right tool.
              </p>
              <p>
                We want to make AI understandable for normal organizations: less hype, less jargon and more focus on what genuinely helps in practice.
              </p>
            </div>
          </article>

          <article class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/golden-egg.png"
              alt="AITJE vision"
              class="h-56 w-full object-cover"
            />
            <div class="p-8">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">Why AITJE</p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                A practical route between hype and standstill
              </h2>
              <p class="mt-4 text-sm leading-7 text-gray-600">
                For many organizations, AI is both interesting and confusing. AITJE wants to be a practical partner in that space: someone who does not just deliver technology, but also helps choose, explain, implement and improve it over time.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="item in whatWeDo"
            :key="item.title"
            class="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">{{ item.badge }}</p>
            <h2 class="mt-3 text-2xl font-black text-gray-900">{{ item.title }}</h2>
            <p class="mt-4 text-sm leading-7 text-gray-600">{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm">
            <img
              src="/images/aitje-client-screens.png"
              alt="AITJE product visual"
              class="h-64 w-full object-cover"
            />
            <div class="p-8">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">What we do</p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Products, services and custom work that connect logically
              </h2>
              <p class="mt-4 text-sm leading-7 text-gray-600">
                AITJE builds a clear product line, offers guidance where needed and delivers custom work when standard routes do not fit. That creates a path organizations can actually follow.
              </p>
            </div>
          </article>

          <article class="rounded-[2.5rem] bg-[#212121] p-8 text-white lg:p-10">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">What we stand for</p>
            <h2 class="mt-3 text-4xl font-black">
              Technology can be smart, but it still needs to stay usable
            </h2>
            <div class="mt-8 grid gap-4 md:grid-cols-2">
              <div
                v-for="value in values"
                :key="value.title"
                class="rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
              >
                <h3 class="text-xl font-semibold text-white">{{ value.title }}</h3>
                <p class="mt-3 text-sm leading-7 text-gray-300">{{ value.text }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article class="rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">Our Team</p>
            <h2 class="mt-3 text-4xl font-black text-gray-900">
              Get to know our team
            </h2>
            <p class="mt-6 max-w-2xl text-base leading-8 text-gray-700">
              AITJE is a small team with a clear conviction: AI should be understandable, responsible and practical for organizations. We are happy to think through your situation and see together what fits.
            </p>
            <NuxtLink
              to="/en/contact"
              class="mt-8 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
            >
              Get acquainted
            </NuxtLink>
          </article>

          <div class="grid gap-6">
            <article class="overflow-hidden rounded-[2.25rem] border border-gray-200 bg-white shadow-sm">
              <img
                src="/images/aitje-cubes.png"
                alt="AITJE product visual"
                class="h-56 w-full object-cover"
              />
            </article>
            <article class="overflow-hidden rounded-[2.25rem] border border-gray-200 bg-white shadow-sm">
              <img
                src="/images/custom-suited.png"
                alt="AITJE collaboration"
                class="h-56 w-full object-cover"
              />
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
const heroStats = [
  {
    badge: "Vision",
    title: "More control",
    text: "Because organizations should be able to choose consciously how and where AI runs.",
  },
  {
    badge: "Focus",
    title: "Practical",
    text: "Not a hype story, but clear choices that remain workable in practice.",
  },
  {
    badge: "Approach",
    title: "Longer term",
    text: "We do not only look at now, but also at continuity, control and sustainability over time.",
  },
];

const whatWeDo = [
  {
    badge: "Products",
    title: "Clear product line",
    text: "We build products such as AITJE Assistent and Notulist for organizations that want AI to be local, clear and manageable.",
  },
  {
    badge: "Services",
    title: "Guidance and strategy",
    text: "We help organizations with AI strategy, consultancy, implementation and choices around infrastructure, processes and adoption.",
  },
  {
    badge: "Custom",
    title: "Custom where needed",
    text: "When standard routes do not fit, we build custom agents, RAG solutions and other AI routes that better match the team's real workflow.",
  },
];

const values = [
  {
    title: "Clarity over jargon",
    text: "We want organizations to quickly understand what something does, why it matters and when it makes sense.",
  },
  {
    title: "Control over dependence",
    text: "We continuously look for ways to make data, knowledge and AI usage less vulnerable to external choices.",
  },
  {
    title: "Stability over hype",
    text: "Not every trend deserves a place inside an organization. We would rather choose something that works and lasts.",
  },
  {
    title: "Partnership over one-off delivery",
    text: "We do not just want to put something in place, but also think about how it keeps working in practice.",
  },
];
</script>
