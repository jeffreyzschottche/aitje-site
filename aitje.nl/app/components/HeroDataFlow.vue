<script setup lang="ts">
const visual = ref<HTMLElement | null>(null);
const visible = ref(false);
const gradientId = `hero-data-${useId().replace(/:/g, "")}`;
let observer: IntersectionObserver | undefined;

const paths = [
  "M-40 100 C110 20 150 195 320 140 S540 80 760 250",
  "M-40 124 C115 45 175 212 340 164 S550 108 760 274",
  "M-40 150 C130 80 180 238 360 190 S570 138 760 302",
  "M-40 178 C135 115 205 268 380 219 S590 170 760 332",
  "M-40 208 C150 148 220 296 400 249 S600 202 760 362",
  "M-40 240 C160 180 245 325 420 280 S620 236 760 394",
];
const nodes = [
  { x: 118, y: 110 }, { x: 233, y: 148 }, { x: 320, y: 140 },
  { x: 427, y: 122 }, { x: 539, y: 148 }, { x: 629, y: 189 },
  { x: 233, y: 247 }, { x: 400, y: 249 }, { x: 540, y: 242 },
];

onMounted(() => {
  if (!visual.value) return;
  observer = new IntersectionObserver(([entry]) => {
    visible.value = Boolean(entry?.isIntersecting);
  });
  observer.observe(visual.value);
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div ref="visual" class="hero-data-flow" :class="{ 'hero-data-flow--visible': visible }" aria-hidden="true">
    <svg viewBox="0 0 720 440" fill="none">
      <defs>
        <linearGradient :id="gradientId" x1="0" y1="0" x2="720" y2="0" gradientUnits="userSpaceOnUse">
          <stop stop-color="#facc15" stop-opacity="0" />
          <stop offset="0.2" stop-color="#facc15" stop-opacity="0.7" />
          <stop offset="0.65" stop-color="#ffe999" />
          <stop offset="1" stop-color="#facc15" stop-opacity="0" />
        </linearGradient>
      </defs>
      <g :stroke="`url(#${gradientId})`">
        <path v-for="path in paths" :key="path" :d="path" class="data-thread" />
        <path
          v-for="(path, index) in paths"
          :key="`stream-${index}`"
          :d="path"
          class="data-stream"
          :style="{ '--flow-delay': `${index * -2.3}s`, '--flow-duration': `${12 + index * 1.4}s` }"
        />
        <path d="M118 110 L233 148 L320 140 L427 122 L539 148 L629 189 M233 148 L233 247 L400 249 L540 242 L539 148 M320 140 L400 249" class="data-connections" />
      </g>
      <g v-for="(node, index) in nodes" :key="index" :style="{ '--flow-delay': `${index * -0.7}s` }" class="data-node">
        <circle :cx="node.x" :cy="node.y" r="11" fill="#facc15" fill-opacity="0.06" />
        <circle :cx="node.x" :cy="node.y" r="3" fill="#ffe899" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.hero-data-flow {
  position: absolute;
  top: 100px;
  right: 0;
  width: min(49vw, 820px);
  aspect-ratio: 720 / 440;
  pointer-events: none;
  user-select: none;
  mix-blend-mode: screen;
  opacity: 0.75;
  mask-image: radial-gradient(ellipse at center, black 32%, transparent 73%);
}
.hero-data-flow svg {
  display: block;
  width: 100%;
  height: 100%;
}
.data-thread {
  stroke-width: 0.8;
  opacity: 0.32;
}
.data-stream {
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 2 118;
  animation: data-flow var(--flow-duration) linear var(--flow-delay) infinite paused;
}
.data-connections {
  stroke-width: 0.7;
  opacity: 0.25;
}
.data-node {
  opacity: 0.45;
  animation: data-breathe 5s ease-in-out var(--flow-delay) infinite alternate paused;
}
.hero-data-flow--visible .data-stream,
.hero-data-flow--visible .data-node {
  animation-play-state: running;
}
@keyframes data-flow {
  to { stroke-dashoffset: -480; }
}
@keyframes data-breathe {
  to { opacity: 0.95; }
}
@media (max-width: 767px) {
  .hero-data-flow {
    top: auto;
    right: auto;
    left: -42px;
    bottom: calc(var(--hero-mobile-art-height) * 0.7 - var(--hero-mobile-overhang));
    width: min(74vw, 370px);
    height: min(57vw, 285px);
    aspect-ratio: auto;
    opacity: 1;
  }
  .hero-data-flow svg {
    overflow: visible;
  }
  .data-thread {
    stroke-width: 1.2;
    opacity: 0.6;
  }
  .data-stream {
    stroke-width: 3.5;
  }
  .data-node {
    opacity: 0.8;
  }
}
@media (prefers-reduced-motion: reduce) {
  .data-stream,
  .data-node {
    animation: none;
  }
}
</style>
