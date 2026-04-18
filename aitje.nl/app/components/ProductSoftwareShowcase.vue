<template>
  <section class="mx-auto max-w-7xl -mt-3 px-4 pb-2 pt-0 sm:px-6 lg:-mt-5">
    <div class="px-2 pt-0 pb-8 text-center lg:px-4 lg:pb-10">
      <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
        {{ copy.introKicker }}
      </p>
      <h2 class="mt-3 text-4xl font-black text-gray-900">
        {{ copy.introTitle }}
      </h2>
      <p class="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-700">
        {{ copy.introText }}
      </p>
    </div>

    <div class="h-0"></div>

    <div class="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
      <aside class="rounded-[2.25rem] border border-gray-200 bg-[#faf8f2] p-4 md:p-5 lg:sticky lg:top-32 lg:self-start">
        <div class="flex flex-col">
          <h2 class="text-3xl font-black text-gray-900">
            {{ copy.title }}
          </h2>

          <div class="mt-6 space-y-3">
            <button
              v-for="tab in softwareTabs"
              :key="tab.key"
              type="button"
              class="flex min-h-[4.5rem] w-full items-center justify-between rounded-[1.35rem] border px-4 py-4 text-left transition"
              :class="activeTab === tab.key
                ? 'border-[#facc15] bg-[#212121] text-white shadow-[0_16px_40px_rgba(0,0,0,0.14)]'
                : 'border-gray-200 bg-white text-gray-700 hover:border-[#d9c27a] hover:bg-[#fffdf7]'"
              @click="activeTab = tab.key"
            >
              <span class="text-[0.82rem] font-semibold uppercase tracking-[0.26em]">
                {{ tab.label }}
              </span>
              <span
                class="rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em]"
                :class="activeTab === tab.key ? 'bg-white/10 text-[#facc15]' : 'bg-[#212121] text-[#facc15]'"
              >
                {{ tab.badge }}
              </span>
            </button>
          </div>
        </div>
      </aside>

      <article class="rounded-[2.5rem] border border-gray-200 bg-white p-5 shadow-sm md:p-7 md:min-h-[78rem]">
        <div class="flex flex-wrap items-center gap-3">
          <p class="text-xs font-semibold uppercase tracking-[0.34em] text-[#facc15]">
            {{ activeContent.badge }}
          </p>
          <span class="rounded-full border border-gray-200 bg-[#fafafa] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-gray-500">
            {{ activeContent.eyebrow }}
          </span>
        </div>

        <h3 class="mt-4 text-4xl font-black text-gray-900">
          {{ activeContent.title }}
        </h3>
        <p class="mt-4 text-lg font-medium text-gray-700">
          {{ activeContent.subtitle }}
        </p>
        <p class="mt-4 max-w-4xl text-base leading-8 text-gray-600">
          {{ activeContent.paragraph }}
        </p>

        <div class="mt-8 overflow-hidden rounded-[2rem] border border-gray-200 bg-[#f7f4ec] p-3">
          <img
            :src="activeContent.image"
            :alt="activeContent.title"
            class="h-[18rem] w-full rounded-[1.4rem] object-cover md:h-[24rem]"
          />
        </div>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <article
            v-for="image in galleryItems"
            :key="image.src"
            class="overflow-hidden rounded-[1.6rem] border border-gray-200 bg-[#fafafa] p-3"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="h-48 w-full rounded-[1.2rem] object-cover"
            />
          </article>
        </div>

        <div class="mt-6 rounded-[2rem] border border-dashed border-gray-300 bg-[#fafafa] p-5">
          <p class="text-xs font-semibold uppercase tracking-[0.34em] text-[#facc15]">
            {{ copy.videoKicker }}
          </p>
          <h4 class="mt-3 text-2xl font-black text-gray-900">
            {{ videoContent.title }}
          </h4>
          <p class="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
            {{ videoContent.description }}
          </p>
          <div class="mt-5 flex h-56 items-center justify-center rounded-[1.5rem] bg-[#212121] text-center text-white">
            <div class="px-6">
              <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#facc15] text-black">
                ▶
              </div>
              <p class="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#facc15]">
                {{ copy.videoPlaceholder }}
              </p>
              <p class="mt-3 text-sm leading-6 text-white/72">
                {{ videoContent.placeholder }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

type LocaleKey = "nl" | "en";

const props = defineProps<{
  heroImage: string;
  locale: LocaleKey;
  productSlug: string;
  productTitle: string;
}>();

const copy = computed(() =>
  props.locale === "en"
    ? {
        introKicker: "Software",
        introTitle: "The software side of this product",
        introText:
          "This section shows how the software around this product can be structured. Think of core layers, client views, workflows, media and other supporting parts that make the hardware workable in daily use.",
        title: "Software Architecture",
        videoKicker: "Video",
        videoPlaceholder: "Video placeholder",
      }
    : {
        introKicker: "Software",
        introTitle: "De software achter dit product",
        introText:
          "Hier zie je welke softwarelagen, schermen en workflows dit product in de praktijk ondersteunen. Zo wordt duidelijk hoe hardware, interface en gebruik op elkaar aansluiten.",
        title: "Software Architectuur",
        videoKicker: "Video",
        videoPlaceholder: "Video placeholder",
      }
);

const tabLabel = (index: number) =>
  props.locale === "en" ? `Tab ${index}` : `Tabje ${index}`;

const softwareTabs = computed(() => [
  { key: "tab-1", label: tabLabel(1), badge: "OS" },
  { key: "tab-2", label: tabLabel(2), badge: "Client" },
  { key: "tab-3", label: tabLabel(3), badge: "Flows" },
  { key: "tab-4", label: tabLabel(4), badge: "Media" },
]);

const activeTab = ref("tab-1");

const softwareContent = computed(() => {
  const isEnglish = props.locale === "en";
  const title = props.productTitle;
  const sharedGallery = [
    {
      src: "/images/aitje-product.png",
      alt: isEnglish ? `${title} software overview` : `${title} software-overzicht`,
    },
    {
      src: "/images/aitje-logo.png",
      alt: isEnglish ? `${title} product identity` : `${title} productidentiteit`,
    },
  ];

  return {
    "tab-1": {
      badge: isEnglish ? "Software base" : "Softwarebasis",
      eyebrow: isEnglish ? "Overview" : "Overzicht",
      title: isEnglish ? `${title} software foundation` : `${title} softwarebasis`,
      subtitle: isEnglish
        ? "This is where hardware, access and day-to-day usage come together."
        : "Hier komen hardware, toegang en dagelijks gebruik samen.",
      paragraph: isEnglish
        ? `The first tab is meant for the core layer around ${title}: the environment users start in, what becomes visible on the device and how the product translates from hardware into a workable interface.`
        : `Het eerste tabje is bedoeld voor de kernlaag rond ${title}: de omgeving waarin gebruikers starten, wat zichtbaar wordt op het device en hoe het product van hardware naar een werkbare interface vertaalt.`,
      image: props.heroImage,
      extraImages: [],
    },
    "tab-2": {
      badge: isEnglish ? "Interface" : "Interface",
      eyebrow: isEnglish ? "Screens" : "Schermen",
      title: isEnglish ? `${title} in the client` : `${title} in de client`,
      subtitle: isEnglish
        ? "A clearer view of what users actually work with."
        : "Een concreter beeld van waar gebruikers echt mee werken.",
      paragraph: isEnglish
        ? `This tab is suitable for client screens, user journeys, role-based views and anything that explains how ${title} lands in practical work.`
        : `Dit tabje is geschikt voor clientschermen, gebruikersflows, rolgebonden weergaven en alles wat laat zien hoe ${title} in praktisch werk landt.`,
      image: "/images/aitje-product.png",
      extraImages: sharedGallery,
    },
    "tab-3": {
      badge: isEnglish ? "Workflow" : "Workflow",
      eyebrow: isEnglish ? "Automation" : "Automatisering",
      title: isEnglish ? `${title} in daily flows` : `${title} in dagelijkse flows`,
      subtitle: isEnglish
        ? "For modules, actions and process steps that connect to the product."
        : "Voor modules, acties en processtappen die op het product aansluiten.",
      paragraph: isEnglish
        ? `Use this area later for workflow blocks, integrations, structured outputs and all supporting software that makes ${title} feel complete instead of isolated.`
        : `Gebruik dit vlak later voor workflowblokken, integraties, gestructureerde output en alle ondersteunende software die ${title} compleet laat voelen in plaats van losstaand.`,
      image: "/images/os-screenshots/chatassistent.jpeg",
      extraImages: [],
    },
    "tab-4": {
      badge: isEnglish ? "Media" : "Media",
      eyebrow: isEnglish ? "Demo" : "Demo",
      title: isEnglish ? `${title} explained visually` : `${title} visueel uitgelegd`,
      subtitle: isEnglish
        ? "Space for extra screenshots, visual references and a short explainer video."
        : "Ruimte voor extra screenshots, visuele referenties en een korte uitlegvideo.",
      paragraph: isEnglish
        ? `This last tab is ready for richer media. Think of image galleries, module close-ups, short demos or one central walkthrough video once those assets exist.`
        : `Dit laatste tabje is klaar voor rijkere media. Denk aan galerijen, close-ups van modules, korte demo's of één centrale walkthrough-video zodra die assets er zijn.`,
      image: "/images/aitje-logo.png",
      extraImages: sharedGallery,
      video: {
        title: `${title} walkthrough`,
        description: isEnglish
          ? "A placeholder block for a future product video or embedded demo."
          : "Een placeholderblok voor een toekomstige productvideo of embedded demo.",
        placeholder: isEnglish
          ? "Replace this block later with a real product video or software demo."
          : "Vervang dit blok later door een echte productvideo of softwaredemo.",
      },
    },
  } as const;
});

const activeContent = computed(() => softwareContent.value[activeTab.value as keyof typeof softwareContent.value]);

const galleryItems = computed(() => {
  const items = activeContent.value.extraImages ?? [];

  if (items.length >= 2) {
    return items;
  }

  return [
    {
      src: activeContent.value.image,
      alt: activeContent.value.title,
    },
    {
      src: "/images/aitje-product.png",
      alt: activeContent.value.title,
    },
  ];
});

const videoContent = computed(() => {
  if (activeContent.value.video) {
    return activeContent.value.video;
  }

  const isEnglish = props.locale === "en";

  return {
    title: isEnglish ? `${props.productTitle} demo placeholder` : `${props.productTitle} demo placeholder`,
    description: isEnglish
      ? "This block stays visible so the software section keeps a stable height while tab content changes."
      : "Dit blok blijft zichtbaar zodat de softwaresectie een stabiele hoogte houdt terwijl tabinhoud wisselt.",
    placeholder: isEnglish
      ? "Replace this later with a real product video, walkthrough or software demo."
      : "Vervang dit later door een echte productvideo, walkthrough of softwaredemo.",
  };
});
</script>
