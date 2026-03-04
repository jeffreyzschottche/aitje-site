<template>
  <nav class="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 font-semibold text-gray-900 transition hover:opacity-80"
      >
        <img
          src="/images/aitje-logo.png"
          alt="AITJE logo"
          class="object-contain"
          style="width: 100px; height: 80px"
        />
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <template
          v-for="link in links"
        >
          <NuxtLink
            v-if="!link.children"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium transition duration-150"
            :class="isActive(link.to) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
          >
            {{ link.label }}
          </NuxtLink>

          <div
            v-else
            :key="`desktop-${link.to}`"
            class="relative"
            @mouseenter="openProductsMenu()"
            @mouseleave="queueCloseProductsMenu()"
          >
            <div class="flex items-center gap-1">
              <NuxtLink
                :to="link.to"
                class="text-sm font-medium transition duration-150"
                :class="isActive(link.to) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
              >
                {{ link.label }}
              </NuxtLink>
              <button
                class="inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                @click.stop="toggleProductsMenu()"
                aria-label="Toon productmenu"
              >
                <svg
                  class="h-4 w-4 transition"
                  :class="{ 'rotate-180': isProductsOpen }"
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
            <div
              v-if="isProductsOpen"
              class="absolute left-0 top-full z-50 mt-1 w-[34rem] rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
              @mouseenter="cancelCloseProductsMenu()"
              @mouseleave="queueCloseProductsMenu()"
            >
              <div class="grid gap-4 md:grid-cols-[0.42fr_0.58fr]">
                <div class="rounded-xl border border-gray-200 bg-[#fafafa] p-2">
                  <div
                    v-for="group in productGroups"
                    :key="group.to"
                    class="mb-1 rounded-lg"
                    @mouseenter="activeProductsGroup = group.label"
                    @mousemove="activeProductsGroup = group.label"
                  >
                    <NuxtLink
                      :to="group.to"
                      class="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition"
                      :class="activeProductsGroup === group.label ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900'"
                      @focus="activeProductsGroup = group.label"
                      @click="isProductsOpen = false"
                    >
                      <span>{{ group.label }}</span>
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
                <div class="rounded-xl border border-gray-200 bg-[#fafafa] p-3">
                  <NuxtLink
                    :to="currentProductsGroup.to"
                    class="inline-flex text-sm font-semibold text-gray-900 transition hover:text-black"
                    @click="isProductsOpen = false"
                  >
                    {{ currentProductsGroup.label }}
                  </NuxtLink>
                  <div class="mt-2 flex flex-col">
                    <NuxtLink
                      v-for="item in currentProductsGroup.items"
                      :key="item.to"
                      :to="item.to"
                      class="rounded-lg px-2 py-1 text-sm text-gray-600 transition hover:bg-white hover:text-gray-900"
                      @click="isProductsOpen = false"
                    >
                      {{ item.label }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <NuxtLink
          to="/contact"
          class="rounded-full bg-[#facc15] px-6 py-2 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
        >
          Plan een demo
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
        <template
          v-for="link in links"
        >
          <NuxtLink
            v-if="!link.children"
            :key="`mobile-${link.to}`"
            :to="link.to"
            class="py-2 text-sm font-semibold text-gray-700 transition hover:text-gray-900"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <div v-else :key="`mobile-group-${link.to}`" class="py-1">
            <div class="flex items-center justify-between">
              <NuxtLink
                :to="link.to"
                class="py-2 text-sm font-semibold text-gray-700 transition hover:text-gray-900"
                @click="isMenuOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
              <button
                class="inline-flex h-7 w-7 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100"
                @click="isMobileProductsOpen = !isMobileProductsOpen"
                aria-label="Toon productsubpagina's"
              >
                <svg
                  class="h-4 w-4 transition"
                  :class="{ 'rotate-180': isMobileProductsOpen }"
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
            <div v-if="isMobileProductsOpen" class="mt-1 flex flex-col border-l border-gray-200 pl-4">
              <NuxtLink
                v-for="child in link.children"
                :key="`mobile-child-${child.to}`"
                :to="child.to"
                class="py-2 text-sm font-semibold text-gray-600 transition hover:text-gray-900"
                @click="isMenuOpen = false"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </template>
        <NuxtLink
          to="/contact"
          class="mt-2 rounded-full bg-[#facc15] px-6 py-2 text-center text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          @click="isMenuOpen = false"
        >
          Plan een demo
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const isProductsOpen = ref(false);
const isMobileProductsOpen = ref(false);
const activeProductsGroup = ref("Hardware");

const links = [
  { label: 'Home', to: '/' },
  {
    label: 'Producten',
    to: '/producten',
    children: [
      { label: 'Hardware', to: '/producten/hardware' },
      { label: 'Software', to: '/producten/software' },
    ],
  },
  { label: 'Diensten', to: '/diensten' },
  { label: 'Kenniscentrum', to: '/kenniscentrum' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'Visie', to: '/visie' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' }
];

const productGroups = [
  {
    label: "Hardware",
    to: "/producten/hardware",
    items: [
      { label: "AITJE Assistent", to: "/producten/hardware/aitje-assistent" },
      { label: "AITJE Notulist", to: "/producten/hardware/aitje-notulist" },
      { label: "AITJE Custom", to: "/producten/hardware/aitje-custom" },
    ],
  },
  {
    label: "Software",
    to: "/producten/software",
    items: [
      { label: "AITJE Assistent OS", to: "/producten/software/aitje-assistent-os" },
      { label: "AITJE Assistent Client", to: "/producten/software/aitje-assistent-client" },
      { label: "AITJE Assistent Kennisbank", to: "/producten/software/aitje-assistent-kennisbank" },
      { label: "AITJE Notulist Manager", to: "/producten/software/aitje-notulist-manager" },
      { label: "WordPress AI Search Overview", to: "/producten/software/wordpress-ai-search-overview" },
      { label: "WordPress AI Chat", to: "/producten/software/wordpress-ai-chat" },
      { label: "WordPress Alt Tekst Generator", to: "/producten/software/wordpress-alt-tekst-generator" },
      { label: "PromptPaleis", to: "/producten/software/promptpaleis" },
      { label: "Raad van Bestuur", to: "/producten/software/raad-van-bestuur" },
    ],
  },
];

const isActive = (path: string) => route.path === path || route.path.startsWith(`${path}/`);

const currentLabel = computed(() => {
  const match = links.find((link) => isActive(link.to));
  return match ? match.label : 'Menu';
});

const currentProductsGroup = computed(
  () =>
    productGroups.find((group) => group.label === activeProductsGroup.value) ??
    productGroups[0]
);

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement | null;
  if (!target) return;
  if (!target.closest('nav')) {
    isProductsOpen.value = false;
  }
};

let closeProductsTimer: ReturnType<typeof setTimeout> | null = null;

const cancelCloseProductsMenu = () => {
  if (closeProductsTimer) {
    clearTimeout(closeProductsTimer);
    closeProductsTimer = null;
  }
};

const openProductsMenu = () => {
  cancelCloseProductsMenu();
  isProductsOpen.value = true;
};

const queueCloseProductsMenu = () => {
  cancelCloseProductsMenu();
  closeProductsTimer = setTimeout(() => {
    isProductsOpen.value = false;
  }, 220);
};

const toggleProductsMenu = () => {
  if (isProductsOpen.value) {
    isProductsOpen.value = false;
    return;
  }
  openProductsMenu();
};

watch(
  () => route.path,
  () => {
    isProductsOpen.value = false;
    isMenuOpen.value = false;
    isMobileProductsOpen.value = false;
    if (route.path.startsWith('/producten/software')) {
      activeProductsGroup.value = 'Software';
    } else {
      activeProductsGroup.value = 'Hardware';
    }
  }
);

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
  cancelCloseProductsMenu();
});
</script>
