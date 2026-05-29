<template>
  <button
    type="button"
    :class="[
      'group relative block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#facc15] focus-visible:ring-offset-2',
      frameClass,
    ]"
    :aria-label="ariaLabel"
    @click="isOpen = true"
  >
    <img
      :src="src"
      :alt="alt"
      :class="['w-full', imageClass]"
      :loading="loading"
      :decoding="decoding"
      :fetchpriority="fetchpriority"
    />
    <span
      class="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end bg-gradient-to-t from-black/78 via-black/36 to-transparent px-3 pb-3 pt-14"
      aria-hidden="true"
    >
      <span
        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/72 text-white shadow-lg transition group-hover:scale-105 group-hover:bg-[#facc15] group-hover:text-black"
      >
        <Maximize2 class="h-4 w-4" />
      </span>
    </span>
  </button>

  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-3 text-white sm:p-6"
      role="dialog"
      aria-modal="true"
      :aria-label="alt"
      @click="isOpen = false"
      @keydown.esc.window="isOpen = false"
    >
      <button
        type="button"
        class="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[#facc15] hover:bg-[#facc15] hover:text-black"
        :aria-label="closeLabel"
        @click.stop="isOpen = false"
      >
        <X class="h-5 w-5" />
      </button>

      <figure
        class="flex h-full w-full max-w-[96rem] flex-col items-center justify-center gap-4"
        @click.stop
      >
        <img
          :src="src"
          :alt="alt"
          class="max-h-[82vh] w-auto max-w-full rounded-lg bg-white object-contain shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
        />
        <figcaption
          v-if="caption"
          class="max-w-4xl text-center text-sm leading-6 text-white/76"
        >
          {{ caption }}
        </figcaption>
      </figure>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Maximize2, X } from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    src: string;
    alt: string;
    caption?: string;
    frameClass?: string;
    imageClass?: string;
    loading?: "lazy" | "eager";
    decoding?: "async" | "auto" | "sync";
    fetchpriority?: "high" | "low" | "auto";
    zoomLabel?: string;
    closeLabel?: string;
  }>(),
  {
    caption: "",
    frameClass: "",
    imageClass: "h-auto object-contain",
    loading: "lazy",
    decoding: "async",
    fetchpriority: "auto",
    zoomLabel: "Vergroot",
    closeLabel: "Sluiten",
  },
);

const isOpen = ref(false);
const ariaLabel = computed(() => `${props.zoomLabel}: ${props.alt}`);
</script>
