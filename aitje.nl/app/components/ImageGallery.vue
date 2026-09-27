<script setup lang="ts">
const props = defineProps<{
  images: { src: string; alt: string; caption: string }[];
}>();
const active = ref(0);
const current = computed(() => props.images[active.value]);
</script>
<template>
  <div v-if="current" class="image-gallery">
    <figure>
      <img
        :src="current.src"
        :alt="current.alt"
        loading="lazy"
        width="1200"
        height="750"
      />
      <figcaption>{{ current.caption }}</figcaption>
    </figure>
    <div class="gallery-controls" aria-label="Kies een afbeelding">
      <button
        v-for="(shot, i) in images"
        :key="shot.src"
        :aria-pressed="active === i"
        @click="active = i"
      >
        <span>0{{ i + 1 }}</span
        >{{ shot.caption }}
      </button>
    </div>
  </div>
</template>
