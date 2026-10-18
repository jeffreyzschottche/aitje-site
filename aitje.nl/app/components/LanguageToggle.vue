<script setup lang="ts">
import type { SiteLocale } from "#shared/siteLocales";
const { locale, switchLanguagePath } = useSiteLanguage();
const languages: { locale: SiteLocale; flag: string; label: string }[] = [
  { locale: "nl", flag: "🇳🇱", label: "Nederlands" },
  { locale: "en", flag: "🇬🇧", label: "English" },
];
const currentLanguage = computed(() => languages.find((language) => language.locale === locale.value)!);
const root = ref<HTMLElement>();
const trigger = ref<HTMLButtonElement>();
const open = ref(false);
const panelId = `language-options-${useId()}`;
const mounted = ref(false);
const closeAndFocus = () => {
  open.value = false;
  trigger.value?.focus();
};
const openAndFocus = async () => {
  open.value = true;
  await nextTick();
  root.value?.querySelector<HTMLAnchorElement>(".language-options a")?.focus();
};
const onOutsideClick = (event: PointerEvent) => {
  if (!root.value?.contains(event.target as Node)) open.value = false;
};
const onFocusOut = (event: FocusEvent) => {
  if (!root.value?.contains(event.relatedTarget as Node | null)) open.value = false;
};
onMounted(() => {
  mounted.value = true;
  document.addEventListener("pointerdown", onOutsideClick);
});
onBeforeUnmount(() => document.removeEventListener("pointerdown", onOutsideClick));
watch(locale, () => { open.value = false; });
// The server cannot see URL fragments. Add them after hydration so the DOM
// links and router destinations agree when opening a page with an anchor.
const destination = (language: SiteLocale) => ({
  ...switchLanguagePath(language),
  hash: mounted.value ? switchLanguagePath(language).hash : "",
});
</script>

<template>
  <div ref="root" class="language-toggle" @keydown.esc.prevent.stop="closeAndFocus" @focusout="onFocusOut">
    <button
      ref="trigger"
      type="button"
      class="language-trigger"
      aria-label="Taal kiezen"
      :title="currentLanguage.label"
      :aria-expanded="open"
      :aria-controls="panelId"
      @click="open = !open"
      @keydown.down.prevent="openAndFocus"
    >
      <span class="language-flag" aria-hidden="true">{{ currentLanguage.flag }}</span>
      <AppIcon name="chevron-down" :size="12" class="language-chevron" :class="{ 'is-open': open }" />
    </button>
    <Transition name="language-dropdown">
      <nav v-if="open" :id="panelId" class="language-options" aria-label="Taal kiezen">
        <NuxtLink
          v-for="language in languages"
          :key="language.locale"
          data-language-switch
          :to="destination(language.locale)"
          :lang="language.locale"
          :aria-current="locale === language.locale ? 'true' : undefined"
          :class="{ active: locale === language.locale }"
          @click="open = false"
        >
          <span class="language-flag" aria-hidden="true">{{ language.flag }}</span>
          <span v-text="language.label" />
        </NuxtLink>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
.language-toggle { position: relative; display: inline-flex; flex: none; }
.language-trigger { display: flex; align-items: center; justify-content: center; gap: 7px; min-width: 54px; height: 34px; padding: 0 10px; border: 1px solid var(--color-line); border-radius: 999px; background: rgb(255 255 255 / .8); color: var(--color-muted); cursor: pointer; transition: border-color .2s, background-color .2s; }
.language-trigger:hover, .language-trigger[aria-expanded="true"] { border-color: rgb(0 0 0 / .2); background: white; }
.language-flag { font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif; font-size: 17px; line-height: 1; }
.language-chevron { transition: transform .2s; }
.language-chevron.is-open { transform: rotate(180deg); }
.language-options { position: absolute; top: calc(100% + 8px); right: 0; z-index: 10; min-width: 146px; padding: 5px; border: 1px solid var(--color-line); border-radius: 14px; background: white; box-shadow: 0 8px 24px rgb(0 0 0 / .12); }
.language-options a { display: flex; align-items: center; gap: 9px; min-height: 34px; padding: 7px 10px; border-radius: 9px; font-size: .75rem; font-weight: 500; color: var(--color-ink); transition: background-color .15s, color .15s; }
.language-options a + a { margin-top: 3px; }
.language-options a:hover { background: var(--color-sand); }
.language-options a.active { background: var(--color-ink); color: white; }
.language-trigger:focus-visible, .language-options a:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 3px; }
.language-dropdown-enter-active, .language-dropdown-leave-active { transition: opacity .15s, transform .15s; }
.language-dropdown-enter-from, .language-dropdown-leave-to { opacity: 0; transform: translateY(-4px); }
@media (prefers-reduced-motion: reduce) { .language-chevron, .language-dropdown-enter-active, .language-dropdown-leave-active { transition: none; } }
</style>
