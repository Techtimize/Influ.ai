"use client";

import type { ReactElement } from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  joinWaitlistSchema,
  type JoinWaitlistFormValues,
} from "@/types/joinWaitlistSchema";
import { cn } from "@/lib/utils";
import { WaitlistMutation } from "@/routes/bussiness/Bussiness-Mutation";

import { easeOut, fadeUp } from "./ComingSoonMotion";

type ComingSoonWaitlistSectionProps = {
  appearance?: string;
};

export function ComingSoonWaitlistSection(
  _props: ComingSoonWaitlistSectionProps = {},
): ReactElement {
  const t = useTranslations("comingSoon");
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const { mutate: waitlistMutation, isPending: waitlistIsPending } =
    WaitlistMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinWaitlistFormValues>({
    resolver: zodResolver(joinWaitlistSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: JoinWaitlistFormValues) => {
    setStatusMessage(null);
    waitlistMutation(values.email, {
      onSuccess: (response) => {
        setStatusMessage(response?.message || t("successMessage"));
        setSubmitted(true);
      },
      onError: (error) => {
        setStatusMessage(
          error instanceof Error ? error.message : t("errorMessage"),
        );
      },
    });
  };

  return (
    <motion.div
      {...fadeUp(0.74)}
      className="mt-10 w-full max-w-2xl"
    >
      <AnimatePresence mode="wait">
        {submitted && statusMessage ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-xl border border-primary/35 bg-[#051026]/80 p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className={cn(
                "mx-auto mb-4 flex size-14 items-center justify-center",
                "rounded-full bg-primary",
              )}
            >
              <Check
                className={cn("size-7", "text-primary-foreground")}
                strokeWidth={3}
              />
            </motion.div>
            <p className="text-sm font-medium text-white sm:text-base">
              {statusMessage}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {statusMessage ? (
              <p
                role="status"
                className={cn(
                  "mb-4 px-4 py-3 text-sm font-medium text-white sm:text-base",
                  "rounded-2xl border border-primary/30 bg-primary/10",
                )}
              >
                {statusMessage}
              </p>
            ) : null}

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
                  className="h-11 shrink-0 rounded-full bg-primary px-5 text-sm font-semibold whitespace-normal text-primary-foreground hover:bg-primary/90 sm:h-10 sm:px-6"
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
        )}
      </AnimatePresence>
    </motion.div>
  );
}
