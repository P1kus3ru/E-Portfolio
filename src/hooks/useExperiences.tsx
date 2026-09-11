import { useRouter } from "next/router";
import { DEFAULT_LOCALE, type Locale } from "~/i18n/locales";

interface ExperienceItem {
  key: string;
  name: string;
  function: string;
  desc: string;
  date: string;
  important: boolean;
}

const content: Record<Locale, ExperienceItem[]> = {
  "nl-BE": [
    {
      key: 'CodefeverLeraar',
      name: 'Codefever',
      function: 'Leraar',
      desc: 'Na assisteren geef ik nu zelf programmeerlessen aan jongeren.',
      date: 'September 2023 - Heden',
      important: true,
    },
    {
      key: 'CodefeverAssistent',
      name: 'Codefever',
      function: 'Assistent',
      desc: 'Naast zelf les te geven, help ik nog steeds bij het assisteren van andere lessen.',
      date: 'September 2022 - Heden',
      important: false,
    },
    {
      key: 'Euricom2023',
      name: 'Euricom',
      function: 'Stagair',
      desc: 'In mijn stage heb ik voor Euricom het interne project eKudo gerealiseerd.',
      date: 'Februari 2023 - Mei 2023',
      important: false,
    },
    {
      key: 'QityStage',
      name: 'Qity',
      function: 'Stagair',
      desc: 'Voor mijn opleiding electronica-ICT heb ik een stage gelopen bij Qity. Hier maakte ik een universele kabeltester.',
      date: 'Februari 2026 - Mei 2026',
      important: true,
    },
    {
      key: 'QityHolidayJob',
      name: 'Qity',
      function: 'Zomerjob',
      desc: 'In de zomer van 2026 heb ik een zomerjob gedaan bij Qity. Hier werkte ik aan een Atlassian Forge app.',
      date: 'Augustus 2026 - September 2026',
      important: false,
    },
  ],
  "en-GB": [
    {
      key: 'CodefeverLeraar',
      name: 'Codefever',
      function: 'Teacher',
      desc: 'After assisting, I now teach programming classes to young people myself.',
      date: 'September 2023 - Present',
      important: true,
    },
    {
      key: 'CodefeverAssistent',
      name: 'Codefever',
      function: 'Assistant',
      desc: 'Alongside teaching my own classes, I still help assist with other lessons.',
      date: 'September 2022 - Present',
      important: false,
    },
    {
      key: 'Euricom2023',
      name: 'Euricom',
      function: 'Intern',
      desc: 'During my internship, I built the internal project eKudo for Euricom.',
      date: 'February 2023 - May 2023',
      important: false,
    },
    {
      key: 'QityStage',
      name: 'Qity',
      function: 'Intern',
      desc: 'For my Electronics-ICT programme, I did an internship at Qity, where I built a universal cable tester.',
      date: 'February 2026 - May 2026',
      important: true,
    },
    {
      key: 'QityHolidayJob',
      name: 'Qity',
      function: 'Summer job',
      desc: 'In the summer of 2026, I did a summer job at Qity, where I worked on an Atlassian Forge app.',
      date: 'August 2026 - September 2026',
      important: false,
    },
  ],
  fr: [
    {
      key: 'CodefeverLeraar',
      name: 'Codefever',
      function: 'Enseignant',
      desc: "Après avoir été assistant, je donne désormais moi-même des cours de programmation à des jeunes.",
      date: 'Septembre 2023 - à ce jour',
      important: true,
    },
    {
      key: 'CodefeverAssistent',
      name: 'Codefever',
      function: 'Assistant',
      desc: "En plus de donner mes propres cours, j'aide encore à assister d'autres cours.",
      date: 'Septembre 2022 - à ce jour',
      important: false,
    },
    {
      key: 'Euricom2023',
      name: 'Euricom',
      function: 'Stagiaire',
      desc: "Durant mon stage, j'ai réalisé le projet interne eKudo pour Euricom.",
      date: 'Février 2023 - Mai 2023',
      important: false,
    },
    {
      key: 'QityStage',
      name: 'Qity',
      function: 'Stagiaire',
      desc: "Pour ma formation en Électronique-ICT, j'ai effectué un stage chez Qity, où j'ai conçu un testeur de câbles universel.",
      date: 'Février 2026 - Mai 2026',
      important: true,
    },
    {
      key: 'QityHolidayJob',
      name: 'Qity',
      function: "Job d'été",
      desc: "Durant l'été 2026, j'ai fait un job d'été chez Qity, où j'ai travaillé sur une application Atlassian Forge.",
      date: 'Août 2026 - Septembre 2026',
      important: false,
    },
  ],
};

export default function useExperiences() {
  const { locale } = useRouter();
  return content[(locale as Locale) ?? DEFAULT_LOCALE];
}
