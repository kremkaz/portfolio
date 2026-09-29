"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { nav } from "@/content/home";
import { useActiveSection } from "@/lib/use-active-section";
import { asset } from "@/lib/asset";

const socialIcons = {
  telegram: "/home/icon-telegram-nav.svg",
} as const;

export function SiteHeader() {
  const sectionIds = nav.links.map((link) => link.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);
  const isHome = usePathname() === "/";

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-[1142px] items-center justify-between gap-3 rounded-full border border-black/[0.04] bg-white/80 py-2 pr-2 pl-5 shadow-[0_8px_30px_-12px_rgba(0,15,220,0.15)] backdrop-blur-md sm:top-6 sm:pl-6"
    >
      <nav className="flex min-w-0 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {nav.links.map((link) => {
          const id = link.href.replace("#", "");
          const isActive = activeId === id;
          const isTop = id === "about";
          // На главной — якорь на секцию, со страниц кейсов — переход на главную к нужной секции.
          const href = isHome ? link.href : isTop ? "/" : `/${link.href}`;
          return (
            <Link
              key={link.href}
              href={href}
              onClick={(e) => {
                if (isHome && isTop) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  history.replaceState(history.state, "", window.location.pathname);
                }
              }}
              className="relative shrink-0 px-3 py-2 text-sm font-medium text-[#5C5C67] transition-colors hover:text-[#111212]"
            >
              <span className={isActive ? "relative z-10 text-primary" : "relative z-10"}>
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
        {nav.socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            aria-label={social.label}
            className="flex size-10 items-center justify-center rounded-full bg-[#F7F7F9] transition-colors hover:bg-primary/[0.08] sm:size-11"
          >
            <img
              src={asset(socialIcons[social.icon])}
              alt=""
              width={32}
              height={32}
              className="size-4.5 sm:size-5"
            />
          </a>
        ))}
      </div>
    </motion.header>
  );
}
