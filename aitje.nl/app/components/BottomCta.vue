<template>
  <section :class="[withTopMargin ? 'mt-16' : '', 'bg-[#facc15] px-6 py-20']">
    <div class="mx-auto grid max-w-6xl gap-8 rounded-[2.5rem] bg-black px-8 py-10 text-white md:grid-cols-[1fr_auto] md:items-center md:px-10">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.4em] text-[#facc15]">
          {{ copy.eyebrow }}
        </p>
        <h2 class="mt-3 text-4xl font-black">{{ copy.title }}</h2>
        <p class="mt-4 max-w-3xl text-base text-gray-300">
          {{ copy.description }}
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <NuxtLink
          :to="localePath('/contact?onderwerp=kennismaking')"
          class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-8 py-3 text-base font-semibold text-black transition hover:bg-white"
        >
          {{ copy.primaryCta }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/contact?onderwerp=offerte')"
          class="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
        >
          {{ copy.secondaryCta }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

withDefaults(
  defineProps<{
    withTopMargin?: boolean;
  }>(),
  {
    withTopMargin: true,
  },
);

const { isEnglish, localePath } = useSiteLocale();

const copy = computed(() =>
  isEnglish.value
    ? {
        eyebrow: "Next step",
        title: "See what fits your organization",
        description:
          "If you want to know whether AITJE Assistent, AITJE Custom or a future product direction fits your organization, we can go through that with you directly.",
        primaryCta: "Plan an introduction",
        secondaryCta: "Request a quote",
      }
    : {
        eyebrow: "> Voorbereid op de toekomst",
        title: "Klaar om onafhankelijk met AI te werken?",
        description:
          "Ontdek hoe jouw organisatie veilig en lokaal met AI kan werken. Met AITJE werk je lokaal, houd je jouw data in eigen beheer en heb je regie over je AI infrastructuur. We laten je graag zien wat dat in de praktijk oplevert.",
        primaryCta: "Plan een kennismaking",
        secondaryCta: "Vraag een offerte aan",
      },
);
</script>
