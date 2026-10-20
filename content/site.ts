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
 * Квадратный кадр по лицу из того же фото — для маленьких иконок: значок вкладки,
 * иконка на iPhone и превью ссылки в мессенджерах (там картинка маленькая).
 * При замене фото вырезать новый квадрат и поменять src здесь.
 */
export const profileIcon = {
  src: "/home/evgenia-artyushina-portrait-face.jpg",
  width: 580,
  height: 580,
};

/** Абсолютная ссылка на иконку — для превью ссылок (мессенджерам нужен полный адрес). */
export const profileIconUrl = `${siteOrigin}${asset(profileIcon.src)}`;
