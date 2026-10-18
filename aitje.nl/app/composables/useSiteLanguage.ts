import { dutchPath, localizedPath, localeForPath, type SiteLocale } from "#shared/siteLocales";
import { translateText, translateContent } from "#shared/siteTranslations";

export function useSiteLanguage() {
  const route = useRoute();
  const locale = computed(() => localeForPath(route.path));
  const numberLocale = computed(() => locale.value === "en" ? "en-GB" : "nl-NL");
  const basePath = computed(() => dutchPath(route.path));
  const text = <T>(value: T) => translateText(value, locale.value);
  const content = <T>(value: T) => translateContent(value, locale.value);
  const localePath = <T>(path: T, language: SiteLocale = locale.value) => localizedPath(path, language);
  const switchLanguagePath = (language: SiteLocale) => ({ path: localizedPath(route.path, language), query: route.query, hash: route.hash });
  return { locale, numberLocale, basePath, text, content, localePath, switchLanguagePath };
}
