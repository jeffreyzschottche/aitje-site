<template>
  <div class="bg-[#f5f5f5] text-gray-900">
    <SiteNavigation />

    <main class="px-6 pb-20 pt-32">
      <section class="mx-auto max-w-6xl rounded-[3rem] bg-[#212121] px-8 py-12 text-white md:px-12 md:py-16">
        <p class="text-sm font-semibold uppercase tracking-[0.5em] text-[#facc15]">
          Producten
        </p>
        <h1 class="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
          Producten, software en toepassingen van AITJE
        </h1>
        <p class="mt-6 max-w-3xl text-lg text-gray-300">
          Van lokale AI-hardware en eigen software tot toepassingen die direct
          inzetbaar zijn binnen je organisatie. Hier zie je waarmee je kunt
          starten, wat je kunt combineren en waar maatwerk logisch wordt.
        </p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <NuxtLink
            to="/diensten"
            class="inline-flex w-fit items-center justify-center self-start whitespace-nowrap rounded-full bg-[#facc15] px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white"
          >
            Bekijk diensten
          </NuxtLink>
          <NuxtLink
            to="/cases"
            class="inline-flex w-fit items-center justify-center self-start whitespace-nowrap rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white"
          >
            Bekijk cases
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
              1. AITJE Assistent
            </p>
            <h2 class="mt-3 text-3xl font-black text-gray-900 md:text-4xl">
              Hardware en lokale interfaces die al klaarstaan
            </h2>
            <p class="mt-3 max-w-3xl text-base text-gray-600">
              Van de AITJE Cube zelf tot het zelfgemaakte OS, client, embedding
              of custom builds. Dit zijn de bestaande onderdelen waar je direct
              mee kunt starten en op kunt doorbouwen.
            </p>
          </div>
          <NuxtLink
            to="/producten/hardware"
            class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:text-[#facc15]"
          >
            Meer info
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
              Out of the box solutions
            </h2>
            <p class="mt-3 max-w-3xl text-base text-gray-300">
              Onze oplossingen groeien continu. Als we al een modulaire oplossing
              hebben die voor jouw situatie out of the box te regelen valt, dan
              kun je die hier bekijken en direct doorklikken naar de juiste
              softwarepagina.
            </p>
          </div>
          <NuxtLink
            to="/producten/software"
            class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Meer info
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
                Open softwarepagina
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-6xl rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              3. Diensten
            </p>
            <h2 class="mt-3 text-3xl font-black text-gray-900 md:text-4xl">
              Hoe we organisaties helpen met implementatie en maatwerk
            </h2>
            <p class="mt-3 max-w-3xl text-base text-gray-600">
              AITJE denkt strategisch met je mee over hoe AI echt waarde toevoegt
              binnen je organisatie. Bekijk onze diensten om snel te zien waar we
              inhoudelijk, technisch en operationeel op ondersteunen.
            </p>
          </div>
          <NuxtLink
            to="/diensten"
            class="inline-flex w-fit items-center justify-center self-start whitespace-nowrap rounded-full bg-[#facc15] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-[#facc15]"
          >
            Bekijk diensten
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
              <p class="text-sm font-semibold text-gray-900">Resultaat</p>
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
              to="/diensten"
              class="mt-5 inline-flex text-sm font-semibold text-gray-900 transition hover:text-[#facc15]"
            >
              Meer over deze dienst
            </NuxtLink>
          </article>
        </div>
      </section>

      <section class="mx-auto mt-16 max-w-6xl rounded-[3rem] bg-[#212121] p-10 text-white">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
              Situationele oplossingen
            </p>
            <h2 class="mt-3 text-3xl font-black md:text-4xl">
              We bedenken ook specifieke oplossingen voor een concrete situatie
            </h2>
            <p class="mt-4 text-base text-gray-300">
              Niet elke vraag past in standaard hardware of een bestaande
              softwarepagina. In onze cases zie je hoe we toepassingen, agents,
              workflows en implementaties afstemmen op echte context.
            </p>
          </div>
          <NuxtLink
            to="/cases"
            class="inline-flex w-fit items-center justify-center self-start whitespace-nowrap rounded-full bg-[#facc15] px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white"
          >
            Bekijk cases
          </NuxtLink>
        </div>
      </section>
    </main>

    <BottomCta />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { softwareCatalog } from "@/data/softwareCatalog";

const productStats = [
  {
    label: "Overzicht",
    value: "Hardware + software",
    description:
      "Op deze pagina staat de gecombineerde lijn van AITJE: devices, lokale interfaces, software en toepassingen.",
  },
  {
    label: "Doorbouwen",
    value: "Van bestaand naar maatwerk",
    description:
      "Je kunt starten met bestaande bouwstenen en van daaruit opschalen naar integraties, kennislagen en custom trajecten.",
  },
  {
    label: "Volgende stap",
    value: "Diensten en cases",
    description:
      "Als je vraag niet volledig in een bestaand product past, laten diensten en cases zien hoe we het verder trekken naar jouw praktijk.",
  },
];

const hardwareShowcase = [
  {
    label: "Hardware",
    title: "AITJE Assistent",
    image: "/images/aitje-cubes.png",
    link: "/producten/hardware/aitje-assistent",
    description:
      "De lokale AI-assistent op eigen hardware met kennisbank, offline bereikbaarheid en API-toegang.",
    cta: "Meer over AITJE Assistent",
  },
  {
    label: "Hardware",
    title: "AITJE Custom",
    image: "/images/custom-suited.png",
    link: "/producten/hardware/aitje-custom",
    description:
      "Voor situaties waar standaardhardware niet precies past en je meer performance of specifieke integraties nodig hebt.",
    cta: "Meer over AITJE Custom",
  },
  {
    label: "Software",
    title: "AITJE Assistent OS",
    image: "/images/os-screenshots/chatassistent.jpeg",
    link: "/producten/software/aitje-assistent-os",
    description:
      "De lokale cockpit op de cube waar chat, kennis, kaarten, apparaten en beheer samenkomen.",
    cta: "Meer over AITJE Assistent OS",
  },
];

const softwareLabelForSlug = (slug: string) => {
  if (slug.startsWith("wordpress-")) return "WordPress";
  if (slug.startsWith("aitje-assistent-")) return "AITJE";
  if (slug === "promptpaleis") return "AI-platform";
  if (slug === "raad-van-bestuur") return "Council";
  return "Software";
};

const softwareShowcase = softwareCatalog.map((item) => ({
  label: softwareLabelForSlug(item.slug),
  title: item.title,
  image: item.image,
  link: `/producten/software/${item.slug}`,
  description: item.shortDescription,
}));

const services = [
  {
    focus: "Kosten & stabiliteit",
    title: "Consultancy: verbruik optimaliseren",
    description:
      "We analyseren je huidige AI-gebruik en maken je stack goedkoper, stabieler en minder afhankelijk van 1 partij.",
    result:
      "Lagere kosten, betere performance en meer grip op je leveranciers.",
    details: [
      "Analyse van tokenverbruik, kosten en latency",
      "Slim routeren tussen meerdere modellen",
    ],
  },
  {
    focus: "Strategie",
    title: "AI-strategie uitdenken",
    description:
      "We denken mee over waar AI nu de meeste waarde oplevert voor jouw organisatie en welke stappen logisch zijn om te zetten.",
    result:
      "Een duidelijk plan waarmee je direct kunt starten, zonder te verdwalen in alle AI-opties.",
    details: [
      "Een rapport waar AI nu direct meerwaarde geeft in je organisatie",
      "Een plan voor welke tools je vandaag al kunt inzetten",
    ],
  },
  {
    focus: "Kennisgedreven AI",
    title: "RAG-chat & maatwerkoplossingen",
    description:
      "Van AITJE Assistent tot maatwerk software: chat in, antwoord terug met gematchte context uit je eigen kennis.",
    result:
      "Direct bruikbare antwoorden op basis van je eigen documenten en bedrijfscontext.",
    details: [
      "RAG-chat met documenten, beleid en interne kennis",
      "Integratie in bestaande processen en teams",
    ],
  },
  {
    focus: "Implementatie",
    title: "Software-oplossingen op maat",
    description:
      "We bouwen software en applicaties op maat die AI logisch onderdeel maken van je dagelijkse operatie.",
    result:
      "Tools die precies aansluiten op je workflow in plaats van generieke software eromheen.",
    details: [
      "Maatwerk agents, dashboards en interne tools",
      "Aansluiting op bestaande processen, teams en systemen",
    ],
  },
];
</script>
