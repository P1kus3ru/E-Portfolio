import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export default function useSocials() {
    return [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/JonaDeNeve',
        Icon: () => <FaLinkedin />,
      },
      {
        name: 'Github',
        link: 'https://github.com/P1kus3ru',
        Icon: () => <FaGithub />,
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/DeNeveJona',
        Icon: () => <FaFacebook />,
      },
    ];
}