<script setup lang="ts">
withDefaults(
  defineProps<{ steps: { title: string; text: string }[]; dark?: boolean }>(),
  { dark: false },
);
</script>
<template>
  <ol
    class="process-steps"
    :class="{ 'steps-dark': dark }"
    :style="{ '--step-count': steps.length }"
  >
    <li v-for="(step, i) in steps" :key="step.title">
      <div class="step-marker">
        <span>{{ String(i + 1).padStart(2, "0") }}</span
        ><AppIcon v-if="i < steps.length - 1" name="arrow-right" :size="18" />
      </div>
      <h3>{{ step.title }}</h3>
      <p>{{ step.text }}</p>
    </li>
  </ol>
</template>
