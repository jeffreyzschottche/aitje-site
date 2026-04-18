<template>
  <Teleport to="body">
    <div
      v-if="src"
      class="fixed inset-0 z-[200] flex items-center justify-center bg-black/88 px-4 py-6"
      @click="close"
    >
      <button
        type="button"
        class="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition hover:bg-white/20"
        aria-label="Close image"
        @click.stop="close"
      >
        ×
      </button>

      <div class="max-h-full max-w-6xl" @click.stop>
        <img
          :src="src"
          :alt="alt"
          data-no-lightbox="true"
          class="max-h-[88vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
        />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";

const src = useState<string | null>("image-lightbox-src", () => null);
const alt = useState<string>("image-lightbox-alt", () => "");

const close = () => {
  src.value = null;
  alt.value = "";
};

const onDocumentClick = (event: MouseEvent) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const image = target.closest("img");
  if (!(image instanceof HTMLImageElement)) return;
  if (image.dataset.noLightbox === "true") return;
  if (!image.currentSrc && !image.src) return;

  event.preventDefault();
  event.stopPropagation();

  src.value = image.currentSrc || image.src;
  alt.value = image.alt || "";
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") close();
};

onMounted(() => {
  document.addEventListener("click", onDocumentClick, true);
  document.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onDocumentClick, true);
  document.removeEventListener("keydown", onKeydown);
});
</script>

<style>
img:not([data-no-lightbox="true"]) {
  cursor: zoom-in;
}
</style>
