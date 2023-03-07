import Tnok from '../../public/images/GalaTnok.png';
import Loko from '../../public/images/Loko.jpg'

export default function useInterests() {
    return [
      {
        name: 'Tomo no Kai',
        desc: 'De studenten vereniging van de richting Japanologie aan de UGent. Waar ik mij bij aansloot.',
        img: {
            src: Tnok,
            alt:'Gala TnoK 2023',
        }
      },
      {
        name: 'Lovendegemse Koperblazers',
        desc: 'De fanfare waar ik in speel sinds het 2e leerjaar.',
        img: {
            src: Loko,
            alt:'Loko 2019',
        }
      },
    ];
}