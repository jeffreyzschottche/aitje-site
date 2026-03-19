<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section class="mx-auto max-w-6xl rounded-[3rem] bg-[#212121] px-8 py-12 text-white md:px-12 md:py-16">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          Products
        </p>
        <h1 class="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
          Products, software and applications from AITJE
        </h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          From local AI hardware and our own software to applications that are
          directly usable inside your organization. Here you can see what you
          can start with, what you can combine and where custom work becomes the
          logical next step.
        </p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <NuxtLink
            :to="localePath('/diensten')"
            class="inline-flex w-fit items-center justify-center self-start whitespace-nowrap rounded-full bg-[#facc15] px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white"
          >
            View services
          </NuxtLink>
          <NuxtLink
            :to="localePath('/cases')"
            class="inline-flex w-fit items-center justify-center self-start whitespace-nowrap rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white"
          >
            View cases
          </NuxtLink>
        </div>
      </section>

      <section class="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-3">
        <article
          v-for="stat in productStats"
          :key="stat.label"
          class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            {{ stat.label }}
          </p>
          <p class="mt-3 text-2xl font-black text-gray-900">{{ stat.value }}</p>
          <p class="mt-2 text-sm text-gray-600">{{ stat.description }}</p>
        </article>
      </section>

      <section class="mx-auto mt-16 max-w-6xl rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              1. AITJE Assistant
            </p>
            <h2 class="mt-3 text-3xl font-black text-gray-900 md:text-4xl">
              Hardware and local interfaces that are already ready to use
            </h2>
            <p class="mt-3 max-w-3xl text-base text-gray-600">
              From the AITJE Cube itself to our self-built OS, client, embedding
              environment or custom builds. These are the existing components
              you can start with immediately and continue building on.
            </p>
          </div>
          <NuxtLink
            :to="localePath('/producten/hardware')"
            class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:text-[#facc15]"
          >
            More info
          </NuxtLink>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-3">
          <article
            v-for="item in hardwareShowcase"
            :key="item.title"
            class="overflow-hidden rounded-[2rem] border border-gray-200 bg-[#fafafa]"
          >
            <div class="aspect-[4/3] bg-gradient-to-br from-[#f7f7f7] to-white p-5">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div class="p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                {{ item.label }}
              </p>
              <h3 class="mt-2 text-2xl font-black text-gray-900">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-sm text-gray-600">{{ item.description }}</p>
              <NuxtLink
                :to="item.link"
                class="mt-5 inline-flex text-sm font-semibold text-gray-900 transition hover:text-[#facc15]"
              >
                {{ item.cta }}
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-6xl rounded-[2.5rem] border border-gray-200 bg-[#212121] p-8 text-white shadow-sm md:p-10">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              2. Software
            </p>
            <h2 class="mt-3 text-3xl font-black md:text-4xl">
              Out-of-the-box solutions
            </h2>
            <p class="mt-3 max-w-3xl text-base text-gray-300">
              Our solutions keep growing. If we already have a modular solution
              that fits your situation out of the box, you can view it here and
              click through directly to the right software page.
            </p>
          </div>
          <NuxtLink
            :to="localePath('/producten/software')"
            class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            More info
          </NuxtLink>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in softwareShowcase"
            :key="item.link"
            class="overflow-hidden rounded-[2rem] border border-white/10 bg-[#161616]"
          >
            <div class="aspect-[4/3] border-b border-white/10 bg-black/20 p-4">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full rounded-[1.5rem] bg-white object-contain p-3"
              />
            </div>
            <div class="p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                {{ item.label }}
              </p>
              <h3 class="mt-2 text-2xl font-black text-white">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-sm text-gray-300">{{ item.description }}</p>
              <NuxtLink
                :to="item.link"
                class="mt-5 inline-flex text-sm font-semibold text-[#facc15] transition hover:text-white"
              >
                Open software page
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-6xl rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              3. Services
            </p>
            <h2 class="mt-3 text-3xl font-black text-gray-900 md:text-4xl">
              How we help organizations with implementation and custom work
            </h2>
            <p class="mt-3 max-w-3xl text-base text-gray-600">
              AITJE thinks strategically with you about how AI can add real
              value inside your organization. View our services to quickly see
              where we support you in content, technology and operations.
            </p>
          </div>
          <NuxtLink
            :to="localePath('/diensten')"
            class="inline-flex w-fit items-center justify-center self-start whitespace-nowrap rounded-full bg-[#facc15] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
          >
            View services
          </NuxtLink>
        </div>

        <div class="mt-8 grid gap-5 lg:grid-cols-2">
          <article
            v-for="service in services"
            :key="service.title"
            class="rounded-[2rem] border border-gray-200 bg-[#fafafa] p-6"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ service.focus }}
            </p>
            <h3 class="mt-3 text-2xl font-black text-gray-900">
              {{ service.title }}
            </h3>
            <p class="mt-3 text-sm text-gray-600">{{ service.description }}</p>
            <div class="mt-5 rounded-[1.5rem] bg-white p-4">
              <p class="text-sm font-semibold text-gray-900">Result</p>
              <p class="mt-2 text-sm text-gray-600">{{ service.result }}</p>
            </div>
            <ul class="mt-5 space-y-3 text-sm text-gray-700">
              <li
                v-for="detail in service.details"
                :key="detail"
                class="flex items-start gap-3"
              >
                <span class="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#facc15]"></span>
                <span>{{ detail }}</span>
              </li>
            </ul>
            <NuxtLink
              :to="localePath('/diensten')"
              class="mt-5 inline-flex text-sm font-semibold text-gray-900 transition hover:text-[#facc15]"
            >
              More about this service
            </NuxtLink>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-6xl rounded-[3rem] bg-[#212121] p-10 text-white">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Situational solutions
            </p>
            <h2 class="mt-3 text-3xl font-black md:text-4xl">
              We also design specific solutions for a concrete situation
            </h2>
            <p class="mt-4 text-base text-gray-300">
              Not every question fits standard hardware or an existing software
              page. In our cases you can see how we tailor applications,
              agents, workflows and implementations to real context.
            </p>
          </div>
          <NuxtLink
            :to="localePath('/cases')"
            class="inline-flex w-fit items-center justify-center self-start whitespace-nowrap rounded-full bg-[#facc15] px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white"
          >
            View cases
          </NuxtLink>
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { softwareCatalog } from "@/data/softwareCatalog.en";

const { localePath } = useSiteLocale();

const productStats = [
  {
    label: "Overview",
    value: "Hardware + software",
    description:
      "This page shows the combined AITJE line: devices, local interfaces, software and applications.",
  },
  {
    label: "Build further",
    value: "From existing to custom",
    description:
      "You can start with existing building blocks and scale from there to integrations, knowledge layers and custom trajectories.",
  },
  {
    label: "Next step",
    value: "Services and cases",
    description:
      "If your question does not fully fit an existing product, services and cases show how we extend it into your real-world situation.",
  },
];

const hardwareShowcase = [
  {
    label: "Hardware",
    title: "AITJE Assistant",
    image: "/images/aitje-cubes.png",
    link: "/en/producten/hardware/aitje-assistent",
    description:
      "The local AI assistant on proprietary hardware with a knowledge base, offline accessibility and API access.",
    cta: "More about AITJE Assistant",
  },
  {
    label: "Hardware",
    title: "AITJE Custom",
    image: "/images/custom-suited.png",
    link: "/en/producten/hardware/aitje-custom",
    description:
      "For situations where standard hardware is not the exact fit and you need more performance or specific integrations.",
    cta: "More about AITJE Custom",
  },
  {
    label: "Software",
    title: "AITJE Assistant OS",
    image: "/images/os-screenshots/chatassistent.jpeg",
    link: "/en/producten/software/aitje-assistent-os",
    description:
      "The local cockpit on the cube where chat, knowledge, maps, devices and management come together.",
    cta: "More about AITJE Assistant OS",
  },
];

const softwareLabelForSlug = (slug: string) => {
  if (slug.startsWith("wordpress-")) return "WordPress";
  if (slug.startsWith("aitje-assistent-")) return "AITJE";
  if (slug === "promptpaleis") return "AI platform";
  if (slug === "raad-van-bestuur") return "Council";
  return "Software";
};

const softwareShowcase = softwareCatalog
  .filter((item) => item.slug !== "aitje-notulist")
  .map((item) => ({
    label: softwareLabelForSlug(item.slug),
    title: item.title,
    image: item.image,
    link: `/en/producten/software/${item.slug}`,
    description: item.shortDescription,
  }));

const services = [
  {
    focus: "Costs & stability",
    title: "Consulting: optimize usage",
    description:
      "We analyze your current AI usage and make your stack cheaper, more stable and less dependent on one party.",
    result:
      "Lower costs, better performance and more control over your vendors.",
    details: [
      "Analysis of token usage, costs and latency",
      "Smart routing between multiple models",
    ],
  },
  {
    focus: "Strategy",
    title: "Design your AI strategy",
    description:
      "We help think through where AI delivers the most value for your organization right now and which next steps make sense.",
    result:
      "A clear plan you can start with immediately, without getting lost in all the AI options.",
    details: [
      "A report showing where AI can add direct value in your organization",
      "A plan for which tools you can already use today",
    ],
  },
  {
    focus: "Knowledge-driven AI",
    title: "RAG chat and custom solutions",
    description:
      "From AITJE Assistant to custom software: question in, answer back with matched context from your own knowledge.",
    result:
      "Directly usable answers based on your own documents and business context.",
    details: [
      "RAG chat with documents, policies and internal knowledge",
      "Integration into existing processes and teams",
    ],
  },
  {
    focus: "Implementation",
    title: "Custom software solutions",
    description:
      "We build custom software and applications that make AI a logical part of your daily operation.",
    result:
      "Tools that match your workflow exactly instead of generic software wrapped around it.",
    details: [
      "Custom agents, dashboards and internal tools",
      "Connection to existing processes, teams and systems",
    ],
  },
];
</script>
