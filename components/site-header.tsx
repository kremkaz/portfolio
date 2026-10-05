"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "motion/react";
import { home } from "@/content/home";
import { ui } from "@/content/ui";
import {
  getLocale,
  homePath,
  isHomePath,
  localizePath,
  stripLocale,
} from "@/lib/i18n";
import { useActiveSection } from "@/lib/use-active-section";
import { EmailLink } from "@/components/email-link";
import { Icon } from "@/components/icon";

/**
 * Где стоит кнопка языка: "separate" — отдельным кружком справа от шапки,
 * "inside" — внутри шапки рядом с Telegram, "responsive" — внутри на телефоне,
 * отдельно на компьютере. Все варианты рабочие, переключается здесь.
 */
const LANGUAGE_SWITCH_PLACEMENT = "inside" as
  "separate" | "inside" | "responsive";

// Классы видимости для каждого варианта: на телефоне (до sm) и с sm и шире.
const showInside = {
  separate: "hidden",
  inside: "flex",
  responsive: "flex sm:hidden",
}[LANGUAGE_SWITCH_PLACEMENT];
const showSeparate = {
  separate: "flex",
  inside: "hidden",
  responsive: "hidden sm:flex",
}[LANGUAGE_SWITCH_PLACEMENT];

const socialIcons = {
  telegram: "/home/icon-telegram-nav.svg",
} as const;

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocale(pathname);
  const { nav } = home[locale];
  const t = ui[locale];
  const sectionIds = nav.links.map((link) => link.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);
  const isHome = isHomePath(pathname);
  const otherLocale = locale === "ru" ? "en" : "ru";

  // Корневой layout общий для обоих языков, поэтому lang у <html> выставляем здесь.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function switchLanguage() {
    // Та же страница на другом языке; якорь (#cases и т.п.) сохраняем.
    const target =
      localizePath(otherLocale, stripLocale(pathname)) + window.location.hash;
    router.push(target);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-[1142px] items-center gap-2 sm:top-6 sm:gap-3"
    >
      <header className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-full border border-black/[0.04] bg-white/80 py-2 pr-2 pl-4 shadow-[0_8px_30px_-12px_rgba(0,81,112,0.15)] backdrop-blur-md sm:pl-6">
        <nav className="flex min-w-0 items-center gap-0.5 overflow-x-auto sm:gap-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {nav.links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            const isTop = id === "about";
            // На главной — якорь на секцию, со страниц кейсов — переход на главную к нужной секции.
            const homeHref = homePath(locale);
            const href = isHome
              ? link.href
              : isTop
                ? homeHref
                : `${homeHref}${link.href}`;
            return (
              <Link
                key={link.href}
                href={href}
                onClick={(e) => {
                  if (isHome && isTop) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    history.replaceState(
                      history.state,
                      "",
                      window.location.pathname,
                    );
                  }
                }}
                // «О себе» на телефоне не показываем: наверх и так легко вернуться прокруткой.
                className={`relative shrink-0 px-2 py-2 text-sm font-medium sm:px-3 text-[#5C5C67] transition-colors hover:text-[#111212] ${
                  isTop ? "max-sm:hidden" : ""
                }`}
              >
                <span
                  className={
                    isActive ? "relative z-10 text-primary" : "relative z-10"
                  }
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-primary/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={switchLanguage}
            aria-label={t.languageSwitch.ariaLabel}
            lang={otherLocale}
            className={`${showInside} size-10 items-center justify-center rounded-full bg-[#F7F7F9] text-xs font-semibold tracking-wide text-primary transition-colors hover:bg-background-section-hover hover:text-primary-hover sm:size-11 sm:text-sm`}
          >
            {t.languageSwitch.label}
          </button>
          {nav.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              aria-label={social.label}
              className="flex size-10 items-center justify-center rounded-full bg-[#F7F7F9] text-primary transition-colors hover:bg-background-section-hover hover:text-primary-hover sm:size-11"
            >
              <Icon src={socialIcons[social.icon]} className="size-4.5 sm:size-5" />
            </a>
          ))}
          <EmailLink
            locale={locale}
            ariaLabel={t.emailButton}
            className="flex size-10 items-center justify-center rounded-full bg-[#F7F7F9] text-primary transition-colors hover:bg-background-section-hover hover:text-primary-hover sm:size-11"
          >
            <Icon src="/home/icon-nav-social-2.svg" className="size-4.5 sm:size-5" />
          </EmailLink>
        </div>
      </header>
      {/* Отдельный «стеклянный» кружок той же высоты, что и шапка. */}
      <button
        type="button"
        onClick={switchLanguage}
        aria-label={t.languageSwitch.ariaLabel}
        lang={otherLocale}
        className={`${showSeparate} size-[58px] shrink-0 items-center justify-center rounded-full border border-black/[0.04] bg-white/80 text-sm font-semibold tracking-wide text-primary shadow-[0_8px_30px_-12px_rgba(0,81,112,0.15)] backdrop-blur-md transition-colors hover:bg-background-section-hover hover:text-primary-hover sm:size-[62px]`}
      >
        {t.languageSwitch.label}
      </button>
    </motion.div>
  );
}
