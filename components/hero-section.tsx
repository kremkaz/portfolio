import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { home } from "@/content/home";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export function HeroSection({ locale }: { locale: Locale }) {
  const { hero } = home[locale];
  const t = ui[locale];

  return (
    <RevealGroup
      as="section"
      id="about"
      className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:gap-12"
    >
      <div className="flex w-full flex-col items-start gap-6 lg:max-w-[560px]">
        <RevealItem className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(0,255,13,0.12)] px-4 py-1.5">
            <span className="relative flex size-1.5 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00CC03] opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[#00CC03]" />
            </span>
            <span className="text-xs font-medium tracking-wide text-[rgba(0,96,0,0.9)] uppercase">
              {hero.availability}
            </span>
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold tracking-tight text-[#111212] sm:text-5xl">
              {hero.name}
            </h1>
            <p className="text-base font-medium text-primary/70 sm:text-lg">{hero.role}</p>
          </div>
        </RevealItem>
        <RevealItem className="flex max-w-prose flex-col gap-3">
          {hero.bio.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-[#111212]">
              {paragraph}
            </p>
          ))}
        </RevealItem>
        <RevealItem className="flex w-full flex-col items-stretch gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4">
          <Button
            render={<a href={hero.cvHref} />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="h-13 rounded-xl border-0 bg-[#F7F7F9] px-7 text-base font-semibold text-primary hover:bg-primary/[0.08]"
          >
            CV
          </Button>
          <Button
            render={<a href="#cases" />}
            nativeButton={false}
            size="lg"
            className="h-13 justify-center gap-2 rounded-xl bg-primary px-7 text-base font-semibold text-white hover:bg-primary/90"
          >
            {t.viewCases}
            <img
              src={asset("/home/icon-arrow-up-outline.svg")}
              alt=""
              width={32}
              height={32}
              className="size-5 rotate-90"
            />
          </Button>
        </RevealItem>
      </div>
      <RevealItem className="h-[286px] w-full max-w-[330px] shrink-0 overflow-hidden rounded-3xl transition-[rotate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-2 sm:h-[374px] lg:h-[440px] lg:w-[330px]">
        <Image
          src={asset(hero.photo)}
          alt={hero.name}
          className="size-full object-cover"
          width={330}
          height={440}
          priority
        />
      </RevealItem>
    </RevealGroup>
  );
}
