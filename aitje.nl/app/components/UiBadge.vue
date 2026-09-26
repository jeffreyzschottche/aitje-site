<script setup lang="ts">
const props = withDefaults(
  defineProps<{ tone?: "brand" | "neutral" | "dark" | "outline" | "muted"; dot?: boolean }>(),
  { tone: "neutral", dot: false },
);

const tones = {
  brand: "bg-brand text-ink",
  neutral: "bg-sand text-ink",
  dark: "bg-ink text-white",
  outline: "border border-current/25 text-current",
  muted: "bg-ink/5 text-muted",
};
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[0.7rem] font-medium tracking-[0.08em] uppercase',
      tones[props.tone],
    ]"
  >
    <span v-if="dot" class="size-1.5 rounded-full bg-current" />
    <slot />
  </span>
</template>
