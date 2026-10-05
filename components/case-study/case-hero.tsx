import Link from "next/link";
import type { CaseStudy } from "@/content/cases/types";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { Icon } from "@/components/icon";

export function CaseHero({ study, locale }: { study: CaseStudy; locale: Locale }) {
  const t = ui[locale];

  return (
    <section
      className="relative -mt-[62px] overflow-hidden px-6 pt-24 pb-16 sm:pt-28 sm:pb-24"
      style={{ backgroundColor: study.heroBackground }}
    >
      <div className="relative mx-auto flex max-w-4xl flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col items-start gap-10">
          <Link
            href={study.backHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            <Icon src="/cases/vecta/icon-back.svg" className="size-3.5" />
            {study.backLabel}
          </Link>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl leading-tight font-black tracking-tight text-white sm:text-5xl">
              {study.title}
            </h1>
            <p className="max-w-xl text-lg text-white/70 sm:text-xl">{study.subtitle}</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 rounded-2xl border border-white/25 bg-white/10 p-6 sm:w-[280px]">
          <MetaRow label={t.metaRole} value={study.meta.role} />
          <div className="h-px w-full bg-white/15" />
          <MetaRow label={t.metaDuration} value={study.meta.duration} />
          <div className="h-px w-full bg-white/15" />
          <MetaRow label={t.metaType} value={study.meta.type} />
          <div className="flex flex-wrap gap-1.5 pt-2">
            {study.meta.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-semibold tracking-widest text-white/45 uppercase">{label}</p>
      <p className="text-[15px] font-semibold text-white">{value}</p>
    </div>
  );
}
