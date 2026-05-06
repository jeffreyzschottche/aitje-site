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
          Services
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Strategic AI partnership
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AITJE guides organizations in using on-premise and edge AI. We help
          with strategy, setup, custom work and ongoing development, either as
          separate services or as concrete agreements within an SLA. This keeps
          our solutions and future expansions aligned with your organization,
          instead of the other way around.
        </p>
      </section>

      <section class="mx-auto mt-6 max-w-6xl">
        <article
          class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
        >
          <div class="grid gap-0 md:grid-cols-[0.72fr_1.28fr]">
            <div
              class="overflow-hidden border-b border-gray-200 md:border-b-0 md:border-r"
            >
              <img
                src="/images/aitje-nature-pic.png"
                alt="AITJE services"
                class="h-full min-h-[18rem] w-full object-cover"
                style="object-position: center 58%"
              />
            </div>

            <div class="p-8 md:p-10">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Approach
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Practical, grounded, efficient
              </h2>
              <ul class="mt-5 space-y-3 text-base leading-8 text-gray-600">
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Separate services available at a fixed hourly rate without
                    a partnership.</span
                  >
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>Concrete agreements within our SLA.</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>Option for an outage line and ticket support.</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Products built so we can look along remotely, only with
                    permission.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto mt-8 max-w-6xl">
        <div class="grid gap-6 md:grid-cols-3">
          <article
            v-for="card in introCards"
            :key="card.title"
            class="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#212121] text-[#facc15]"
            >
              <component :is="card.icon" class="h-6 w-6" />
            </div>
            <p
              class="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]"
            >
              {{ card.badge }}
            </p>
            <h2 class="mt-2 text-2xl font-black text-gray-900">
              {{ card.title }}
            </h2>
            <p class="mt-3 text-sm leading-7 text-gray-600">
              {{ card.description }}
            </p>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside
            class="rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Services
            </p>
            <div class="mt-5 space-y-3">
              <button
                v-for="service in servicePanels"
                :key="service.key"
                type="button"
                class="w-full rounded-[1.5rem] border px-5 py-4 text-left transition"
                :class="
                  selectedServiceKey === service.key
                    ? 'border-[#facc15] bg-[#212121] text-white'
                    : 'border-gray-200 bg-[#fafafa] text-gray-900 hover:border-[#facc15]'
                "
                @click="selectedServiceKey = service.key"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-[0.32em]"
                  :class="
                    selectedServiceKey === service.key
                      ? 'text-[#facc15]'
                      : 'text-gray-400'
                  "
                >
                  {{ service.sidebarLabel }}
                </p>
                <h2 class="mt-2 text-lg font-semibold">
                  {{ service.title }}
                </h2>
              </button>
            </div>
          </aside>

          <article
            class="rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm lg:p-10"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]"
            >
              {{ activeService.focus }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-900">
              {{ activeService.title }}
            </h2>
            <p class="mt-5 max-w-3xl text-base leading-8 text-gray-600">
              {{ activeService.description }}
            </p>

            <div class="mt-8 rounded-[1.75rem] bg-[#fafafa] p-5">
              <p
                class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500"
              >
                Outcome
              </p>
              <p class="mt-2 text-sm leading-7 text-gray-700">
                {{ activeService.result }}
              </p>
            </div>

            <div class="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div class="rounded-[1.75rem] border border-gray-100 p-5">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500"
                >
                  What we deliver
                </p>
                <ul class="mt-4 space-y-3 text-sm text-gray-700">
                  <li
                    v-for="item in activeService.details"
                    :key="item"
                    class="flex items-start gap-3"
                  >
                    <span
                      class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                    ></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div class="rounded-[1.75rem] bg-[#212121] p-5 text-white">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]"
                >
                  Best fit for
                </p>
                <p class="mt-3 text-sm leading-7 text-gray-300">
                  {{ activeService.fit }}
                </p>
                <NuxtLink
                  :to="activeService.link"
                  class="mt-6 inline-flex rounded-full bg-[#facc15] px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  {{ activeService.cta }}
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-7xl">
        <div class="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article
            class="rounded-[2.5rem] bg-[#212121] px-8 py-10 text-white lg:px-10"
          >
            <div class="mx-auto flex max-w-2xl flex-col justify-center">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Pricing & next step
              </p>
              <h2 class="mt-3 text-4xl font-black">
                Request a price list or quote
              </h2>
              <p class="mt-4 text-sm leading-7 text-gray-300">
                We intentionally keep our website focused on what our products
                and services can do for your business, rather than filling pages
                with fixed pricing blocks or standard packages.
              </p>
              <p class="mt-4 text-sm leading-7 text-gray-300">
                If you're interested, we're happy to discuss the best fit for
                your needs. You can always contact us for:
              </p>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-gray-300">
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>our hourly rates</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>an up-to-date price list</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>a custom quote</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>an introductory meeting</span>
                </li>
              </ul>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  :to="localePath('/contact?onderwerp=prijslijst')"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Request price list
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/contact?onderwerp=offerte')"
                  class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  Request quote
                </NuxtLink>
              </div>
            </div>
          </article>

          <article
            class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
          >
            <img
              src="/images/aitje-product.png"
              alt="AITJE products and services"
              class="h-56 w-full object-cover"
            />
            <div class="p-8">
              <p
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]"
              >
                Why this is narrower
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Less posturing, more focus
              </h2>
              <ul class="mt-6 space-y-3 text-sm text-gray-700">
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Clearer distinction between product, service and custom
                    route.</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Better fit for organizations that do not want a vague
                    custom-work story.</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >A more credible site where guidance strengthens the product
                    line.</span
                  >
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  ClipboardPenLine,
  Leaf,
  PlugZap,
  ShieldCheck,
  Sparkles,
} from "lucide-vue-next";

