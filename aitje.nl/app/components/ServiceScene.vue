<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
  /** Optional full scene behind the cutout that fades into the page. */
  backdrop?: string;
}>();
const scene = ref<HTMLElement>();
const x = ref(0);
const y = ref(0);
const cutout = computed(() =>
  props.src.endsWith("-cutout.webp")
    ? props.src
    : props.src.replace(/\.webp$/, "-cutout.webp"),
);
function move(event: PointerEvent) {
  if (
    event.pointerType !== "mouse" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const rect = scene.value?.getBoundingClientRect();
  if (!rect) return;
  x.value = (event.clientX - rect.left) / rect.width - 0.5;
  y.value = (event.clientY - rect.top) / rect.height - 0.5;
}
function reset() {
  x.value = 0;
  y.value = 0;
}
</script>

<template>
  <div
    ref="scene"
    class="service-scene"
    :style="{ '--scene-x': x, '--scene-y': y }"
    @pointermove="move"
    @pointerleave="reset"
  >
    <img
      v-if="backdrop"
      class="service-scene-backdrop"
      :src="backdrop"
      alt=""
      aria-hidden="true"
      width="1200"
      height="900"
    />
    <div class="service-scene-glow" aria-hidden="true" />
    <div class="service-scene-orbit" aria-hidden="true"><OrbitGraphic /></div>
    <img
      class="service-scene-subject"
      :src="cutout"
      :alt="alt || ''"
      width="1024"
      height="1024"
      fetchpriority="high"
    />
    <span class="service-scene-spark spark-two" aria-hidden="true" />
  </div>
</template>

<style scoped>
.service-scene {
  position: relative;
  width: 116%;
  margin-left: -8%;
  aspect-ratio: 1;
  isolation: isolate;
}
.service-scene-glow {
  position: absolute;
  inset: 10% -8% -4%;
  background: radial-gradient(
    ellipse,
    #e7ddb05c 0%,
    #e7eada36 38%,
    transparent 68%
  );
  transform: translate(
    calc(var(--scene-x) * -10px),
    calc(var(--scene-y) * -8px)
  );
}
.service-scene-backdrop {
  position: absolute;
  top: 0;
  left: 6%;
  width: 104%;
  height: 72%;
  object-fit: cover;
  object-position: center 55%;
  opacity: 0.75;
  -webkit-mask-image: radial-gradient(ellipse 50% 50% at 55% 50%, #000 38%, transparent 78%);
  mask-image: radial-gradient(ellipse 50% 50% at 55% 50%, #000 38%, transparent 78%);
  transform: translate(calc(var(--scene-x) * -6px), calc(var(--scene-y) * -5px));
}
.service-scene-orbit {
  position: absolute;
  inset: 4%;
  opacity: 0.5;
  transform: translate(
      calc(var(--scene-x) * -18px),
      calc(var(--scene-y) * -14px)
    )
    rotate(-12deg);
}
.service-scene-subject {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: perspective(1000px)
    translate(calc(var(--scene-x) * 16px), calc(var(--scene-y) * 12px))
    rotateX(calc(var(--scene-y) * -3deg)) rotateY(calc(var(--scene-x) * 4deg));
}
.service-scene-spark {
  position: absolute;
  z-index: 2;
  transform: translate(
    calc(var(--scene-x) * 26px),
    calc(var(--scene-y) * 20px)
  );
}
.spark-one {
  right: 9%;
  bottom: 17%;
  font: 300 32px var(--font-mono);
}
.spark-two {
  left: 14%;
  top: 27%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-brand);
  box-shadow: 0 0 0 7px #facc1515;
}
.service-scene-backdrop,
.service-scene-glow,
.service-scene-orbit,
.service-scene-subject,
.service-scene-spark {
  transition: transform 0.45s ease-out;
  pointer-events: none;
}
@media (max-width: 767px) {
  .service-scene {
    width: 108%;
    margin-left: -4%;
  }
}
@media (prefers-reduced-motion: reduce), (hover: none) {
  .service-scene-backdrop,
  .service-scene-glow,
  .service-scene-orbit,
  .service-scene-subject,
  .service-scene-spark {
    transform: none;
    transition: none;
  }
}
</style>
