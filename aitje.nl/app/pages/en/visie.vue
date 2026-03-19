<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />
    <main class="px-6 pt-32">
      <section
        class="mx-auto w-full px-4 py-12 text-center sm:max-w-5xl sm:px-8"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]"
        >
          Vision
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          AI should work for your organization, not the other way around
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AI is here to stay. Agents, LLMs, image generation and video generation are going to play an increasing role in how organizations work. Our view is that you can better prepare for that development on your own systems, without complete dependence on foreign countries, Big Tech or external platforms.
        </p>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
        <article
          v-for="principle in principles"
          :key="principle.title"
          class="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow"
        >
          <div
            class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
          >
            <component :is="principle.icon" class="h-7 w-7" />
          </div>
          <p
            class="mt-4 text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
          >
            {{ principle.badge }}
          </p>
          <h3 class="mt-2 text-2xl font-semibold text-gray-900">
            {{ principle.title }}
          </h3>
          <p class="mt-3 text-sm text-gray-600">{{ principle.description }}</p>
        </article>
      </section>

      <section class="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-2">
        <article
          v-for="point in visionPoints"
          :key="point.title"
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div class="flex items-center gap-4">
            <component :is="point.icon" class="h-10 w-10 text-[#facc15]" />
            <div>
              <h2 class="text-2xl font-semibold text-gray-900">
                {{ point.title }}
              </h2>
              <p class="text-sm text-gray-500">{{ point.subtitle }}</p>
            </div>
          </div>
          <p class="mt-4 text-gray-700">{{ point.description }}</p>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li
              v-for="item in point.highlights"
              :key="item"
              class="flex items-center gap-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-[#facc15]"></span>
              {{ item }}
            </li>
          </ul>
        </article>
      </section>

      <section
        class="mx-auto mt-20 max-w-6xl rounded-3xl border border-gray-200 bg-white p-10 shadow"
      >
        <p
          class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
        >
          What we believe in
        </p>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <article
            v-for="value in values"
            :key="value.title"
            class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
          >
            <div class="flex items-center gap-3">
              <component :is="value.icon" class="h-6 w-6 text-[#facc15]" />
              <h3 class="text-xl font-semibold text-gray-900">
                {{ value.title }}
              </h3>
            </div>
            <p class="mt-3 text-sm text-gray-600">{{ value.description }}</p>
          </article>
        </div>
      </section>

      <section
        class="mx-auto mt-20 max-w-6xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <article class="rounded-3xl bg-[#212121] p-8 text-white shadow">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Roadmap
          </p>
          <h2 class="mt-3 text-3xl font-black">
            We develop and experiment abundantly
          </h2>
          <p class="mt-3 text-sm text-gray-200">
            AI is evolving rapidly. That's why we continuously build and test on hardware, software, agents, workflows and applications that help customers deploy AI practically and securely.
          </p>
          <ul class="mt-6 space-y-4 text-sm text-gray-100">
            <li v-for="item in roadmapHighlights" :key="item.title">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                {{ item.badge }}
              </p>
              <p class="font-semibold">{{ item.title }}</p>
              <p class="text-gray-300">{{ item.description }}</p>
            </li>
          </ul>
          <NuxtLink
            :to="localePath('/roadmap')"
            class="mt-8 inline-flex text-sm font-semibold text-[#facc15] transition hover:text-white"
          >
            View the full roadmap
          </NuxtLink>
        </article>
        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Risks & focus
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Why this is important now
          </h2>
          <div class="mt-6 space-y-4">
            <div
              v-for="risk in risks"
              :key="risk.title"
              class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
            >
              <h3 class="text-xl font-semibold text-gray-900">
                {{ risk.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ risk.description }}</p>
              <p class="mt-2 text-xs font-semibold text-gray-900">
                {{ risk.solution }}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-20 max-w-6xl">
        <div class="rounded-3xl border border-gray-200 bg-white p-10 shadow">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Collaboration
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            We make your organization AI-proof for the future
          </h2>
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            <article
              v-for="move in collaborationPoints"
              :key="move.title"
              class="rounded-2xl border border-gray-100 bg-[#fafafa] p-5"
            >
              <h3 class="text-xl font-semibold text-gray-900">
                {{ move.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ move.description }}</p>
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
  Globe,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";

const { localePath } = useSiteLocale();

const principles = [
  {
    title: "Independence",
    badge: "Less reliance on Big Tech",
    description:
      "Those who build AI entirely on external platforms are also building in dependence on price changes, terms and choices from large foreign parties.",
    icon: ShieldCheck,
  },
  {
    title: "Continuity",
    badge: "Working if internet or hosting fails",
    description:
      "When the Internet, cloud hosting or a remote platform goes down, you don't want to shut down immediately. With local AI solutions, knowledge and documentation remains accessible.",
    icon: Globe,
  },
  {
    title: "Growing responsibly",
    badge: "AI-proof and more aware",
    description:
      "We help organizations modernize with AI while reducing waste and being mindful of infrastructure, energy and long-term dependence.",
    icon: Leaf,
  },
];

const visionPoints = [
  {
    title: "Why local is becoming more important",
    subtitle: "The market is changing rapidly",
    description:
      "AI is becoming an integral part of modern organizations. Agents, LLMs, image generation and video generation are going to change processes, but the parties investing billions in them want to get a return on that eventually.",
    highlights: [
      "External AI costs can rise sharply",
      "Third-party platform choices directly affect your operations",
      "Full dependence makes you vulnerable",
    ],
    icon: Sparkles,
  },
  {
    title: "What AITJE builds for",
    subtitle: "Software, hardware and guidance",
    description:
      "AITJE offers hardware and software to make your organization future-proof with AI. Not as hype, but as a practical infrastructure to keep a grip on data, costs and continuity.",
    highlights: [
      "Local access to documents and knowledge via an LLM",
      "Practical use for teams and business processes",
      "Support for secure integration",
    ],
    icon: HeartHandshake,
  },
];

const values = [
  {
    title: "AI must serve your organization",
    description:
      "Your business should not have to build around AI. Technology should adapt to your processes, people and responsibilities.",
    icon: ShieldCheck,
  },
  {
    title: "Preparing is better than being surprised",
    description:
      "Those who make conscious choices in infrastructure and data now avoid costly migrations, lock-in and dependence on platforms that change their pricing models later.",
    icon: Sparkles,
  },
  {
    title: "Local where possible, external where necessary",
    description:
      "We are not dogmatic. We look at each situation to see what should remain local and where links or cloud make sense, as long as the control remains with you.",
    icon: Globe,
  },
  {
    title: "Technology may also be better for the planet",
    description:
      "By not running everything through large external infrastructure by default, you work more consciously with computing power, data traffic and its impact.",
    icon: Sparkles,
  },
];

const roadmapHighlights = [
  {
    badge: "Now",
    title: "Experimentation and development",
    description:
      "We are constantly testing new applications, models, interfaces and integrations to see what really adds value in practice.",
  },
  {
    badge: "Continuous",
    title: "Building practical solutions",
    description:
      "Our focus is on products and services that help organizations integrate AI securely, usably and future-proof.",
  },
  {
    badge: "Want to know more?",
    title: "Follow the roadmap",
    description:
      "For current direction and concrete steps, please see the roadmap page.",
  },
];

const risks = [
  {
    title: "Costs don't get lower by themselves",
    description:
      "Big Tech has invested hugely in AI and will need to recoup that investment. Those who build entirely on external AI platforms may face higher structural costs later.",
    solution:
      "That's why we believe in a model where local infrastructure and smart choices give you more control.",
  },
  {
    title: "Continuity is a business risk",
    description:
      "If a major hosting party, Internet connection or external AI platform goes down, your organization can instantly shut down when everything leans on it.",
    solution:
      "Some of AITJE's solutions allow you to continue working locally with documents and knowledge through an LLM.",
  },
  {
    title: "With whom do you actually share your sensitive corporate data?",
    description:
      "Those who use AI through external platforms often unknowingly share documents, questions, internal knowledge and business context with parties outside their own organization. Many companies are still too little aware of this.",
    solution:
      "That's why we think it's important to take a critical look at where your data is going and what parts you can better organize locally or within your own environment.",
  },
];

const collaborationPoints = [
  {
    title: "Software and hardware that make sense together",
    description:
      "We don't just provide individual tools, but build a combination of hardware, software and usage that works practically within your organization.",
  },
  {
    title: "Strategic cooperation",
    description:
      "Our goal is a long-term relationship where you can focus on your business and we help with the AI aspect of your business.",
  },
  {
    title: "Secure integration in practice",
    description:
      "We look at what can be done responsibly, what data should remain local and how AI becomes usable without unnecessary risk.",
  },
  {
    title: "Practical, not theoretical",
    description:
      "Not an abstract future story, but concrete solutions that will help teams work better today and be stronger tomorrow.",
  },
];
</script>
