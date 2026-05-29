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
          AITJE helps organizations put local AI to practical use. We support
          installation, knowledge management, consultancy, custom work and
          ongoing collaboration when you need extra capacity or expertise.
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
                  <span>Installation help, consultancy and custom work available at an hourly rate.</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>Structural agreements within our SLA as a strategic partnership.</span>
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
                  <span>Products work out of the box; setup by AITJE is optional.</span>
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
                <p
                  class="mt-2 text-sm leading-6"
                  :class="
                    selectedServiceKey === service.key
                      ? 'text-gray-200'
                      : 'text-gray-500'
                  "
                >
                  {{ service.navDescription }}
                </p>
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
            <div
              v-if="'body' in activeService && activeService.body?.length"
              class="mt-6 max-w-4xl space-y-4 text-sm leading-7 text-gray-600"
            >
              <p v-for="paragraph in activeService.body" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>

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

            <div class="mt-5 rounded-[1.75rem] border border-gray-100 p-5">
              <p
                class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500"
              >
                What is not included
              </p>
              <p class="mt-2 text-sm leading-7 text-gray-700">
                {{ activeService.notIncluded }}
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

      <section
        class="mx-auto mt-16 max-w-7xl rounded-[2.5rem] border border-gray-200 bg-white px-8 py-10 text-center shadow-sm lg:px-12"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
          Process
        </p>
        <h2 class="mt-3 text-4xl font-black text-gray-900">
          How it works
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
          We keep the first step small: clarify what you need, choose the right
          service and agree on the scope before work starts.
        </p>
        <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="relative text-center"
          >
            <ArrowRight
              v-if="index < processSteps.length - 1"
              class="absolute -right-5 top-7 hidden h-6 w-6 text-gray-900/80 lg:block"
            />
            <div
              class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#212121] text-[#facc15]"
            >
              <component :is="step.icon" class="h-7 w-7" />
            </div>
            <p class="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#facc15]">
              Step {{ step.number }}
            </p>
            <h3 class="mt-2 text-lg font-black text-gray-900">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600">
              {{ step.description }}
            </p>
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
              src="/images/wanneer-aitje.png"
              alt="AITJE products and services"
              class="h-56 w-full object-cover"
            />
            <div class="p-8">
              <p
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]"
              >
                Effective collaboration
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Partnership with clear agreements
              </h2>
              <ul class="mt-6 space-y-3 text-sm text-gray-700">
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Clear agreements on goals, planning, responsibilities and
                    outcomes.</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >For organizations that want support with fixed products and
                    practical AI applications.</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Guidance that helps with choice, setup and use, without an
                    unnecessarily large project.</span
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
  ArrowRight,
  ClipboardList,
  ClipboardPenLine,
  FileText,
  Handshake,
  Leaf,
  MessagesSquare,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-vue-next";

const { localePath } = useSiteLocale();

const introCards = [
  {
    badge: "Strategy",
    title: "Clear first choices",
    description:
      "We help determine what makes sense before anything gets built, installed or expanded.",
    icon: PlugZap,
  },
  {
    badge: "Custom",
    title: "Where needed",
    description:
      "For concrete questions where standard products do not fully match your hardware, workflow or organization.",
    icon: Sparkles,
  },
  {
    badge: "Continuity",
    title: "Strategic partnership",
    description:
      "Within an SLA, we support you with helpdesk, knowledge management, advice and further development.",
    icon: Leaf,
  },
];

