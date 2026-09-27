<script setup lang="ts">
defineProps<{ title: string; items: string[]; icon: string }>();
</script>
<template>
  <div class="service-blueprint">
    <div class="blueprint-head">
      <AppIcon :name="icon" :size="24" /><span class="eyebrow"
        >Van vraag naar oplevering</span
      ><span class="signal-dot" />
    </div>
    <h3>{{ title }}</h3>
    <ol>
      <li v-for="(item, i) in items.slice(0, 4)" :key="item">
        <span>{{ String(i + 1).padStart(2, "0") }}</span>
        <p>{{ item }}</p>
        <AppIcon name="check" :size="16" />
      </li>
    </ol>
    <div class="blueprint-footer">
      <AppIcon name="handshake" :size="18" />Scope en vervolgstappen vooraf
      afgestemd.
    </div>
  </div>
</template>
