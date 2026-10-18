import { localeForPath } from "#shared/siteLocales";
import { loadEnglishTranslations } from "#shared/siteTranslations";

export default defineNuxtRouteMiddleware(async (to) => {
  if (localeForPath(to.path) === "en") await loadEnglishTranslations();
});
