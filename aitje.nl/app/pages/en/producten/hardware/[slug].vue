<template>
  <div v-if="item" class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pt-32">
      <section class="mx-auto max-w-5xl">
        <NuxtLink
          :to="localePath('/producten/hardware')"
          class="text-sm font-semibold text-[#d4a700] transition hover:text-black"
        >
          Back to hardware
        </NuxtLink>
        <div
          class="mt-6 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
        >
          <img
            :src="
              isCustom
                ? '/images/custom-suited.png'
                : isAssistent
                  ? '/images/aitje-cubes.png'
                  : item.image
            "
            :alt="item.title"
            class="h-72 w-full"
            :class="
              isCustom
                ? 'object-cover object-[center_33%]'
                : isAssistent
                  ? 'bg-white object-contain'
                  : 'object-cover'
            "
          />
          <div class="p-8">
            <p
              class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
            >
              Products / Hardware
            </p>
            <h1 class="mt-3 text-4xl font-black text-gray-900">
              {{ item.title }}
            </h1>
            <p class="mt-4 text-lg text-gray-600">
              {{ item.heroDescription }}
            </p>
          </div>
        </div>
      </section>

      <section v-if="isCustom" class="mx-auto mt-12 max-w-6xl space-y-6">
        <article
          class="overflow-hidden rounded-[2.5rem] bg-[#212121] text-white"
        >
          <div class="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div class="p-8 md:p-10">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                When to choose AITJE Custom
              </p>
              <h2 class="mt-3 text-3xl font-black leading-tight">
                For organizations with specific requirements beyond the standard solution
              </h2>
              <p class="mt-4 text-base text-gray-200">
                AITJE Custom is designed for situations where a personal AI solution is needed that also requires hardware. In that path, we think with you about the best route for performance, availability and implementation in practice. Think of a solution with SCAN devices (barcodes, ISBN), document processing, visual input reading, an LLM that works with power outages and AI without internet.
              </p>
            </div>
            <div class="p-8 pt-0 md:p-0">
              <img
                src="/images/custom-suited.png"
                :alt="item.title"
                class="h-[260px] w-full rounded-2xl object-cover md:h-full md:rounded-none"
              />
            </div>
          </div>
        </article>

        <article
          class="overflow-hidden rounded-[2.5rem] bg-[#facc15] text-black"
        >
          <div class="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <div class="p-8 md:order-2 md:p-10">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-black/60"
              >
                Hardware Strategy
              </p>
              <h2 class="mt-3 text-3xl font-black leading-tight">
                As efficient and price conscious as can be
              </h2>
              <p class="mt-4 text-base text-black/80">
                Building your own hardware proves impractical in many projects. Therefore, we usually look for an efficient combination of several hardware products, or we search our network for a provider with an exact or comparable product.
              </p>
              <p class="mt-4 text-base text-black/80">
                If that route is required, AITJE, as an AI partner, supports you in the technical and operational considerations.
              </p>
            </div>
            <div class="p-8 pt-0 md:order-1 md:p-0">
              <img
                src="/images/wanneer-aitje.png"
                alt="Custom route for hardware and AI"
                class="h-[260px] w-full rounded-2xl object-cover md:h-full md:rounded-none"
              />
            </div>
          </div>
        </article>

        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Usually enough
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            AITJE Assistant
          </h2>
          <p class="mt-4 text-base leading-7 text-gray-600">
            In 95% of use cases, this is already an efficient solution. Our out-of-the-box solution combines an operating system developed by us, optimized for the hardware, with a remote embedding environment, a client application and local API accessibility on the network.
          </p>
          <NuxtLink
            :to="localePath('/producten/hardware/aitje-assistent')"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#facc15]"
          >
            View AITJE Assistant
          </NuxtLink>
        </article>

        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            What AITJE Custom Is For
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            We look at what works for you
          </h2>
          <ul class="mt-5 space-y-3 text-base leading-7 text-gray-600">
            <li>- Additional hardware specifications over standard profiles</li>
            <li>
              - Applications or workflows that need to run completely offline
            </li>
            <li>
              - Improved version of an Aitje Assistant Cube V1 for specific needs
            </li>
            <li>
              - Hardware needs for which an out-of-the-box solution does not yet exist
            </li>
          </ul>
          <NuxtLink
            :to="localePath('/contact?onderwerp=kennismaking')"
            class="mt-8 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          >
            Discuss AITJE Custom
          </NuxtLink>
        </article>
      </section>

      <section
        v-else-if="isAssistent"
        class="mx-auto mt-12 max-w-6xl space-y-6"
      >
        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Choose your system
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            Our operating systems for AITJE Assistant
          </h2>
          <p class="mt-3 max-w-4xl text-base text-gray-600">
            Our operating systems are designed for the hardware. They ensure that LLM inference runs stably and gets the most out of the hardware.
          </p>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border p-5 text-left transition"
              :class="
                selectedOs === 'toekan'
                  ? 'border-[#facc15] bg-[#fff8db]'
                  : 'border-gray-200 bg-white hover:border-[#facc15]/60'
              "
              @click="selectedOs = 'toekan'"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-xl font-black text-gray-900">
                    AITJE - Toucan (v1)
                  </p>
                  <p
                    class="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"
                  >
                    Release 2025
                  </p>
                </div>
                <span
                  class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border text-xs font-black"
                  :class="
                    selectedOs === 'toekan'
                      ? 'border-[#facc15] bg-[#facc15] text-black'
                      : 'border-gray-300 bg-white text-transparent'
                  "
                >
                  ✓
                </span>
              </div>
              <p class="mt-2 text-sm text-gray-600">
                A system that ensures LLM inference gets the most out of hardware.
              </p>
            </button>
            <button
              type="button"
              disabled
              class="cursor-not-allowed rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left opacity-80"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-xl font-black text-gray-900">
                    AITJE - Finch (v2)
                  </p>
                  <p
                    class="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"
                  >
                    Release soon
                  </p>
                </div>
                <span
                  class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-white text-transparent"
                >
                  ✓
                </span>
              </div>
              <p class="mt-2 text-sm text-gray-600">More information to follow.</p>
            </button>
          </div>
        </article>

        <article
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Choose your device
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            As the market evolves, so does our hardware
          </h2>
          <p class="mt-3 max-w-4xl text-base text-gray-600">
            We constantly try to choose the average best product when we select it for production, because the market is changing rapidly. Expanding is possible and so is upgrading to a better device, through AITJE Custom.
          </p>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <button
              v-for="device in deviceOptions"
              :key="device.id"
              type="button"
              class="rounded-2xl border p-5 text-left transition"
              :class="
                selectedDevice === device.id
                  ? 'border-[#facc15] bg-[#fff8db]'
                  : 'border-gray-200 bg-white hover:border-[#facc15]/60'
              "
              @click="selectedDevice = device.id"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3">
                  <img
                    :src="device.image"
                    :alt="device.name"
                    class="h-14 w-14 rounded-xl object-cover"
                  />
                  <div>
                    <p class="text-xl font-black text-gray-900">
                      {{ device.name }}
                    </p>
                    <p class="mt-2 text-sm text-gray-600">
                      {{ device.description }}
                    </p>
                  </div>
                </div>
                <span
                  class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md border text-xs font-black"
                  :class="
                    selectedDevice === device.id
                      ? 'border-[#facc15] bg-[#facc15] text-black'
                      : 'border-gray-300 bg-white text-transparent'
                  "
                >
                  ✓
                </span>
              </div>
            </button>
            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3">
                  <img
                    src="/images/birds.png"
                    alt="Custom Device Route"
                    class="h-14 w-14 rounded-xl object-cover"
                  />
                  <div>
                    <p class="text-xl font-black text-gray-900">
                      Custom Device Route
                    </p>
                    <p class="mt-2 text-sm text-gray-600">
                      For different hardware needs, we support you through AITJE Custom.
                    </p>
                  </div>
                </div>
                <NuxtLink
                  :to="localePath('/producten/hardware/aitje-custom')"
                  class="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-[#facc15] bg-[#facc15] px-2 text-xs font-black text-black transition hover:bg-black hover:text-[#facc15]"
                >
                  →
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            v-if="selectedDeviceOption"
            class="mt-6 overflow-hidden rounded-2xl border border-gray-200"
          >
            <table class="w-full border-collapse bg-white text-sm">
              <thead class="bg-[#fafafa]">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Spec
                  </th>
                  <th class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    {{ selectedDeviceOption.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in selectedDeviceOption.specs"
                  :key="`${selectedDeviceOption.id}-${row.label}`"
                  class="border-t border-gray-100"
                >
                  <td class="px-4 py-3 font-semibold text-gray-800">
                    {{ row.label }}
                  </td>
                  <td class="px-4 py-3 text-gray-600">
                    {{ row.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article
          v-if="selectedOs === 'toekan' && selectedDeviceOption"
          class="rounded-3xl border border-gray-200 bg-[#212121] p-8 text-white shadow-sm md:p-10"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
          >
            Configuration chosen
          </p>
          <h2 class="mt-3 text-3xl font-black">Request a quote</h2>
          <p class="mt-3 max-w-3xl text-sm text-gray-300">
            You selected {{ selectedDeviceOption.name }} with AITJE - Toucan.
            Request a quote directly.
          </p>
          <NuxtLink
            :to="{
              path: localePath('/contact'),
              query: {
                onderwerp: 'offerte',
                bericht: offerMessage,
              },
            }"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
          >
            Request a quote
          </NuxtLink>
        </article>

        <article class="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
            Platform Overview
          </p>
          <h2 class="mt-3 text-3xl font-black text-gray-900">
            What you get with AITJE Assistant
          </h2>
          <p class="mt-3 max-w-4xl text-base text-gray-600">
            A clear overview of key components: from OS and client to privacy, collaboration and operational stability.
          </p>

          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <article
              v-for="section in assistantSections"
              :key="section.number"
              class="rounded-2xl border border-gray-200 bg-[#fafafa] p-5"
            >
              <div class="flex items-start justify-between gap-3">
                <p class="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#facc15] px-2 text-sm font-black text-black">
                  {{ section.number }}
                </p>
                <p class="pt-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  {{ section.label }}
                </p>
              </div>
              <h3 class="mt-3 text-xl font-black text-gray-900">
                {{ section.title }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                {{ section.description }}
              </p>
              <ul v-if="section.points" class="mt-3 space-y-2 text-sm text-gray-600">
                <li v-for="point in section.points" :key="point">• {{ point }}</li>
              </ul>
              <img
                :src="section.image"
                :alt="section.alt"
                class="mt-4 h-44 w-full rounded-xl object-cover"
              />
            </article>
          </div>
        </article>

      </section>

      <section v-else class="mx-auto mt-12 max-w-5xl space-y-6">
        <article
          v-for="section in item.sections"
          :key="section.title"
          class="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <h2 class="text-2xl font-black text-gray-900">
            {{ section.title }}
          </h2>
          <p class="mt-3 text-base leading-7 text-gray-600">
            {{ section.content }}
          </p>
        </article>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { hardwareCatalog } from "@/data/hardwareCatalog.en";

const { localePath } = useSiteLocale();

const route = useRoute();

const item = computed(() =>
  hardwareCatalog.find((entry) => entry.slug === route.params.slug),
);

const isCustom = computed(() => item.value?.slug === "aitje-custom");
const isAssistent = computed(() => item.value?.slug === "aitje-assistent");
const selectedOs = ref("");
const selectedDevice = ref("");

const deviceOptions = [
  {
    id: "m6",
    name: "AITJE Cube 1",
    image: "/images/aitje-assistent-cube-v1.png",
    offerLabel: "cube 1",
    description:
      "Compact AI mini PC for local workflows, day-to-day teams and fast multitasking.",
    specs: [
      {
        label: "Processor",
        value:
          "AMD Ryzen AI 9 HX370, 12 cores / 24 threads, up to 5.1 GHz boost, 24MB L3 cache",
      },
      {
        label: "GPU + AI",
        value:
          "Integrated Radeon 890M up to 2900MHz, 8K@60Hz output and support for four simultaneous displays",
      },
      {
        label: "Working Memory",
        value: "32GB DDR5 5600MHz",
      },
      {
        label: "Storage",
        value: "1TB PCIe 4.0 SSD",
      },
      {
        label: "Network",
        value: "Ethernet, audio jack and high-speed display/data output via USB4/USB-C",
      },
      {
        label: "Connections",
        value: "HDMI 2.1, USB4, USB-C, DisplayPort 1.4 and USB-A",
      },
      {
        label: "Format",
        value: "Compact mini PC design with configurable 45-65W TDP",
      },
    ],
  },
  {
    id: "m5",
    name: "AITJE Cube 2",
    image: "/images/aitje-assistent-cube-v2.jpg",
    offerLabel: "cube 2",
    description:
      "Heavier AI configuration for larger models, higher context windows and multi-user use.",
    specs: [
      {
        label: "Processor",
        value: "AMD Ryzen AI Max+ 395, 16 cores / 32 threads, up to 5.1 GHz",
      },
      {
        label: "GPU + AI",
        value:
          "Radeon 8060S with 40 compute units, a 50 TOPS XDNA 2 NPU and up to 126 TOPS total",
      },
      {
        label: "Working Memory",
        value: "128GB LPDDR5X 8000MHz, shared dynamically with the GPU",
      },
      {
        label: "Storage",
        value: "2TB PCIe 4.0 SSD with dual M.2 PCIe Gen 4 expansion",
      },
      {
        label: "Network",
        value: "2.5Gbps LAN",
      },
      {
        label: "Connections",
        value:
          "2x USB4 Type-C, 3x USB 3.2 Gen 2, 2x USB 2.0 and a full-size SD 4.0 card reader",
      },
      {
        label: "Format",
        value: "Compact desktop format aimed at local LLMs and heavier AI workloads",
      },
    ],
  },
];

const selectedDeviceOption = computed(() =>
  deviceOptions.find((device) => device.id === selectedDevice.value),
);

const offerMessage = computed(() => {
  const label = selectedDeviceOption.value?.offerLabel;
  if (!label) return "";
  return `I am getting in touch about the AITJE Assistant, ${label}, with Toucan software.`;
});

const assistantSections = [
  {
    number: "1",
    label: "Basic",
    title: "What is AITJE Assistant?",
    description:
      "AITJE Assistant is a local AI solution on hardware in your own environment. Your teams work over the local network with chat, knowledge and workflows without continuous dependence on external platforms.",
    image: "/images/aitje-cubes.png",
    alt: "What is AITJE Assistant",
  },
  {
    number: "2",
    label: "Operating system",
    title: "What is the OS?",
    description:
      "AITJE - Toucan OS was built by us and optimized for the device. Running on it are AI processes, local API services, account management and links to client and knowledge streams.",
    image: "/images/birds.png",
    alt: "AITJE OS version overview",
  },
  {
    number: "3",
    label: "Impact",
    title: "What problems does this solve?",
    description:
      "AITJE Assistant lowers dependencies and makes AI stably deployable in day-to-day operations.",
    points: [
      "Less dependence on external AI platforms and API prices",
      "Local availability, even with unstable internet",
      "More control over privacy, data and access rights",
      "More consistent workflows for knowledge questions and operational tasks",
    ],
    image: "/images/ei-internet.png",
    alt: "Problems AITJE Assistant solves",
  },
  {
    number: "4",
    label: "Client",
    title: "AITJE Assistant Client",
    description:
      "The client application is the daily working layer for employees. From the client you get access to chat, output, knowledge questions and linked functionalities within your own organizational environment.",
    image: "/images/aitje-cubes.png",
    alt: "AITJE Assistant Client",
  },
  {
    number: "5",
    label: "Knowledge layer",
    title: "Embedding environment and version control",
    description:
      "AITJE Assistant works with an external embedding environment for document context and search quality. With version control and backups, you keep a grip on changes and can restore data and knowledge layers in a controlled manner.",
    image: "/images/golden-egg.png",
    alt: "Embedding and version control",
  },
  {
    number: "6",
    label: "Collaboration",
    title: "How does this work together?",
    description:
      "Knowledge base sync, RAG chat, contacts and offline maps run as a cohesive chain. New data from your knowledge base is processed, then teams can directly request relevant context via the client or API.",
    points: [
      "Sync from the knowledge base",
      "RAG chat on local context",
      "Contacts and internal data available directly",
      "Offline maps and local availability",
    ],
    image: "/images/chicken-build-road.png",
    alt: "How the modules work together",
  },
  {
    number: "7",
    label: "Access",
    title: "Accounts and privacy",
    description:
      "AITJE Assistant works over the local network. Accounts are created on the OS/device itself. Employees connected to the same modem/router network can log in with their account through the client on laptop or computer. This way you manage access centrally and data stays closer to the organization.",
    image: "/images/egg-loading-screen.png",
    alt: "Accounts and privacy on the local network",
  },
];

if (!item.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Hardware page not found",
  });
}
</script>
