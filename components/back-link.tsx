"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { getBackTarget, markGoingBack } from "@/lib/first-visit";

/**
 * Кнопка «Назад»: ведёт на предыдущую страницу сайта и сразу наверх.
 * Если на сайт зашли по прямой ссылке — на fallbackHref (главную).
 */
export function BackLink({
  fallbackHref,
  className,
  children,
}: {
  fallbackHref: string;
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();

  return (
    <Link
      href={fallbackHref}
      className={className}
      onClick={(e) => {
        const target = getBackTarget();
        if (!target) return;
        e.preventDefault();
        markGoingBack();
        router.push(target);
      }}
    >
      {children}
    </Link>
  );
}
