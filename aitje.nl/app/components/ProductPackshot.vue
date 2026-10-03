<script setup lang="ts">
import { coverOutlines } from "@/content/coverOutlines";

const props = defineProps<{ src: string; alt: string }>();
const id = useId();
// Clip the studio backdrop along the six edges of each original box.
// Coordinates use the source's square canvas, so artwork and text stay intact.
const outline = computed(() => {
  if (props.src.includes("/covers/v2/")) {
    const slug = props.src.split("/").pop()?.replace(/\.webp$/, "") ?? "";
    return coverOutlines[slug];
  }
  if (props.src.includes("box-assistent"))
    return "103,55 194,18 897,81 896,909 195,947 103,925";
  if (props.src.includes("box-coder"))
    return "148,62 232,28 856,79 856,922 229,956 147,933";
  if (props.src.includes("3d-box"))
    return "145,60 229,27 854,79 854,923 228,956 145,932";
  return "147,60 232,28 854,79 855,922 230,956 146,932";
});
</script>

<template>
  <svg
    class="product-packshot"
    viewBox="0 0 1000 1000"
    role="img"
    :aria-labelledby="`${id}-title`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title :id="`${id}-title`">{{ alt }}</title>
    <defs>
      <clipPath :id="`${id}-box`">
        <polygon :points="outline" />
      </clipPath>
      <filter
        :id="`${id}-shadow`"
        x="-30%"
        y="-200%"
        width="160%"
        height="500%"
      >
        <feGaussianBlur stdDeviation="15" />
      </filter>
    </defs>
    <ellipse
      cx="488"
      cy="947"
      rx="370"
      ry="19"
      fill="#29251f"
      opacity="0.19"
      transform="rotate(-2.5 488 947)"
      :filter="`url(#${id}-shadow)`"
    />
    <image
      :href="src"
      width="1000"
      height="1000"
      :clip-path="`url(#${id}-box)`"
    />
  </svg>
</template>
