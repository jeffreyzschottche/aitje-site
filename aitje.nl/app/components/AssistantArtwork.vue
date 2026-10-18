<script setup lang="ts">
const props = defineProps<{
  variant: "knowledge" | "control";
  scene: string;
  alt: string;
}>();
const element = ref<HTMLElement>();
const animate = ref(false);
let observer: IntersectionObserver | undefined;
let motion: MediaQueryList | undefined;
function stopMotion() {
  if (motion?.matches) {
    animate.value = false;
  }
}
onMounted(() => {
  motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  motion.addEventListener("change", stopMotion);
  observer = new IntersectionObserver(
    ([entry]) => {
      animate.value = !!entry?.isIntersecting && !motion?.matches;
    },
    { threshold: 0.15 },
  );
  if (element.value) observer.observe(element.value);
});
onBeforeUnmount(() => {
  observer?.disconnect();
  motion?.removeEventListener("change", stopMotion);
});
</script>
<template>
  <figure ref="element" class="assistant-artwork" :class="`aa-${variant}`">
    <div class="aa-composition">
      <img
        class="aa-base"
        :src="`/img/assistant/v2/${variant === 'knowledge' ? 'knowledge-laptop' : 'control-monitor'}.webp`"
        :alt="alt"
        width="1536"
        height="1024"
        loading="lazy"
      />
      <div class="aa-display">
        <img
          :src="
            animate
              ? `/img/assistant/gifs/${scene}.gif`
              : `/img/assistant/posters/${scene}.png`
          "
          alt=""
          aria-hidden="true"
          width="1440"
          height="1000"
        />
      </div>
    </div>
    <figcaption>
      <span
        >Conceptillustratie met echte productopname · fictieve gegevens</span
      >
    </figcaption>
  </figure>
</template>
<style scoped>
.assistant-artwork {
  margin: 0;
  min-width: 0;
}
.aa-composition {
  position: relative;
  filter: drop-shadow(0 20px 20px #0002);
}
.aa-base {
  width: 100%;
  height: auto;
}
.aa-display {
  position: absolute;
  overflow: hidden;
  background: #1a1c18;
}
.aa-display img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: top;
}
.aa-knowledge .aa-display {
  left: 34.6%;
  top: 19.85%;
  width: 52.4%;
  height: 44.9%;
  clip-path: polygon(1.5% 0, 98% 0, 100% 100%, 0 100%);
  border-radius: 0.4rem;
}
.aa-control .aa-display {
  left: 23.8%;
  top: 11.3%;
  width: 61.5%;
  height: 53%;
  clip-path: polygon(0 0, 100% 0, 100% 93%, 97% 100%, 0 100%);
  border-radius: 0.4rem;
}
.assistant-artwork figcaption {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  font-size: 0.6rem;
  line-height: 1.7;
  color: #a8b39a;
  position: relative;
  padding-inline: 0.5rem;
  margin-top: 0.5rem;
}
.assistant-artwork figcaption > span {
  max-width: 21rem;
}
.assistant-artwork button {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  white-space: nowrap;
  color: #d8dfcf;
  cursor: pointer;
}
@media (max-width: 480px) {
  .assistant-artwork figcaption {
    font-size: 0.52rem;
  }
}
</style>
