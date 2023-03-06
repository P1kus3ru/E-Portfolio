import { FaPython, FaReact, FaHtml5, FaJava, FaCss3Alt, FaGitAlt, FaJs, FaNodeJs, FaSwift, FaPhp } from 'react-icons/fa';
import { SiKotlin, SiCsharp } from 'react-icons/si';

export default function useSkills() {
    const langs = [
        {
          name: 'Nederlands',
          level: 90,
        },
        {
          name: 'Engels',
          level: 70,
        },
        {
          name: 'French',
          level: 40,
        },
    ];
    const proglangs = [
        {
          name: 'React',
          Icon: <FaReact />,
        },
        {
          name: 'HTML5',
          Icon: <FaHtml5 />,
        },
        {
          name: 'JavaScript',
          Icon: <FaJs />,
        },
        {
          name: 'NodeJs',
          Icon: <FaNodeJs />,
        },
        {
          name: 'Java',
          Icon: <FaJava />,
        },
        {
          name: 'CSS3',
          Icon: <FaCss3Alt />,
        },
        {
          name: 'Git',
          Icon: <FaGitAlt />,
        },
        {
          name: 'Python',
          Icon: <FaPython />,
        },
        {
          name: 'Swift',
          Icon: <FaSwift />,
        },
        {
          name: 'Kotlin',
          Icon: <SiKotlin />,
        },
        {
          name: 'C#',
          Icon: <SiCsharp />,
        },
        {
          name: 'PHP',
          Icon: <FaPhp />,
        },
    ];
    return {langs, proglangs}
}