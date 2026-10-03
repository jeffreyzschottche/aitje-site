<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  intro: string;
  photo: string;
  photoAlt?: string;
}>();
</script>

<template>
  <section class="case-photo-hero on-dark">
    <img class="case-photo-hero-image" :src="photo" :alt="photoAlt ?? ''" width="2000" height="1333" fetchpriority="high" />
    <div class="case-photo-hero-wash" aria-hidden="true" />
    <div class="container-page case-photo-hero-layout">
      <div class="case-photo-hero-copy">
        <slot name="before" />
        <p class="eyebrow text-brand">{{ eyebrow }}</p>
        <h1><slot name="title">{{ title }}</slot></h1>
        <p class="case-photo-hero-intro">{{ intro }}</p>
        <div class="case-photo-hero-actions"><slot /></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.case-photo-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: #171919;
  color: white;
}
.case-photo-hero-image,
.case-photo-hero-wash {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.case-photo-hero-image { object-fit: cover; object-position: center 48%; }
.case-photo-hero-wash {
  background: linear-gradient(90deg, #171919 3%, rgb(23 25 25 / 0.95) 25%, rgb(23 25 25 / 0.82) 43%, rgb(23 25 25 / 0.12) 74%);
}
.case-photo-hero-layout {
  min-height: 650px;
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.case-photo-hero-copy { width: 58%; max-width: 740px; }
.case-photo-hero-copy h1 {
  margin-top: 24px;
  font-size: clamp(2.75rem, 4.5vw, 4.75rem);
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -0.05em;
}
.case-photo-hero-intro {
  max-width: 48ch;
  margin-top: 26px;
  color: #e7e7e1;
  font-size: 1.1rem;
  line-height: 1.8;
}
.case-photo-hero-actions:has(*) { margin-top: 32px; }
@media (min-width: 1800px) {
  .case-photo-hero-layout { min-height: 760px; }
}
@media (max-width: 767px) {
  .case-photo-hero { display: flex; flex-direction: column; }
  .case-photo-hero-layout { min-height: auto; padding-top: 120px; padding-bottom: 44px; }
  .case-photo-hero-copy { width: 100%; }
  .case-photo-hero-copy h1 { font-size: clamp(2.3rem, 8.7vw, 3.5rem); }
  .case-photo-hero-intro { font-size: 1rem; margin-top: 22px; }
  .case-photo-hero-image {
    position: relative;
    order: 1;
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    z-index: 0;
  }
  .case-photo-hero-wash { display: none; }
}
</style>