const { localePath } = useSiteLocale();

const introCards = [
  {
    badge: "Strategy",
    title: "Not everything at once",
    description:
      "We first help determine what makes sense before anything gets built or expanded.",
    icon: PlugZap,
  },
  {
    badge: "Custom",
    title: "Where needed",
    description:
      "AITJE Custom remains available, but as a focused route instead of a broad custom-work label. Smaller and clearer.",
    icon: Sparkles,
  },
  {
    badge: "Continuity",
    title: "Ultimate freedom",
    description:
      "Choose what fits: products only, extra services or a periodically cancellable SLA. You stay in control, we stand beside you.",
    icon: Leaf,
  },
];

const servicePanels = [
  {
    key: "installation",
    sidebarLabel: "Product installation",
    title: "Product installation",
    focus: "Implementation",
    description:
      "We help with installation, permissions, knowledge base sync and technical setup so AITJE products land in your environment ready to use.",
    result: "A stable start without loose technical ends or unclear handover.",
    details: [
      "Installation and basic setup of AITJE products",
      "Alignment of permissions, access and knowledge base sync",
      "Practical handover so teams can start immediately",
    ],
    fit: "For organizations choosing a product and wanting the go-live to be right from the start.",
    link: localePath("/contact?onderwerp=product-installatie"),
    cta: "Contact us",
  },
  {
    key: "expansion",
    sidebarLabel: "Product expansion",
    title: "Product expansion",
    focus: "Further development",
    description:
      "We expand existing AITJE setups in a focused way when more users, extra modules, integrations or additional setup are needed.",
    result:
      "A next step that connects logically to what is already there, without starting over.",
    details: [
      "Expansion of an existing product setup or workflow",
      "Extra modules, integrations or organizational setup",
      "Guidance on choices that remain sustainable over time",
    ],
    fit: "For organizations already working with AITJE and wanting to scale or broaden in a controlled way.",
    link: localePath("/contact?onderwerp=product-uitbreiding"),
    cta: "Contact us",
  },
  {
    key: "custom",
    sidebarLabel: "AITJE Custom",
    title: "AITJE Custom",
    focus: "Custom route",
    description:
      "For organizations where the fixed solutions do not fit well and where AITJE needs to think along on hardware, workflows or agentic deployment.",
    result:
      "A route that better matches the real situation of the organization.",
    details: [
      "Strategic thinking around Edge AI",
      "Alternative hardware when standard does not fit",
      "Practical translation from idea to approach",
    ],
    fit: "For organizations with unusual requirements, specific hardware wishes or more complex processes than the fixed line supports.",
    link: localePath("/contact?onderwerp=aitje-custom"),
    cta: "Contact us",
  },
  {
    key: "consultancy",
    sidebarLabel: "Consultancy",
    title: "Consultancy",
    focus: "Cost & stability",
    description:
      "We analyze current AI usage and look at where cost, stability and dependency can be improved.",
    result: "More control over usage, vendors and practical AI deployment.",
    details: [
      "Analysis of the current AI stack and usage",
      "Lower dependence on external platforms where logical",
      "Advice on local software or Edge AI in the workflow",
    ],
    fit: "For teams already using AI but lacking enough overview of cost, risk and continuity.",
    link: localePath("/contact?onderwerp=consultancy"),
    cta: "Contact us",
  },
  {
    key: "strategy",
    sidebarLabel: "AI strategy",
    title: "AI strategy",
    focus: "Strategy",
    description:
      "We help determine where AI brings the most value now, what Edge AI does and does not make sense for, and which first steps are realistic.",
    result:
      "A concrete plan that lets you move forward without getting lost in all the AI options.",
    details: [
      "Where AI can add direct value right now",
      "Which deployment makes sense for your organization",
      "Clear first choices instead of loose ideas",
    ],
    fit: "For organizations that first want clarity on direction, opportunities and the role of local Edge AI.",
    link: localePath("/contact?onderwerp=ai-strategie"),
    cta: "Contact us",
  },
  {
    key: "sla",
    sidebarLabel: "SLA",
    title: "SLA",
    focus: "Monthly collaboration",
    description:
      "A monthly collaboration for support, updates, reserved time, installation help and advice around products and Edge AI implementations.",
    result: "Ongoing support without having to solve everything ad hoc.",
    details: [
      "Fixed time and support per month",
      "Updates to models and software when needed",
      "5 euro PromptPaleis credit per month for customers with SLA",
    ],
    fit: "For organizations that want continuity without having to switch per incident every time.",
    link: localePath("/contact?onderwerp=sla"),
    cta: "Contact us",
  },
] as const;

const selectedServiceKey =
  ref<(typeof servicePanels)[number]["key"]>("installation");

const route = useRoute();

const selectServiceFromHash = (hash: string) => {
  const key = hash.replace("#", "");
  if (servicePanels.some((service) => service.key === key)) {
    selectedServiceKey.value = key as (typeof servicePanels)[number]["key"];
  }
};

onMounted(() => selectServiceFromHash(route.hash));
watch(() => route.hash, selectServiceFromHash);

const activeService = computed(
  () =>
    servicePanels.find((service) => service.key === selectedServiceKey.value) ??
    servicePanels[0],
);
</script>
