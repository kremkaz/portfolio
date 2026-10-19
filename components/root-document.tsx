import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";
import { profileIcon, profileIconUrl } from "@/content/site";
import type { Locale } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

/** Общие метаданные обеих языковых версий: значок вкладки и превью ссылки (см. content/site.ts). */
export const sharedMetadata: Metadata = {
  icons: {
    icon: asset(profileIcon.src),
    apple: asset(profileIcon.src),
  },
  openGraph: {
    type: "website",
    images: [{ url: profileIconUrl, width: profileIcon.width, height: profileIcon.height }],
  },
  twitter: {
    card: "summary",
    images: [profileIconUrl],
  },
};

/**
 * Каркас HTML-документа. У русской и английской версии свои корневые layout'ы,
 * чтобы у страниц был правильный lang (ru / en) — для браузерного переводчика,
 * экранных дикторов и поисковиков.
 */
export function RootDocument({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={cn("h-full", "antialiased", "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
