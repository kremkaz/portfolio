import { asset } from "@/lib/asset";

/** Адрес опубликованного сайта (без префикса /portfolio — он добавляется через asset). */
export const siteOrigin = "https://kremkaz.github.io";

/**
 * Фото Евгении — один источник для всего сайта: фото на главной, превью ссылки
 * в мессенджерах (og:image) и значок во вкладке браузера.
 *
 * Как заменить: положить новый файл в public/home/ и поменять здесь src (и размеры).
 * Лучше давать новому файлу новое имя — тогда браузеры и мессенджеры не покажут
 * старую картинку из кэша.
 */
export const profilePhoto = {
  src: "/home/evgenia-artyushina-portrait.jpg",
  width: 700,
  height: 933,
};

/**
 * Квадратный кадр по лицу из того же фото — для маленьких иконок: значок вкладки
 * и иконка на iPhone.
 * При замене фото вырезать новый квадрат и поменять src здесь.
 */
export const profileIcon = {
  src: "/home/evgenia-artyushina-portrait-face.jpg",
  width: 580,
  height: 580,
};

/**
 * Превью ссылки в мессенджерах — небольшой квадрат 480×480: Telegram показывает его
 * маленькой миниатюрой справа. Внутри — фото целиком, как на главной, по бокам — его же
 * размытый фон. При замене фото пересобрать этот файл.
 */
export const profilePreview = {
  src: "/home/evgenia-artyushina-portrait-preview.jpg",
  width: 480,
  height: 480,
};

export const profilePreviewUrl = `${siteOrigin}${asset(profilePreview.src)}`;
