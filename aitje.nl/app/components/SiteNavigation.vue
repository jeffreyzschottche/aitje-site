<template>
  <nav class="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-3 font-semibold text-gray-900 transition hover:opacity-80"
      >
        <img
          src="/images/aitje-logo.png"
          alt="AITJE logo"
          class="object-contain"
          style="width: 100px; height: 80px"
        />
      </NuxtLink>

      <div class="hidden items-center gap-6 md:flex">
        <template v-for="link in links" :key="`desktop-link-${link.baseTo}`">
          <NuxtLink
            v-if="!link.children"
            :to="link.to"
            class="text-sm font-medium transition duration-150"
            :class="isActive(link.baseTo) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
          >
            {{ link.label }}
          </NuxtLink>

          <div
            v-else-if="link.baseTo === '/producten'"
            class="relative"
            @mouseenter="openProductsMenu()"
            @mouseleave="queueCloseProductsMenu()"
          >
            <div class="flex items-center gap-1">
              <NuxtLink
                :to="link.to"
                class="text-sm font-medium transition duration-150"
                :class="isActive(link.baseTo) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
              >
                {{ link.label }}
              </NuxtLink>
              <button
                class="inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                :aria-label="copy.showProductMenu"
                @click.stop="toggleProductsMenu()"
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
                    :key="group.id"
                    class="mb-1 rounded-lg"
                    @mouseenter="activeProductsGroup = group.id"
                    @mousemove="activeProductsGroup = group.id"
                  >
                    <NuxtLink
                      :to="group.to"
                      class="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition"
                      :class="activeProductsGroup === group.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900'"
                      @focus="activeProductsGroup = group.id"
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
                      :key="item.baseTo"
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

          <div
            v-else
            class="relative"
            @mouseenter="openServicesMenu()"
            @mouseleave="queueCloseServicesMenu()"
          >
            <div class="flex items-center gap-1">
              <NuxtLink
                :to="link.to"
                class="text-sm font-medium transition duration-150"
                :class="isActive(link.baseTo) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
              >
                {{ link.label }}
              </NuxtLink>
              <button
                class="inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                :aria-label="copy.showServicesMenu"
                @click.stop="toggleServicesMenu()"
              >
                <svg
                  class="h-4 w-4 transition"
                  :class="{ 'rotate-180': isServicesOpen }"
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
              v-if="isServicesOpen"
              class="absolute left-0 top-full z-50 mt-1 w-56 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg"
              @mouseenter="cancelCloseServicesMenu()"
              @mouseleave="queueCloseServicesMenu()"
            >
              <NuxtLink
                v-for="child in link.children"
                :key="child.baseTo"
                :to="child.to"
                class="block rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-[#fafafa] hover:text-gray-900"
                @click="isServicesOpen = false"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </template>

        <div class="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1">
          <button
            v-for="option in languageOptions"
            :key="option.locale"
            type="button"
            class="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition"
            :class="locale === option.locale ? 'bg-[#212121] text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'"
            :aria-label="option.label"
            @click="switchLanguage(option.locale)"
          >
            <span
              class="h-4 w-4 rounded-full border border-black/10"
              :style="{ background: option.flag }"
              aria-hidden="true"
            ></span>
            <span>{{ option.shortLabel }}</span>
          </button>
        </div>

        <NuxtLink
          :to="localePath('/contact?onderwerp=demo')"
          class="rounded-full bg-[#facc15] px-6 py-2 text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
        >
          {{ copy.planDemo }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3 md:hidden">
        <div class="flex items-center gap-1 rounded-full border border-gray-200 bg-white p-1">
          <button
            v-for="option in languageOptions"
            :key="`mobile-${option.locale}`"
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full transition"
            :class="locale === option.locale ? 'bg-[#212121]' : 'hover:bg-gray-100'"
            :aria-label="option.label"
            @click="switchLanguage(option.locale)"
          >
            <span
              class="h-4 w-4 rounded-full border border-black/10"
              :style="{ background: option.flag }"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <button
          class="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
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
    </div>

    <div v-if="isMenuOpen" class="border-t border-gray-200 bg-white md:hidden">
      <div class="flex flex-col px-6 py-4">
        <template v-for="link in links" :key="`mobile-link-${link.baseTo}`">
          <NuxtLink
            v-if="!link.children"
            :to="link.to"
            class="py-2 text-sm font-semibold text-gray-700 transition hover:text-gray-900"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <div v-else class="py-1">
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
                :aria-label="copy.showSubmenu"
                @click="toggleMobileGroup(link.baseTo)"
              >
                <svg
                  class="h-4 w-4 transition"
                  :class="{ 'rotate-180': mobileOpenGroup === link.baseTo }"
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
            <div v-if="mobileOpenGroup === link.baseTo" class="mt-1 flex flex-col border-l border-gray-200 pl-4">
              <NuxtLink
                v-for="child in link.children"
                :key="`mobile-child-${child.baseTo}`"
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
          :to="localePath('/contact?onderwerp=demo')"
          class="mt-2 rounded-full bg-[#facc15] px-6 py-2 text-center text-sm font-semibold text-black cursor-pointer transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          @click="isMenuOpen = false"
        >
          {{ copy.planDemo }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const { basePath, locale, localePath, switchLocalePath } = useSiteLocale();

const isMenuOpen = ref(false);
const isProductsOpen = ref(false);
const isServicesOpen = ref(false);
const mobileOpenGroup = ref<string | null>(null);
const activeProductsGroup = ref<"hardware" | "software">("hardware");

const copy = computed(() =>
  locale.value === "en"
      ? {
          home: "Home",
          products: "Products",
          services: "Services",
          cases: "Cases",
        knowledgeCenter: "Knowledge Center",
        roadmap: "Roadmap",
        vision: "Vision",
        faq: "FAQ",
          contact: "Contact",
          hardware: "Hardware",
          software: "Software",
          secretary: "AITJE Secretary",
          altTextGenerator: "WordPress Alt Text Generator",
          boardOfDirectors: "Board of Directors",
          assistantKnowledgeBase: "AITJE Assistant Knowledge Base",
          menu: "Menu",
          planDemo: "Book a demo",
          showProductMenu: "Show product menu",
          showServicesMenu: "Show services menu",
          showSubmenu: "Show submenu",
        dutch: "Switch to Dutch",
        english: "Switch to English",
      }
    : {
        home: "Home",
        products: "Producten",
        services: "Diensten",
        cases: "Cases",
        knowledgeCenter: "Kenniscentrum",
        roadmap: "Roadmap",
        vision: "Visie",
        faq: "FAQ",
        contact: "Contact",
        hardware: "Hardware",
        software: "Software",
        secretary: "AITJE Notulist",
        altTextGenerator: "WordPress Alt Tekst Generator",
        boardOfDirectors: "Raad van Bestuur",
        assistantKnowledgeBase: "AITJE Assistent Kennisbank",
        menu: "Menu",
        planDemo: "Plan een demo",
        showProductMenu: "Toon productmenu",
        showServicesMenu: "Toon dienstenmenu",
        showSubmenu: "Toon submenu",
        dutch: "Schakel naar Nederlands",
        english: "Schakel naar Engels",
      },
);

const languageOptions = computed(() => [
  {
    locale: "nl" as const,
    label: copy.value.dutch,
    shortLabel: "NL",
    flag: "linear-gradient(180deg, #ae1c28 0 33.33%, #ffffff 33.33% 66.66%, #21468b 66.66% 100%)",
  },
  {
    locale: "en" as const,
    label: copy.value.english,
    shortLabel: "EN",
    flag: "linear-gradient(135deg, #012169 0 42%, #ffffff 42% 47%, #c8102e 47% 53%, #ffffff 53% 58%, #012169 58% 100%)",
  },
]);

const links = computed(() => [
  { label: copy.value.home, baseTo: "/", to: localePath("/") },
  {
    label: copy.value.products,
    baseTo: "/producten",
    to: localePath("/producten"),
    children: [
      { label: copy.value.hardware, baseTo: "/producten/hardware", to: localePath("/producten/hardware") },
      { label: copy.value.software, baseTo: "/producten/software", to: localePath("/producten/software") },
    ],
  },
  {
    label: copy.value.services,
    baseTo: "/diensten",
    to: localePath("/diensten"),
    children: [{ label: copy.value.cases, baseTo: "/cases", to: localePath("/cases") }],
  },
  { label: copy.value.knowledgeCenter, baseTo: "/kenniscentrum", to: localePath("/kenniscentrum") },
  { label: copy.value.roadmap, baseTo: "/roadmap", to: localePath("/roadmap") },
  { label: copy.value.vision, baseTo: "/visie", to: localePath("/visie") },
  { label: copy.value.faq, baseTo: "/faq", to: localePath("/faq") },
  { label: copy.value.contact, baseTo: "/contact", to: localePath("/contact") },
]);

const productGroups = computed(() => [
  {
    id: "hardware" as const,
    label: copy.value.hardware,
    to: localePath("/producten/hardware"),
    items: [
      { label: "AITJE Assistent", baseTo: "/producten/hardware/aitje-assistent", to: localePath("/producten/hardware/aitje-assistent") },
      { label: "AITJE Custom", baseTo: "/producten/hardware/aitje-custom", to: localePath("/producten/hardware/aitje-custom") },
    ],
  },
  {
    id: "software" as const,
    label: copy.value.software,
    to: localePath("/producten/software"),
    items: [
      { label: copy.value.secretary, baseTo: "/producten/software/aitje-notulist", to: localePath("/producten/software/aitje-notulist") },
      { label: "WordPress AI Search Overview", baseTo: "/producten/software/wordpress-ai-search-overview", to: localePath("/producten/software/wordpress-ai-search-overview") },
      { label: "WordPress AI Chat", baseTo: "/producten/software/wordpress-ai-chat", to: localePath("/producten/software/wordpress-ai-chat") },
      { label: copy.value.altTextGenerator, baseTo: "/producten/software/wordpress-alt-tekst-generator", to: localePath("/producten/software/wordpress-alt-tekst-generator") },
      { label: "PromptPaleis", baseTo: "/producten/software/promptpaleis", to: localePath("/producten/software/promptpaleis") },
      { label: copy.value.boardOfDirectors, baseTo: "/producten/software/raad-van-bestuur", to: localePath("/producten/software/raad-van-bestuur") },
      { label: "AITJE Assistent OS", baseTo: "/producten/software/aitje-assistent-os", to: localePath("/producten/software/aitje-assistent-os") },
      { label: copy.value.assistantKnowledgeBase, baseTo: "/producten/software/aitje-assistent-kennisbank", to: localePath("/producten/software/aitje-assistent-kennisbank") },
      { label: "AITJE Assistent Client", baseTo: "/producten/software/aitje-assistent-client", to: localePath("/producten/software/aitje-assistent-client") },
    ],
  },
]);

const isActive = (path: string) => {
  const currentPath = basePath.value;

  if (path === "/diensten") {
    return (
      currentPath === "/diensten" ||
      currentPath.startsWith("/diensten/") ||
      currentPath === "/cases" ||
      currentPath.startsWith("/cases/")
    );
  }

  return currentPath === path || currentPath.startsWith(`${path}/`);
};

const currentLabel = computed(() => {
  const match = links.value.find((link) => isActive(link.baseTo));
  return match ? match.label : copy.value.menu;
});

const currentProductsGroup = computed(
  () =>
    productGroups.value.find((group) => group.id === activeProductsGroup.value) ??
    productGroups.value[0],
);

const switchLanguage = async (targetLocale: "nl" | "en") => {
  if (targetLocale === locale.value) return;
  await navigateTo(switchLocalePath.value);
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement | null;
  if (!target) return;
  if (!target.closest("nav")) {
    isProductsOpen.value = false;
    isServicesOpen.value = false;
  }
};

let closeProductsTimer: ReturnType<typeof setTimeout> | null = null;
let closeServicesTimer: ReturnType<typeof setTimeout> | null = null;

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

const cancelCloseServicesMenu = () => {
  if (closeServicesTimer) {
    clearTimeout(closeServicesTimer);
    closeServicesTimer = null;
  }
};

const openServicesMenu = () => {
  cancelCloseServicesMenu();
  isServicesOpen.value = true;
};

const queueCloseServicesMenu = () => {
  cancelCloseServicesMenu();
  closeServicesTimer = setTimeout(() => {
    isServicesOpen.value = false;
  }, 220);
};

const toggleServicesMenu = () => {
  if (isServicesOpen.value) {
    isServicesOpen.value = false;
    return;
  }
  openServicesMenu();
};

const toggleMobileGroup = (group: string) => {
  mobileOpenGroup.value = mobileOpenGroup.value === group ? null : group;
};

watch(
  () => basePath.value,
  () => {
    isProductsOpen.value = false;
    isServicesOpen.value = false;
    isMenuOpen.value = false;
    mobileOpenGroup.value = null;
    activeProductsGroup.value = basePath.value.startsWith("/producten/software")
      ? "software"
      : "hardware";
  },
  { immediate: true },
);

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", handleClickOutside);
  cancelCloseProductsMenu();
  cancelCloseServicesMenu();
});
</script>
