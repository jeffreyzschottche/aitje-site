<script setup lang="ts">
import type { CaseLabel } from "@/content/types";

defineProps<{ label: CaseLabel }>();
</script>

<template>
  <UiBadge v-if="label === 'Praktijkcase'" tone="brand" dot>Praktijkcase</UiBadge>
  <UiBadge v-else-if="label === 'Demo'" tone="dark" dot>Demo</UiBadge>
  <UiBadge v-else tone="neutral">Voorbeeldsituatie</UiBadge>
</template>
