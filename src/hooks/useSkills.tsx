import { FaPython, FaReact, FaHtml5, FaJava, FaCss3Alt, FaGitAlt, FaJs, FaNodeJs, FaSwift, FaPhp } from 'react-icons/fa';
import { SiKotlin, SiCsharp } from 'react-icons/si';

interface IconProps  { 
    size?: number
  }

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
          Icon: ({size}:IconProps) => <SiCsharp size={size}/>,
        },
        {
          name: 'PHP',
          Icon: ({size}:IconProps) => <FaPhp size={size}/>,
        },
    ];
    return {langs, proglangs}
}