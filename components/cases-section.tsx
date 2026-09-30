import { CaseCard } from "@/components/case-card";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { home } from "@/content/home";
import type { Locale } from "@/lib/i18n";

export function CasesSection({ locale }: { locale: Locale }) {
  const { cases } = home[locale];

  return (
    <section id="cases" className="flex w-full scroll-mt-28 flex-col items-start gap-10">
      <RevealGroup className="flex w-full flex-col items-start gap-10">
        <RevealItem>
          <h2 className="text-3xl font-semibold tracking-tight text-[#111212] sm:text-4xl">
            {cases.heading}
          </h2>
        </RevealItem>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.items.map((item, index) => (
            <CaseCard key={item.title} index={index} locale={locale} {...item} />
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
