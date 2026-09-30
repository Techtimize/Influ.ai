import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";
import QueryProvider from "@/provider/query-provider";
import ErrorBoundary from "@/errors/ErrorBoundary";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const googleSansCode = localFont({
  src: [
    { path: "../public/fonts/GoogleSansCode-Light.ttf", weight: "300" },
    { path: "../public/fonts/GoogleSansCode-Regular.ttf", weight: "400" },
    { path: "../public/fonts/GoogleSansCode-Medium.ttf", weight: "500" },
    { path: "../public/fonts/GoogleSansCode-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/GoogleSansCode-Bold.ttf", weight: "700" },
  ],
  variable: "--font-google-sans-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fluenca.ai"),
  title: {
    default: "Fluenca.ai",
    template: "%s | Fluenca.ai",
  },
  description:
    "Something new is on the way. Join the Fluenca.ai waitlist and be first to know when we launch.",
  applicationName: "Fluenca.ai",
  keywords: ["Fluenca", "Fluenca.ai", "AI agents", "waitlist", "coming soon"],
  authors: [{ name: "Fluenca.ai" }],
  creator: "Fluenca.ai",
  publisher: "Fluenca.ai",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fluenca.ai",
    siteName: "Fluenca.ai",
    title: "Fluenca.ai — Coming Soon",
    description:
      "Something new is on the way. Join the Fluenca.ai waitlist and be first to know when we launch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluenca.ai — Coming Soon",
    description:
      "Something new is on the way. Join the Fluenca.ai waitlist and be first to know when we launch.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg" }],
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${googleSansCode.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <QueryProvider>
            <Toaster position="bottom-right" />
            <ErrorBoundary>{children}</ErrorBoundary>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
