import { loadEnglishTranslations } from "#shared/siteTranslations";

export default defineNuxtPlugin(async () => {
  const { text, localePath, locale } = useSiteLanguage();
  if (locale.value === "en") await loadEnglishTranslations();
  useHead(() => ({ htmlAttrs: { lang: locale.value } }));
  return { provide: { text, localePath } };
});
