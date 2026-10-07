import type { Locale } from "@/lib/i18n";
import { homeEn } from "./home.en";

export const nav = {
  /** href — id секции на главной. «О себе» (#about) ведёт на самый верх главной. */
  links: [
    { label: "О себе", href: "#about" },
    { label: "Кейсы", href: "#cases" },
    { label: "Навыки", href: "#skills" },
  ],
  socials: [{ label: "Telegram", href: "https://t.me/kremka_zzz", icon: "telegram" as const }],
};

export const hero = {
  name: "Евгения Артюшина",
  role: "Product дизайнер | UX/UI",
  bio: [
    "Профильное образование и широкий кругозор. Люблю пользовательский опыт, людей и технологии <3",
    "С интересом берусь за новые проекты, регулярно прохожу курсы для углубления в отдельные темы и слежу за индустрией.",
  ],
  photo: "/home/hero-photo-autumn.jpg",
};

export type CaseStatus = "published" | "in-progress";

export const cases = {
  heading: "Кейсы",
  items: [
    {
      tags: ["B2B", "Desktop"],
      title: "Концепт инженерного продукта",
      subtitle: "Vecta — B2B для инженеров беспилотного такси",
      description:
        "Система мониторинга флота и обработки инцидентов. Тестовое на стажировку в Т-банк.",
      cover: "/home/case-cover-vecta.jpg",
      year: "2026",
      status: "published" as CaseStatus,
      href: "/cases/vecta",
    },
    {
      tags: ["B2C", "Mobile"],
      title: "Tanuki — конструктор блюда",
      subtitle: "Кастомизация ингредиентов в доставке еды",
      description:
        "Создание флоу кастомизации ролла: выбор ингредиентов, исключение предпочтений и аллергенов.",
      cover: "/home/case-cover-tanuki.jpg",
      year: "2026",
      status: "published" as CaseStatus,
      href: "/cases/tanuki",
    },
    {
      tags: ["B2C", "Desktop"],
      title: "Мониторинг общественного транспорта",
      subtitle: "BusTime — просмотр автобусов и не только по всему миру.",
      description: "Переработка навигации + немного визуала.",
      cover: "/home/case-cover-bustime.jpg",
      year: null,
      status: "in-progress" as CaseStatus,
      href: null,
    },
  ],
};

export const skills = {
  heading: "Навыки и компетенции",
  hard: {
    label: "hard",
    items: [
      "Figma",
      "AI prototyping",
      "UX research",
      "usability testing",
      "продуктовое мышление",
      "работа с ДС",
      "адаптивная вёрстка",
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
      "Photoshop",
      "Illustrator",
      "CorelDraw",
      "Miro",
      "Pathway",
      "Claude Code",
      "Antigravity",
    ],
  },
};

/** Почта: ссылка открывает черновик письма с темой и одновременно копирует адрес. */
export const email = {
  address: "kremkazzz@gmail.com",
  subject: "Письмо из портфолио",
  copiedMessage: "Почта скопирована",
};

export const contactCta = {
  heading: "Давайте вместе делать что-то классное :)",
  subheading: "Напишите мне — отвечу в течение дня",
  links: [
    { label: "t.me/kremka_zzz", href: "https://t.me/kremka_zzz", icon: "telegram" as const },
    { label: email.address, href: `mailto:${email.address}`, icon: "mail" as const },
  ],
};

export const footer = {
  copyright: "© 2026 Евгения Артюшина",
  contactsLabel: "Контакты",
  telegram: "t.me/kremka_zzz",
};

const homeRu = { nav, hero, cases, skills, email, contactCta, footer };
export type HomeContent = typeof homeRu;

/** Тексты главной по языкам; английская версия — в home.en.ts. */
export const home: Record<Locale, HomeContent> = { ru: homeRu, en: homeEn };
