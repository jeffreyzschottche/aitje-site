<script setup lang="ts">
withDefaults(defineProps<{ items: string[]; negative?: boolean; dark?: boolean }>(), {
  negative: false,
  dark: false,
});
</script>

<template>
  <ul class="space-y-3">
    <li v-for="item in items" :key="item" class="flex gap-3">
      <span
        class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full"
        :class="negative ? (dark ? 'bg-white/10 text-white/60' : 'bg-ink/5 text-muted') : 'bg-brand text-ink'"
      >
        <AppIcon :name="negative ? 'minus' : 'check'" :size="14" :stroke-width="2.5" />
      </span>
      <RichText :text="item" :class="negative ? (dark ? 'text-muted-dark' : 'text-muted') : ''" />
    </li>
  </ul>
</template>
