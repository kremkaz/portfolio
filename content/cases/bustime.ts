import type { Locale } from "@/lib/i18n";

/** Кейс в работе: пока есть только заглушка страницы. */
const ru = {
  title: "BusTime — мониторинг общественного транспорта",
  subtitle: "Просмотр автобусов и не только по всему миру",
  status: "Soon",
  backLabel: "Вернуться к портфолио",
  backHref: "/#cases",
};

const en: typeof ru = {
  title: "BusTime — public transport tracking",
  subtitle: "Tracking buses and more, anywhere in the world",
  status: "Soon",
  backLabel: "Back to portfolio",
  backHref: "/en#cases",
};

export const bustime: Record<Locale, typeof ru> = { ru, en };
