import { profilePhoto } from "./site";
import type { Locale } from "@/lib/i18n";
import { homeEn } from "./home.en";

export const nav = {
  /** href — id секции на главной. «О себе» (#about) ведёт на самый верх главной. */
  links: [
    { label: "О себе", href: "#about" },
    { label: "Кейсы", href: "#cases" },
    { label: "Навыки", href: "#skills" },
  ],
  socials: [{ label: "Telegram", href: "https://t.me/ArtyushinaEvgenia", icon: "telegram" as const }],
};

export const hero = {
  name: "Евгения Артюшина",
  role: "Product дизайнер | UX/UI",
  bio: [
    "Профильное образование и широкий кругозор. Люблю пользовательский опыт, людей и технологии <3",
    "С интересом берусь за новые проекты, регулярно прохожу курсы для углубления в отдельные темы и слежу за индустрией — Яндекс Product Fest, UX CX Conf, Масштаб (НИУ ВШЭ).",
  ],
  photo: profilePhoto.src,
};

export type CaseStatus = "published" | "in-progress";

export const cases = {
  heading: "Кейсы",
  items: [
    {
      tags: ["B2B", "Desktop"],
      title: "Vecta — сервис для инженеров беспилотного такси",
      subtitle: "Мониторинг флота и обработка инцидентов",
      description:
        "Тестовое на стажировку в Т-Банк. B2B-концепт: как одному инженеру следить за десятками машин.",
      cover: "/home/vecta-card-cover.webp",
      year: "2026",
      status: "published" as CaseStatus,
      href: "/cases/vecta",
    },
    {
      tags: ["B2C", "Mobile"],
      title: "Tanuki — изменение состава блюда",
      subtitle: "Кастомизация ингредиентов в доставке еды",
      description:
        "Создание флоу кастомизации ролла: выбор ингредиентов, исключение предпочтений и аллергенов.",
      cover: "/home/tanuki-card-cover.webp",
      year: "2026",
      status: "published" as CaseStatus,
      href: "/cases/tanuki",
    },
    {
      tags: ["B2C", "Desktop"],
      title: "BusTime — мониторинг общественного транспорта",
      subtitle: "Просмотр автобусов и не только по всему миру",
      description: "Переработка навигации + немного визуала.",
      cover: "/home/bustime-card-cover.jpg",
      year: null,
      status: "in-progress" as CaseStatus,
      href: "/cases/bustime",
    },
  ],
};

export const skills = {
  heading: "Навыки, компетенции и инструменты",
  hard: {
    label: "hard",
    items: [
      "AI prototyping",
      "UX research",
      "Usability testing",
      "Продуктовое мышление",
      "Работа с ДС",
      "Адаптивная вёрстка",
    ],
  },
  soft: {
    label: "soft",
    items: [
      "Автономность",
      "Очень френдли",
      "Активная жизненная позиция",
      "Инициативность",
      "Люблю работу в команде",
      "Открыта к фидбеку",
    ],
  },
  tools: {
    label: "tools",
    items: [
      "Figma",
      "FigJam",
      "Pathway",
      "Claude Code",
      "Photoshop",
      "Illustrator",
      "CorelDraw",
      "Miro",
      "Antigravity",
    ],
  },
};

/** Почта: ссылка открывает черновик письма с темой и одновременно копирует адрес. */
export const email = {
  address: "evgenia_artyushina@mail.ru",
  subject: "Письмо из портфолио",
  copiedMessage: "Почта скопирована",
};

export const contactCta = {
  heading: "Давайте вместе делать что-то классное :)",
  subheading: "Напишите мне — отвечу в течение дня",
  links: [
    { label: "t.me/ArtyushinaEvgenia", href: "https://t.me/ArtyushinaEvgenia", icon: "telegram" as const },
    { label: email.address, href: `mailto:${email.address}`, icon: "mail" as const },
  ],
};

export const footer = {
  copyright: "© 2026 Евгения Артюшина",
  contactsLabel: "Контакты",
  telegram: "t.me/ArtyushinaEvgenia",
};

const homeRu = { nav, hero, cases, skills, email, contactCta, footer };
export type HomeContent = typeof homeRu;

/** Тексты главной по языкам; английская версия — в home.en.ts. */
export const home: Record<Locale, HomeContent> = { ru: homeRu, en: homeEn };
