import { EmailLink } from "@/components/email-link";
import { home } from "@/content/home";
import type { Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const { email, footer } = home[locale];

  return (
    <footer className="w-full bg-[#242B2F] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-xs text-white/40">{footer.copyright}</p>
        <div className="flex flex-col items-center gap-1 sm:items-end">
          <p className="text-[11px] font-medium tracking-widest text-white/35 uppercase">
            {footer.contactsLabel}
          </p>
          <EmailLink locale={locale} className="text-sm text-white/55 transition-colors hover:text-white/80">
            {email.address}
          </EmailLink>
          <a
            href={`https://${footer.telegram}`}
            className="text-sm text-white/55 transition-colors hover:text-white/80"
          >
            {footer.telegram}
          </a>
        </div>
      </div>
    </footer>
  );
}
