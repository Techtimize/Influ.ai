"use client";

import type { ReactElement } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

function setLocaleCookie(locale: string) {
  document.cookie = `locale=${locale};path=/;max-age=31536000;samesite=lax`;
}

export function ComingSoonLanguageSwitcher(): ReactElement {
  const locale = useLocale();
  const t = useTranslations("comingSoon");
  const router = useRouter();

  const switchTo = (nextLocale: string) => {
    if (nextLocale === locale) return;
    setLocaleCookie(nextLocale);
    router.refresh();
  };

  const linkClass = (active: boolean) =>
    cn(
      "rounded-full px-2.5 py-1 transition-colors",
      active
        ? "bg-white text-black hover:bg-white/90"
        : "text-white/90 hover:bg-white/10 hover:text-white",
    );

  return (
    <>
      <button
        type="button"
        aria-label={t("languageSwitch")}
        className="inline-flex h-8 items-center rounded-full border border-white/25 bg-white/10 px-2.5 text-[11px] font-medium text-white backdrop-blur-md transition hover:bg-white/15 sm:hidden"
        onClick={() => switchTo(locale === "ar" ? "en" : "ar")}
      >
        {locale === "ar" ? "En" : "عربي"}
      </button>
      <div
        aria-label={t("languageSwitch")}
        className="hidden items-center gap-1 rounded-full border border-white/25 bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-md sm:flex"
        role="group"
      >
        <button
          type="button"
          className={linkClass(locale === "en")}
          onClick={() => switchTo("en")}
        >
          En
        </button>
        <button
          type="button"
          className={linkClass(locale === "ar")}
          onClick={() => switchTo("ar")}
        >
          عربي
        </button>
      </div>
    </>
  );
}
