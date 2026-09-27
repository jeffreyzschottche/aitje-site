<script setup lang="ts">
withDefaults(
  defineProps<{
    to: string;
    name: string;
    text: string;
    icon: string;
    price?: string;
    dark?: boolean;
  }>(),
  { dark: false },
);
</script>

<template>
  <NuxtLink
    :to="to"
    class="service-card group flex h-full flex-col rounded-card border p-6 transition-all duration-300 hover:-translate-y-0.5"
    :class="
      dark
        ? 'border-line-dark bg-charcoal text-white hover:border-brand/60'
        : 'border-line bg-surface hover:border-ink/25 hover:shadow-card'
    "
  >
    <span class="grid size-11 place-items-center rounded-2xl bg-brand text-ink">
      <AppIcon :name="icon" :size="21" />
    </span>
    <h3 class="mt-5 font-heading text-lg font-semibold">{{ name }}</h3>
    <p
      class="mt-2 text-[0.95rem] leading-relaxed"
      :class="dark ? 'text-muted-dark' : 'text-muted'"
    >
      {{ text }}
    </p>
    <div class="mt-auto flex items-center justify-between gap-3 pt-5">
      <span
        v-if="price"
        class="font-mono text-xs tracking-wide"
        :class="dark ? 'text-white/70' : 'text-ink/70'"
        >{{ price }}</span
      >
      <span v-else />
      <AppIcon
        name="arrow-right"
        :size="18"
        class="transition-transform group-hover:translate-x-1"
      />
    </div>
  </NuxtLink>
</template>
