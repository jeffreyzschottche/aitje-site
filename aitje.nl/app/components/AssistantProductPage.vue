<template>
  <div class="bg-[#f6f3ea] text-[#161616]">
    <SiteNavigation />

    <main class="pt-24">
      <section class="bg-[#101010] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <p class="inline-flex w-fit items-center rounded-full border border-[#facc15]/40 bg-[#facc15] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black shadow-[0_10px_28px_rgba(250,204,21,0.18)]">
              {{ t.hero.kicker }}
            </p>
            <h1 class="mt-4 max-w-4xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              {{ t.hero.title }}
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              {{ t.hero.text }}
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <NuxtLink
                :to="routePath('/contact?onderwerp=offerte')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                {{ t.hero.primaryCta }}
              </NuxtLink>
              <NuxtLink
                :to="routePath('/diensten')"
                class="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/8"
              >
                {{ t.hero.secondaryCta }}
              </NuxtLink>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div
                v-for="fact in t.hero.facts"
                :key="fact.label"
                class="border-l border-[#facc15]/50 pl-4"
              >
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                  {{ fact.label }}
                </p>
                <p class="mt-2 text-sm leading-6 text-white/84">
                  {{ fact.value }}
                </p>
              </div>
            </div>
          </div>

          <figure>
            <ZoomableMedia
              :src="media.devicesComparison"
              :alt="t.hero.imageAlt"
              :zoom-label="t.mediaActions.zoomLabel"
              :close-label="t.mediaActions.closeLabel"
              frame-class="rounded-[2rem] border border-white/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              image-class="aspect-[16/10] w-full object-contain"
              loading="eager"
              fetchpriority="high"
            />
          </figure>
        </div>
      </section>

      <section class="px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.plain.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.plain.title }}
            </h2>
            <div class="mt-5 space-y-4 text-base leading-8 text-gray-700">
              <p v-for="paragraph in t.plain.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <article
              v-for="step in t.howItWorks"
              :key="step.title"
              class="rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#161616] text-[#facc15]">
                <component :is="step.icon" class="h-5 w-5" />
              </div>
              <h3 class="mt-4 text-xl font-black text-gray-950">
                {{ step.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ step.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <figure>
            <ZoomableMedia
              :src="media.osWalkthrough"
              :alt="t.os.imageAlt"
              :zoom-label="t.mediaActions.zoomLabel"
              :close-label="t.mediaActions.closeLabel"
              frame-class="rounded-[2rem] border border-gray-200 bg-[#f8f8f8] shadow-sm"
              image-class="aspect-video w-full object-contain"
            />
          </figure>

          <article>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.os.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.os.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.os.text }}
            </p>
            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <div
                v-for="item in t.os.items"
                :key="item"
                class="flex min-h-20 items-center gap-3 rounded-[1.5rem] border border-gray-200 bg-[#fbfaf6] p-4 text-sm leading-6 text-gray-700"
              >
                <CheckCircle2 class="h-5 w-5 shrink-0 text-[#8f7200]" />
                <span>{{ item }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.client.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.client.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.client.text }}
            </p>
          </div>

          <div class="mt-8 space-y-6">
            <article
              v-for="demo in t.client.demos"
              :key="demo.title"
              class="grid overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]"
            >
              <ZoomableMedia
                :src="demo.image"
                :alt="demo.alt"
                :caption="demo.title"
                :zoom-label="t.mediaActions.zoomLabel"
                :close-label="t.mediaActions.closeLabel"
                frame-class="h-full border-b border-gray-200 bg-[#f8f8f8] lg:border-b-0 lg:border-r"
                image-class="aspect-video h-full min-h-[20rem] w-full object-contain"
              />
              <div class="flex flex-col justify-center p-6 lg:p-8">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[#8f7200]">
                  {{ demo.kicker }}
                </p>
                <h3 class="mt-2 text-xl font-black text-gray-950">
                  {{ demo.title }}
                </h3>
                <p class="mt-3 text-sm leading-7 text-gray-600">
                  {{ demo.text }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[#161616] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
            <article>
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
                {{ t.network.kicker }}
              </p>
              <h2 class="mt-3 text-4xl font-black">
                {{ t.network.title }}
              </h2>
              <p class="mt-5 text-base leading-8 text-white/76">
                {{ t.network.text }}
              </p>
              <div class="mt-8 space-y-3">
                <div
                  v-for="endpoint in t.network.endpoints"
                  :key="endpoint.path"
                  class="rounded-[1.5rem] border border-white/10 bg-white/6 p-4"
                >
                  <p class="font-mono text-sm text-[#facc15]">
                    {{ endpoint.path }}
                  </p>
                  <p class="mt-2 text-sm leading-6 text-white/70">
                    {{ endpoint.text }}
                  </p>
                </div>
              </div>
            </article>

            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <figure
                v-for="screen in t.network.screens"
                :key="screen.title"
                class="overflow-hidden rounded-[2rem] border border-white/10 bg-white"
              >
                <ZoomableMedia
                  :src="screen.image"
                  :alt="screen.alt"
                  :caption="screen.title"
                  :zoom-label="t.mediaActions.zoomLabel"
                  :close-label="t.mediaActions.closeLabel"
                  frame-class="bg-[#f8f8f8]"
                  image-class="aspect-[16/9] max-h-[9.5rem] w-full object-cover object-top"
                />
                <figcaption class="border-t border-gray-200 bg-white p-4">
                  <h3 class="text-sm font-black leading-snug text-gray-950">
                    {{ screen.title }}
                  </h3>
                  <p class="mt-2 text-xs leading-6 text-gray-600">
                    {{ screen.text }}
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section class="px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div>
            <div class="max-w-4xl">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
                {{ t.knowledge.kicker }}
              </p>
              <h2 class="mt-3 text-4xl font-black text-gray-950">
                {{ t.knowledge.title }}
              </h2>
              <div class="mt-5 space-y-4 text-base leading-8 text-gray-700">
                <p v-for="paragraph in t.knowledge.paragraphs" :key="paragraph">
                  {{ paragraph }}
                </p>
              </div>
            </div>

            <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <article
                v-for="screen in t.knowledge.screens"
                :key="screen.title"
                class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
              >
                <ZoomableMedia
                  :src="screen.image"
                  :alt="screen.alt"
                  :caption="screen.title"
                  :zoom-label="t.mediaActions.zoomLabel"
                  :close-label="t.mediaActions.closeLabel"
                  frame-class="border-b border-gray-200 bg-[#f8f8f8]"
                  image-class="aspect-video min-h-[15rem] w-full object-contain"
                />
                <div class="p-5">
                  <h3 class="text-lg font-black text-gray-950">
                    {{ screen.title }}
                  </h3>
                  <p class="mt-2 text-sm leading-7 text-gray-600">
                    {{ screen.text }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.values.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.values.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.values.text }}
            </p>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="value in t.values.items"
              :key="value.title"
              class="rounded-[2.5rem] border border-gray-200 bg-[#fbfaf6] p-6"
            >
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#8f7200] shadow-sm">
                <component :is="value.icon" class="h-5 w-5" />
              </div>
              <h3 class="mt-4 text-xl font-black text-gray-950">
                {{ value.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-gray-600">
                {{ value.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="px-5 py-16 sm:px-8 lg:px-10">
        <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#8f7200]">
              {{ t.variants.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black text-gray-950">
              {{ t.variants.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-gray-700">
              {{ t.variants.text }}
            </p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <article
                v-for="fleet in t.variants.fleet"
                :key="fleet.title"
                class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm"
              >
                <ZoomableMedia
                  :src="fleet.image"
                  :alt="fleet.alt"
                  :zoom-label="t.mediaActions.zoomLabel"
                  :close-label="t.mediaActions.closeLabel"
                  frame-class="border-b border-gray-200 bg-[#f8f8f8]"
                  image-class="aspect-[16/10] w-full object-contain"
                />
                <div class="p-5">
                  <p class="text-sm leading-7 text-gray-600">
                    {{ fleet.text }}
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div class="space-y-5">
            <div class="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-sm">
              <div class="grid bg-[#161616] text-white sm:grid-cols-3">
                <div class="p-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                  {{ t.variants.table.feature }}
                </div>
                <div
                  v-for="edition in t.variants.editions"
                  :key="edition.title"
                  class="border-t border-white/10 p-5 sm:border-l sm:border-t-0"
                >
                  <ZoomableMedia
                    :src="edition.image"
                    :alt="edition.alt"
                    :caption="edition.title"
                    :zoom-label="t.mediaActions.zoomLabel"
                    :close-label="t.mediaActions.closeLabel"
                    frame-class="mb-4 overflow-hidden rounded-[1.5rem] bg-[#161616]"
                    image-class="aspect-[4/3] w-full object-contain"
                  />
                  <p class="text-sm font-black text-[#facc15]">{{ edition.title }}</p>
                  <p class="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    {{ edition.kicker }}
                  </p>
                </div>
              </div>
              <div
                v-for="row in t.variants.rows"
                :key="row.feature"
                class="grid border-t border-gray-200 sm:grid-cols-3"
              >
                <div class="bg-[#fbfaf6] p-5 text-sm font-black text-gray-950">
                  {{ row.feature }}
                </div>
                <div class="border-t border-gray-100 p-5 text-sm leading-7 text-gray-700 sm:border-l sm:border-t-0">
                  {{ row.assistant }}
                </div>
                <div class="border-t border-gray-100 p-5 text-sm leading-7 text-gray-700 sm:border-l sm:border-t-0">
                  {{ row.plus }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#101010] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <article>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#facc15]">
              {{ t.services.kicker }}
            </p>
            <h2 class="mt-3 text-4xl font-black">
              {{ t.services.title }}
            </h2>
            <p class="mt-5 text-base leading-8 text-white/76">
              {{ t.services.text }}
            </p>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <NuxtLink
                :to="routePath('/contact?onderwerp=offerte')"
                class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-7 py-3 text-sm font-semibold text-black transition hover:bg-white"
              >
                {{ t.services.primaryCta }}
              </NuxtLink>
              <NuxtLink
                :to="routePath('/diensten')"
                class="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                {{ t.services.secondaryCta }}
              </NuxtLink>
            </div>
          </article>

          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="item in t.services.items"
              :key="item.title"
              class="rounded-[2rem] border border-white/10 bg-white/6 p-5"
            >
              <h3 class="text-lg font-black text-white">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-sm leading-7 text-white/68">
                {{ item.text }}
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <BottomCta :with-top-margin="false" />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  CloudOff,
  Database,
  FileText,
  Globe2,
  HardDrive,
  Leaf,
  LockKeyhole,
  Network,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Wrench,
  Zap,
} from "lucide-vue-next";

type LocaleKey = "nl" | "en";

const props = defineProps<{
  locale: LocaleKey;
}>();

const { localePath } = useSiteLocale();
const {
  public: { siteUrl },
} = useRuntimeConfig();

const routePath = (path: string) => localePath(path, props.locale);
const absoluteAssistantImage = computed(
  () => `${siteUrl.replace(/\/$/, "")}${media.devicesComparison}`,
);

const media = {
  devicesComparison: "/images/assistant/assistant-devices-comparison.png",
  osWalkthrough: "/videos/assistant/os-walkthrough.gif",
  normalChat: "/videos/assistant/normal-chat.gif",
  websearchChat: "/videos/assistant/websearch-chat.gif",
  reasoningChat: "/videos/assistant/chat-with-reasoning.gif",
  deviceAssistant: "/images/assistant/device-with-logo.png",
  devicePlus: "/images/assistant/device-plus-with-logo.png",
  devicesAssistant: "/images/assistant/devices-with-logo.png",
  devicesPlus: "/images/assistant/devices-plus-with-logo.png",
  clientChatNormal: "/images/assistant/client-chat-normal.png",
  clientChatImage: "/images/assistant/client-chat-image-response.png",
  clientChatWebsearch: "/images/assistant/client-chat-websearch-image.png",
  connect: "/images/assistant/connect-bootstrap.png",
  chooseDevice: "/images/assistant/client-choose-device-chat.png",
  login: "/images/assistant/client-login-chat.png",
  embedderLogin: "/images/assistant/embedder-login.png",
  embedderUpload: "/images/assistant/embedder-upload-document.png",
  embedderLibrary: "/images/assistant/embedder-library.png",
  embedderInsight: "/images/assistant/embedder-kennisbank-inzicht.png",
  embedderPriorities: "/images/assistant/embedder-prioriteiten.png",
  embedderAccount: "/images/assistant/embedder-mijn-account.png",
};

const nl = {
  meta: {
    title: "AITJE Assistent | Lokale AI voor je organisatie",
    description:
      "AITJE Assistent is een lokaal AI-station met chat, kennisbank en beheer voor organisaties die veilig met AI willen werken op hun eigen netwerk.",
  },
  mediaActions: {
    zoomLabel: "Vergroot",
    closeLabel: "Sluiten",
  },
  hero: {
    kicker: "Lokale AI voor organisaties",
    title: "AITJE Assistent",
    text:
      "De AITJE Assistent is een lokaal AI-station waarmee je team met AI kan chatten zonder dat interne data voor gewone chat en kennisvragen wordt gedeeld met externe AI-diensten. AITJE draait op zorgvuldig geselecteerde hardware in je eigen omgeving, werkt via je lokale netwerk en gebruikt een ingebouwde kennisbank om documenten beschikbaar te maken voor de assistent.",
    primaryCta: "Bespreek AITJE Assistent",
    secondaryCta: "Bekijk diensten",
    imageAlt: "AITJE Assistent hardware met AITJE software",
    facts: [
      { label: "Eigen netwerk", value: "Chat, beheer en kennisbank draaien binnen je eigen lokale omgeving." },
      { label: "Geen internet nodig", value: "Gewone chat en lokale kennisvragen blijven werken zonder internetverbinding." },
      { label: "Zelf of met hulp", value: "Werkt out of the box en is gemakkelijk zelf te installeren. Installatie, SLA en uitbreiding zijn optioneel." },
    ],
  },
  plain: {
    kicker: "Praktisch uitgelegd",
    title: "Conversational AI op je eigen netwerk",
    paragraphs: [
      "AITJE Assistent voelt voor medewerkers als een gewone chatomgeving: vraag stellen, antwoord controleren en verder werken. Het verschil is dat de assistent lokaal draait op hardware binnen je eigen organisatie.",
      "Het station bevat de AI-software, chatomgeving, kennisbank en beheerfuncties. Je kunt documenten verwerken tot kennis, accounts aanmaken en rollen toewijzen voor chat, beheer en kennisverwerking.",
      "Voor mkb, scholen en organisaties die veel met kennis werken is dit een praktische manier om veilig met AI te bouwen. Voor gewone lokale vragen betaal je niet per vraag aan een externe AI-dienst, en ze blijven ook zonder internet beschikbaar.",
      "Wil je later uitbreiden, nieuwe taalmodellen instellen of ondersteuning bij storingen, dan kan dat via aanvullende diensten of een SLA.",
    ],
  },
  howItWorks: [
    {
      icon: HardDrive,
      title: "Werkend AI-station",
      text: "De hardware wordt geleverd met AITJE software, lokaal model, chat, kennisbank en beheer voorbereid. We bouwen de hardware niet zelf, maar selecteren zorgvuldig wat past bij de inzet.",
    },
    {
      icon: Network,
      title: "Lokale toegang",
      text: "Zodra AITJE aanstaat, is de chat bereikbaar via je lokale netwerk. Voor gewone chat en vragen op basis van lokale kennis is geen internetverbinding nodig.",
    },
    {
      icon: Bot,
      title: "Chat voor medewerkers",
      text: "Medewerkers openen de chat op laptop, desktop of tablet en stellen vragen met hun eigen account. Rollen bepalen wie alleen mag chatten en wie ook mag beheren.",
    },
    {
      icon: Database,
      title: "Eigen kennis erbij",
      text: "Documenten worden verwerkt tot kennis die AITJE kan gebruiken bij antwoorden. Je kunt instellen welke accounts documenten mogen uploaden, verwerken en beheren.",
    },
  ],
  os: {
    kicker: "Beheer op het station",
    title: "Beheer AITJE vanuit één lokaal paneel",
    text:
      "Op het AITJE-station stel je in hoe de assistent werkt binnen je organisatie. Je beheert accounts, rollen, netwerktoegang, kennisverwerking, modelkeuze en werkmodi vanaf de lokale beheeromgeving.",
    imageAlt: "AITJE Assistent toont lokale beheerfuncties",
    items: [
      "Accounts en rollen",
      "Netwerk en wifi",
      "Taalmodellen kiezen",
      "Focusmode instellen",
      "Eigen modus toevoegen",
      "Gebruik en API-inzicht",
      "Kennis verwerken",
      "Lokaal beheer",
    ],
  },
  client: {
    kicker: "Chatomgeving",
    title: "Chatten met de lokale assistent",
    text:
      "De chatomgeving werkt zoals mensen gewend zijn van ChatGPT, Claude of Gemini: inloggen en chatten. Het verschil is dat gewone lokale vragen zonder abonnement per gebruiker werken, je interne gegevens niet worden gedeeld met externe AI-diensten en de context via de kennisbank beheerd kan worden. Medewerkers kunnen tekst, afbeeldingen en documenten gebruiken, terwijl focusmodes de assistent laten antwoorden vanuit een passende rol of situatie.",
    demos: [
      {
        kicker: "Lokale chat",
        title: "Vragen stellen aan AITJE",
        text: "Voor interne vragen, samenvattingen, conceptteksten en uitleg op basis van de kennis die op de assistent beschikbaar is. Het taalmodel is al breed getraind, maar via RAG en vector embedding kan AITJE ook relevante stukken uit je eigen kennisbank ophalen voor persoonlijke en organisatie-specifieke antwoorden.",
        image: media.normalChat,
        alt: "AITJE chatomgeving met normale lokale chat",
      },
      {
        kicker: "Web search",
        title: "Actuele informatie wanneer je dat nodig hebt",
        text: "Een taalmodel is getraind tot een bepaald moment en kent niet vanzelf alles wat daarna is gebeurd. Met web search kan AITJE actuele online informatie ophalen en verbinden met het antwoord. Deze functie gebruik je bewust per vraag en heeft internet nodig.",
        image: media.websearchChat,
        alt: "AITJE chatomgeving met web search ingeschakeld",
      },
      {
        kicker: "Redeneermodus",
        title: "Meer structuur bij complexere vragen",
        text: "Voor vragen waar meer afweging, controle en uitleg nodig is, kan de redeneermodus worden gebruikt. Dit duurt langer dan een normaal antwoord, maar je merkt dat de AI meer stappen zet, opties afweegt en gestructureerder redeneert.",
        image: media.reasoningChat,
        alt: "AITJE chatomgeving met redeneermodus ingeschakeld",
      },
    ],
  },
  network: {
    kicker: "Bereikbaar in je eigen netwerk",
    title: "Direct bereikbaar voor je team",
    text:
      "Na het opstarten zijn de chat en kennisbank bereikbaar binnen je eigen netwerk. Medewerkers gebruiken de chat, beheerders met de juiste rol beheren documenten. Zonder internet blijven gewone chat en lokale kennisvragen beschikbaar; internet is alleen nodig voor web search, updates en support.",
    endpoints: [
      {
        path: "http://aitje-0.local/connect",
        text: "Eerste toegang tot AITJE. Hier installeer je het SSL-certificaat zodat je apparaat veilig met het lokale station kan verbinden.",
      },
      {
        path: "https://aitje-0.local/",
        text: "De chatomgeving voor medewerkers die vragen stellen aan de lokale assistent.",
      },
      {
        path: "https://aitje-0.local/embedder/",
        text: "De kennisbankomgeving voor accounts die documenten mogen beheren.",
      },
    ],
    screens: [
      {
        title: "Connect-flow voor eerste toegang",
        text: "Open via de lokale URL, QR of connect-link. Hier installeer je het SSL-certificaat voor een veilige verbinding met AITJE.",
        image: media.connect,
        alt: "AITJE connect bootstrap scherm",
      },
      {
        title: "Station kiezen",
        text: "Vul het nummer van de sticker achterop in. Zo weet je apparaat met welk AITJE-station het moet verbinden.",
        image: media.chooseDevice,
        alt: "AITJE stationkeuze",
      },
      {
        title: "Inloggen met account",
        text: "Log in met een account uit gebruikersbeheer. Toegang blijft gekoppeld aan gebruikers en rollen.",
        image: media.login,
        alt: "AITJE login",
      },
      {
        title: "Normaal chatten met AITJE",
        text: "Medewerkers stellen direct vragen aan de lokale assistent. De chat werkt via je eigen netwerk.",
        image: media.clientChatNormal,
        alt: "AITJE chatomgeving normale chat",
      },
      {
        title: "Document of beeld meesturen",
        text: "Upload een document, screenshot, foto of ander bestand en stel daar direct een vraag over.",
        image: media.clientChatImage,
        alt: "AITJE chatomgeving met document of afbeelding en antwoord",
      },
      {
        title: "Web search vanuit de client",
        text: "Gebruik web search vanuit dezelfde client wanneer actuele externe informatie nodig is. Lokaal blijft de basis.",
        image: media.clientChatWebsearch,
        alt: "AITJE chatomgeving met web search",
      },
    ],
  },
  knowledge: {
    kicker: "Kennisbank",
    title: "Je documenten worden kennis voor AITJE",
    paragraphs: [
      "De kennisbank start mee zodra je AITJE Assistent aanzet. Als het device verbonden is met je modem of wifi, is de kennisbank bereikbaar binnen je eigen netwerk.",
      "Je opent de kennisbank direct via https://aitje-0.local/embedder/, via de connectpagina waar je kunt kiezen tussen chat en kennisbank, of door de QR-code te scannen in het kennisbanktabje van de assistentsoftware.",
      "Voor medewerkers blijft dat eenvoudig: zij stellen een vraag. AITJE zoekt relevante informatie uit de beschikbare documenten en gebruikt die als basis voor het antwoord.",
      "Je kunt de kennisbank zelf beheren. Via de client op een ander device kun je ook een backup van je kennisbank maken en zelf opslaan. Die backup gebruiken we ook wanneer je later bijvoorbeeld overstapt van AITJE Assistent naar AITJE Assistent+.",
      "Wil je hulp bij structuur, uitleg, backups of beheer, dan kan dat via een dienst. Kennis kan ook worden overgezet met backup, export en import.",
    ],
    screens: [
      {
        title: "Documenten uploaden",
        text: "Upload beleid, handleidingen, procedures, rapporten of andere documenten. AITJE verwerkt ze zodat ze bruikbaar worden voor antwoorden.",
        image: media.embedderUpload,
        alt: "AITJE kennisbank documenten uploaden",
      },
      {
        title: "Bibliotheek beheren",
        text: "In de bibliotheek zie je welke bronnen beschikbaar zijn, welke documenten al verwerkt zijn en welke kennis actief is.",
        image: media.embedderLibrary,
        alt: "AITJE kennisbank bibliotheek",
      },
      {
        title: "Inzicht in kennis",
        text: "Het inzichtsscherm laat zien hoeveel informatie is verwerkt en wat recent is toegevoegd.",
        image: media.embedderInsight,
        alt: "AITJE kennisbankinzicht",
      },
      {
        title: "Prioriteiten instellen",
        text: "Met prioriteiten kun je aangeven welke categorieen of bronnen zwaarder moeten meewegen in antwoorden.",
        image: media.embedderPriorities,
        alt: "AITJE kennisbank prioriteiten",
      },
      {
        title: "Inloggen in de kennisbank",
        text: "Alleen accounts met de juiste rol krijgen toegang tot beheerfuncties. Medewerkers die alleen chat nodig hebben, hoeven hier niet in te werken.",
        image: media.embedderLogin,
        alt: "AITJE kennisbank login",
      },
      {
        title: "Account en rol beheren",
        text: "Via accountbeheer blijft duidelijk wie toegang heeft en welke rol iemand heeft. Daarmee scheid je chatgebruik van kennisbeheer.",
        image: media.embedderAccount,
        alt: "AITJE kennisbank accountinstellingen",
      },
    ],
  },
  values: {
    kicker: "AITJE-visie",
    title: "AI dichtbij, minder afhankelijk",
    text:
      "AI wordt steeds belangrijker in dagelijks werk, maar daarmee groeien ook de knelpunten: abonnementen, onvoorspelbare gebruikskosten, datadeling en afhankelijkheid van grote platformen. AITJE Assistent kiest voor een lokale basis: je eigen AI-station, gekoppeld aan je eigen kennis en waar nodig aangevuld met web search.",
    items: [
      {
        icon: LockKeyhole,
        title: "Privacy begint lokaal",
        text: "Bij gewone lokale chat en kennisvragen blijven vragen, documenten en rollen binnen je eigen omgeving. Je hoeft interne informatie niet standaard met externe AI-diensten te delen.",
      },
      {
        icon: Zap,
        title: "Minder gripverlies op kosten",
        text: "Veel AI-diensten werken met abonnementen of gebruikskosten. Niemand weet hoe duur externe AI in de toekomst wordt. Met AITJE draaien gewone vragen lokaal, zonder betaling per vraag aan een externe AI-dienst.",
      },
      {
        icon: Leaf,
        title: "Bewuster met energie",
        text: "Niet elke vraag hoeft naar grote datacenters. Als iets lokaal kan worden beantwoord, voorkom je onnodig dataverkeer en externe verwerking.",
      },
      {
        icon: CloudOff,
        title: "Minder afhankelijkheid",
        text: "Zolang het device stroom heeft en je lokale netwerk werkt, blijven gewone chat en kennisvragen beschikbaar. Internetstoringen of problemen bij externe AI-platformen leggen je lokale basis niet stil.",
      },
      {
        icon: SlidersHorizontal,
        title: "Kennis plus actualiteit",
        text: "Het taalmodel brengt brede algemene kennis mee, je kennisbank voegt je eigen bedrijfsinformatie toe en web search kan actuele informatie ophalen wanneer je dat nodig hebt.",
      },
      {
        icon: Wrench,
        title: "Groeit met je organisatie",
        text: "Je kunt zelf starten en later uitbreiden met installatie, SLA, support, nieuwe taalmodellen, extra functies of een upgrade naar AITJE Assistent+.",
      },
    ],
  },
  variants: {
    kicker: "Twee uitvoeringen",
    title: "Eén product, twee versies",
    text:
      "AITJE Assistent is er in een standaarduitvoering en een plus-uitvoering. De standaarduitvoering is bedoeld voor teams die lokaal willen werken met chat, kennisbank en dagelijks documentgebruik. AITJE Assistent+ geeft meer capaciteit: sneller antwoorden, zwaardere taalmodellen, meer gelijktijdig gebruik en meer ruimte om kennis te verwerken. We werken nu met twee zorgvuldig gekozen white-label hardwaredevices die voor deze use case sterk zijn in prijs en kwaliteit. Omdat de hardwaremarkt snel verandert, werken we met prijs op aanvraag in plaats van een vaste hardwarebelofte. Voor specifieke situaties kunnen we via AITJE Custom zoeken naar white-label hardware die beter past bij jouw use case.",
    imageAlt: "AITJE Assistent uitvoeringen",
    editions: [
      {
        kicker: "Standaard uitvoering",
        title: "AITJE Assistent",
        text: "Voor teams die lokaal willen chatten, documenten willen gebruiken als kennisbron en dagelijks AI-werk veilig binnen de organisatie willen houden.",
        image: media.deviceAssistant,
        alt: "AITJE Assistent device",
      },
      {
        kicker: "Plus uitvoering",
        title: "AITJE Assistent+",
        text: "Voor organisaties die meer snelheid, zwaardere taalmodellen, meer gebruikers tegelijk of een grotere kennisbank nodig hebben.",
        image: media.devicePlus,
        alt: "AITJE Assistent Plus device",
      },
    ],
    table: {
      feature: "Keuze",
      assistant: "AITJE Assistent",
      plus: "AITJE Assistent+",
    },
    rows: [
      {
        feature: "Past bij",
        assistant: "Teams, scholen en organisaties die lokaal willen chatten met eigen kennis en documenten.",
        plus: "Organisaties met meer gebruikers, grotere kennisbanken of hogere eisen aan snelheid en modelkracht.",
      },
      {
        feature: "Dagelijks gebruik",
        assistant: "Geschikt voor vragen, samenvattingen, uitleg, documentwerk, beeldinput en kennisbankvragen.",
        plus: "Geschikt voor hetzelfde gebruik, maar met meer ruimte voor intensiever werk en gelijktijdige activiteit.",
      },
      {
        feature: "Kennisbank",
        assistant: "Past goed bij een duidelijke kennisbank voor teams, afdelingen of een organisatie.",
        plus: "Meer ruimte om kennis te verwerken, te embedden en breder beschikbaar te maken.",
      },
      {
        feature: "Taalmodellen",
        assistant: "Draait lokale taalmodellen die goed passen bij dagelijks gebruik.",
        plus: "Kan zwaardere taalmodellen aan en geeft meer ruimte voor snelheid en kwaliteit.",
      },
      {
        feature: "Prijs",
        assistant: "Lagere instap dan Assistent+, afhankelijk van uitvoering, inrichting en eventuele diensten.",
        plus: "Hoger door extra capaciteit, krachtigere uitvoering en eventuele extra inrichting.",
      },
    ],
    fleet: [
      {
        title: "AITJE Assistent in serie",
        text: "Voor meerdere plekken, lokalen of teams kan dezelfde uitvoering vaker worden geplaatst met dezelfde lokale manier van werken.",
        image: media.devicesAssistant,
        alt: "Meerdere AITJE Assistent devices",
      },
      {
        title: "AITJE Assistent+ in serie",
        text: "Voor zwaardere inzet kan Assistent+ op meerdere plekken worden gebruikt waar meer snelheid, capaciteit of kennisruimte nodig is.",
        image: media.devicesPlus,
        alt: "Meerdere AITJE Assistent Plus devices",
      },
    ],
  },
  services: {
    kicker: "Volgende stap",
    title: "Zelf starten of laten inrichten",
    text:
      "AITJE Assistent werkt out of the box en kan los worden aangeschaft. Wil je dat wij helpen met installatie, kennisbankinrichting, backups, SLA, support of uitbreiding, dan kan dat via een dienst. Als standaard of plus niet past, kijken we naar AITJE Custom.",
    primaryCta: "Vraag een offerte aan",
    secondaryCta: "Bekijk alle diensten",
    items: [
      {
        title: "Installatie en overdracht",
        text: "Je kunt zelf installeren, maar we kunnen ook helpen met toegang, lokale netwerksetup en uitleg voor je team.",
      },
      {
        title: "Kennisbank en backups",
        text: "Je kunt documenten zelf beheren. We kunnen helpen met structuur, prioriteiten, backup, export en import.",
      },
      {
        title: "SLA, updates en uitbreiding",
        text: "Via SLA of aanvullende diensten kunnen we helpen met updates, support, nieuwe modellen of productuitbreiding.",
      },
      {
        title: "Upgrade of Custom",
        text: "Meer kracht nodig? Dan kan Assistent+ logisch zijn. Voor specifieke hardware, software of koppelingen is er AITJE Custom.",
      },
    ],
  },
};

const en: typeof nl = {
  meta: {
    title: "AITJE Assistent | Local AI for your organization",
    description:
      "AITJE Assistent is a local AI station with chat, knowledge base and management for organizations that want to work with AI safely on their own network.",
  },
  mediaActions: {
    zoomLabel: "Enlarge",
    closeLabel: "Close",
  },
  hero: {
    kicker: "Local AI for organizations",
    title: "AITJE Assistent",
    text:
      "A local AI station that lets your team chat with AI without sharing internal data for normal chat and knowledge questions with external AI services. AITJE runs on carefully selected hardware in your own environment, works through your local network and uses a built-in knowledge base to make documents available to the assistant.",
    primaryCta: "Discuss AITJE Assistent",
    secondaryCta: "View services",
    imageAlt: "AITJE Assistent hardware with AITJE software",
    facts: [
      { label: "Own network", value: "Chat, management and knowledge base run inside your local environment." },
      { label: "No internet needed", value: "Normal chat and local knowledge questions keep working without an internet connection." },
      { label: "Self or supported", value: "You can install it yourself; installation, SLA and expansion are optional." },
    ],
  },
  plain: {
    kicker: "Practical explanation",
    title: "Conversational AI on your own network",
    paragraphs: [
      "For employees, AITJE Assistent feels like a normal chat environment: ask a question, check the answer and continue working. The difference is that the assistant runs locally on hardware inside your own organization.",
      "The station includes the AI software, chat environment, knowledge base and management features. You can process documents into knowledge, create accounts and assign roles for chat, management and knowledge processing.",
      "For small businesses, schools and organizations that work with a lot of knowledge, this is a practical way to build safely with AI. For normal local questions, you do not pay per question to an external AI service, and they remain available without internet.",
      "If you want to expand later, install new language models or get support for incidents, that can be added through extra services or an SLA.",
    ],
  },
  howItWorks: [
    {
      icon: HardDrive,
      title: "Working AI station",
      text: "The hardware is delivered with AITJE software, local model, chat, knowledge base and management prepared. We do not build the hardware ourselves, but carefully select what fits the use case.",
    },
    {
      icon: Network,
      title: "Local access",
      text: "Once AITJE is on, the chat is reachable through your local network. Internet is not required for normal chat and questions based on local knowledge.",
    },
    {
      icon: Bot,
      title: "Chat for employees",
      text: "Employees open the chat on laptop, desktop or tablet and ask questions with their own account. Roles decide who can only chat and who may also manage.",
    },
    {
      icon: Database,
      title: "Own knowledge included",
      text: "Documents are processed into knowledge AITJE can use in answers. You decide which accounts may upload, process and manage documents.",
    },
  ],
  os: {
    kicker: "Management on the station",
    title: "Manage AITJE from one local panel",
    text:
      "On the AITJE station you configure how the assistant works inside your organization. You manage accounts, roles, network access, knowledge processing, model choice and work modes from the local management environment.",
    imageAlt: "AITJE Assistent shows local management features",
    items: [
      "Accounts and roles",
      "Network and wifi",
      "Choose language models",
      "Set focus mode",
      "Add custom mode",
      "Usage and API insight",
      "Process knowledge",
      "Local management",
    ],
  },
  client: {
    kicker: "Chat environment",
    title: "Chat with the local assistant",
    text:
      "The chat environment works the way people already know from ChatGPT, Claude or Gemini: log in and start chatting. The difference is that normal local questions work without a per-user subscription, internal data is not shared with external AI services, and context can be managed through the knowledge base. Employees can use text, images and documents, while focus modes let the assistant answer from a role or situation that fits the task.",
    demos: [
      {
        kicker: "Local chat",
        title: "Ask AITJE questions",
        text: "For internal questions, summaries, draft texts and explanations based on the knowledge available on the assistant. The language model is already broadly trained, but through RAG and vector embedding AITJE can also retrieve relevant parts from your own knowledge base for personal and organization-specific answers.",
        image: media.normalChat,
        alt: "AITJE chat environment with normal local chat",
      },
      {
        kicker: "Web search",
        title: "Current information when you need it",
        text: "A language model is trained up to a certain point and does not automatically know everything that happened afterwards. With web search, AITJE can retrieve current online information and connect it to the answer. This feature is used deliberately per question and requires internet.",
        image: media.websearchChat,
        alt: "AITJE chat environment with web search enabled",
      },
      {
        kicker: "Reasoning mode",
        title: "More structure for complex questions",
        text: "For questions that require more consideration, control and explanation, reasoning mode can be used. It takes longer than a normal answer, but the AI takes more steps, weighs options and reasons in a more structured way.",
        image: media.reasoningChat,
        alt: "AITJE chat environment with reasoning mode enabled",
      },
    ],
  },
  network: {
    kicker: "Reachable in your own network",
    title: "Ready for your team",
    text:
      "After startup, the chat and knowledge base are reachable inside your own network. Employees use the chat, administrators with the right role manage documents. Without internet, normal chat and local knowledge questions remain available; internet is only needed for web search, updates and support.",
    endpoints: [
      {
        path: "http://aitje-0.local/connect",
        text: "First access to AITJE. Here you install the SSL certificate so your device can connect securely to the local station.",
      },
      {
        path: "https://aitje-0.local/",
        text: "The chat environment for employees asking questions to the local assistant.",
      },
      {
        path: "https://aitje-0.local/embedder/",
        text: "The knowledge base environment for accounts that may manage documents.",
      },
    ],
    screens: [
      {
        title: "Connect flow for first access",
        text: "Open it through the local URL, QR or connect link. Install the SSL certificate for a secure connection to AITJE.",
        image: media.connect,
        alt: "AITJE connect bootstrap screen",
      },
      {
        title: "Choose station",
        text: "Enter the number from the sticker on the back. Your device then knows which AITJE station to connect to.",
        image: media.chooseDevice,
        alt: "AITJE station selection",
      },
      {
        title: "Log in with account",
        text: "Log in with an account from user management. Access stays tied to users and roles.",
        image: media.login,
        alt: "AITJE login",
      },
      {
        title: "Normal chat with AITJE",
        text: "Employees ask the local assistant questions directly. The chat works through your own network.",
        image: media.clientChatNormal,
        alt: "AITJE chat environment normal chat",
      },
      {
        title: "Send a document or image",
        text: "Upload a document, screenshot, photo or other file and ask a question about it directly.",
        image: media.clientChatImage,
        alt: "AITJE chat environment with document or image and answer",
      },
      {
        title: "Web search from the client",
        text: "Use web search from the same client when current external information is needed. Local remains the base.",
        image: media.clientChatWebsearch,
        alt: "AITJE chat environment with web search",
      },
    ],
  },
  knowledge: {
    kicker: "Knowledge base",
    title: "Your documents become knowledge for AITJE",
    paragraphs: [
      "The knowledge base starts when you turn on AITJE Assistent. Once the device is connected to your modem or wifi, the knowledge base is reachable inside your own network.",
      "You can open the knowledge base directly at https://aitje-0.local/embedder/, from the connect page where you choose between chat and knowledge base, or by scanning the QR code in the knowledge base tab of the assistant software.",
      "For employees, it stays simple: they ask a question. AITJE searches relevant information from the available documents and uses it as the basis for the answer.",
      "You can manage the knowledge base yourself. From the client on another device, you can also create a backup of your knowledge base and store it yourself. We use that same backup flow when you later move from AITJE Assistent to AITJE Assistent+.",
      "If you want help with structure, explanation, backups or management, that can be added as a service. Knowledge can also be moved with backup, export and import.",
    ],
    screens: [
      {
        title: "Upload documents",
        text: "Upload policies, manuals, procedures, reports or other documents. AITJE processes them so they can be used in answers.",
        image: media.embedderUpload,
        alt: "AITJE knowledge base document upload",
      },
      {
        title: "Manage the library",
        text: "In the library you can see which sources are available, which documents have been processed and which knowledge is active.",
        image: media.embedderLibrary,
        alt: "AITJE knowledge base library",
      },
      {
        title: "Knowledge insight",
        text: "The insight screen shows how much information has been processed and what was recently added.",
        image: media.embedderInsight,
        alt: "AITJE knowledge base insight",
      },
      {
        title: "Set priorities",
        text: "With priorities you can make categories or sources weigh more heavily in answers.",
        image: media.embedderPriorities,
        alt: "AITJE knowledge base priorities",
      },
      {
        title: "Log in to the knowledge base",
        text: "Only accounts with the right role get access to management functions. Employees who only need chat access do not have to work here.",
        image: media.embedderLogin,
        alt: "AITJE knowledge base login",
      },
      {
        title: "Manage account and role",
        text: "Account management keeps clear who has access and which role someone has. This separates chat use from knowledge management.",
        image: media.embedderAccount,
        alt: "AITJE knowledge base account settings",
      },
    ],
  },
  values: {
    kicker: "AITJE vision",
    title: "AI close by, less dependent",
    text:
      "AI is becoming more important in everyday work, but the pressure points are growing too: subscriptions, unpredictable usage costs, data sharing and dependence on large platforms. AITJE Assistent starts from a local base: your own AI station, connected to your own knowledge and extended with web search when needed.",
    items: [
      {
        icon: LockKeyhole,
        title: "Privacy starts locally",
        text: "For normal local chat and knowledge questions, questions, documents and roles stay inside your own environment. Internal information does not have to be shared with external AI services by default.",
      },
      {
        icon: Zap,
        title: "Less cost lock-in",
        text: "Many AI services use subscriptions or usage pricing. Nobody knows how expensive external AI will become. With AITJE, normal questions run locally without paying an external AI service per question.",
      },
      {
        icon: Leaf,
        title: "More conscious energy use",
        text: "Not every question has to go to large data centers. When something can be answered locally, you avoid unnecessary data traffic and external processing.",
      },
      {
        icon: CloudOff,
        title: "Less dependence",
        text: "As long as the device has power and your local network works, normal chat and knowledge questions remain available. Internet outages or external AI platform issues do not stop the local base.",
      },
      {
        icon: SlidersHorizontal,
        title: "Knowledge plus current data",
        text: "The language model brings broad general knowledge, your knowledge base adds your own company information and web search can retrieve current information when you need it.",
      },
      {
        icon: Wrench,
        title: "Grows with your organization",
        text: "You can start yourself and later expand with installation, SLA, support, new language models, extra features or an upgrade to AITJE Assistent+.",
      },
    ],
  },
  variants: {
    kicker: "Two editions",
    title: "One product, two editions",
    text:
      "AITJE Assistent comes in a standard edition and a plus edition. The standard edition is for teams that want local chat, a knowledge base and daily document work. AITJE Assistent+ adds more capacity: faster answers, heavier language models, more simultaneous use and more room to process knowledge. We currently work with two carefully selected white-label hardware devices that fit this use case well in price and quality. Because the hardware market changes quickly, we work with pricing on request instead of a fixed hardware promise. For specific situations, AITJE Custom can be used to find white-label hardware that better fits your use case.",
    imageAlt: "AITJE Assistent editions",
    editions: [
      {
        kicker: "Standard edition",
        title: "AITJE Assistent",
        text: "For teams that want local chat, documents as a knowledge source and daily AI work kept safely inside the organization.",
        image: media.deviceAssistant,
        alt: "AITJE Assistent device",
      },
      {
        kicker: "Plus edition",
        title: "AITJE Assistent+",
        text: "For organizations that need more speed, heavier language models, more simultaneous users or a larger knowledge base.",
        image: media.devicePlus,
        alt: "AITJE Assistent Plus device",
      },
    ],
    table: {
      feature: "Choice",
      assistant: "AITJE Assistent",
      plus: "AITJE Assistent+",
    },
    rows: [
      {
        feature: "Fits",
        assistant: "Teams, schools and organizations that want to chat locally with their own knowledge and documents.",
        plus: "Organizations with more users, larger knowledge bases or higher demands for speed and model capacity.",
      },
      {
        feature: "Daily use",
        assistant: "Suitable for questions, summaries, explanations, document work, image input and knowledge base questions.",
        plus: "Suitable for the same use, with more room for intensive work and simultaneous activity.",
      },
      {
        feature: "Knowledge base",
        assistant: "Fits a clear knowledge base for teams, departments or an organization.",
        plus: "More room to process, embed and make knowledge available more broadly.",
      },
      {
        feature: "Language models",
        assistant: "Runs local language models that fit daily use well.",
        plus: "Can handle heavier language models and gives more room for speed and quality.",
      },
      {
        feature: "Price",
        assistant: "Lower entry point than Assistent+, depending on edition, setup and optional services.",
        plus: "Higher because of extra capacity, the more powerful edition and possible extra setup.",
      },
    ],
    fleet: [
      {
        title: "AITJE Assistent in series",
        text: "For multiple locations, rooms or teams, the same edition can be placed more than once with the same local way of working.",
        image: media.devicesAssistant,
        alt: "Multiple AITJE Assistent devices",
      },
      {
        title: "AITJE Assistent+ in series",
        text: "For heavier use, Assistent+ can be used in multiple places where more speed, capacity or knowledge room is needed.",
        image: media.devicesPlus,
        alt: "Multiple AITJE Assistent Plus devices",
      },
    ],
  },
  services: {
    kicker: "Next step",
    title: "Start yourself or let us set it up",
    text:
      "AITJE Assistent works out of the box and can be purchased as a standalone product. If you want help with installation, knowledge base setup, backups, SLA, support or expansion, that can be added as a service. If standard or plus does not fit, we look at AITJE Custom.",
    primaryCta: "Request a quote",
    secondaryCta: "View all services",
    items: [
      {
        title: "Installation and handover",
        text: "You can install it yourself, but we can also help with access, local network setup and explanation for your team.",
      },
      {
        title: "Knowledge base and backups",
        text: "You can manage documents yourself. We can help with structure, priorities, backup, export and import.",
      },
      {
        title: "SLA, updates and expansion",
        text: "Through SLA or additional services, we can help with updates, support, new models or product expansion.",
      },
      {
        title: "Upgrade or Custom",
        text: "Need more power? Assistent+ may be logical. For specific hardware, software or integrations, there is AITJE Custom.",
      },
    ],
  },
};

const t = computed(() => (props.locale === "en" ? en : nl));

useHead(() => ({
  title: t.value.meta.title,
  meta: [
    {
      name: "description",
      content: t.value.meta.description,
    },
    {
      property: "og:title",
      content: t.value.meta.title,
    },
    {
      property: "og:description",
      content: t.value.meta.description,
    },
    {
      property: "og:image",
      content: absoluteAssistantImage.value,
    },
    {
      name: "twitter:title",
      content: t.value.meta.title,
    },
    {
      name: "twitter:description",
      content: t.value.meta.description,
    },
    {
      name: "twitter:image",
      content: absoluteAssistantImage.value,
    },
  ],
}));
</script>
