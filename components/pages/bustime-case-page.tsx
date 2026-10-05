import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { bustime as bustimeContent } from "@/content/cases/bustime";
import type { Locale } from "@/lib/i18n";
import { Icon } from "@/components/icon";

export function BusTimeCasePage({ locale }: { locale: Locale }) {
  const bustime = bustimeContent[locale];
  return (
    <div className="flex min-h-full flex-col bg-white pt-4 sm:pt-6">
      <SiteHeader />

      <main className="flex w-full flex-1 items-center px-6 py-24 sm:py-32">
        <RevealGroup className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6">
          <RevealItem>
            <span className="rounded-full bg-primary/[0.07] px-4 py-1.5 text-sm font-semibold tracking-widest text-primary uppercase">
              {bustime.status}
            </span>
          </RevealItem>
          <RevealItem className="flex flex-col gap-4">
            <h1 className="text-3xl leading-tight font-black tracking-tight break-words text-[#0A0A0A] sm:text-5xl">
              {bustime.title}
            </h1>
            <p className="max-w-xl text-lg text-[#888] sm:text-xl">{bustime.subtitle}</p>
          </RevealItem>
          <RevealItem>
            <Link
              href={bustime.backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#666] hover:text-primary"
            >
              <Icon src="/cases/vecta/icon-arrow-left.svg" className="size-4" />
              {bustime.backLabel}
            </Link>
          </RevealItem>
        </RevealGroup>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
