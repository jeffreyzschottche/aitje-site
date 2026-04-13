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

      <div class="hidden flex-1 items-center justify-center px-8 md:flex">
        <div class="flex items-center gap-6">
        <NuxtLink
          v-for="link in desktopLeadingLinks"
          :key="link.baseTo"
          :to="link.to"
          class="inline-flex items-center text-sm font-medium transition duration-150"
          :class="isActive(link.baseTo) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
        >
          {{ link.label }}
        </NuxtLink>

        <div
          class="relative"
          @mouseenter="isProductsOpen = true"
          @mouseleave="isProductsOpen = false"
        >
          <div class="flex items-center gap-1">
            <NuxtLink
              :to="localePath('/producten')"
              class="inline-flex items-center text-sm font-medium transition duration-150"
              :class="isActive('/producten') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
              @click.prevent="toggleDesktopMenu('products')"
            >
              {{ copy.products }}
            </NuxtLink>
            <button
              class="inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              :aria-label="copy.showProductMenu"
              @click.stop="toggleDesktopMenu('products')"
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
            class="absolute left-0 top-full z-50 w-80 pt-2"
          >
            <div class="rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
              <template v-for="item in productLinks" :key="item.baseTo">
                <div
                  v-if="item.disabled"
                  class="block cursor-not-allowed rounded-xl bg-gray-50 px-3 py-3 opacity-60"
                >
                  <p class="text-sm font-semibold text-gray-400">
                    {{ item.label }}
                  </p>
                  <p class="mt-1 text-xs text-gray-400">
                    {{ item.description }}
                  </p>
                </div>

                <NuxtLink
                  v-else
                  :to="item.to"
                  class="block rounded-xl px-3 py-3 transition hover:bg-[#fafafa]"
                  @click="isProductsOpen = false"
                >
                  <p class="text-sm font-semibold text-gray-900">
                    {{ item.label }}
                  </p>
                  <p class="mt-1 text-xs text-gray-500">
                    {{ item.description }}
                  </p>
                </NuxtLink>
              </template>
            </div>
          </div>
        </div>

        <div
          class="relative"
          @mouseenter="isServicesOpen = true"
          @mouseleave="isServicesOpen = false"
        >
          <div class="flex items-center gap-1">
            <NuxtLink
              :to="localePath('/diensten')"
              class="inline-flex items-center text-sm font-medium transition duration-150"
              :class="isActive('/diensten') || isActive('/use-cases') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
              @click.prevent="toggleDesktopMenu('services')"
            >
              {{ copy.services }}
            </NuxtLink>
            <button
              class="inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              :aria-label="copy.showServicesMenu"
              @click.stop="toggleDesktopMenu('services')"
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
            class="absolute left-0 top-full z-50 w-80 pt-2"
          >
            <div class="rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
              <NuxtLink
                v-for="item in serviceLinks"
                :key="item.baseTo"
                :to="item.to"
                class="block rounded-xl px-3 py-3 transition hover:bg-[#fafafa]"
                @click="isServicesOpen = false"
              >
                <p class="text-sm font-semibold text-gray-900">{{ item.label }}</p>
                <p class="mt-1 text-xs text-gray-500">{{ item.description }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink
          v-for="link in desktopTrailingLinks"
          :key="`trailing-${link.baseTo}`"
          :to="link.to"
          class="inline-flex items-center text-sm font-medium transition duration-150"
          :class="isActive(link.baseTo) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
        >
          {{ link.label }}
        </NuxtLink>

        <div
          class="relative"
          @mouseenter="isAboutOpen = true"
          @mouseleave="isAboutOpen = false"
        >
          <div class="flex items-center gap-1">
            <NuxtLink
              :to="localePath('/over-aitje')"
              class="inline-flex items-center text-sm font-medium transition duration-150"
              :class="isActive('/over-aitje') || isActive('/roadmap') ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'"
              @click.prevent="toggleDesktopMenu('about')"
            >
              {{ copy.about }}
            </NuxtLink>
            <button
              class="inline-flex h-6 w-6 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              :aria-label="copy.showAboutMenu"
              @click.stop="toggleDesktopMenu('about')"
            >
              <svg
                class="h-4 w-4 transition"
                :class="{ 'rotate-180': isAboutOpen }"
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
            v-if="isAboutOpen"
            class="absolute left-0 top-full z-50 w-80 pt-2"
          >
            <div class="rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
              <NuxtLink
                v-for="item in aboutLinks"
                :key="item.baseTo"
                :to="item.to"
                class="block rounded-xl px-3 py-3 transition hover:bg-[#fafafa]"
                @click="isAboutOpen = false"
              >
                <p class="text-sm font-semibold text-gray-900">{{ item.label }}</p>
                <p class="mt-1 text-xs text-gray-500">{{ item.description }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div class="hidden items-center gap-6 md:flex">
        <div class="relative">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            :aria-label="copy.languageMenu"
            @click="isLanguageOpen = !isLanguageOpen"
          >
            <span class="inline-flex h-4 w-4 items-center justify-center text-sm leading-none" aria-hidden="true">
              {{ activeLanguage.flag }}
            </span>
            <span>{{ activeLanguage.shortLabel }}</span>
            <svg
              class="h-4 w-4 transition"
              :class="{ 'rotate-180': isLanguageOpen }"
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

          <div
            v-if="isLanguageOpen"
            class="absolute right-1/2 top-full z-50 mt-2 w-32 translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg"
          >
            <button
              v-for="option in languageOptions"
              :key="option.locale"
              type="button"
              class="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition"
              :class="locale === option.locale ? 'bg-[#212121] text-white' : 'text-gray-700 hover:bg-[#fafafa] hover:text-gray-900'"
              :aria-label="option.label"
              @click="switchLanguage(option.locale)"
            >
              <span class="inline-flex h-4 w-4 items-center justify-center text-sm leading-none" aria-hidden="true">{{ option.flag }}</span>
              <span>{{ option.shortLabel }}</span>
            </button>
          </div>
        </div>

        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-2 text-center text-sm font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
        >
          {{ copy.cta }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3 md:hidden">
        <div class="relative">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            :aria-label="copy.languageMenu"
            @click="isLanguageOpen = !isLanguageOpen"
          >
            <span class="inline-flex h-4 w-4 items-center justify-center text-sm leading-none" aria-hidden="true">
              {{ activeLanguage.flag }}
            </span>
            <span>{{ activeLanguage.shortLabel }}</span>
            <svg
              class="h-4 w-4 transition"
              :class="{ 'rotate-180': isLanguageOpen }"
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

          <div
            v-if="isLanguageOpen"
            class="absolute right-1/2 top-full z-50 mt-2 w-32 translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg"
          >
            <button
              v-for="option in languageOptions"
              :key="`mobile-${option.locale}`"
              type="button"
              class="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition"
              :class="locale === option.locale ? 'bg-[#212121] text-white' : 'text-gray-700 hover:bg-[#fafafa] hover:text-gray-900'"
              :aria-label="option.label"
              @click="switchLanguage(option.locale)"
            >
              <span class="inline-flex h-4 w-4 items-center justify-center text-sm leading-none" aria-hidden="true">{{ option.flag }}</span>
              <span>{{ option.shortLabel }}</span>
            </button>
          </div>
        </div>

        <button
          class="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span>{{ copy.menu }}</span>
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
        <template v-for="link in mobileLinks" :key="`mobile-${link.baseTo}`">
          <div
            v-if="link.disabled"
            class="cursor-not-allowed py-2 text-sm font-semibold text-gray-400"
            :class="link.isIndented ? 'pl-5' : ''"
          >
            {{ link.label }}
          </div>

          <NuxtLink
            v-else
            :to="link.to"
            class="py-2 text-sm font-semibold text-gray-700 transition hover:text-gray-900"
            :class="link.isIndented ? 'pl-5 text-gray-600' : ''"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </template>

        <NuxtLink
          :to="localePath('/contact')"
          class="mt-3 inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-2 text-center text-sm font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-[#facc15]"
          @click="isMenuOpen = false"
        >
          {{ copy.cta }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const { basePath, locale, localePath, switchLocalePath } = useSiteLocale();

const isMenuOpen = ref(false);
const isProductsOpen = ref(false);
const isServicesOpen = ref(false);
const isAboutOpen = ref(false);
const isLanguageOpen = ref(false);

const copy = computed(() =>
  locale.value === "en"
    ? {
        home: "Home",
        products: "Products",
        services: "Services",
        useCases: "Use Cases",
        knowledgeCenter: "Knowledge Center",
        roadmap: "Roadmap",
        about: "About AITJE",
        faq: "FAQ",
        contact: "Contact",
        menu: "Menu",
        cta: "Contact",
        languageMenu: "Show language menu",
        showProductMenu: "Show product menu",
        showServicesMenu: "Show services menu",
        showAboutMenu: "Show about menu",
        productMenuLabel: "Products",
        servicesMenuLabel: "Services",
        aboutMenuLabel: "About AITJE",
        dutch: "Switch to Dutch",
        english: "Switch to English",
      }
    : {
        home: "Home",
        products: "Producten",
        services: "Diensten",
        useCases: "Use Cases",
        knowledgeCenter: "Kenniscentrum",
        roadmap: "Roadmap",
        about: "Over AITJE",
        faq: "FAQ",
        contact: "Contact",
        menu: "Menu",
        cta: "Contact",
        languageMenu: "Toon taalmenu",
        showProductMenu: "Toon productmenu",
        showServicesMenu: "Toon dienstenmenu",
        showAboutMenu: "Toon over AITJE-menu",
        productMenuLabel: "Producten",
        servicesMenuLabel: "Diensten",
        aboutMenuLabel: "Over AITJE",
        dutch: "Schakel naar Nederlands",
        english: "Schakel naar Engels",
      },
);

const links = computed(() => [
  { label: copy.value.home, baseTo: "/", to: localePath("/") },
  { label: copy.value.products, baseTo: "/producten", to: localePath("/producten") },
  { label: copy.value.knowledgeCenter, baseTo: "/kenniscentrum", to: localePath("/kenniscentrum") },
  { label: copy.value.faq, baseTo: "/faq", to: localePath("/faq") },
]);

const desktopLeadingLinks = computed(() =>
  links.value.filter((link) => link.baseTo === "/"),
);

const desktopTrailingLinks = computed(() =>
  links.value.filter((link) => link.baseTo !== "/" && link.baseTo !== "/producten"),
);

const mobileLinks = computed(() => {
  const [home, products, ...rest] = links.value;
  return home && products
    ? [
        home,
        { label: copy.value.products, baseTo: "/producten", to: localePath("/producten") },
        ...productLinks.value
          .filter((link) => link.baseTo !== "/producten")
          .map((link) => ({ ...link, isIndented: true })),
        { label: copy.value.services, baseTo: "/diensten", to: localePath("/diensten") },
        { label: copy.value.useCases, baseTo: "/use-cases", to: localePath("/use-cases") },
        ...rest,
        { label: copy.value.about, baseTo: "/over-aitje", to: localePath("/over-aitje") },
        { label: copy.value.roadmap, baseTo: "/roadmap", to: localePath("/roadmap") },
      ]
    : links.value;
});

const serviceLinks = computed(() => [
  {
    label: copy.value.services,
    baseTo: "/diensten",
    to: localePath("/diensten"),
    description:
      locale.value === "en"
        ? "Overview of services and custom solutions."
        : "Overzicht van diensten en maatwerkoplossingen.",
  },
  {
    label: copy.value.useCases,
    baseTo: "/use-cases",
    to: localePath("/use-cases"),
    description:
      locale.value === "en"
        ? "Practical examples of where AITJE creates value."
        : "Praktische voorbeelden van waar AITJE waarde levert.",
  },
]);

const productLinks = computed(() => [
  {
    label: locale.value === "en" ? "All products" : "Alle producten",
    baseTo: "/producten",
    to: localePath("/producten"),
    description:
      locale.value === "en"
        ? "See the full product overview."
        : "Bekijk het complete productoverzicht.",
  },
  {
    label: "AITJE Assistent",
    baseTo: "/producten/aitje-assistent",
    to: localePath("/producten/aitje-assistent"),
    description:
      locale.value === "en"
        ? "Core product for local Edge AI."
        : "Kernproduct voor lokale Edge AI.",
  },
  {
    label: "AITJE Custom",
    baseTo: "/producten/aitje-custom",
    to: localePath("/producten/aitje-custom"),
    description:
      locale.value === "en"
        ? "For organizations where standard is not enough."
        : "Voor organisaties waar standaard niet genoeg is.",
  },
  {
    label: "AITJE Notulist",
    baseTo: "/producten/aitje-notulist",
    to: localePath("/producten/aitje-notulist"),
    disabled: true,
    description:
      locale.value === "en"
        ? "In development for recording and structured output."
        : "In ontwikkeling voor opname en gestructureerde output.",
  },
  {
    label: "AITJE Prepper",
    baseTo: "/producten/aitje-prepper",
    to: localePath("/producten/aitje-prepper"),
    disabled: true,
    description:
      locale.value === "en"
        ? "Offline knowledge and local LLM chat."
        : "Offline kennis en lokale LLM-chat.",
  },
  {
    label: "AITJE Manager",
    baseTo: "/producten/aitje-manager",
    to: localePath("/producten/aitje-manager"),
    disabled: true,
    description:
      locale.value === "en"
        ? "Planned for local agent management."
        : "Gepland voor lokaal agentbeheer.",
  },
]);

const aboutLinks = computed(() => [
  {
    label: copy.value.about,
    baseTo: "/over-aitje",
    to: localePath("/over-aitje"),
    description:
      locale.value === "en"
        ? "Background, direction and positioning of AITJE."
        : "Achtergrond, richting en positionering van AITJE.",
  },
  {
    label: copy.value.roadmap,
    baseTo: "/roadmap",
    to: localePath("/roadmap"),
    description:
      locale.value === "en"
        ? "See what is planned and what is in development."
        : "Bekijk wat gepland staat en in ontwikkeling is.",
  },
]);

const languageOptions = computed(() => [
  { locale: "nl" as const, label: copy.value.dutch, shortLabel: "NL", flag: "🇳🇱" },
  { locale: "en" as const, label: copy.value.english, shortLabel: "EN", flag: "🇬🇧" },
]);

const activeLanguage = computed(
  () => languageOptions.value.find((option) => option.locale === locale.value) ?? languageOptions.value[0],
);

const closeDesktopMenus = () => {
  isProductsOpen.value = false;
  isServicesOpen.value = false;
  isAboutOpen.value = false;
};

const toggleDesktopMenu = (menu: "products" | "services" | "about") => {
  const nextState = {
    products: menu === "products" ? !isProductsOpen.value : false,
    services: menu === "services" ? !isServicesOpen.value : false,
    about: menu === "about" ? !isAboutOpen.value : false,
  };

  isProductsOpen.value = nextState.products;
  isServicesOpen.value = nextState.services;
  isAboutOpen.value = nextState.about;
};

const isActive = (path: string) => {
  const currentPath = basePath.value;
  return currentPath === path || currentPath.startsWith(`${path}/`);
};

const switchLanguage = async (targetLocale: "nl" | "en") => {
  if (targetLocale === locale.value) return;
  closeDesktopMenus();
  isLanguageOpen.value = false;
  await navigateTo(switchLocalePath.value);
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement | null;
  if (!target) return;
  if (!target.closest("nav")) {
    closeDesktopMenus();
    isLanguageOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
