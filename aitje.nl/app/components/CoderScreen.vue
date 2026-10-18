<script setup lang="ts">
/** One real AITJE Coder screenshot in a quiet browser frame. Dark is the product default; light sits on light sections. */
const props = withDefaults(
  defineProps<{
    shot: string;
    alt: string;
    path?: string;
    theme?: "dark" | "light";
    phone?: boolean;
    focus?: string;
    eager?: boolean;
  }>(),
  { theme: "dark", phone: false, focus: "top", eager: false },
);
const src = computed(
  () =>
    `/img/coder/screenshots/${props.shot}-${props.phone ? "telefoon" : "desktop"}-${props.theme}.webp`,
);
const dialog = ref<HTMLDialogElement>();
const dimensions = computed(() =>
  props.phone
    ? { width: 640, height: 1385 }
    : props.shot === "budget-scope"
      ? { width: 1440, height: 1000 }
      : { width: 1600, height: 1000 },
);
function enlarge() {
  dialog.value?.showModal();
}
function close() {
  dialog.value?.close();
}
</script>
<template>
  <div class="coder-screen" :class="[`cs-${theme}`, { 'cs-phone': phone }]">
    <div v-if="!phone" class="cs-bar">
      <span class="cs-dots" aria-hidden="true"><i /><i /><i /></span
      ><span class="cs-address"
        >aitje-coder.local<span v-if="path">{{ path }}</span></span
      >
    </div>
    <button
      type="button"
      class="cs-image"
      aria-label="Vergroot de productopname"
      @click="enlarge"
    >
      <img
        :src="src"
        :alt="alt"
        :width="dimensions.width"
        :height="dimensions.height"
        :loading="eager ? 'eager' : 'lazy'"
        :style="{
          objectPosition: focus,
          aspectRatio: `${dimensions.width} / ${dimensions.height}`,
        }"
      /><span class="cs-expand"
        ><AppIcon name="plus" :size="13" />Vergroten</span
      >
    </button>
    <dialog ref="dialog" class="cs-enlarged" @click.self="close">
      <div class="cs-dialog-bar">
        <span>{{ alt }}</span
        ><button
          type="button"
          aria-label="Sluit de productopname"
          @click="close"
        >
          <AppIcon name="x" :size="20" />
        </button>
      </div>
      <img
        v-if="dialog"
        :src="src"
        :alt="alt"
        :width="phone ? 640 : 1600"
        :height="phone ? 1385 : 1000"
        loading="lazy"
      />
    </dialog>
  </div>
</template>
<style scoped>
.coder-screen {
  overflow: hidden;
  border-radius: 1.1rem;
  border: 1px solid var(--cs-line);
  background: var(--cs-bg);
  box-shadow: 0 28px 60px -38px #0008;
  min-width: 0;
}
.cs-dark {
  --cs-bg: #1a1a1a;
  --cs-bar: #0b0b0b;
  --cs-line: #34342f;
  --cs-text: #a3a39c;
}
.cs-light {
  --cs-bg: #f8f8f6;
  --cs-bar: #efeeea;
  --cs-line: #e2e1dc;
  --cs-text: #5f5f5a;
}
.cs-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.3rem;
  padding-inline: 1rem;
  background: var(--cs-bar);
  border-bottom: 1px solid var(--cs-line);
}
.cs-dots {
  display: flex;
  gap: 4px;
}
.cs-dots i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--cs-line);
}
.cs-address {
  font: 0.62rem var(--font-mono);
  color: var(--cs-text);
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.coder-screen img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1600 / 1000;
  object-fit: cover;
}
.cs-phone {
  border-radius: 2rem;
  border-width: 6px;
  border-color: #0b0b0b;
  max-width: 17rem;
}
.cs-phone img {
  aspect-ratio: 640 / 1385;
}
@media (max-width: 480px) {
  .cs-bar {
    height: 1.8rem;
  }
}
.cs-image {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  cursor: zoom-in;
  background: transparent;
  text-align: left;
}
.cs-expand {
  position: absolute;
  right: 0.7rem;
  bottom: 0.7rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  padding: 0.35rem 0.5rem;
  border: 1px solid #ffffff26;
  border-radius: 0.5rem;
  background: #14200be0;
  color: #d4e5b8;
  font: 0.55rem var(--font-mono);
  opacity: 0;
  transition: opacity 0.15s;
}
.cs-image:hover .cs-expand,
.cs-image:focus-visible .cs-expand {
  opacity: 1;
}
.cs-enlarged {
  position: fixed;
  inset: 0;
  margin: auto;
  width: min(94vw, 1600px);
  max-height: 92vh;
  max-height: 92dvh;
  padding: 0;
  background: #151c12;
  color: #e4edd8;
  border: 1px solid #4c5e3a;
  border-radius: 1rem;
  overflow: auto;
  box-shadow: 0 30px 120px #0008;
}
.cs-phone .cs-enlarged {
  width: min(92vw, 430px);
}
.cs-enlarged::backdrop {
  background: #071005cc;
  backdrop-filter: blur(6px);
}
.cs-dialog-bar {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background: #151c12;
  font-size: 0.7rem;
  color: #b7c9a0;
  line-height: 1.6;
}
.cs-dialog-bar button {
  display: grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  flex-shrink: 0;
  cursor: pointer;
  padding: 0.3rem;
  border: 1px solid #3f5130;
  border-radius: 50%;
}
.cs-enlarged img {
  display: block;
  aspect-ratio: auto;
  height: auto;
  width: 100%;
  object-fit: contain;
}
@media (pointer: coarse) {
  .cs-expand {
    opacity: 1;
  }
}
</style>
