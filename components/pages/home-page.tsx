import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { CasesSection } from "@/components/cases-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { SiteFooter } from "@/components/site-footer";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <div className="flex min-h-full flex-col bg-white pt-4 sm:pt-6">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-20 px-6 pt-12 pb-24 sm:gap-28 sm:pt-16 sm:pb-32">
        <HeroSection locale={locale} />
        <CasesSection locale={locale} />
        <SkillsSection locale={locale} />
      </main>
      <ContactCtaSection locale={locale} />
      <SiteFooter locale={locale} />
    </div>
  );
}
