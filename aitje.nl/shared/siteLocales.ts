import { priceListPaths } from "./pricelists";

export type SiteLocale = "nl" | "en";
const sections: Record<string, string> = {
  producten: "products", diensten: "services", cases: "cases",
  kenniscentrum: "knowledge", "over-aitje": "about-aitje", visie: "vision", faq: "faq", contact: "contact",
};
const dutchSections = Object.fromEntries(Object.entries(sections).map(([nl, en]) => [en, nl]));

export const localeForPath = (path: string): SiteLocale => /^\/en(?:\/|$)/.test(path) ? "en" : "nl";

export function dutchPath(path: string) {
  if (localeForPath(path) !== "en") return path;
  const base = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return base.replace(/^\/([^/?#]+)/, (match, section: string) => dutchSections[section] ? `/${dutchSections[section]}` : match);
}

export function englishPath(path: string) {
  const base = dutchPath(path);
  if (base === "/") return "/en";
  return `/en${base.replace(/^\/([^/?#]+)/, (match, section: string) => sections[section] ? `/${sections[section]}` : match)}`;
}

export function localizedPath<T>(destination: T, locale: SiteLocale): T {
  if (typeof destination === "object" && destination !== null && "path" in destination && typeof destination.path === "string") {
    return { ...destination, path: localizedPath(destination.path, locale) };
  }
  if (typeof destination !== "string" || !destination.startsWith("/") || destination.startsWith("//")) return destination;
  const [path, ...suffix] = destination.split(/(?=[?#])/);
  if (Object.values(priceListPaths).some(pdf => pdf === path)) {
    return `${priceListPaths[locale]}${suffix.join("")}` as T;
  }
  const base = dutchPath(path!);
  // Assets and API endpoints are shared; only page links change language.
  if (base !== "/" && !sections[base.split("/")[1]!]) return destination;
  return `${locale === "en" ? englishPath(base) : base}${suffix.join("")}` as T;
}
