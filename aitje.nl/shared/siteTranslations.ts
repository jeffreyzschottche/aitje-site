import type { SiteLocale } from "./siteLocales";

let dictionary: Record<string, string> = {};
const normalize = (text: string) => text.replace(/\s+/g, " ").trim();
const escapeRegex = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const englishNumbers = (text: string) => {
  const convert = (number: string) => number.replaceAll(".", ",").replace(/,(\d{1,2})$/, ".$1");
  // Translated copy keeps the exact Dutch price values; show English separators.
  return text.replace(/\b(?:\d{1,3}(?:\.\d{3})+(?:,\d{1,2})?|\d+,\d{1,2})(?!\d)\b/g, convert);
};
let patterns: { pattern: RegExp; target: string }[] = [];
let loading: Promise<void> | undefined;

export function loadEnglishTranslations() {
  loading ??= import("./translations/en.json").then(({ default: english }) => {
    dictionary = english;
    patterns = Object.entries(dictionary)
      // Adjacent placeholders have no boundary and cannot be matched reliably.
      .filter(([source]) => /\{\{\d+\}\}/.test(source) && !/\}\}\{\{/.test(source))
      .sort(([a], [b]) => b.length - a.length)
      .map(([source, target]) => ({
        pattern: new RegExp(`^${source.split(/\{\{\d+\}\}/).map(escapeRegex).join("(.*?)")}$`),
        target,
      }));
  });
  return loading;
}

export function translateText<T>(value: T, locale: SiteLocale): T {
  if (locale === "nl" || typeof value !== "string" || !value.trim()) return value;
  const source = normalize(value);
  let translated = dictionary[source];
  if (!translated) for (const entry of patterns) {
    const match = source.match(entry.pattern);
    if (!match) continue;
    translated = entry.target.replace(/\{\{(\d+)\}\}/g, (_, index) => String(translateText(match[Number(index) + 1] ?? "", locale)));
    break;
  }
  if (!translated && /: | \| /.test(source)) {
    const parts = source.split(/(: | \| )/);
    const result = parts.map((part) => translateText(part, locale)).join("");
    if (result !== source) translated = result;
  }
  return `${value.match(/^\s*/)?.[0] ?? ""}${englishNumbers(translated || source)}${value.match(/\s*$/)?.[0] ?? ""}` as T;
}

export function translateContent<T>(value: T, locale: SiteLocale): T {
  if (typeof value === "string") return translateText(value, locale);
  if (Array.isArray(value)) return value.map((item) => translateContent(item, locale)) as T;
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateContent(item, locale)])) as T;
  return value;
}
