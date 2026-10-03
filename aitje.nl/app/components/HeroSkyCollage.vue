<template>
  <div class="hero-sky-collage" aria-hidden="true">
    <img
      class="hero-landscape"
      src="/img/redesign/hero-dutch-windmills.webp"
      alt=""
      width="1740"
      height="1160"
      fetchpriority="high"
      decoding="async"
    />
  </div>
</template>

<style scoped>
.hero-sky-collage {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}
.hero-landscape {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 48%;
  filter: brightness(1.18) saturate(1.06);
}
.hero-sky-collage::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgb(10 25 24 / 0.84) 0%, rgb(10 25 24 / 0.76) 48%, rgb(10 25 24 / 0.38) 82%, rgb(10 25 24 / 0.22) 100%);
}
@media (max-width: 767px) {
  .hero-landscape {
    object-position: 28% center;
  }
  .hero-sky-collage::after {
    background: linear-gradient(180deg, rgb(10 25 24 / 0.82), rgb(10 25 24 / 0.68) 56%, rgb(10 25 24 / 0.2) 90%);
  }
}
</style>
