<script setup lang="ts">
// Header: full width at the top, compact centred pill after scrolling (visuals/components.md).
import { availableProducts, plannedProducts } from "@/content/products";
import { services, partnerService } from "@/content/services";
import { mainCta } from "@/content/site";

const route = useRoute();
const scrolled = ref(false);
const mobileOpen = ref(false);
const openMenu = ref<string | null>(null);

type MenuLink = {
  label: string;
  to: string;
  text?: string;
  icon?: string;
  muted?: boolean;
};
type Menu = {
  key: string;
  label: string;
  to: string;
  columns?: { title?: string; links: MenuLink[] }[];
};

const menus: Menu[] = [
  {
    key: "producten",
    label: "Producten",
    to: "/producten",
    columns: [
      {
        links: availableProducts.map((p) => ({
          label: p.name,
          to: `/producten/${p.slug}`,
          text: p.tagline,
          icon: p.icon,
        })),
      },
      {
        title: "In ontwikkeling",
        links: plannedProducts.map((p) => ({
          label: p.name,
          to: `/producten/${p.slug}`,
          muted: true,
        })),
      },
    ],
  },
  {
    key: "diensten",
    label: "Diensten",
    to: "/diensten",
    columns: [
      {
        links: services.map((s) => ({
          label: s.name,
          to: `/diensten/${s.slug}`,
          icon: s.icon,
        })),
      },
      {
        title: "Samenwerken",
        links: [
          {
            label: partnerService.name,
            to: `/diensten/${partnerService.slug}`,
            text: partnerService.short,
            icon: partnerService.icon,
          },
        ],
      },
    ],
  },
  { key: "cases", label: "Cases", to: "/cases" },
  { key: "kennis", label: "Kenniscentrum", to: "/kenniscentrum" },
  {
    key: "over",
    label: "Over AITJE",
    to: "/over-aitje",
    columns: [
      {
        links: [
          {
            label: "Over AITJE",
            to: "/over-aitje",
            text: "Wie AITJE is en hoe samenwerken werkt.",
            icon: "users",
          },
          {
            label: "Visie",
            to: "/visie",
            text: "Toegang tot AI die van jou blijft.",
            icon: "compass",
          },
          {
            label: "Veelgestelde vragen",
            to: "/faq",
            text: "Antwoorden over AITJE en het aanbod.",
            icon: "message",
          },
        ],
      },
    ],
  },
];

// Unpublished products leave no empty dropdown columns or headings.
for (const menu of menus) {
  const columns = menu.columns?.filter((column) => column.links.length > 0);
  menu.columns = columns?.length ? columns : undefined;
}

const isActive = (to: string) =>
  route.path === to || route.path.startsWith(`${to}/`);

const onScroll = () => {
  scrolled.value = window.scrollY > 70;
};

let closeTimer: ReturnType<typeof setTimeout> | undefined;
const open = (key: string) => {
  clearTimeout(closeTimer);
  openMenu.value = key;
};
const scheduleClose = () => {
  closeTimer = setTimeout(() => (openMenu.value = null), 120);
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  clearTimeout(closeTimer);
  document.documentElement.style.overflow = "";
});

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false;
    openMenu.value = null;
  },
);

watch(mobileOpen, (value) => {
  if (import.meta.client)
    document.documentElement.style.overflow = value ? "hidden" : "";
});
</script>

