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
          Services
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Practical guidance around the products from AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AITJE is no longer trying to sell every possible service. The service base is intentionally smaller: AI strategy, consultancy to optimize current use, AITJE Custom and SLA.
        </p>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        <article
          v-for="value in heroValues"
          :key="value.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-5 text-left"
        >
          <component :is="value.icon" class="h-8 w-8 text-[#facc15]" />
          <h3 class="mt-4 text-lg font-semibold text-gray-900">
            {{ value.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-600">{{ value.description }}</p>
        </article>
      </section>

      <section class="mx-auto mt-16 max-w-6xl space-y-6">
        <article
          v-for="service in services"
          :key="service.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 md:p-10"
        >
          <div class="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div class="flex gap-4">
              <div
                class="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
              >
                <component :is="service.icon" class="h-7 w-7" />
              </div>
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400"
                >
                  {{ service.focus }}
                </p>
                <h2 class="text-2xl font-semibold text-gray-900">
                  {{ service.title }}
                </h2>
                <p class="mt-4 text-sm text-gray-600">
                  {{ service.description }}
                </p>
                <p class="mt-3 text-sm text-gray-700">
                  <span class="font-semibold text-gray-900">Outcome:</span>
                  {{ service.result }}
                </p>
                <NuxtLink
                  :to="service.link"
                  class="mt-5 inline-flex text-sm font-semibold text-gray-900 transition hover:text-[#facc15]"
                >
                  More about this service
                </NuxtLink>
              </div>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-5">
              <p
                class="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4a700]"
              >
                What we deliver
              </p>
              <ul class="mt-3 space-y-2 text-sm text-gray-700">
                <li v-for="item in service.details" :key="item">
                  • {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section
        class="mx-auto mt-16 max-w-6xl rounded-[3rem] bg-[#212121] p-10 text-white"
      >
        <div
          class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Pricing & next step
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Request a price list or quote
            </h2>
            <p class="mt-2 text-sm text-gray-300">
              Public price details do not belong on a marketing page. For products, services and SLA we direct people to a price list, quote request or introduction.
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/en/contact?onderwerp=prijslijst"
              class="inline-flex shrink-0 whitespace-nowrap items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-white"
            >
              Request price list
            </NuxtLink>
            <NuxtLink
              to="/en/contact?onderwerp=offerte"
              class="inline-flex shrink-0 whitespace-nowrap items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Request quote
            </NuxtLink>
          </div>
        </div>
      </section>

      <section
        class="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Collaboration
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            From first question to a workable approach
          </h2>
          <div class="mt-6 space-y-4">
            <div
              v-for="(step, idx) in steps"
              :key="step.title"
              class="rounded-3xl border border-gray-100 p-5"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Step {{ idx + 1 }}
              </p>
              <h3 class="mt-2 text-xl font-semibold text-gray-900">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </article>
        <article
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 lg:sticky lg:top-24 lg:self-start"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Why this is narrower
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Less posturing, more focus
          </h2>
          <p class="mt-3 text-sm text-gray-600">
            AITJE no longer positions itself as a broad custom software agency. The services are here to help organizations practically around local Edge AI and the fixed product line.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>• Clearer route for decision-makers and non-technical teams.</li>
            <li>• Less confusion between product, service and custom work.</li>
            <li>• Stronger connection between products and guidance.</li>
          </ul>
          <NuxtLink
            to="/en/contact?onderwerp=kennismaking"
            class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Plan an introduction
          </NuxtLink>
        </article>
      </section>
    </main>

    <BottomCta />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  ClipboardPenLine,
  HeartHandshake,
  Leaf,
  PlugZap,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";

const heroValues = [
  {
    title: "Smaller and clearer",
    description:
      "No broad service menu anymore, just four concrete routes that match the current product direction.",
    icon: PlugZap,
  },
  {
    title: "Strategic and practical",
    description:
      "We help think through direction, usage and implementation without turning it into inflated consultancy language.",
    icon: HeartHandshake,
  },
  {
    title: "Control and continuity",
    description:
      "The focus is on more control over AI usage, less dependency and practical choices for the long term.",
    icon: Leaf,
  },
];

const services = [
  {
    title: "AI strategy",
    focus: "Strategy",
    description:
      "We help determine where AI adds the most value, what Edge AI does and does not make sense for your organization and which first steps are realistic.",
    result:
      "A concrete plan that helps you move forward without getting lost in the AI landscape.",
    details: [
      "Where AI can add direct value now",
      "Which type of deployment fits your organization",
      "Clear first choices instead of loose ideas",
    ],
    icon: PlugZap,
    link: "/en/diensten/ai-strategie",
  },
  {
    title: "Consultancy: optimize current usage",
    focus: "Cost & stability",
    description:
      "We analyze current AI usage and look at where cost, stability and dependency can be improved.",
    result:
      "More control over usage, vendors and practical AI deployment.",
    details: [
      "Analysis of the current AI stack and usage",
      "Lower dependence on external platforms where logical",
      "Advice on local software or Edge AI in the workflow",
    ],
    icon: ClipboardPenLine,
    link: "/en/diensten/consultancy",
  },
  {
    title: "AITJE Custom",
    focus: "Custom route",
    description:
      "For organizations where the fixed solutions are not enough and AITJE needs to help shape hardware, workflows or agentic deployment.",
    result:
      "A route that matches the real situation of the organization more closely.",
    details: [
      "Strategic thinking around Edge AI",
      "Alternative hardware where standard is not enough",
      "Practical translation from idea to workable approach",
    ],
    icon: Sparkles,
    link: "/en/diensten/aitje-custom",
  },
  {
    title: "SLA",
    focus: "Monthly collaboration",
    description:
      "A monthly collaboration for support, updates, reserved time, installation help and advice around products and Edge AI implementations.",
    result:
      "Ongoing support without solving everything ad hoc.",
    details: [
      "Fixed time and support each month",
      "Software and model updates when needed",
      "5 euros PromptPaleis credit each month for SLA customers",
    ],
    icon: ShieldCheck,
    link: "/en/diensten/sla",
  },
];

const steps = [
  {
    title: "Introduction",
    description: "We discuss the context, question and ambition of the organization.",
  },
  {
    title: "Check what fits",
    description: "We determine whether an existing product fits or whether a service or custom route makes more sense.",
  },
  {
    title: "Choose the first direction",
    description: "We make the step toward a plan, price list, quote or first implementation concrete.",
  },
  {
    title: "Implement and improve",
    description: "We continue with implementation, support or monthly collaboration.",
  },
];
</script>
