<script setup lang="ts">
withDefaults(defineProps<{ eyebrow?: string; highlight?: boolean }>(), {
  eyebrow: "De rol van AITJE",
  highlight: false,
});
const examples = [
  "Voor computers de systeembeheerder.",
  "Voor je website je webdeveloper.",
  "Voor serverruimte je hostingpartij.",
  "Voor marketing je marketeer.",
  "Voor je administratie je boekhouder.",
  "Voor je netwerk je IT-beheerder.",
];
const heading = ref<HTMLElement | null>(null);
const index = ref(0);
const paused = ref(false);
const reducedMotion = ref(false);
let timer: ReturnType<typeof setInterval> | undefined;
let observer: IntersectionObserver | undefined;
let motion: MediaQueryList | undefined;
let visible = false;
const updateMotion = () => { reducedMotion.value = motion?.matches ?? false; };

onMounted(() => {
  motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  updateMotion();
  motion.addEventListener("change", updateMotion);
  observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; });
  if (heading.value) observer.observe(heading.value);
  timer = setInterval(() => {
    if (!visible || paused.value || reducedMotion.value || document.visibilityState !== "visible") return;
    index.value = (index.value + 1) % examples.length;
  }, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timer);
  observer?.disconnect();
  motion?.removeEventListener("change", updateMotion);
});
</script>

<template>
  <div ref="heading" class="about-role-heading max-w-3xl">
    <p class="eyebrow mb-4 text-brand-ink">{{ eyebrow }}</p>
    <h2 class="section-title text-ink">
      <span class="sr-only">Voor computers de systeembeheerder. Voor AI: AITJE.</span>
      <span class="about-role-rotating" aria-hidden="true">
        <span v-for="example in examples" :key="example" class="about-role-size">{{ example }}</span>
        <Transition name="about-role-change">
          <span :key="index" class="about-role-example">{{ examples[index] }}</span>
        </Transition>
      </span>
      <span class="about-role-fixed" aria-hidden="true">Voor AI: <span :class="{ 'highlight-word': highlight }">AITJE.</span></span>
    </h2>
    <button
      v-if="!reducedMotion" type="button" class="about-role-pause"
      :aria-pressed="paused" :aria-label="paused ? 'Hervat wisselende tekst' : 'Pauzeer wisselende tekst'"
      @click="paused = !paused"
    ><AppIcon :name="paused ? 'play' : 'pause'" :size="13" />{{ paused ? 'Tekst hervatten' : 'Tekst pauzeren' }}</button>
  </div>
</template>

<style scoped>
.about-role-rotating { display: grid; }
.about-role-rotating > span { grid-area: 1 / 1; }
.about-role-size { visibility: hidden; pointer-events: none; }
.about-role-example { align-self: start; }
.about-role-fixed { display: block; margin-top: 6px; }
.about-role-change-enter-active, .about-role-change-leave-active { transition: opacity 160ms ease, transform 160ms ease; }
.about-role-change-enter-from { opacity: 0; transform: translateY(5px); }
.about-role-change-leave-to { opacity: 0; transform: translateY(-5px); }
.about-role-pause { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; padding-block: 6px; font-size: 11px; color: var(--color-muted); }
.about-role-pause:hover { color: var(--color-ink); }
.about-role-pause:focus-visible { outline: 2px solid var(--color-brand-ink); outline-offset: 4px; border-radius: 3px; }
@media (prefers-reduced-motion: reduce) {
  .about-role-change-enter-active, .about-role-change-leave-active { transition: none; }
}
</style>
