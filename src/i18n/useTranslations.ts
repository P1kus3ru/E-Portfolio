import { useRouter } from "next/router";
import type { Dictionary } from "./dictionary";
import enGB from "./dictionaries/en-GB";
import fr from "./dictionaries/fr";
import nlBE from "./dictionaries/nl-BE";
import { DEFAULT_LOCALE, type Locale } from "./locales";

const dictionaries: Record<Locale, Dictionary> = {
  "en-GB": enGB,
  fr,
  "nl-BE": nlBE,
};

export function useLocale(): Locale {
  const { locale } = useRouter();
  return (locale as Locale | undefined) ?? DEFAULT_LOCALE;
}

export default function useTranslations(): Dictionary {
  return dictionaries[useLocale()];
}
