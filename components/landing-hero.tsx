"use client";
import Image from "next/image";
import { Target } from "lucide-react";
import { Button, Input } from "@base-ui/react";
import { waitlistPlaceholders } from "@/constant/waitlist";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { WaitlistMutation } from "@/routes/bussiness/Bussiness-Mutation";

export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface LandingHeroProps {
  eyebrow: string;
  titleLead: string;
  titleHighlight: string;
  titleTail: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions: readonly HeroAction[];
}

export function LandingHero({
  eyebrow,
  titleLead,
  titleHighlight,
  titleTail,
  description,
  imageSrc,
  imageAlt,
  actions,
}: LandingHeroProps) {
  const { mutate: waitlistMutation, isPending: waitlistIsPending } = WaitlistMutation();
  const handleWaitlist = (email: string) => {
    waitlistMutation(email);
  }
  return (
    <section className="mx-auto grid w-full max-w-360 flex-1 items-center gap-8 px-6 pb-12 pt-8 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10 lg:py-10">
      <div className="flex flex-col items-start">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-surface/90 px-4 py-2 font-body text-caption text-brand">
          <Target aria-hidden="true" className="size-4" />
          {eyebrow}
        </p>

        <h1 className="max-w-[23ch] font-display text-heading-3 leading-[1.2] font-semibold text-ink sm:text-heading-2">
          {titleLead}
          <span className="text-brand">{titleHighlight}</span>
          {titleTail}
        </h1>

        <p className="mt-4 max-w-136 font-body text-body leading-7 text-copy-muted">
          {description}
        </p>

        {/* <div className="mt-6 flex flex-wrap items-center gap-3">
          {actions.map(({ label, href, variant }) => (
            <Link
              key={label}
              href={href}
              className={`inline-flex h-10 items-center justify-center rounded-full px-6 font-body text-caption font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                variant === "primary"
                  ? "bg-brand text-white shadow-[0_3px_0_#bfc1ff] hover:bg-brand-700"
                  : "border border-brand text-brand hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </div> */}
        <div className="mt-6 w-full max-w-lg">
  {/* <div className="relative w-full max-w-md">
    <Input
      type="email"
      placeholder="Enter your email"
      className="h-14 w-full rounded-full border border-gray-300 bg-white pl-5 pr-36"
    />

    <Button
      className="cursor-pointer border-none absolute right-1.5 top-1/2 h-11 -translate-y-1/2 rounded-full px-5 bg-brand text-white shadow-[0_3px_0_#bfc1ff] hover:bg-brand-700"
    >
      Join Waitlist
    </Button>
  </div> */}
  <PlaceholdersAndVanishInput
   placeholders={waitlistPlaceholders} 
   onChange={() => {}}
    onSubmit={(e) => {
      const form = e.currentTarget;
      const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
      const email = emailInput?.value?.trim() ?? "";
      if (email) handleWaitlist(email);
    }} />
     </div>
      </div>

      <div className="relative mx-auto w-full max-w-135">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={640}
          height={640}
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}