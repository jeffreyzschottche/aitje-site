<template>
  <ZoomableMedia
    v-if="src"
    :src="src"
    :alt="alt"
    :caption="caption"
    :zoom-label="zoomLabel"
    :close-label="closeLabel"
    :frame-class="frameClass"
    :image-class="imageClass"
    :loading="loading"
    :fetchpriority="fetchpriority"
  />

  <div
    v-else
    :class="['relative flex flex-col items-center justify-center gap-3 p-8 text-center', frameClass, placeholderClass]"
    role="img"
    :aria-label="alt"
    data-no-knowledge-links
  >
    <span
      v-if="icon"
      class="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-current opacity-70"
    >
      <component :is="icon" class="h-5 w-5" />
    </span>
    <p class="max-w-sm text-sm font-semibold leading-6">
      {{ caption || alt }}
    </p>
    <p class="text-xs font-semibold uppercase tracking-[0.28em] opacity-60">
      {{ pendingLabel }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

withDefaults(
  defineProps<{
    /** Leeg laten zolang de screenshot nog niet bestaat; dan verschijnt de placeholder. */
    src?: string;
    alt: string;
    caption?: string;
    icon?: Component;
    /** Klassen voor het kader, gedeeld door screenshot en placeholder. */
    frameClass?: string;
    imageClass?: string;
    /** Extra klassen die alleen de placeholder krijgt, bijvoorbeeld een minimale hoogte. */
    placeholderClass?: string;
    pendingLabel?: string;
    zoomLabel?: string;
    closeLabel?: string;
    loading?: "lazy" | "eager";
    fetchpriority?: "high" | "low" | "auto";
  }>(),
  {
    src: "",
    caption: "",
    frameClass: "",
    imageClass: "h-auto object-contain",
    placeholderClass: "min-h-[16rem]",
    pendingLabel: "Screenshot volgt",
    zoomLabel: "Vergroot",
    closeLabel: "Sluiten",
    loading: "lazy",
    fetchpriority: "auto",
  },
);
</script>