<template>
  <header
    @keydown.esc="
      openMenu = null;
      mobileOpen = false;
    "
    class="fixed inset-x-0 top-0 z-50 flex justify-center transition-[padding] duration-300"
    :class="scrolled ? 'pt-3' : 'pt-0'"
  >
    <div
      class="flex items-center justify-between gap-4 transition-all duration-300 ease-out"
      :class="
        scrolled
          ? 'mx-3 h-14 w-full max-w-6xl rounded-full border border-line/80 bg-surface/85 px-3 pl-5 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.25)] backdrop-blur-xl md:w-[88%]'
          : 'h-20 w-full border-b border-line/60 bg-page/95 px-5 md:px-8'
      "
    >
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center"
        aria-label="AITJE, naar de homepage"
      >
        <img
          src="/img/logo-dark.png"
          alt="AITJE"
          width="588"
          height="241"
          :class="scrolled ? 'h-7 w-auto' : 'h-8 w-auto'"
        />
      </NuxtLink>

      <nav class="hidden lg:block" aria-label="Hoofdnavigatie">
        <ul class="flex items-center gap-1">
          <li
            v-for="menu in menus"
            :key="menu.key"
            class="relative"
            @mouseenter="menu.columns && open(menu.key)"
            @mouseleave="menu.columns && scheduleClose()"
          >
            <NuxtLink
              :to="menu.to"
              class="flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.93rem] font-medium transition-colors hover:bg-ink/5"
              :class="isActive(menu.to) ? 'text-ink' : 'text-ink/75'"
              :aria-expanded="menu.columns ? openMenu === menu.key : undefined"
              @focus="menu.columns && open(menu.key)"
            >
              {{ menu.label }}
              <AppIcon
                v-if="menu.columns"
                name="chevron-down"
                :size="15"
                class="transition-transform"
                :class="openMenu === menu.key ? 'rotate-180' : ''"
              />
            </NuxtLink>

            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              leave-active-class="transition duration-100 ease-in"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="menu.columns && openMenu === menu.key"
                class="absolute top-full left-1/2 z-10 -translate-x-1/2 pt-3"
                @mouseenter="open(menu.key)"
                @mouseleave="scheduleClose()"
                @focusout="scheduleClose()"
                @focusin="open(menu.key)"
              >
                <div
                  class="grid gap-6 rounded-3xl border border-line bg-surface p-5 shadow-lift"
                  :class="
                    menu.columns.length > 1
                      ? 'w-[40rem] grid-cols-[1.4fr_1fr]'
                      : 'w-[22rem]'
                  "
                >
                  <div v-for="(column, ci) in menu.columns" :key="ci">
                    <p v-if="column.title" class="eyebrow mb-2 px-3 text-muted">
                      {{ column.title }}
                    </p>
                    <ul class="space-y-0.5">
                      <li v-for="link in column.links" :key="link.to">
                        <NuxtLink
                          :to="link.to"
                          class="flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-sand"
                        >
                          <span
                            v-if="link.icon"
                            class="grid size-8 shrink-0 place-items-center rounded-xl bg-brand text-ink"
                          >
                            <AppIcon :name="link.icon" :size="17" />
                          </span>
                          <span>
                            <span
                              class="block text-sm font-semibold"
                              :class="link.muted ? 'text-muted' : 'text-ink'"
                              >{{ link.label }}</span
                            >
                            <span
                              v-if="link.text"
                              class="mt-0.5 block text-[0.8rem] leading-snug text-muted"
                              >{{ link.text }}</span
                            >
                          </span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <UiButton
          :to="mainCta.to"
          size="sm"
          class="header-cta hidden sm:inline-flex"
          >{{ mainCta.label }}</UiButton
        >
        <button
          type="button"
          class="grid size-10 place-items-center rounded-full hover:bg-ink/5 lg:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          :aria-label="mobileOpen ? 'Menu sluiten' : 'Menu openen'"
          @click="mobileOpen = !mobileOpen"
        >
          <AppIcon :name="mobileOpen ? 'x' : 'menu'" :size="22" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="fixed inset-0 top-0 -z-10 overflow-y-auto bg-page px-5 pt-24 pb-10 lg:hidden"
      >
        <nav aria-label="Mobiele navigatie">
          <ul class="divide-y divide-line border-y border-line">
            <li v-for="menu in menus" :key="menu.key">
              <details v-if="menu.columns" class="group">
                <summary
                  class="flex cursor-pointer list-none items-center justify-between py-4 font-heading text-xl font-semibold"
                >
                  {{ menu.label }}
                  <AppIcon
                    name="chevron-down"
                    :size="20"
                    class="transition-transform group-open:rotate-180"
                  />
                </summary>
                <ul class="space-y-1 pb-4">
                  <li>
                    <NuxtLink
                      :to="menu.to"
                      class="block py-1.5 font-semibold text-brand-ink"
                      >Bekijk alles</NuxtLink
                    >
                  </li>
                  <template v-for="(column, ci) in menu.columns" :key="ci">
                    <li v-for="link in column.links" :key="link.to">
                      <NuxtLink
                        :to="link.to"
                        class="block py-1.5"
                        :class="link.muted ? 'text-muted' : 'text-ink'"
                      >
                        {{ link.label }}
                        <span v-if="link.muted" class="ml-1 text-xs"
                          >(in ontwikkeling)</span
                        >
                      </NuxtLink>
                    </li>
                  </template>
                </ul>
              </details>
              <NuxtLink
                v-else
                :to="menu.to"
                class="block py-4 font-heading text-xl font-semibold"
                >{{ menu.label }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <UiButton :to="mainCta.to" size="lg" arrow class="mt-8 w-full">{{
          mainCta.label
        }}</UiButton>
      </div>
    </Transition>
  </header>
</template>
