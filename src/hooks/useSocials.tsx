import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

interface SocialProps  { 
  size?: number
}

export default function useSocials() {
    return [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/JonaDeNeve',
        Icon: ({size}:SocialProps) => <FaLinkedin size={size} />,
      },
      {
        name: 'Github',
        link: 'https://github.com/P1kus3ru',
        Icon: ({size}:SocialProps) => <FaGithub size={size} />,
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/DeNeveJona',
        Icon: ({size}:SocialProps) => <FaFacebook size={size} />,
      },
    ];
}