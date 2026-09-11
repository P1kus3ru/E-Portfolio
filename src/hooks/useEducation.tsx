import { useRouter } from "next/router";
import { DEFAULT_LOCALE, type Locale } from "~/i18n/locales";

interface EducationItem {
  school: string;
  course: string;
  date: string;
}

const content: Record<Locale, EducationItem[]> = {
  "nl-BE": [
    {
      school: 'Odisee',
      course: 'Bachelor Electronica-ICT',
      date: 'September 2023 - Juni 2026',
    },
    {
      school: 'HOGENT',
      course: 'Bachelor Toegepaste Informatica',
      date: 'September 2020 - Augustus 2023',
    },
  ],
  "en-GB": [
    {
      school: 'Odisee',
      course: "Bachelor's in Electronics-ICT",
      date: 'September 2023 - June 2026',
    },
    {
      school: 'HOGENT',
      course: "Bachelor's in Applied Computer Science",
      date: 'September 2020 - August 2023',
    },
  ],
  fr: [
    {
      school: 'Odisee',
      course: 'Bachelier en Électronique-ICT',
      date: 'Septembre 2023 - Juin 2026',
    },
    {
      school: 'HOGENT',
      course: 'Bachelier en Informatique Appliquée',
      date: 'Septembre 2020 - Août 2023',
    },
  ],
};

export default function useEducation() {
  const { locale } = useRouter();
  return content[(locale as Locale) ?? DEFAULT_LOCALE];
}
