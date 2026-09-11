export const LOCALES = ["en-GB", "fr", "nl-BE"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en-GB";

export const LOCALE_META: Record<Locale, { label: string; countryCode: "GB" | "FR" | "BE" }> = {
  "en-GB": { label: "English", countryCode: "GB" },
  fr: { label: "Français", countryCode: "FR" },
  "nl-BE": { label: "Nederlands", countryCode: "BE" },
};
