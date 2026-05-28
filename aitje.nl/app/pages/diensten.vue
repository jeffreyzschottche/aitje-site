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
          Diensten
        </p>
        <h1 class="mt-4 text-5xl font-black text-gray-900">
          Strategisch AI-partnerschap
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          AITJE helpt organisaties lokale AI praktisch in te zetten. We
          ondersteunen bij installatie, kennisbeheer, consultancy, maatwerk en
          doorlopende samenwerking wanneer je extra capaciteit of expertise
          nodig hebt.
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
                alt="AITJE dienstverlening"
                class="h-full min-h-[18rem] w-full object-cover"
                style="object-position: center 58%"
              />
            </div>

            <div class="p-8 md:p-10">
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]"
              >
                Aanpak
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Praktisch, nuchter, efficiënt
              </h2>
              <ul class="mt-5 space-y-3 text-base leading-8 text-gray-600">
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Losse installatiehulp, consultancy en maatwerk beschikbaar
                    tegen uurtarief.</span
                  >
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>Structurele afspraken binnen onze SLA als strategisch partnerschap.</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>Mogelijkheid voor storingslijn en ticketsupport.</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Producten werken out of the box; inrichting door AITJE is
                    optioneel.</span
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
              Diensten
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
              v-if="activeService.body?.length"
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
                Resultaat
              </p>
              <p class="mt-2 text-sm leading-7 text-gray-700">
                {{ activeService.result }}
              </p>
            </div>

            <div class="mt-5 rounded-[1.75rem] border border-gray-100 p-5">
              <p
                class="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500"
              >
                Wat valt hier niet onder
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
                  Wat we opleveren
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
                  Past bij
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
          Proces
        </p>
        <h2 class="mt-3 text-4xl font-black text-gray-900">
          Zo werkt het
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
          We houden de eerste stap klein: eerst scherp krijgen wat je nodig
          hebt, daarna kiezen we de juiste dienst en maken we duidelijke
          afspraken.
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
              Stap {{ step.number }}
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
                Prijs & volgende stap
              </p>
              <h2 class="mt-3 text-4xl font-black">
                Vraag een prijslijst of offerte aan
              </h2>
              <p class="mt-4 text-sm leading-7 text-gray-300">
                We houden de website bewust gefocust op wat onze producten en
                diensten voor je kunnen betekenen. Daarom tonen we niet overal
                losse prijsblokken of standaardpakketten.
              </p>
              <p class="mt-4 text-sm leading-7 text-gray-300">
                Heb je interesse? Dan denken we graag met je mee. Je kunt altijd
                contact opnemen voor:
              </p>
              <ul class="mt-4 space-y-2 text-sm leading-7 text-gray-300">
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>ons uurtarief</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>een actuele prijslijst</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>een offerte op maat</span>
                </li>
                <li class="flex gap-3">
                  <span
                    class="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span>een vrijblijvende kennismaking</span>
                </li>
              </ul>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink
                  to="/contact?onderwerp=prijslijst"
                  class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Prijslijst aanvragen
                </NuxtLink>
                <NuxtLink
                  to="/contact?onderwerp=offerte"
                  class="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  Offerte aanvragen
                </NuxtLink>
              </div>
            </div>
          </article>

          <article
            class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
          >
            <img
              src="/images/wanneer-aitje.png"
              alt="AITJE producten en diensten"
              class="h-56 w-full object-cover"
            />
            <div class="p-8">
              <p
                class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]"
              >
                Effectieve samenwerking
              </p>
              <h2 class="mt-3 text-3xl font-black text-gray-900">
                Partnerschap met heldere afspraken
              </h2>
              <ul class="mt-6 space-y-3 text-sm text-gray-700">
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Heldere afspraken over doel, planning, verantwoordelijkheden
                    en resultaat.</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Voor organisaties die ondersteuning willen bij vaste
                    producten en praktische AI-toepassingen.</span
                  >
                </li>
                <li class="flex items-start gap-3">
                  <span
                    class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#facc15]"
                  ></span>
                  <span
                    >Begeleiding die helpt bij keuze, inrichting en gebruik,
                    zonder onnodig groot traject.</span
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
import { serviceCatalog } from "../data/serviceCatalog";

