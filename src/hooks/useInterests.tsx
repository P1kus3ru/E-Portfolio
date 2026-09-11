import { useRouter } from "next/router";
import { DEFAULT_LOCALE, type Locale } from "~/i18n/locales";
import Tnok from '../../public/images/GalaTnok.jpg';
import Loko from '../../public/images/Loko.jpg';
import Judo from '../../public/images/JudoTraining.jpg';

interface InterestItem {
  name: string;
  desc: string;
  img: {
    src: typeof Tnok;
    alt: string;
  };
}

const content: Record<Locale, InterestItem[]> = {
  "nl-BE": [
    {
      name: 'Tomo no Kai',
      desc: 'De studenten vereniging van de richting Japanologie aan de UGent waar ik in het preasidium de functie van Web-Master uitvoer. ',
      img: {
        src: Tnok,
        alt: 'Gala TnoK 2023',
      },
    },
    {
      name: 'Lovendegemse Koperblazers (Loko)',
      desc: 'De fanfare uit Lovendegem waar ik mij bij aansloot in het 2e leerjaar. Hier speel ik op de bugel. Sinds 2022 zit ik ook in het bestuur van loko waar ik vooral de technische zaken afhandel en soms de affiche maak.',
      img: {
        src: Loko,
        alt: 'Loko 2019',
      },
    },
    {
      name: 'Judoclub Nevele',
      desc: 'Sinds mijn zes jaar ben ik ook lid bij judoclub Nevele. Zo ga ik 2 keer in de week naar de trainingen. Hier behaalde ik de 1e Dan graad (Zwarte gordel).',
      img: {
        src: Judo,
        alt: 'Judo',
      },
    },
  ],
  "en-GB": [
    {
      name: 'Tomo no Kai',
      desc: 'The student association for the Japanology programme at UGent, where I serve on the board as Web Master.',
      img: {
        src: Tnok,
        alt: 'TnoK Gala 2023',
      },
    },
    {
      name: 'Lovendegemse Koperblazers (Loko)',
      desc: "The brass band from Lovendegem that I joined in my second year of school. I play the flugelhorn here. Since 2022 I've also been on Loko's board, where I mainly handle technical matters and sometimes design the poster.",
      img: {
        src: Loko,
        alt: 'Loko 2019',
      },
    },
    {
      name: 'Judoclub Nevele',
      desc: "I've been a member of Judo Club Nevele since I was six years old. I train there twice a week, and have earned my 1st Dan (black belt).",
      img: {
        src: Judo,
        alt: 'Judo',
      },
    },
  ],
  fr: [
    {
      name: 'Tomo no Kai',
      desc: "L'association étudiante de la filière Japanologie à l'UGent, où je remplis la fonction de Web Master au sein du bureau.",
      img: {
        src: Tnok,
        alt: 'Gala TnoK 2023',
      },
    },
    {
      name: 'Lovendegemse Koperblazers (Loko)',
      desc: "La fanfare de Lovendegem que j'ai rejointe en 2e année. J'y joue du bugle. Depuis 2022, je fais également partie du bureau de Loko, où je m'occupe principalement des aspects techniques et je réalise parfois l'affiche.",
      img: {
        src: Loko,
        alt: 'Loko 2019',
      },
    },
    {
      name: 'Judoclub Nevele',
      desc: "Je suis membre du judoclub Nevele depuis l'âge de six ans. Je m'entraîne deux fois par semaine et j'y ai obtenu mon 1er Dan (ceinture noire).",
      img: {
        src: Judo,
        alt: 'Judo',
      },
    },
  ],
};

export default function useInterests() {
  const { locale } = useRouter();
  return content[(locale as Locale) ?? DEFAULT_LOCALE];
}
