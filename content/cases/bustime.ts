import type { Locale } from "@/lib/i18n";

/** Кейс в работе: пока есть только заглушка страницы. */
const ru = {
  title: "BusTime — мониторинг общественного транспорта",
  subtitle: "Переделываю навигацию + немного визуала",
  status: "Soon",
  backLabel: "Вернуться к портфолио",
  backHref: "/#cases",
};

const en: typeof ru = {
  title: "BusTime — public transport tracking",
  subtitle: "Reworking the navigation, plus a little visual polish",
  status: "Soon",
  backLabel: "Back to portfolio",
  backHref: "/en#cases",
};

export const bustime: Record<Locale, typeof ru> = { ru, en };
