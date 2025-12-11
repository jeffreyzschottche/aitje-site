<template>
  <nav class="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 font-semibold text-gray-900 transition hover:opacity-80"
      >
        <img src="/images/aitje-logo.png" alt="AITJE logo" class="h-10 w-10" />
        <span class="text-2xl tracking-tight">AITJE</span>
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium transition duration-150"
          :class="route.path === link.to ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/app"
          class="rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500"
        >
          AITJE App
        </NuxtLink>
      </div>

      <button
        class="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 md:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span>{{ currentLabel }}</span>
        <svg
          class="h-4 w-4 transition"
          :class="{ 'rotate-180': isMenuOpen }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>

    <div v-if="isMenuOpen" class="border-t border-gray-200 bg-white md:hidden">
      <div class="flex flex-col px-6 py-4">
        <NuxtLink
          v-for="link in links"
          :key="`mobile-${link.to}`"
          :to="link.to"
          class="py-2 text-sm font-semibold text-gray-700 transition hover:text-gray-900"
          @click="isMenuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/app"
          class="mt-2 rounded-full bg-yellow-400 px-6 py-2 text-center text-sm font-semibold text-black transition hover:bg-yellow-500"
          @click="isMenuOpen = false"
        >
          AITJE App
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Contact', to: '/contact' }
];

const currentLabel = computed(() => {
  const match = links.find((link) => link.to === route.path);
  return match ? match.label : 'Menu';
});
</script>
