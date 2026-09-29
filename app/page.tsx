import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { CasesSection } from "@/components/cases-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white pt-4 sm:pt-6">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-20 px-6 pt-12 pb-24 sm:gap-28 sm:pt-16 sm:pb-32">
        <HeroSection />
        <CasesSection />
        <SkillsSection />
      </main>
      <ContactCtaSection />
      <SiteFooter />
    </div>
  );
}
