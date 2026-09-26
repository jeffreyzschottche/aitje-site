<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    intro?: string;
    align?: "left" | "center";
    dark?: boolean;
    as?: "h1" | "h2" | "h3";
  }>(),
  { align: "left", dark: false, as: "h2" },
);
</script>

<template>
  <div :class="[align === 'center' ? 'mx-auto text-center' : '', 'max-w-3xl']">
    <p v-if="eyebrow" :class="['eyebrow mb-4', dark ? 'text-brand' : 'text-brand-ink']">{{ eyebrow }}</p>
    <component
      :is="as"
      :class="[
        'font-heading text-[2rem] leading-[1.08] font-bold md:text-[2.75rem]',
        dark ? 'text-white' : 'text-ink',
      ]"
    >
      <slot name="title">{{ title }}</slot>
    </component>
    <RichText
      v-if="intro"
      :text="intro"
      tag="p"
      :class="['mt-5 text-lg leading-relaxed', dark ? 'text-muted-dark' : 'text-muted']"
    />
    <slot />
  </div>
</template>
