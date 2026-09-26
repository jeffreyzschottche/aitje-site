<script setup lang="ts">
import type { Faq } from "@/content/types";

withDefaults(defineProps<{ items: Faq[]; dark?: boolean }>(), { dark: false });
</script>

<template>
  <div class="divide-y" :class="dark ? 'divide-line-dark border-y border-line-dark' : 'divide-line border-y border-line'">
    <details v-for="item in items" :key="item.q" class="group">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left">
        <span class="font-heading text-lg font-semibold">{{ item.q }}</span>
        <span
          class="grid size-8 shrink-0 place-items-center rounded-full border transition-colors group-open:bg-brand group-open:text-ink"
          :class="dark ? 'border-line-dark group-open:border-brand' : 'border-line group-open:border-brand'"
        >
          <AppIcon name="plus" :size="16" class="transition-transform duration-200 group-open:rotate-45" />
        </span>
      </summary>
      <RichText
        :text="item.a"
        tag="p"
        class="max-w-3xl pr-12 pb-6 leading-relaxed"
        :class="dark ? 'text-muted-dark' : 'text-muted'"
      />
    </details>
  </div>
</template>
