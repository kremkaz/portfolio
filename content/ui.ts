import type { Locale } from "@/lib/i18n";

/** Короткие подписи интерфейса, которые не относятся к конкретному кейсу. */
const ru = {
  viewCases: "Смотреть кейсы",
  openCase: "Открыть кейс",
  inProgress: "В разработке",
  soon: "soon",
  nextCase: "Следующий кейс",
  backToPortfolio: "Вернуться к портфолио",
  moreScreens: "Больше экранов",
  close: "Закрыть",
  prevScreenshot: "Предыдущий скриншот",
  nextScreenshot: "Следующий скриншот",
  emailButton: "Написать на почту",
  /** Кнопка переключения языка: подпись — язык, на который переключаемся. */
  languageSwitch: { label: "EN", ariaLabel: "Switch to English" },
};

const en: typeof ru = {
  viewCases: "View my work",
  openCase: "View case",
  inProgress: "In progress",
  soon: "soon",
  nextCase: "Next case",
  backToPortfolio: "Back to portfolio",
  moreScreens: "More screens",
  close: "Close",
  prevScreenshot: "Previous screenshot",
  nextScreenshot: "Next screenshot",
  emailButton: "Send an email",
  languageSwitch: { label: "RU", ariaLabel: "Переключить на русский" },
};

export const ui: Record<Locale, typeof ru> = { ru, en };
