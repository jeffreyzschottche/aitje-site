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
          Products
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Choose your golden AITJE
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Based on our business plan: three packages of hardware, services and subscriptions. All 100% local, nature-friendly and independent of US corporations.
        </p>
      </section>

      <section class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        <div
          v-for="value in valueProps"
          :key="value.title"
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-5"
        >
          <div class="flex items-center gap-3 text-[#facc15]">
            <component :is="value.icon" class="h-6 w-6" />
            <h3 class="text-lg font-semibold text-gray-900">
              {{ value.title }}
            </h3>
          </div>
          <p class="mt-3 text-sm text-gray-600">{{ value.description }}</p>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-6xl grid gap-8 lg:grid-cols-3">
        <article
          v-for="plan in plans"
          :key="plan.title"
          class="flex flex-col rounded-3xl border-2 p-6 shadow-xl"
          :class="
            plan.featured
              ? 'border-[#facc15] bg-[#facc15]'
              : 'border-gray-200 bg-white'
          "
        >
          <img
            :src="plan.image"
            :alt="plan.title"
            class="mb-6 w-full rounded-2xl border border-white/40 object-cover shadow"
          />
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400"
          >
            {{ plan.tier }}
          </p>
          <h2 class="mt-2 text-3xl font-black text-gray-900">
            {{ plan.title }}
          </h2>
          <p class="mt-2 text-sm text-gray-600">{{ plan.description }}</p>
          <div
            class="mt-6 rounded-2xl bg-white/80 p-4"
            :class="plan.featured ? 'shadow-lg shadow-[#facc15]/50' : ''"
          >
            <div class="flex items-baseline gap-2">
              <span class="text-4xl font-black text-gray-900">{{
                plan.price
              }}</span>
              <span class="text-sm text-gray-500">one-time</span>
            </div>
            <p class="mt-4 text-sm text-gray-700">
              <span class="font-semibold text-gray-900">Recurring:</span>
              {{ plan.recurring }}
            </p>
          </div>
          <ul class="mt-8 flex-1 space-y-3 text-sm text-gray-700">
            <li
              v-for="perk in plan.perks"
              :key="perk"
              class="flex items-start gap-3"
            >
              <Check class="mt-1 h-5 w-5 flex-shrink-0 text-[#facc15]" />
              <span>{{ perk }}</span>
            </li>
          </ul>
          <div class="mt-8 rounded-2xl bg-[#fafafa] p-4 text-sm text-gray-600">
            <p class="font-semibold text-gray-900">Services:</p>
            <p>{{ plan.service }}</p>
          </div>
          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              class="w-full rounded-full px-6 py-3 text-sm font-semibold cursor-pointer transition-colors duration-200"
            :class="
              plan.featured
                ? 'bg-black text-white hover:bg-black hover:text-[#facc15]'
                : 'bg-[#facc15] text-black hover:bg-black hover:text-[#facc15]'
            "
            >
              {{ plan.cta }}
            </button>
            <NuxtLink
              :to="plan.moreInfoLink"
              class="inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
            >
              More info
            </NuxtLink>
          </div>
        </article>
      </section>

      <section
        class="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div
          class="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 lg:sticky lg:top-24 lg:self-start"
        >
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            What comes standard
          </p>
          <h3 class="mt-3 text-3xl font-black text-gray-900">
            Each AITJE comes with
          </h3>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li
              v-for="item in standard"
              :key="item"
              class="flex items-start gap-3"
            >
              <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#facc15]" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p
            class="text-sm font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Subscriptions & services
          </p>
          <div class="mt-4 grid gap-4">
            <article
              v-for="service in services"
              :key="service.title"
              class="rounded-2xl border border-gray-100 p-4"
            >
              <div class="flex items-center gap-3">
                <component :is="service.icon" class="h-8 w-8 text-[#facc15]" />
                <div>
                  <h4 class="text-lg font-semibold text-gray-900">
                    {{ service.title }}
                  </h4>
                  <p class="text-xs uppercase tracking-[0.4em] text-gray-400">
                    {{ service.badge }}
                  </p>
                </div>
              </div>
              <p class="mt-3 text-sm text-gray-600">
                {{ service.description }}
              </p>
            </article>
          </div>
          <NuxtLink
            :to="localePath('/diensten')"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            See all services
          </NuxtLink>
        </div>
      </section>

      <section
        class="mx-auto mt-20 max-w-5xl rounded-[3rem] bg-[#212121] p-10 text-white"
      >
        <div
          class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Why now
            </p>
            <h3 class="mt-3 text-3xl font-black">
              Protect yourself from price increases
            </h3>
            <p class="mt-3 text-sm text-gray-300">
              In our business plan, we expect Big Tech to start raising rates once everyone is dependent. With AITJE, you choose fixed hardware + customized services. No surprises.
            </p>
          </div>
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Schedule a demo
          </NuxtLink>
        </div>
      </section>

      <section class="mx-auto mt-20 max-w-5xl">
        <h2 class="text-center text-4xl font-black text-gray-900">
          Frequently Asked Questions
        </h2>
        <p class="mt-3 text-center text-sm text-gray-500">
          Based on the business plan and conversations with customers.
        </p>
        <div class="mt-10 space-y-5">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="rounded-3xl border border-gray-200 bg-[#fafafa] p-5"
          >
            <summary class="cursor-pointer text-lg font-semibold text-gray-900">
              {{ faq.question }}
            </summary>
            <p class="mt-3 text-sm text-gray-600">{{ faq.answer }}</p>
          </details>
        </div>
      </section>
    </main>

    <BottomCta />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  Box,
  Check,
  Leaf,
  Lock,
  Package,
  Shield,
  Truck,
} from "lucide-vue-next";

