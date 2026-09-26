<script setup lang="ts">
// Hero for overview and detail pages. The home page has its own hero.
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    subline?: string;
    image?: string;
    imageAlt?: string;
    imageFit?: "cover" | "contain";
  }>(),
  { imageFit: "cover", imageAlt: "" },
);
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
    <div class="pointer-events-none absolute -top-32 right-[-10%] -z-10 size-[40rem] rounded-full bg-brand/15 blur-3xl" />
    <div class="container-page grid items-center gap-12" :class="image ? 'lg:grid-cols-[1.15fr_1fr]' : ''">
      <div class="max-w-3xl">
        <slot name="before" />
        <p v-if="eyebrow" class="eyebrow mb-5 text-brand-ink">{{ eyebrow }}</p>
        <h1 class="font-heading text-[2.6rem] leading-[1.02] font-bold md:text-[4rem]">
          <slot name="title">{{ title }}</slot>
        </h1>
        <p v-if="subline" class="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{{ subline }}</p>
        <slot />
      </div>
      <div v-if="image" class="relative">
        <div class="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/30 to-transparent blur-2xl" />
        <img
          :src="image"
          :alt="imageAlt"
          class="w-full rounded-[2rem]"
          :class="imageFit === 'cover' ? 'aspect-[4/3] object-cover shadow-lift' : 'object-contain drop-shadow-[0_30px_40px_rgb(0_0_0/0.18)]'"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>
