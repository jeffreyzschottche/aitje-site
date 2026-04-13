import { computed } from "vue";

type SiteLocale = "nl" | "en";

const EN_PREFIX = "/en";
const EN_ROUTE_MAP: Record<string, string> = {
  "/producten": "/products",
  "/diensten": "/services",
  "/kenniscentrum": "/knowledgecenter",
  "/over-aitje": "/about-aitje",
};

const toEnglishRoute = (path: string) => {
  for (const [nlPath, enPath] of Object.entries(EN_ROUTE_MAP)) {
    if (path === nlPath || path.startsWith(`${nlPath}/`)) {
      return `${enPath}${path.slice(nlPath.length)}`;
    }
  }

  return path;
};

const fromEnglishRoute = (path: string) => {
  for (const [nlPath, enPath] of Object.entries(EN_ROUTE_MAP)) {
    if (path === enPath || path.startsWith(`${enPath}/`)) {
      return `${nlPath}${path.slice(enPath.length)}`;
    }
  }

  return path;
};

const splitPathSuffix = (path: string) => {
  const match = path.match(/^([^?#]*)(.*)$/);
  return {
    pathname: match?.[1] ?? path,
    suffix: match?.[2] ?? "",
  };
};

const normalizePath = (path: string) => {
  const { pathname, suffix } = splitPathSuffix(path);
  if (!pathname) return "/";
  if (pathname === EN_PREFIX) return `${EN_PREFIX}${suffix}`;
  const normalized =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return `${normalized}${suffix}`;
};

const stripEnglishPrefix = (path: string) => {
  const normalized = normalizePath(path);
  const { pathname, suffix } = splitPathSuffix(normalized);

  if (pathname === EN_PREFIX) return `/${suffix}`;
  if (pathname.startsWith(`${EN_PREFIX}/`)) {
    return `${fromEnglishRoute(pathname.slice(EN_PREFIX.length) || "/")}${suffix}`;
  }

  return normalized;
};

const addLocalePrefix = (path: string, locale: SiteLocale) => {
  const normalized = normalizePath(path.startsWith("/") ? path : `/${path}`);
  const { pathname, suffix } = splitPathSuffix(normalized);

  if (locale === "nl") {
    return stripEnglishPrefix(normalized);
  }

  if (pathname === "/") return `${EN_PREFIX}${suffix}`;
  return `${EN_PREFIX}${toEnglishRoute(stripEnglishPrefix(normalized))}`;
};

export const useSiteLocale = () => {
  const route = useRoute();

  const locale = computed<SiteLocale>(() =>
    route.path === EN_PREFIX || route.path.startsWith(`${EN_PREFIX}/`)
      ? "en"
      : "nl",
  );

  const basePath = computed(() => stripEnglishPrefix(route.path));

  const localePath = (path: string, targetLocale: SiteLocale = locale.value) =>
    addLocalePrefix(path, targetLocale);

  const switchLocalePath = computed(() =>
    locale.value === "en"
      ? addLocalePrefix(route.fullPath, "nl")
      : addLocalePrefix(route.fullPath, "en"),
  );

  return {
    locale,
    basePath,
    isEnglish: computed(() => locale.value === "en"),
    isDutch: computed(() => locale.value === "nl"),
    localePath,
    switchLocalePath,
  };
};
