<script setup lang="ts">
withDefaults(defineProps<{ steps: { title: string; text: string }[]; dark?: boolean }>(), { dark: false });
</script>

<template>
  <ol class="grid gap-4 md:grid-cols-2" :class="steps.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'">
    <li
      v-for="(step, i) in steps"
      :key="step.title"
      class="relative rounded-card border p-6"
      :class="dark ? 'border-line-dark bg-charcoal' : 'border-line bg-surface'"
    >
      <span class="font-mono text-xs tracking-widest" :class="dark ? 'text-brand' : 'text-brand-ink'">
        {{ String(i + 1).padStart(2, "0") }}
      </span>
      <h3 class="mt-3 font-heading text-lg font-semibold">{{ step.title }}</h3>
      <p class="mt-2 text-[0.95rem] leading-relaxed" :class="dark ? 'text-muted-dark' : 'text-muted'">{{ step.text }}</p>
    </li>
  </ol>
</template>
