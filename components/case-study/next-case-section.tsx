import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { asset } from "@/lib/asset";

export function NextCaseSection({
  next,
}: {
  next: { title: string; subtitle: string; href: string };
}) {
  return (
    <section className="w-full border-t border-[#EBEBEB] px-6 py-16 sm:py-20">
      <RevealGroup className="mx-auto flex max-w-4xl flex-col items-center gap-10">
        <RevealItem className="w-full">
          <p className="text-xs font-semibold tracking-widest text-[#AAA] uppercase">
            Следующий кейс
          </p>
        </RevealItem>
        <RevealItem className="w-full">
          <Link
            href={next.href}
            className="flex w-full items-center justify-between gap-6 rounded-2xl bg-[#F7F7F9] px-8 py-9 transition-colors hover:bg-primary/[0.06]"
          >
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-3xl">
                {next.title}
              </p>
              <p className="text-[15px] text-[#888]">{next.subtitle}</p>
            </div>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary sm:size-13">
              <img src={asset("/cases/vecta/icon-arrow-right-circle.svg")} alt="" width={22} height={22} />
            </span>
          </Link>
        </RevealItem>
        <RevealItem>
          <Link
            href="/#cases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#666] hover:text-primary"
          >
            <img src={asset("/cases/vecta/icon-arrow-left.svg")} alt="" width={16} height={16} />
            Вернуться к портфолио
          </Link>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
