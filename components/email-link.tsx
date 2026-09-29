"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { email } from "@/content/home";

const TOAST_DURATION_MS = 2200;

/** Clipboard API, а если браузер его запрещает — старый способ через выделение текста. */
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    if (!ok) throw new Error("copy failed");
  }
}

/**
 * Ссылка на почту: открывает черновик письма с готовой темой и заодно копирует адрес
 * в буфер — на случай, если у посетителя не настроена почтовая программа.
 */
export function EmailLink({ className, children }: { className?: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);
  // Портал монтируем только после первого копирования: так серверная и клиентская разметка совпадают.
  const [toastMounted, setToastMounted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function handleClick() {
    // Переход по mailto: не блокируем — копирование идёт параллельно.
    copyText(email.address)
      .then(() => {
        setToastMounted(true);
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), TOAST_DURATION_MS);
      })
      .catch(() => {});
  }

  return (
    <>
      <a
        href={`mailto:${email.address}?subject=${encodeURIComponent(email.subject)}`}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
      {toastMounted &&
        createPortal(
          <div
            role="status"
            aria-live="polite"
            className="pointer-events-none fixed inset-x-0 bottom-6 z-[110] flex justify-center px-4"
          >
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2 rounded-full bg-[#111212] px-5 py-3 text-sm font-medium text-white shadow-lg"
                >
                  <Check className="size-4" aria-hidden />
                  {email.copiedMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>,
          document.body,
        )}
    </>
  );
}
