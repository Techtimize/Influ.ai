import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ar"] as const;
type Locale = (typeof locales)[number];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get("locale")?.value;
  const locale: Locale =
    cookieLocale && isLocale(cookieLocale) ? cookieLocale : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
