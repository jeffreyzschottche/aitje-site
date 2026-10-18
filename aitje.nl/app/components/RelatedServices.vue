<script setup lang="ts">
import { getRelatedServices } from "@/content/services";

const props = defineProps<{ slug: string }>();
const items = computed(() => getRelatedServices(props.slug));
</script>

<template>
  <section class="related-services border-t border-line py-20">
    <div class="container-page">
      <h2 class="font-heading text-2xl font-bold">Past hier ook bij</h2>
      <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="item in items"
          :key="item.slug"
          :to="`/diensten/${item.slug}`"
          :name="item.name"
          :text="item.short"
          :icon="item.icon"
          :price="item.price"
        />
      </div>
    </div>
  </section>
</template>
