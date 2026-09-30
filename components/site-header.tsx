import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { PAGE_ROUTES } from "@/constant/page-routes";

export interface SiteNavigationItem {
  label?: string;
  href?: string;
  hasMenu?: boolean;
}

export interface SiteHeaderProps {
  navigationItems?: readonly SiteNavigationItem[];
  signupHref?: string;
  signupLabel?: string;
}

export function SiteHeader({
  navigationItems,
  signupHref,
  signupLabel,
}: SiteHeaderProps) {
  return (
    <header className="mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_auto] items-center gap-x-4 px-6 py-4 md:grid-cols-[1fr_auto_1fr] md:px-8 lg:px-10">
      <Link
        href={PAGE_ROUTES.HOME}
        aria-label="Fluenca home"
        className="flex w-fit items-center gap-2"
      >
        <Image
          src="/assets/Logo.svg"
          alt="Fluenca Logo"
          width={34}
          height={40}
          priority
          className="h-9 w-auto"
        />
        <span className="font-display text-2xl font-medium tracking-[0.04em] text-ink">
        Fluenca.ai
        </span>
      </Link>

      {/* <nav
        aria-label="Main navigation"
        className="col-span-2 row-start-2 mt-3 flex justify-center md:col-span-1 md:col-start-2 md:row-start-1 md:mt-0"
      >
        <ul className="flex items-center gap-1 rounded-full bg-surface-muted p-1">
          {navigationItems.map(({ label, href, hasMenu }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex min-h-9 items-center gap-1 rounded-full px-3.5 font-body text-caption text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                {label}
                {hasMenu && <ChevronDown aria-hidden="true" className="size-3.5" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}

      {/* <Link
        href={signupHref}
        className="col-start-2 row-start-1 inline-flex h-9 items-center justify-center rounded-full bg-brand px-5 font-body text-caption font-medium text-white shadow-[0_3px_0_#bfc1ff] transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:col-start-3 md:justify-self-end"
      >
        {signupLabel}
      </Link> */}
    </header>
  );
}