<script setup lang="ts">
/** Real screenshot montages play directly as GIFs; reduced motion uses stills. */
const props = withDefaults(
  defineProps<{
    scene: string;
    title: string;
    caption?: string;
    portrait?: boolean;
  }>(),
  { portrait: false },
);
const root = ref<HTMLElement>();
const visible = ref(false);
const reduced = ref(false);
let observer: IntersectionObserver | undefined;
let motion: MediaQueryList | undefined;
const source = computed(() =>
  visible.value && !reduced.value
    ? `/img/coder/gifs/${props.scene}.gif`
    : `/img/coder/posters/${props.scene}.webp`,
);
const dimensions = computed(() =>
  props.portrait ? { width: 590, height: 1276 } : { width: 1440, height: 900 },
);
const updateMotion = () => {
  reduced.value = motion?.matches ?? false;
};
onMounted(() => {
  motion = matchMedia("(prefers-reduced-motion: reduce)");
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
  <figure ref="root" class="coder-media" :class="{ 'cm-portrait': portrait }">
    <div class="cm-window">
      <div class="cm-bar">
        <span class="cm-dots" aria-hidden="true"><i /><i /><i /></span
        ><span class="cm-title">{{ title }}</span
        ><span class="cm-recorded">Echte schermen</span>
      </div>
      <div
        class="cm-screen"
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
        "Echte screenshots met een fictief demoproject. De agenttaken zijn werkelijk uitgevoerd; de montage toont geen doorlooptijd."
      }}
    </figcaption>
  </figure>
</template>
<style scoped>
.coder-media {
  min-width: 0;
  margin: 0;
}
.cm-portrait {
  width: 100%;
  max-width: 21rem;
  margin-inline: auto;
}
.cm-window {
  overflow: hidden;
  background: #0b0b0b;
  border: 1px solid #34342f;
  border-radius: 1.25rem;
  box-shadow: 0 24px 65px -36px #0009;
}
.cm-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #2a2a26;
  font: 0.65rem var(--font-mono);
  color: #a3a39c;
}
.cm-title {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cm-dots {
  display: flex;
  gap: 4px;
}
.cm-dots i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4a4a44;
}
.cm-dots i:first-child {
  background: #facc15;
}
.cm-recorded {
  margin-left: auto;
  white-space: nowrap;
  color: #8a8a83;
}
.cm-screen {
  background: #1a1a1a;
}
.cm-screen img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.coder-media figcaption {
  font-size: 0.68rem;
  line-height: 1.8;
  margin-top: 1rem;
  color: #8c9680;
}
@media (max-width: 480px) {
  .cm-bar {
    gap: 0.5rem;
    font-size: 0.56rem;
  }
  .cm-recorded {
    display: none;
  }
}
</style>
