import { FaPython, FaReact, FaHtml5, FaJava, FaCss3Alt, FaGitAlt, FaJs, FaNodeJs, FaSwift, FaPhp } from 'react-icons/fa';
import { SiKotlin, SiSharp } from 'react-icons/si';
import { useRouter } from "next/router";
import { DEFAULT_LOCALE, type Locale } from "~/i18n/locales";

interface IconProps  {
    size?: number
  }

interface LanguageSkill {
  name: string;
  level: number;
}

const langsContent: Record<Locale, LanguageSkill[]> = {
  "nl-BE": [
    { name: 'Nederlands', level: 90 },
    { name: 'Engels', level: 80 },
    { name: 'Frans', level: 40 },
  ],
  "en-GB": [
    { name: 'Dutch', level: 90 },
    { name: 'English', level: 80 },
    { name: 'French', level: 40 },
  ],
  fr: [
    { name: 'Néerlandais', level: 90 },
    { name: 'Anglais', level: 80 },
    { name: 'Français', level: 40 },
  ],
};

export default function useSkills() {
    const { locale } = useRouter();
    const langs = langsContent[(locale as Locale) ?? DEFAULT_LOCALE];
    const proglangs = [
        {
          name: 'React',
          Icon: ({size}:IconProps) => <FaReact size={size}/>,
        },
        {
          name: 'HTML5',
          Icon: ({size}:IconProps) => <FaHtml5 size={size}/>,
        },
        {
          name: 'JavaScript',
          Icon: ({size}:IconProps) => <FaJs size={size}/>,
        },
        {
          name: 'NodeJs',
          Icon: ({size}:IconProps) => <FaNodeJs size={size}/>,
        },
        {
          name: 'Java',
          Icon: ({size}:IconProps) => <FaJava size={size}/>,
        },
        {
          name: 'CSS3',
          Icon: ({size}:IconProps) => <FaCss3Alt size={size}/>,
        },
        {
          name: 'Git',
          Icon: ({size}:IconProps) => <FaGitAlt size={size}/>,
        },
        {
          name: 'Python',
          Icon: ({size}:IconProps) => <FaPython size={size}/>,
        },
        {
          name: 'Swift',
          Icon: ({size}:IconProps) => <FaSwift size={size}/>,
        },
        {
          name: 'Kotlin',
          Icon: ({size}:IconProps) => <SiKotlin size={size}/>,
        },
        {
          name: 'C#',
          Icon: ({size}:IconProps) => <SiSharp size={size}/>,
        },
        {
          name: 'PHP',
          Icon: ({size}:IconProps) => <FaPhp size={size}/>,
        },
    ];
    return {langs, proglangs}
}