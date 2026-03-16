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
          Services & Custom Solutions
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          We are your strategic AI partner
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AITJE is more than a hardware product or an application. We help future-proof your organization the right way through the way that suits you and your organization. When one of our fixed solutions is not the solution for you, we are happy to develop a custom product that is.
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
                  <span class="font-semibold text-gray-900">Results:</span>
                  {{ service.result }}
                </p>
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
              Investment & return
            </p>
            <h2 class="mt-3 text-3xl font-black">
              Predictable annual costs
            </h2>
            <p class="mt-2 text-sm text-gray-300">
              We build AI solutions that put you in sustainable control with a one-time investment. If we optimize your current stack, we structurally reduce costs, increase control and reduce dependency.
            </p>
          </div>
          <NuxtLink
            :to="localePath('/contact?onderwerp=offerte')"
            class="inline-flex shrink-0 whitespace-nowrap items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Request a quote
          </NuxtLink>
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
            Strategic partnership
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            From introduction to the warm nest of AITJE
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
            Why now
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Be ahead of problems
          </h2>
          <p class="mt-3 text-sm text-gray-600">
            The AI world is changing at lightning speed. Without a partner, you risk higher costs, loose systems and unnecessary data risks in the coming years.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li>- Avoid costly ad hoc choices and vendor lock-in.</li>
            <li>
              - Mitigate data breach risks with secure, thoughtful architecture.
            </li>
            <li>
              - Make your organization future-proof and ready for innovation.
            </li>
          </ul>
          <NuxtLink
            :to="localePath('/contact?onderwerp=demo')"
            class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Schedule a demo
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
  BookOpenCheck,
  ClipboardPenLine,
  Cog,
  Leaf,
  PlugZap,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";

const { localePath } = useSiteLocale();

const heroValues = [
  {
    title: "Independence",
    description:
      "Not dependent on external sources and preferably not dependent on the Internet.",
    icon: PlugZap,
  },
  {
    title: "Strategic partnership",
    description:
      "We think with you with a focus on a system that works for your organization.",
    icon: Sparkles,
  },
  {
    title: "Nature & privacy",
    description:
      "We build economically: fewer requests, green or serverless infrastructure.",
    icon: Leaf,
  },
];

const services = [
  {
    title: "Devise AI strategy",
    focus: "Strategy",
    description:
      "We help think through where AI is bringing the most value to your organization right now and what steps make sense to take.",
    result:
      "A clear plan that allows you to start immediately, without getting lost in all the AI options.",
    details: [
      "A report showing where AI immediately adds value in your organization",
      "A plan for which tools you can already use today",
      "Roadmap with clear priorities and next steps",
      "Practical choices for tooling and approach",
    ],
    icon: PlugZap,
  },
  {
    title: "Consultancy: optimizing consumption",
    focus: "Cost & stability",
    description:
      "We analyze your current AI usage and make your stack cheaper, more stable and less dependent on 1 party.",
    result:
      "Lower costs, better performance and more control over your suppliers.",
    details: [
      "Analysis of token usage, costs and latency",
      "Smart routing between multiple models",
      "Vendor-independent setup with multiple providers",
      "API architecture and fallback scenarios",
    ],
    icon: ClipboardPenLine,
  },
  {
    title: "RAG chat & customized solutions",
    focus: "Knowledge-driven AI",
    description:
      "From AITJE assistant to custom software: chat in, answer back with matched context from your own knowledge.",
    result:
      "Immediately actionable answers based on your own documents and business context.",
    details: [
      "RAG chat with documents, policies and internal knowledge",
      "Reliable context matching with source control",
      "Integration into existing processes and teams",
      "Maintenance, monitoring and ongoing development",
    ],
    icon: BookOpenCheck,
  },
  {
    title: "Customized software solutions",
    focus: "Custom development",
    description:
      "We build custom software and applications that make AI a logical part of your daily operations.",
    result:
      "Tools that fit your workflow exactly instead of generic software around it.",
    details: [
      "Custom web and mobile applications",
      "Internal tools for teams and operational processes",
      "Generators for content, reports and simple actions",
      "Integrations with CRM, MCP, ERP and internal APIs",
    ],
    icon: Sparkles,
  },
  {
    title: "Local LLM installation",
    focus: "Continuity & independence",
    description:
      "We install a local LLM on your own infrastructure, so your business keeps running without depending on external AI platforms.",
    result:
      "AI availability on your own environment, even if external services are down.",
    details: [
      "Local setup and secure configuration",
      "Model choice per use case and hardware profile",
      "Fallback architecture and management agreements",
      "Your business is not without AI as long as you have power",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Custom agents",
    focus: "Agentic automation",
    description:
      "We build a personal agent that fits your processes, team and data flows.",
    result:
      "Repeatable work is handled automatically with clear control.",
    details: [
      "Agent design per department or role",
      "Integration with internal tools and data sources",
      "Security, permissions and auditability built in",
      "Iteratively improved based on usage",
    ],
    icon: Cog,
  },
  {
    title: "AI workflows with or without human-in-the-loop",
    focus: "Workflow orchestration",
    description:
      "We automate steps where we can and add human control where we must.",
    result:
      "Faster processes with the right balance of automation and human direction.",
    details: [
      "Workflows with approval steps for critical actions",
      "Fully automated flows for routine tasks",
      "Escalations, fallback and quality controls",
      "Measurable SLAs and continuous optimization",
    ],
    icon: ShieldCheck,
  },
  {
    title: "SLA agreement",
    focus: "Service & support",
    description:
      "With an SLA, we keep your AI environment actively healthy with firm support, periodic check-ins and quick help with outages.",
    result:
      "More peace of mind in operations and clear agreements on support, follow-up and availability.",
    details: [
      "Monthly check-up by phone or email to discuss bottlenecks",
      "Fixed service hours per month you can use for support and improvement",
      "Unused service hours roll over to the next month",
      "Incident service with a separate phone number and email address for urgent incidents involving an AITJE workflow or device",
    ],
    icon: ClipboardPenLine,
  },
];

const steps = [
  {
    title: "Getting to know",
    description: "We explore your goals, context and ambitions with AI.",
  },
  {
    title: "Getting to know current organization",
    description:
      "We look at processes, systems, teams and current AI deployment.",
  },
  {
    title: "Identifying bottlenecks and desires",
    description:
      "We determine where gains can be made in quality, cost and speed.",
  },
  {
    title: "Apply initial implementations",
    description:
      "We put the first solutions live and secure them in your organization.",
  },
  {
    title: "Monitor, improve, expand and optimize",
    description:
      "Based on usage data, we continuously improve your AI landscape.",
  },
  {
    title: "Long partnership in AI",
    description: "We remain available for questions, choices and new opportunities.",
  },
];
</script>