const { localePath } = useSiteLocale();

const valueProps = [
  {
    title: "Nature-friendly AI",
    description:
      "Each local prompt saves water and energy in remote data centers.",
    icon: Leaf,
  },
  {
    title: "100% data ownership",
    description:
      "You don't share anything with American corporations. Everything stays in your own locker.",
    icon: Lock,
  },
  {
    title: "Plug and play hardware",
    description:
      "Inspired by our business plan: tested hardware, support and services.",
    icon: Box,
  },
];

const plans = [
  {
    title: "AITJE",
    tier: "Solo & freelancers",
    price: "€ 3.999",
    recurring: "EUR 0 per year",
    description:
      "The basic locker for individuals seeking security and autonomy.",
    perks: [
      "Plug and play hardware + OS",
      "Chat + API + audio interface",
      "Own accounts and API keys",
      "Community support",
    ],
    service: "We provide manuals and an optional installation call.",
    cta: "Order",
    image: "/images/aitje-cubes.png",
    moreInfoLink: localePath("/aitje"),
  },
  {
    title: "AITJE Pro",
    tier: "SMEs / organizations",
    price: "€ 5.499",
    recurring: "EUR 1,200 per year (SLA + e-learning + consult)",
    description:
      "For SMEs, schools and libraries from the business plan who want guidance.",
    perks: [
      "Installation + preparation (2.5 hours + 50 travel costs)",
      "First consult (digital, about 1 hour free)",
      "One custom knowledge update (embedding workflow)",
      "Priority in support and tickets",
    ],
    service: "SLA + e-learning platform + annual health check.",
    cta: "Order",
    featured: true,
    image: "/images/os-screenshots/chatassistent.jpeg",
    moreInfoLink: localePath("/aitje-pro"),
  },
  {
    title: "AITJE Custom",
    tier: "Strategic partnership",
    price: "€ 7.500+",
    recurring: "EUR 2,500 - 3,750 per year",
    description:
      "For larger organizations that want to continue development with us.",
    perks: [
      "Custom hardware and optimizations",
      "Knowledge updates whenever you need them (1,250 per session)",
      "LLM upgrades (250 per upgrade + report)",
      "Consults and roadmap sessions (100 per hour)",
    ],
    service: "Dedicated account + backdoor embedding + governance advice.",
    cta: "Order",
    image: "/images/custom-suited.png",
    moreInfoLink: localePath("/aitje-custom"),
  },
];

const standard = [
  "AITJE unit + cables + documentation",
  "Pre-installed local LLM and knowledge base",
  "Management for users, API keys and logging",
  "Support via email and ticketing",
  "Access to our community updates",
];

const services = [
  {
    title: "Installation & Preparation",
    badge: "2.5 hours + 50,- call-out fee",
    description:
      "We set up the cabinet, connect monitor/mouse/keyboard and make sure everything is running perfectly.",
    icon: Truck,
  },
  {
    title: "Consults",
    badge: "First call free",
    description:
      "Thereafter 100,- per hour. Together we look at governance, prompts or new applications.",
    icon: Shield,
  },
  {
    title: "Updating your own knowledge",
    badge: "€1,250 per update",
    description:
      "Upload documents in our embedding environment, we will place the knowledge on your cabinet.",
    icon: Package,
  },
];

const faqs = [
  {
    question: "Why are there three packages?",
    answer:
      "In the business plan, we distinguish three personas: solo users, SMEs and larger organizations. Each package has the right mix of hardware, services and subscriptions for that persona.",
  },
  {
    question: "What if I need additional services?",
    answer:
      "You book services separately: consults at €100 per hour, knowledge updates at €1,250, LLM upgrades at €250 per upgrade and SLA/E-learning according to the amounts above.",
  },
  {
    question: "Does this really help nature?",
    answer:
      "Yes. Every prompt you process locally saves energy AND gallons of cooling water compared to giant server halls that have to be turned on for every demand.",
  },
  {
    question: "Am I dependent on American corporations?",
    answer:
      "No. AITJE runs completely locally. Your data doesn't leave your network and you decide when to perform updates.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "You can always switch to Pro or Custom, add additional services or upgrade hardware. We'll discuss the best path together.",
  },
];
</script>
