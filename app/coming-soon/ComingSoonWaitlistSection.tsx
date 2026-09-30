"use client";

import type { ReactElement } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  joinWaitlistSchema,
  type JoinWaitlistFormValues,
} from "@/types/joinWaitlistSchema";
import { WaitlistMutation } from "@/routes/bussiness/Bussiness-Mutation";

import { fadeUp } from "./ComingSoonMotion";

type ComingSoonWaitlistSectionProps = {
  appearance?: string;
};

export function ComingSoonWaitlistSection(
  _props: ComingSoonWaitlistSectionProps = {},
): ReactElement {
  const t = useTranslations("comingSoon");
  const { mutate: waitlistMutation, isPending: waitlistIsPending } =
    WaitlistMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JoinWaitlistFormValues>({
    resolver: zodResolver(joinWaitlistSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: JoinWaitlistFormValues) => {
    waitlistMutation(values.email, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <motion.div {...fadeUp(0.74)} className="mt-10 w-full max-w-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
        noValidate
      >
        <div className="flex w-full flex-col gap-2 rounded-xl border border-white/15 bg-[#00051E]/70 p-1.5 transition-colors focus-within:border-primary/50 sm:flex-row sm:items-center">
          <Input
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-label={t("emailPlaceholder")}
            placeholder={t("emailPlaceholder")}
            aria-invalid={Boolean(errors.email)}
            dir="ltr"
            className="coming-soon-email-input min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-left text-sm shadow-none scheme-dark focus-visible:border-0 focus-visible:ring-0 dark:bg-transparent"
            style={{
              color: "#fff",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            }}
            {...register("email")}
          />
          <Button
            type="submit"
            disabled={waitlistIsPending}
            className="h-11 shrink-0 cursor-pointer rounded-full bg-white px-5 text-sm font-semibold whitespace-normal text-black hover:bg-white/90 disabled:cursor-not-allowed sm:h-10 sm:px-6"
          >
            {waitlistIsPending ? t("submitting") : t("submit")}
          </Button>
        </div>

        {errors.email?.message ? (
          <p
            role="alert"
            className="mt-2 text-left text-xs text-destructive sm:text-sm"
          >
            {errors.email.message}
          </p>
        ) : null}
      </form>
    </motion.div>
  );
}
