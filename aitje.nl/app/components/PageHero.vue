<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    subline?: string;
    image?: string;
    imageAlt?: string;
    imageFit?: "cover" | "contain";
    immersive?: boolean;
    backdrop?: string;
    /** Full-width photo behind the hero, washed out towards the text. */
    background?: string;
    backgroundStrong?: boolean;
    /** Dark hero: black gradient over the photo, light text. Default when a background photo is set. */
    dark?: boolean;
    /** Keep a light hero even with a background photo. */
    light?: boolean;
  }>(),
  { imageFit: "cover", imageAlt: "" },
);
</script>
<template>
  <section
    class="page-hero"
    :class="{ 'page-hero-image': image, 'page-hero-plain': !image, 'has-photo-bg': background, 'page-hero-dark': dark || (background && !light) }"
  >
    <template v-if="background">
      <img class="photo-bg" :class="{ 'photo-bg-muted': backgroundStrong }" :src="background" alt="" aria-hidden="true" fetchpriority="high" />
      <div class="photo-wash" :class="{ 'photo-wash-strong': backgroundStrong }" aria-hidden="true" />
    </template>
    <div class="container-page page-hero-layout">
      <div class="page-hero-copy">
        <slot name="before" />
        <p v-if="eyebrow" class="eyebrow text-brand-ink">{{ eyebrow }}</p>
        <h1>
          <slot name="title">{{ title }}</slot>
        </h1>
        <p v-if="subline" class="page-hero-intro">{{ subline }}</p>
        <slot />
      </div>
      <div
        v-if="image"
        class="page-hero-art"
        :class="{ 'contain-art': imageFit === 'contain' }"
      >
        <ServiceScene v-if="immersive" :src="image" :alt="imageAlt" :backdrop="backdrop" />
        <template v-else
          ><OrbitGraphic /><ProductPackshot
            v-if="imageFit === 'contain'"
            :src="image"
            :alt="imageAlt"
          /><img
            v-else
            :src="image"
            :alt="imageAlt"
            width="1200"
            height="900"
            fetchpriority="high"
          /></template
        >
      </div>
      <div v-else class="page-hero-orbit" aria-hidden="true">
        <OrbitGraphic /><span>KENNIS.<br />TECHNIEK.<br />MOGELIJKHEDEN.</span>
      </div>
    </div>
  </section>
</template>
