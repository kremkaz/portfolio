"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { markGoingBack, markRevealed, trackPath } from "@/lib/first-visit";

/**
 * Общее поведение при переходах между страницами:
 * — после первой открытой страницы анимации появления больше не проигрываются;
 * — при смене страницы (в том числе кнопкой «назад» браузера) — сразу наверх,
 *   без прокрутки; переходы на якорь (/#skills) браузер обрабатывает сам.
 */
export function RouteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    markRevealed();
    window.history.scrollRestoration = "manual";
    const onPopState = () => markGoingBack();
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    trackPath(pathname);
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
