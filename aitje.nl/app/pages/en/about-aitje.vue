<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          About AITJE
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          A look at who we are, what we do and what we stand for
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AITJE is a Dutch company that helps organizations use AI in a
          smarter, more independent and future-ready way. Not as a vague AI
          label, but as a partner with clear products, clear choices and
          practical guidance.
        </p>
      </section>

      <section class="mx-auto mt-4 max-w-5xl">
        <div
          class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
        >
          <div v-if="youtubeEmbedUrl" class="aspect-video w-full">
            <iframe
              :src="youtubeEmbedUrl"
              title="AITJE video"
              class="h-full w-full"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share;
              "
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
          <div
            v-else
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
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Why AITJE
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            A practical route between hype and standstill
          </h2>
          <div class="mx-auto mt-6 max-w-4xl space-y-5 text-base leading-8 text-gray-700">
            <p>
              For many organizations, AI is both interesting and confusing.
              AITJE wants to be a practical partner in that: someone who not
              only delivers technology, but also helps choose, explain,
              implement and improve it over time.
            </p>
          </div>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.15fr_0.9fr] lg:items-center">
          <div class="grid gap-6">
            <article
              v-for="value in valueColumns.left"
              :key="value.title"
              class="rounded-[2.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <h3 class="text-2xl font-black text-gray-900">
                {{ value.title }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-gray-600">
                {{ value.text }}
              </p>
            </article>
          </div>

          <article class="rounded-[2.75rem] border border-gray-200 bg-white p-8 text-center shadow-sm lg:p-10">
            <img
              src="/images/aitje-logo.png"
              alt="AITJE logo"
              class="mx-auto h-24 w-auto object-contain"
            />
            <p class="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Our vision
            </p>
            <h3 class="mt-3 text-4xl font-black text-gray-900">
              AI should work for your organization, not the other way around
            </h3>
            <div class="mt-5 space-y-4 text-base leading-8 text-gray-700">
              <p>
                AI is here to stay. Agents, LLMs, image generation and video
                generation will play an increasingly large role in how
                organizations work.
              </p>
              <p>
                Our view is that it is better to prepare for that development on
                your own systems, without full dependence on foreign parties,
                Big Tech or external platforms.
              </p>
              <p>
                That is why we do not only look at what is technically possible,
                but especially at what stays usable, responsible and workable.
                The newest tool is not automatically the right tool.
              </p>
            </div>
          </article>

          <div class="grid gap-6">
            <article
              v-for="value in valueColumns.right"
              :key="value.title"
              class="rounded-[2.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <h3 class="text-2xl font-black text-gray-900">
                {{ value.title }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-gray-600">
                {{ value.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        class="mx-auto mt-16 max-w-7xl overflow-hidden rounded-[3rem] bg-[#facc15] text-black shadow-sm"
      >
        <div
          class="grid gap-8 px-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-12"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-black/60"
            >
              What we do
            </p>
            <h2 class="mt-3 text-4xl font-black">
              Products, services and custom work that connect logically
            </h2>
            <div class="mt-5 max-w-2xl space-y-4 text-base leading-8 text-black/75">
              <p>
                AITJE is building a clear product line, offers guidance where
                needed and delivers custom work when standard options do not fit
                well. That creates a route organizations can actually follow.
              </p>
              <p>
                We build products such as AITJE Assistant and Notetaker for
                organizations that want to use AI locally, clearly and in a
                manageable way. In addition, we help organizations with AI
                strategy, consultancy, implementation and choices around
                infrastructure, processes and deployment.
              </p>
            </div>
          </div>

          <article
            class="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/70 shadow-sm"
          >
            <img
              src="/images/aitje-client-screens.png"
              alt="AITJE product visual"
              class="h-full min-h-[22rem] w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="text-center">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Vision
          </p>
          <h2 class="mt-3 text-4xl font-black text-gray-900">
            AI should work for your organization, not the other way around
          </h2>
          <p class="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-700">
            AI is here to stay. Agents, LLMs, image generation and video
            generation will play an increasingly large role in how organizations
            work. Our view is that it is better to prepare for that development
            on your own systems, without full dependence on foreign parties, Big
            Tech or external platforms.
          </p>
        </div>
      </section>

      <section class="mx-auto mt-12 max-w-7xl">
        <div class="rounded-[3rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            What we believe in
          </p>
          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <article
              v-for="card in visionCards"
              :key="card.title"
              class="rounded-[1.75rem] border border-gray-100 bg-[#fafafa] p-6"
            >
              <h3 class="text-2xl font-black text-gray-900">
                {{ card.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ card.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article
            class="h-max rounded-[2.5rem] bg-[#212121] p-8 text-white shadow-sm lg:self-start lg:p-10"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Our team
            </p>
            <h2 class="mt-3 text-4xl font-black">Get to know our team</h2>
            <p class="mt-6 max-w-2xl text-base leading-8 text-gray-300">
              AITJE is a small team with a clear conviction: AI should be
              understandable, responsible and practical for organizations. We
              like to think along about your situation and look together at what
              fits logically.
            </p>
            <NuxtLink
              :to="localePath('/contact')"
              class="mt-8 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white hover:text-black"
            >
              Get acquainted
            </NuxtLink>
          </article>

          <div class="grid gap-6">
            <article
              class="overflow-hidden rounded-[2.25rem] border border-gray-200 bg-white shadow-sm"
            >
              <img
                src="/images/aitje-cubes.png"
                alt="AITJE product visual"
                class="h-64 w-full object-cover"
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
const { localePath } = useSiteLocale();

const youtubeEmbedUrl = "";

const visionCards = [
  {
    title: "The market changes fast",
    text: "AI is becoming a fixed part of modern organizations. Agents, LLMs, image generation and video generation will change processes, while the parties behind them will eventually want to earn back their investments.",
  },
  {
    title: "Dependence creates vulnerability",
    text: "External AI costs can rise sharply, platform decisions by third parties directly affect your operation and full dependence makes organizations vulnerable over time.",
  },
  {
    title: "Software, hardware and guidance",
    text: "AITJE offers hardware and software to let your organization work with AI in a future-ready way. Not as hype, but as practical infrastructure with which you keep control over data, costs and continuity.",
  },
  {
    title: "Practical inside the organization",
    text: "Local access to documents and knowledge through an LLM, practical use for teams and business processes, and support with secure integration.",
  },
];

const values = [
  {
    title: "Clarity over jargon",
    text: "We want organizations to quickly understand what something does, why it is relevant and when it makes sense.",
  },
  {
    title: "Control over dependence",
    text: "We keep looking for ways to make data, knowledge and AI usage less vulnerable to outside decisions.",
  },
  {
    title: "Stability over hype",
    text: "Not every trend deserves a place in an organization. We would rather choose something that works and keeps working.",
  },
  {
    title: "Partnership over one-off delivery",
    text: "We do not only want to put something in place, but also think along about how it keeps working in practice.",
  },
];

const valueColumns = {
  left: values.slice(0, 2),
  right: values.slice(2, 4),
};
</script>
