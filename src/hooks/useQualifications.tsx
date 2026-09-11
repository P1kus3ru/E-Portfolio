import { useRouter } from "next/router";
import { DEFAULT_LOCALE, type Locale } from "~/i18n/locales";

interface QualificationItem {
  institution: string;
  title: string;
  date: string;
}

const content: Record<Locale, QualificationItem[]> = {
  "nl-BE": [
    {
      institution: 'Odisee',
      title: 'Bachelor Electronica-ICT',
      date: 'Juni 2026',
    },
    {
      institution: 'HOGENT',
      title: 'Bachelor Toegepaste Informatica',
      date: 'Augustus 2023',
    },
  ],
  "en-GB": [
    {
      institution: 'Odisee',
      title: "Bachelor's in Electronics-ICT",
      date: 'June 2026',
    },
    {
      institution: 'HOGENT',
      title: "Bachelor's in Applied Computer Science",
      date: 'August 2023',
    },
  ],
  fr: [
    {
      institution: 'Odisee',
      title: 'Bachelier en Électronique-ICT',
      date: 'Juin 2026',
    },
    {
      institution: 'HOGENT',
      title: 'Bachelier en Informatique Appliquée',
      date: 'Août 2023',
    },
  ],
};

export default function useQualifications() {
  const { locale } = useRouter();
  return content[(locale as Locale) ?? DEFAULT_LOCALE];
}
