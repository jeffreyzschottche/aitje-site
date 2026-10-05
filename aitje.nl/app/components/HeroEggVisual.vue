<script setup lang="ts">
const effectId = `hero-egg-${useId().replace(/:/g, "")}`;
</script>

<template>
  <div class="home-hero-artwork">
    <svg
      class="hero-egg-scene"
      viewBox="0 0 1536 1064"
      preserveAspectRatio="xMaxYMax meet"
      role="img"
      aria-label="Een glanzend ei met het AITJE-circuitsymbool in een nest op een bemoste rots, met Local AI, On-premise en On-edge in de steen gegraveerd"
    >
      <defs>
        <radialGradient :id="`${effectId}-glow`">
          <stop offset="0" stop-color="#fff3b3" stop-opacity="0" />
          <stop offset="0.58" stop-color="#ffd553" stop-opacity="0.45" />
          <stop offset="1" stop-color="#ffc21a" stop-opacity="0" />
        </radialGradient>
        <linearGradient :id="`${effectId}-shine`">
          <stop offset="0" stop-color="white" stop-opacity="0" />
          <stop offset="0.5" stop-color="white" stop-opacity="0.5" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath :id="`${effectId}-shell`">
          <path d="M 1193 150 C 1271 153 1344 302 1348 417 C 1350 481 1319 505 1198 509 L 1100 497 C 1031 491 1014 467 1015 410 C 1017 295 1112 149 1193 150 Z" />
        </clipPath>
      </defs>
      <image
        href="/img/redesign/aitje-egg-hero-engraved.webp"
        width="1536"
        height="1024"
      />
      <g aria-hidden="true">
        <ellipse
          class="hero-egg-glow"
          cx="1180"
          cy="350"
          rx="225"
          ry="255"
          :fill="`url(#${effectId}-glow)`"
        />
        <g :clip-path="`url(#${effectId}-shell)`">
          <rect
            class="hero-egg-shine"
            x="1080"
            y="145"
            width="150"
            height="370"
            :fill="`url(#${effectId}-shine)`"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.home-hero-artwork {
  position: absolute;
  right: 0;
  bottom: -150px;
  width: 100%;
  height: calc(100% + 150px);
  pointer-events: none;
  clip-path: inset(0);
}
.hero-egg-scene {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.hero-egg-glow {
  mix-blend-mode: screen;
  animation: egg-warmth 5s ease-in-out infinite alternate;
}
.hero-egg-shine {
  mix-blend-mode: screen;
  opacity: 0;
  animation: egg-shine 7s ease-in-out infinite;
}
@keyframes egg-warmth {
  from { opacity: 0.15; }
  to { opacity: 0.55; }
}
@keyframes egg-shine {
  0%, 12% { transform: translateX(-250px) skewX(-12deg); opacity: 0; }
  28% { opacity: 0.7; }
  52%, 100% { transform: translateX(500px) skewX(-12deg); opacity: 0; }
}
@media (min-width: 768px) and (max-width: 1599px) {
  .home-hero-artwork {
    width: calc(55vw + 300px);
  }
}
@media (max-width: 767px) {
  .home-hero-artwork {
    height: var(--hero-mobile-art-height);
    bottom: calc(-1 * var(--hero-mobile-overhang));
  }
  .hero-egg-scene {
    width: min(180%, 900px);
    max-width: none;
    height: auto;
    aspect-ratio: 1536 / 1064;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-egg-glow { animation: none; opacity: 0.25; }
  .hero-egg-shine { animation: none; opacity: 0; }
}
</style>
