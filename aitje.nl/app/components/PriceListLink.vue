<script setup lang="ts">
withDefaults(defineProps<{ dark?: boolean }>(), { dark: false });
</script>

<template>
  <a
    href="/prijslijst-aitje.pdf"
    target="_blank"
    rel="noopener noreferrer"
    type="application/pdf"
    aria-label="Bekijk de volledige prijslijst (PDF, opent in een nieuw tabblad)"
    class="group inline-flex max-w-full items-center gap-3 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    :class="dark ? 'text-brand hover:text-white' : 'text-ink hover:text-brand-ink'"
  >
    <AppIcon name="file-search" :size="20" class="shrink-0" />
    <span class="leading-relaxed">Bekijk de volledige prijslijst <span class="text-xs font-normal opacity-70">(PDF)</span></span>
    <AppIcon name="arrow-up-right" :size="17" class="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
</template>
