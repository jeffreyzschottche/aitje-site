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
</script>
<template>
  <div class="coder-screen" :class="[`cs-${theme}`, { 'cs-phone': phone }]">
    <div v-if="!phone" class="cs-bar">
      <span class="cs-dots" aria-hidden="true"><i /><i /><i /></span
      ><span class="cs-address">aitje-coder.local<span v-if="path">{{ path }}</span></span>
    </div>
    <img
      :src="src"
      :alt="alt"
      :width="phone ? 640 : 1600"
      :height="phone ? 1385 : 1000"
      :loading="eager ? 'eager' : 'lazy'"
      :style="{ objectPosition: focus }"
    />
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
</style>
