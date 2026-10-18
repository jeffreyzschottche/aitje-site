<script setup lang="ts">
/** Short montages of real AITJE Coder screenshots. Only visible clips play; GIF is an explicit alternative. */
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
const video = ref<HTMLVideoElement>();
const running = ref(false);
const format = ref<"video" | "gif">("video");
const poster = computed(() => `/img/coder/posters/${props.scene}.webp`);
const dimensions = computed(() =>
  props.portrait ? { width: 590, height: 1276 } : { width: 1440, height: 900 },
);
let observer: IntersectionObserver | undefined;
let reduced: MediaQueryList | undefined;
let userPaused = false;
function setPlayback() {
  if (!video.value) return;
  if (running.value && format.value === "video")
    video.value.play().catch(() => {
      running.value = false;
    });
  else video.value.pause();
}
function toggle() {
  userPaused = running.value;
  running.value = !running.value;
}
function changeFormat() {
  video.value?.pause();
  format.value = format.value === "gif" ? "video" : "gif";
}
function motionChange() {
  if (reduced?.matches) {
    running.value = false;
    userPaused = true;
  }
}
onMounted(() => {
  reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  reduced.addEventListener("change", motionChange);
  observer = new IntersectionObserver(
    ([entry]) => {
      running.value = !!entry?.isIntersecting && !userPaused && !reduced?.matches;
    },
    { threshold: 0.3 },
  );
  if (root.value) observer.observe(root.value);
});
watch([running, format, () => props.scene], () => nextTick(setPlayback));
onBeforeUnmount(() => {
  observer?.disconnect();
  reduced?.removeEventListener("change", motionChange);
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
          v-if="format === 'gif' && running"
          :src="`/img/coder/gifs/${scene}.gif`"
          :alt="title"
          :width="dimensions.width"
          :height="dimensions.height"
        />
        <img
          v-else-if="format === 'gif'"
          :src="poster"
          :alt="title"
          :width="dimensions.width"
          :height="dimensions.height"
          loading="lazy"
        />
        <video
          v-else
          :key="scene"
          ref="video"
          :poster="poster"
          muted
          loop
          playsinline
          preload="none"
          :width="dimensions.width"
          :height="dimensions.height"
          :aria-label="title"
        >
          <source :src="`/img/coder/video/${scene}.mp4`" type="video/mp4" />
        </video>
      </div>
      <div class="cm-controls">
        <button
          type="button"
          :aria-label="running ? 'Montage pauzeren' : 'Montage afspelen'"
          @click="toggle"
        >
          <AppIcon :name="running ? 'pause' : 'play'" :size="14" />{{
            running ? "Pauzeren" : "Afspelen"
          }}</button
        ><span>Korte montage</span
        ><button
          type="button"
          :aria-pressed="format === 'gif'"
          @click="changeFormat"
        >
          {{ format === "gif" ? "Bekijk als video" : "Bekijk als GIF" }}
        </button>
      </div>
    </div>
    <figcaption>
      {{
        caption ||
        "Echte screenshots van AITJE Coder met een fictief demoproject. De agent heeft deze taken werkelijk uitgevoerd; de montage is ingekort en zegt niets over snelheid."
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
.cm-screen img,
.cm-screen video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cm-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-top: 1px solid #2a2a26;
  color: #d4d4cd;
  font-size: 0.7rem;
}
.cm-controls button {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: inherit;
  cursor: pointer;
}
.cm-controls button:hover {
  color: #facc15;
}
.cm-controls > span {
  color: #8a8a83;
}
.coder-media figcaption {
  font-size: 0.72rem;
  line-height: 1.6;
  margin-top: 1rem;
  color: var(--color-muted);
}
.cm-portrait .cm-controls > span,
.cm-portrait .cm-recorded {
  display: none;
}
@media (max-width: 480px) {
  .cm-bar {
    gap: 0.5rem;
  }
  .cm-recorded,
  .cm-controls > span {
    display: none;
  }
  .cm-controls {
    font-size: 0.65rem;
  }
}
</style>
