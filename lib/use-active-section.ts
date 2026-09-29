"use client";

import { useEffect, useState } from "react";

/**
 * Отслеживает, какая секция сейчас активна, для подсветки ссылки в шапке.
 * Активна последняя секция, чей верх уже поднялся выше линии на 45% высоты экрана;
 * у самого низа страницы — последняя секция (она может не дотянуться до линии).
 * Считается по положению прокрутки, поэтому работает и при переходе сразу на якорь.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sectionIds = key.split(",");
    let frame = 0;

    function update() {
      frame = 0;
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      if (elements.length === 0) return;

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(elements[elements.length - 1].id);
        return;
      }

      const line = window.innerHeight * 0.45;
      let current: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActiveId(current);
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key]);

  return activeId;
}
