<script setup lang="ts">
withDefaults(
  defineProps<{ steps: { title: string; text: string; image?: string }[]; dark?: boolean }>(),
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
      <img
        v-if="step.image"
        class="step-illustration"
        :src="step.image"
        alt=""
        aria-hidden="true"
        width="1024"
        height="1024"
        loading="lazy"
        decoding="async"
      />
      <div class="step-marker">
        <span>{{ String(i + 1).padStart(2, "0") }}</span
        ><AppIcon v-if="i < steps.length - 1" name="arrow-right" :size="18" />
      </div>
      <h3>{{ step.title }}</h3>
      <p>{{ step.text }}</p>
    </li>
  </ol>
</template>
