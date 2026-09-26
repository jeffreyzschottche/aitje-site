<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string;
    href?: string;
    variant?: "primary" | "secondary" | "dark" | "light" | "ghost";
    size?: "md" | "lg" | "sm";
    arrow?: boolean;
    type?: "button" | "submit";
    disabled?: boolean;
  }>(),
  { variant: "primary", size: "md", arrow: false, type: "button", disabled: false },
);

const variants = {
  primary: "bg-brand text-ink hover:bg-[#f5c000] shadow-[0_1px_0_rgb(0_0_0/0.06)]",
  secondary: "border border-line bg-surface text-ink hover:border-ink",
  dark: "bg-ink text-white hover:bg-graphite",
  light: "border border-white/25 text-white hover:border-white hover:bg-white/5",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

const classes = computed(() => [
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  variants[props.variant],
  sizes[props.size],
]);
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
    <AppIcon v-if="arrow" name="arrow-right" :size="17" class="transition-transform duration-200 group-hover:translate-x-0.5" />
  </NuxtLink>
  <a v-else-if="href" :href="href" :class="classes">
    <slot />
    <AppIcon v-if="arrow" name="arrow-right" :size="17" class="transition-transform duration-200 group-hover:translate-x-0.5" />
  </a>
  <button v-else :type="type" :disabled="disabled" :class="classes">
    <slot />
    <AppIcon v-if="arrow" name="arrow-right" :size="17" class="transition-transform duration-200 group-hover:translate-x-0.5" />
  </button>
</template>
