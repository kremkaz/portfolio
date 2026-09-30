/**
 * Два языка сайта. Русский живёт на исходных адресах (/, /cases/vecta),
 * английский — под префиксом /en (/en, /en/cases/vecta).
 */
export type Locale = "ru" | "en";

const EN_PREFIX = "/en";

function trimTrailingSlash(pathname: string) {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

/** Язык страницы по её адресу (без basePath — как его отдаёт usePathname). */
export function getLocale(pathname: string): Locale {
  const path = trimTrailingSlash(pathname);
  return path === EN_PREFIX || path.startsWith(`${EN_PREFIX}/`) ? "en" : "ru";
}

/** Адрес без языкового префикса: "/en/cases/vecta" → "/cases/vecta", "/en" → "/". */
export function stripLocale(pathname: string) {
  const path = trimTrailingSlash(pathname);
  if (path === EN_PREFIX) return "/";
  return path.startsWith(`${EN_PREFIX}/`) ? path.slice(EN_PREFIX.length) : path;
}

/** Адрес для нужного языка: "/cases/vecta" → "/en/cases/vecta", "/#cases" → "/en#cases". */
export function localizePath(locale: Locale, path: string) {
  if (locale === "ru") return path;
  if (path === "/") return EN_PREFIX;
  if (path.startsWith("/#")) return `${EN_PREFIX}${path.slice(1)}`;
  return `${EN_PREFIX}${path}`;
}

/** Главная страница на языке страницы. */
export function homePath(locale: Locale) {
  return localizePath(locale, "/");
}

/** Главная ли это страница (на любом языке). */
export function isHomePath(pathname: string) {
  return stripLocale(pathname) === "/";
}
