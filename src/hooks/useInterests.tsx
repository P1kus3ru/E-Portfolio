import Tnok from '../../public/images/GalaTnok.jpg';
import Loko from '../../public/images/Loko.jpg';
import Judo from '../../public/images/JudoTraining.jpg';

export default function useInterests() {
    return [
      {
        name: 'Tomo no Kai',
        desc: 'De studenten vereniging van de richting Japanologie aan de UGent. ',
        img: {
            src: Tnok,
            alt:'Gala TnoK 2023',
        }
      },
      {
        name: 'Lovendegemse Koperblazers (Loko)',
        desc: 'De fanfare uit Lovendegem waar ik mij bij aansloot in het 2e leerjaar. Hier speel ik op de bugel. Sinds 2022 zit ik ook in het bestuur van loko waar ik vooral de technische zaken afhandel en de affiche maak.',
        img: {
            src: Loko,
            alt:'Loko 2019',
        }
      },
      {
        name: 'Judoclub Nevele',
        desc: 'Sinds mijn 6jaar ben ik ook lid bij judoclub Nevele. Zo ga ik 2 keer in de week naar de trainingen. Ik behaalde al een bruine gorden en ben op weg naar zwart.',
        img: {
            src: Judo,
            alt:'Judo',
        }
      },
    ];
}