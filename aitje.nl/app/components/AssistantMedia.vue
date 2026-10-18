<script setup lang="ts">
/** Product recordings play directly as GIFs. Reduced motion uses their still frame. */
const props = withDefaults(
  defineProps<{
    scene: string;
    title: string;
    caption?: string;
    frame?: boolean;
  }>(),
  { frame: true },
);
const root = ref<HTMLElement>();
const visible = ref(false);
const reduced = ref(false);
const dimensions = computed(() =>
  ["categoriebeheer", "intelligent-ui"].includes(props.scene)
    ? { width: 1600, height: 1000 }
    : { width: 1440, height: 1000 },
);
const source = computed(() =>
  visible.value && !reduced.value
    ? `/img/assistant/gifs/${props.scene}.gif`
    : `/img/assistant/posters/${props.scene}.png`,
);
let observer: IntersectionObserver | undefined;
let motion: MediaQueryList | undefined;
function updateMotion() {
  reduced.value = motion?.matches ?? false;
}
onMounted(() => {
  motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  updateMotion();
  motion.addEventListener("change", updateMotion);
  observer = new IntersectionObserver(
    ([entry]) => {
      visible.value = !!entry?.isIntersecting;
    },
    { rootMargin: "200px" },
  );
  if (root.value) observer.observe(root.value);
});
onBeforeUnmount(() => {
  observer?.disconnect();
  motion?.removeEventListener("change", updateMotion);
});
</script>
<template>
  <figure ref="root" class="assistant-media">
    <div class="am-window">
      <div v-if="frame" class="am-bar">
        <span class="am-dots" aria-hidden="true"><i /><i /><i /></span
        ><span>{{ title }}</span
        ><span class="am-recorded">Productopname</span>
      </div>
      <div
        class="am-screen"
        :style="{ aspectRatio: `${dimensions.width} / ${dimensions.height}` }"
      >
        <img
          :src="source"
          :alt="title"
          :width="dimensions.width"
          :height="dimensions.height"
          loading="lazy"
        />
      </div>
    </div>
    <figcaption>
      {{
        caption ||
        "Echte productinterface. Vooraf uitgewerkt voorbeeld; geen live generatie of snelheidsmeting."
      }}
    </figcaption>
  </figure>
</template>
<style scoped>
.assistant-media {
  min-width: 0;
  margin: 0;
}
.am-window {
  overflow: hidden;
  background: #171916;
  border: 1px solid #45483f;
  border-radius: 1.25rem;
  box-shadow: 0 24px 65px -36px #0008;
}
.am-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #34372e;
  font: 0.65rem var(--font-mono);
  color: #b5bbab;
}
.am-dots {
  display: flex;
  gap: 4px;
}
.am-dots i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #51564a;
}
.am-dots i:first-child {
  background: #facc15;
}
.am-recorded {
  margin-left: auto;
  color: #9aa38f;
}
.am-screen {
  background: #1c1d1a;
}
.am-screen img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.assistant-media figcaption {
  font-size: 0.72rem;
  line-height: 1.6;
  margin-top: 1rem;
  color: var(--color-muted);
}
@media (max-width: 480px) {
  .am-bar {
    gap: 0.5rem;
  }
  .am-recorded {
    display: none;
  }
}
</style>
