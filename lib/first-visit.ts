"use client";

import { useState } from "react";

/**
 * Анимации появления проигрываются только при первом заходе на сайт (в рамках вкладки).
 * После первой открытой страницы контент на остальных страницах — и после перезагрузки —
 * сразу стоит на месте. Флаг ставит RouteEffects после первой отрисовки.
 */
const STORAGE_KEY = "portfolio:revealed";
let revealedThisLoad = false;

function hasRevealed() {
  if (typeof window === "undefined") return false;
  if (revealedThisLoad) return true;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function markRevealed() {
  revealedThisLoad = true;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // sessionStorage может быть недоступен (приватный режим) — тогда хватит флага в памяти.
  }
}

/**
 * true — анимировать появление. Значение фиксируется при монтировании блока,
 * чтобы уже показанный блок не «перещёлкивался» при повторных рендерах.
 */
export function useAnimateReveal() {
  const [animate] = useState(() => !hasRevealed());
  return animate;
}

/**
 * История переходов внутри сайта — для кнопки «Назад»: она ведёт на предыдущую
 * страницу и сразу наверх. Пусто — на сайт зашли по прямой ссылке.
 */
const pathHistory: string[] = [];
let goingBack = false;

/** Вызывается при каждой смене страницы. */
export function trackPath(path: string) {
  if (goingBack) {
    goingBack = false;
    pathHistory.pop();
    if (pathHistory.at(-1) !== path) pathHistory.push(path);
    return;
  }
  if (pathHistory.at(-1) !== path) pathHistory.push(path);
}

/** Следующий переход — возврат назад (кнопкой «Назад» на сайте или в браузере). */
export function markGoingBack() {
  goingBack = true;
}

export function getBackTarget() {
  return pathHistory.length > 1 ? pathHistory[pathHistory.length - 2] : null;
}
