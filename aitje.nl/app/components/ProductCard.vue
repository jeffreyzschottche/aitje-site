<script setup lang="ts">
import type { Product } from "@/content/types";

const props = withDefaults(defineProps<{ product: Product; large?: boolean }>(), { large: false });
const to = computed(() => `/producten/${props.product.slug}`);
</script>

<template>
  <NuxtLink
    v-if="product.status === 'available'"
    :to="to"
    class="group relative flex flex-col overflow-hidden rounded-panel border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
  >
    <div class="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-sand to-page">
      <img
        v-if="product.image"
        :src="product.image"
        :alt="`Verpakking van ${product.name}`"
        loading="lazy"
        class="absolute inset-0 size-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <UiBadge tone="brand" dot class="absolute top-5 left-5">Beschikbaar</UiBadge>
    </div>
    <div class="flex flex-1 flex-col p-7">
      <h3 class="font-heading text-2xl font-bold">{{ product.name }}</h3>
      <p class="mt-2 text-muted">{{ product.tagline }}</p>
      <div class="mt-auto flex items-end justify-between gap-4 pt-6">
        <p v-if="product.price" class="text-sm text-muted">
          <span class="block font-heading text-2xl font-bold text-ink">€{{ product.price }}</span>
          per omgeving, excl. btw
        </p>
        <span class="grid size-11 place-items-center rounded-full bg-ink text-white transition-colors group-hover:bg-brand group-hover:text-ink">
          <AppIcon name="arrow-right" :size="18" />
        </span>
      </div>
    </div>
  </NuxtLink>

  <NuxtLink
    v-else
    :to="to"
    class="group flex items-start gap-4 rounded-card border border-dashed border-line bg-surface/60 p-5 transition-colors hover:border-ink/30 hover:bg-surface"
  >
    <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-ink/5 text-muted">
      <AppIcon :name="product.icon" :size="19" />
    </span>
    <span class="min-w-0">
      <span class="flex flex-wrap items-center gap-2">
        <span class="font-heading font-semibold text-ink/70">{{ product.name }}</span>
        <UiBadge tone="muted">In ontwikkeling</UiBadge>
      </span>
      <span class="mt-1 block text-sm text-muted">{{ product.tagline }}</span>
    </span>
  </NuxtLink>
</template>
