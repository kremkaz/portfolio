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
  src: "/home/evgenia-artyushina.jpg",
  width: 640,
  height: 640,
};

/** Абсолютная ссылка на фото — для превью ссылок (мессенджерам нужен полный адрес). */
export const profilePhotoUrl = `${siteOrigin}${asset(profilePhoto.src)}`;
