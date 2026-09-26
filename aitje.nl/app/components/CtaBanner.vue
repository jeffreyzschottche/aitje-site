<script setup lang="ts">
import { contact, mainCta } from "@/content/site";

withDefaults(
  defineProps<{
    title?: string;
    text?: string;
    primary?: { label: string; to: string };
    secondary?: { label: string; to: string };
  }>(),
  {
    title: "Benieuwd wat AI voor jouw werk kan betekenen?",
    text: "Vertel waar je tegenaan loopt. AITJE denkt mee en laat je weten welke route past, ook als dat een kleine stap is.",
  },
);
</script>

<template>
  <section class="px-3 pb-3 md:px-5 md:pb-5">
    <div class="on-dark relative isolate overflow-hidden rounded-[2.25rem] bg-ink px-6 py-20 text-white md:px-16 md:py-24">
      <div class="pointer-events-none absolute -top-40 -right-24 -z-10 size-[34rem] rounded-full bg-brand/25 blur-3xl" />
      <div class="pointer-events-none absolute -bottom-24 left-1/3 -z-10 size-[22rem] rounded-full border border-brand/30" />
      <div class="pointer-events-none absolute top-10 right-10 -z-10 hidden size-40 rounded-full border border-white/10 md:block" />
      <div class="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <p class="eyebrow text-brand">Je partner in AI</p>
          <h2 class="mt-4 font-heading text-[2.25rem] leading-[1.05] font-bold md:text-[3.25rem]">{{ title }}</h2>
          <p class="mt-5 max-w-xl text-lg text-muted-dark">{{ text }}</p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <UiButton :to="primary?.to ?? mainCta.to" size="lg" arrow>{{ primary?.label ?? mainCta.label }}</UiButton>
          <UiButton v-if="secondary" :to="secondary.to" variant="light" size="lg">{{ secondary.label }}</UiButton>
          <a v-else :href="contact.phoneHref" class="inline-flex items-center gap-2 px-2 py-3 text-sm text-white/80 hover:text-brand">
            <AppIcon name="phone" :size="16" /> Of bel {{ contact.phone }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
