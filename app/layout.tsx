import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";
import { profilePhoto, profilePhotoUrl } from "@/content/site";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Евгения Артюшина — продуктовый дизайнер",
  description: "Портфолио Евгении Артюшиной — product-дизайн, UX/UI",
  // Значок во вкладке и превью ссылки — то же фото, что на главной (см. content/site.ts).
  icons: {
    icon: asset(profilePhoto.src),
    apple: asset(profilePhoto.src),
  },
  openGraph: {
    type: "website",
    images: [{ url: profilePhotoUrl, width: profilePhoto.width, height: profilePhoto.height }],
  },
  twitter: {
    card: "summary",
    images: [profilePhotoUrl],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={cn("h-full", "antialiased", "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