const servicePanels = [
  {
    key: "installation",
    sidebarLabel: "Product installation",
    title: "Product installation",
    navDescription: "For accounts, permissions, local access and a clean go-live.",
    focus: "Implementation",
    description:
      "We help with installation, permissions, knowledge base sync and technical setup so AITJE products land in your environment ready to use.",
    body: [
      "Product installation is practical help, not a required step. In most cases, you can start with an AITJE product yourself. It can still be useful for us to help when multiple users, permissions, network choices or management agreements are involved.",
      "We can set up the product remotely or come on site when the environment requires it. This includes accounts, access rights, local availability and a logical starting structure for existing knowledge sources.",
    ],
    result: "A stable start without loose technical ends or unclear handover.",
    notIncluded:
      "No custom development or long-term management track. AITJE Custom or SLA fits better for that.",
    details: [
      "Installation and basic setup of AITJE products",
      "Alignment of permissions, access and knowledge base sync",
      "Practical handover so teams can start immediately",
    ],
    fit: "For organizations choosing a product and wanting the go-live to be right from the start.",
    link: localePath("/contact?onderwerp=product-installatie"),
    cta: "Plan installation",
  },
  {
    key: "knowledgebase-management",
    sidebarLabel: "Knowledge management",
    title: "Data setup",
    navDescription: "For source selection, document structure and knowledge base management.",
    focus: "Knowledge and data",
    description:
      "We help determine which documents, sources and agreements are needed to make your knowledge base useful for reliable AI answers.",
    body: [
      "A good knowledge base does not start with uploading as many files as possible. It starts with the right selection and structure. We help choose which sources are useful, what should stay out and how documents should be organized.",
      "After that, we set up the data for practical use with AITJE Assistant. Think of naming, versions, source quality, priorities and agreements about who manages changes.",
    ],
    result:
      "A usable knowledge base with clear source choices, structure and management agreements.",
    notIncluded:
      "No unlimited document management after delivery. Ongoing management can be arranged within an SLA.",
    details: [
      "Choose which documents and sources are valuable for AI use",
      "Set up the knowledge base with a logical data and source structure",
      "Guidance on management, updates, versioning and source quality",
    ],
    fit: "For organizations that want to use AITJE Assistant with their own knowledge, but need help with the right setup and workflow.",
    link: localePath("/contact?onderwerp=kennisbank-managen"),
    cta: "Set up knowledge base",
  },
  {
    key: "expansion",
    sidebarLabel: "Product expansion",
    title: "Product expansion",
    navDescription: "For extra users, modules, integrations or setup.",
    focus: "Further development",
    description:
      "We expand existing AITJE setups in a focused way when more users, extra modules, integrations or additional setup are needed.",
    body: [
      "Product expansion is for situations where the base already works, but the practical use becomes larger or more specific. Extra teams may join, a workflow may need adjustment or existing parts may need to connect to new processes.",
      "We first look at what is already in place, so the expansion does not become a second separate system. Then we decide what is technically needed and which choices remain manageable over time.",
    ],
    result:
      "A next step that connects logically to what is already there, without starting over.",
    notIncluded:
      "No complete rebuild of your environment. We expand in a focused way on what already works.",
    details: [
      "Expansion of an existing product setup or workflow",
      "Extra modules, integrations or organizational setup",
      "Guidance on choices that remain sustainable over time",
    ],
    fit: "For organizations already working with AITJE and wanting to scale or broaden in a controlled way.",
    link: localePath("/contact?onderwerp=product-uitbreiding"),
    cta: "Discuss expansion",
  },
  {
    key: "custom",
    sidebarLabel: "AITJE Custom",
    title: "AITJE Custom",
    navDescription: "For custom work around hardware, workflows or local AI functionality.",
    focus: "Custom route",
    description:
      "For organizations with a concrete AI question that requires specific hardware, a custom workflow or extra functionality outside our standard products.",
    body: [
      "AITJE Custom is for situations where a standard product does not fit the practical reality well enough. This may involve a specific workflow, an additional integration, unusual hardware requirements or a local AI application that needs to match how your team works.",
      "We develop at an hourly rate and make hardware costs transparent separately. Before we start, we determine together whether custom work is really needed or whether an existing product with installation, consultancy or SLA is enough.",
    ],
    result:
      "A focused custom solution at an hourly rate, with insight into required hardware costs.",
    notIncluded:
      "No open-ended track where everything is built at once. We start with scope, estimate and clear choices.",
    details: [
      "Development of specific edge or on-premise AI functionality",
      "Selection and setup of suitable hardware",
      "Practical delivery around a workflow without a standard solution yet",
    ],
    fit: "For organizations with a concrete problem where our existing products are not yet sufficient.",
    link: localePath("/contact?onderwerp=aitje-custom"),
    cta: "Discuss custom work",
  },
  {
    key: "consultancy",
    sidebarLabel: "Consultancy",
    title: "Consultancy",
    navDescription: "For advice on cost, risk, dependency and first steps.",
    focus: "Cost & stability",
    description:
      "We analyze current AI usage and look at where cost, stability and dependency can be improved.",
    body: [
      "Consultancy is useful when you are not yet sure whether local AI, edge AI or an AITJE product makes sense. We look at processes, existing tools, costs, dependencies and places where AI is already used or remains unused.",
      "The outcome does not always have to be a purchase or custom project. Sometimes the right advice is to organize something more simply, keep using existing tools first or only make a small part local.",
    ],
    result: "More control over usage, vendors and practical AI deployment.",
    notIncluded:
      "No build track. Consultancy provides direction, choices and advice; implementation is planned separately.",
    details: [
      "Analysis of the current AI stack and usage",
      "Lower dependence on external platforms where logical",
      "Advice on local software or Edge AI in the workflow",
    ],
    fit: "For teams already using AI but lacking enough overview of cost, risk and continuity.",
    link: localePath("/contact?onderwerp=consultancy"),
    cta: "Request advice call",
  },
  {
    key: "strategy",
    sidebarLabel: "AI strategy",
    title: "AI strategy",
    navDescription: "Clarify opportunities, risks, direction and first steps.",
    focus: "Strategy",
    description:
      "We help determine where AI brings the most value now, what Edge AI does and does not make sense for, and which first steps are realistic.",
    body: [
      "AI strategy is for organizations that want clarity before making technical choices. We map realistic opportunities, risks, dependencies and the role local AI can play.",
      "The goal is a practical direction: what to do first, what to leave for later and which choices avoid unnecessary complexity.",
    ],
    result:
      "A concrete plan that lets you move forward without getting lost in all the AI options.",
    notIncluded:
      "No implementation by default. Strategy gives direction first; setup or development can follow later.",
    details: [
      "Where AI can add direct value right now",
      "Which deployment makes sense for your organization",
      "Clear first choices instead of loose ideas",
    ],
    fit: "For organizations that first want clarity on direction, opportunities and the role of local Edge AI.",
    link: localePath("/contact?onderwerp=ai-strategie"),
    cta: "Discuss AI strategy",
  },
  {
    key: "sla",
    sidebarLabel: "Service Level Agreement",
    title: "SLA",
    navDescription: "For support, updates, knowledge management and strategic development.",
    focus: "Monthly collaboration",
    description:
      "A monthly collaboration for support, updates, reserved time, installation help and advice around products and Edge AI implementations.",
    body: [
      "The SLA is for organizations that want AITJE structurally involved instead of only per incident. Support, updates, reserved time, strategic advice and knowledge base work can come together in one agreement.",
      "Knowledge bases need ongoing attention because sources change, priorities shift and teams need to know how to keep adding information correctly. You can manage it yourself, we can keep it up to date or we agree on a shared form.",
    ],
    result: "Ongoing support without having to solve everything ad hoc.",
    notIncluded:
      "No unlimited development bundle. The SLA contains agreed support, time, management and further development.",
    details: [
      "Set up, maintain or explain how to manage your knowledge base",
      "Support, updates, troubleshooting and reserved time",
      "Strategic advice on AI use, continuity and next steps",
    ],
    fit: "For organizations that want continuity without having to switch per incident every time.",
    link: localePath("/contact?onderwerp=sla"),
    cta: "Discuss SLA",
  },
] as const;

const processSteps = [
  {
    number: "1",
    title: "Introduction",
    description: "We discuss your situation, product use, data, team and main question.",
    icon: MessagesSquare,
  },
  {
    number: "2",
    title: "Inventory",
    description: "We determine what is technically and organizationally needed and which service fits.",
    icon: ClipboardList,
  },
  {
    number: "3",
    title: "Proposal or estimate",
    description: "You receive a clear direction, hourly estimate, quote or SLA proposal.",
    icon: FileText,
  },
  {
    number: "4",
    title: "Execution",
    description: "We set up, advise, build or support according to the agreed scope.",
    icon: Wrench,
  },
  {
    number: "5",
    title: "Handover or support",
    description: "You receive explanation, management agreements and optional ongoing SLA support.",
    icon: Handshake,
  },
];

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