const introCards = [
  {
    badge: "Producten",
    title: "Out of the box",
    description:
      "Onze producten zijn direct bruikbaar. We richten ze alleen voor je in wanneer dat praktisch nodig is.",
    icon: PlugZap,
  },
  {
    badge: "Custom",
    title: "Waar nodig",
    description:
      "Voor concrete vragen waarbij standaardproducten niet genoeg aansluiten op je hardware, workflow of organisatie.",
    icon: Sparkles,
  },
  {
    badge: "Continuiteit",
    title: "Strategisch partnerschap",
    description:
      "Binnen een SLA helpen we met support, kennisbank, advies en doorontwikkeling.",
    icon: Leaf,
  },
];

const servicePanels = serviceCatalog;

const processSteps = [
  {
    number: "1",
    title: "Kennismaking",
    description: "We bespreken je situatie, productgebruik, data, team en belangrijkste vraag.",
    icon: MessagesSquare,
  },
  {
    number: "2",
    title: "Inventarisatie",
    description: "We bepalen wat er technisch en organisatorisch nodig is en welke dienst daarbij past.",
    icon: ClipboardList,
  },
  {
    number: "3",
    title: "Voorstel of inschatting",
    description: "Je krijgt een duidelijke richting, uurtariefinschatting, offerte of SLA-voorstel.",
    icon: FileText,
  },
  {
    number: "4",
    title: "Uitvoering",
    description: "We richten in, adviseren, bouwen of ondersteunen volgens de gemaakte afspraken.",
    icon: Wrench,
  },
  {
    number: "5",
    title: "Overdracht of support",
    description: "Je krijgt uitleg, beheerafspraken en eventueel doorlopende ondersteuning via SLA.",
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

const services = [
  {
    title: "Consultancy",
    focus: "Nut & optimalisatie",
    description:
      "We denken mee over waar edge AI praktisch nut kan hebben in je organisatie en hoe bestaand AI-gebruik slimmer, goedkoper of stabieler kan.",
    result: "Meer grip op waar lokale AI echt waarde toevoegt.",
    details: [
      "Analyse van huidig AI-gebruik, kosten en afhankelijkheden",
      "Advies over waar edge AI wel of niet logisch is",
      "Concrete aanbevelingen voor producten, inrichting of vervolgstappen",
    ],
    fit: "Voor organisaties die willen weten hoe edge AI nuttig kan zijn voordat ze kopen, bouwen of uitbreiden.",
    image: "/images/aitje-client-screens.png",
    icon: ClipboardPenLine,
    link: "/diensten/consultancy",
  },
  {
    title: "AITJE Custom",
    focus: "Custom route",
    description:
      "Voor organisaties met een concrete AI-vraag die vraagt om specifieke hardware, een eigen workflow of extra functionaliteit buiten onze standaardproducten.",
    result:
      "Een gerichte maatwerkoplossing tegen uurtarief, inclusief inzicht in de benodigde hardwarekosten.",
    details: [
      "Ontwikkeling van specifieke edge- of on-premise AI-functionaliteit",
      "Selectie en inrichting van passende hardware",
      "Oplevering rond een workflow waarvoor nog geen standaardoplossing bestaat",
    ],
    fit: "Voor organisaties met een concreet probleem waarvoor onze bestaande producten nog niet voldoende zijn.",
    image: "/images/custom-suited.png",
    icon: Sparkles,
    link: "/diensten/aitje-custom",
  },
  {
    title: "SLA",
    focus: "Strategisch partnerschap",
    description:
      "Een doorlopende samenwerking voor organisaties die AITJE als strategische partner willen voor support, kennisbankbeheer, advies en doorontwikkeling.",
    result: "Een vaste samenwerking waarin techniek, kennisbank en AI-richting niet ad hoc blijven liggen.",
    details: [
      "Kennisbank opzetten, inrichten, bijhouden of uitleg geven hoe je dat zelf doet",
      "Support, updates, troubleshooting en gereserveerde tijd",
      "Strategisch meedenken over AI-inzet, continuïteit en vervolgstappen",
    ],
    fit: "Voor organisaties die AITJE structureel naast zich willen hebben in plaats van alleen losse hulp per incident.",
    image: "/images/promptpaleis-home-screen.png",
    icon: ShieldCheck,
    link: "/diensten/sla",
  },
];
</script>
