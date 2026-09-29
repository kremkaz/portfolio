/**
 * Префикс сайта на GitHub Pages (например, "/portfolio" для kremkaz.github.io/portfolio).
 * Подставляется при сборке в GitHub Actions; локально пустой.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Путь к файлу из /public с учётом basePath — next/image и <img> сами его не добавляют. */
export function asset(path: string) {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
