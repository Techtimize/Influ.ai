"use client";

import type { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import Aurora from "@/components/Aurora.jsx";
import { cn } from "@/lib/utils";

import { ComingSoonLanguageSwitcher } from "./ComingSoonLanguageSwitcher";
import { ComingSoonWaitlistSection } from "./ComingSoonWaitlistSection";
import { easeOut, fadeUp } from "./ComingSoonMotion";

type ComingSoonPageProps = {
  chrome?: ReactNode;
};

export function ComingSoonPage({
  chrome,
}: ComingSoonPageProps): ReactElement {
  const locale = useLocale();
  const t = useTranslations("comingSoon");

  return (
    <motion.div
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 pb-20 pt-24 text-white sm:pb-24 sm:pt-28"
      data-coming-soon="true"
      data-coming-soon-variant="d"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <Aurora
            colorStops={["#5542FF", "#94FFFA", "#5542FF"]}
            amplitude={1.1}
            blend={0.55}
            speed={0.85}
          />
        </motion.div>
        <div className="absolute inset-0 z-4 bg-linear-to-b from-transparent via-transparent to-black/80" />
      </div>

      <motion.div
        {...fadeUp(0.2)}
        className="absolute top-4 z-20 flex items-center gap-2 sm:top-6"
      >
        <Image
          src="/assets/Logo.svg"
          alt="Fluenca.ai"
          width={34}
          height={40}
          priority
          className="h-9 w-auto"
        />
        <span className="text-brand-primary font-bold tracking-tight sm:text-xl">
          Fluenca.ai
        </span>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-4 bottom-4 z-30 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:inset-x-6 sm:bottom-6">
        <div aria-hidden="true" />
        <div className="pointer-events-auto justify-self-center">
          <ComingSoonLanguageSwitcher />
        </div>
        <div className="pointer-events-auto justify-self-end">{chrome}</div>
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <h1
          className={cn(
            "mb-2 select-none font-bold leading-none tracking-tight",
            locale !== "ar" && "uppercase",
          )}
        >
          <motion.span
            {...fadeUp(0.38)}
            className="block text-5xl text-white sm:text-7xl md:text-8xl"
          >
            {t("headlineSolid")}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease: easeOut }}
            className="mt-1 block text-5xl text-transparent sm:text-7xl md:text-8xl"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.9)" }}
          >
            {t("headlineOutline")}
          </motion.span>
        </h1>

        <motion.p
          {...fadeUp(0.62)}
          className="mt-6 max-w-lg text-sm font-semibold text-white sm:text-base"
        >
          {t("highlightLead")}
        </motion.p>

        <motion.p
          {...fadeUp(0.68)}
          className="mt-3 max-w-lg text-sm text-white/80 sm:text-base"
        >
          {t("highlightBody")}
        </motion.p>

        <ComingSoonWaitlistSection />
      </div>
    </motion.div>
  );
}
