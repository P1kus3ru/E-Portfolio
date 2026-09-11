import { useRouter } from "next/router";
import { DEFAULT_LOCALE, type Locale } from "~/i18n/locales";

interface ProjectItem {
  name: string;
  desc: string;
  date: string;
}

interface ProjectCategory {
  type: string;
  projects: ProjectItem[];
}

const content: Record<Locale, ProjectCategory[]> = {
  "nl-BE": [
    {
      type: 'Elektronica',
      projects: [
        {
          name: "Simon Says met Arduino UNO",
          desc: "Simon says met Arduino. In dit project moesten we een Simon Says spel maken met behulp van een Arduino. Hierbij moesten we gebruik maken van verschillende elektronische componenten zoals LED's, knoppen en een buzzer.",
          date: "February 2024 - Juni 2024",
        },
        {
          name: "Japanse LED Lamp",
          desc: "Voor het vak 'Vermogenelektronica' maakte ik een Japanse LED lamp. Hierbij moesten we een hoog vermogen LED aansturen.",
          date: "Oktober 2025 - December 2025",
        },
        {
          name: "Universele kabeltester",
          desc: "Een universele kabeltester die ontworpen is om de functionaliteit van verschillende soorten kabels te testen.",
          date: "Februari 2026 - Juni 2026",
        },
      ],
    },
    {
      type: 'Web development',
      projects: [
        {
          name: "Hogent project Delaware B2B",
          desc: "Tijdens het 3de jaar van de opleiding Toegepaste informatica aan de HoGent hebben mijn team en ik aan de hand van Blazor en .Net een B2B app voor Delaware in elkaar gestoken. Hierop werden orders bijgehouden die dan met een Track & Trace gevolgd kunnen worden.",
          date: "Oktober 2022 - December 2022",
        },
        {
          name: "Hogent project Fluvius",
          desc: "Tijdens het 2de jaar van de opleiding Toegepaste informatica aan de HoGent hebben mijn team en ik aan de hand van React een web applicatie gemaakt voor Fluvius. Dit was een dashboard waar ze hun doelstellingen kunnen op bekijken.",
          date: "Februari 2022 - Juni 2022",
        },
        {
          name: "Hogent project 'P1kus3ru's arcade'",
          desc: "Tijdens het 2de jaar van de opleiding Toegepaste informatica aan de HoGent heb ik aan de hand van React een arcade gemaakt. Hierop kan men voornamelijk 'GuessWho' op spelen.",
          date: "Oktober 2021 - December 2021",
        },
        {
          name: "Eindwerk ICT Sint-Hendrik",
          desc: "In het voorlaatste jaar in het middelbaar heb ik het spel 'Light Out' gemaakt door gebruik te maken van html en php. Hierbij moest men door lampjes aan en uit te zetten zorgen dat alle lampjes uit waren.",
          date: "Januari 2019 - Juni 2019",
        },
      ],
    },
    {
      type: 'Desktop development',
      projects: [
        {
          name: "Hogent project Fluvius",
          desc: "Tijdens het 2de jaar van de opleiding Toegepaste informatica aan de HoGent hebben mijn team en ik aan de hand van React een desktop applicatie gemaakt voor Fluvius. Dit was een dashboard waar ze doelstellingen kunnen aanmaken en toevoegen aan de databank.",
          date: "Februari 2022 - Juni 2022",
        },
        {
          name: "Software Development Project: Rummikub",
          desc: "In het eerste modeltraject van de opleiding Toegepaste informatica aan de HoGent, heb ik samen met 3 anderen, het welgekende spel, Rummikub gemaakt in vorm van een Java Applicatie.",
          date: "Februari 2021 - Mei 2021",
        },
      ],
    },
    {
      type: 'Mobile development',
      projects: [
        {
          name: "Hogent project Delaware B2B (Android)",
          desc: "Tijdens het 3de jaar van de opleiding Toegepaste informatica aan de HoGent hebben mijn team en ik aan de hand van Kotlin een B2B android app voor Delaware in elkaar gestoken. Hierop werden orders bijgehouden die dan met een Track & Trace gevolgd kunnen worden.",
          date: "Oktober 2022 - December 2022",
        },
        {
          name: "Hogent project 'MADiOS'",
          desc: "Tijdens het 3de jaar van de opleiding Toegepaste informatica aan de HoGent heb ik aan de hand van Swift een Squirdle iOS app in elkaar gestoken. Dit is een spel gebaseerd op de gelijknamige browsergame.",
          date: "Oktober 2022 - December 2022",
        },
      ],
    },
    {
      type: 'Robotica',
      projects: [
        {
          name: "Keuzevak Robotica Sint-Hendrik",
          desc: "Als keuzevak in het laatste jaar in het middelbaar. Hier moest een robot gemaakt worden die onder andere een lijn kon volgen.",
          date: "September 2019 - Maart 2020",
        },
      ],
    },
  ],
  "en-GB": [
    {
      type: 'Electronics',
      projects: [
        {
          name: "Simon Says with Arduino UNO",
          desc: "Simon Says with Arduino. For this project we had to build a Simon Says game using an Arduino. This required using various electronic components such as LEDs, buttons and a buzzer.",
          date: "February 2024 - June 2024",
        },
        {
          name: "Japanese LED Lamp",
          desc: "For the 'Power Electronics' course, I built a Japanese-style LED lamp, which involved driving a high-power LED.",
          date: "October 2025 - December 2025",
        },
        {
          name: "Universal cable tester",
          desc: "A universal cable tester designed to test the functionality of various types of cables.",
          date: "February 2026 - June 2026",
        },
      ],
    },
    {
      type: 'Web development',
      projects: [
        {
          name: "Hogent project Delaware B2B",
          desc: "During the 3rd year of the Applied Computer Science programme at HoGent, my team and I built a B2B app for Delaware using Blazor and .NET. It tracked orders that could then be followed via a Track & Trace feature.",
          date: "October 2022 - December 2022",
        },
        {
          name: "Hogent project Fluvius",
          desc: "During the 2nd year of the Applied Computer Science programme at HoGent, my team and I built a web application for Fluvius using React. It was a dashboard where they could view their objectives.",
          date: "February 2022 - June 2022",
        },
        {
          name: "Hogent project 'P1kus3ru's arcade'",
          desc: "During the 2nd year of the Applied Computer Science programme at HoGent, I built an arcade using React, mainly featuring a 'GuessWho' game.",
          date: "October 2021 - December 2021",
        },
        {
          name: "ICT Final Project Sint-Hendrik",
          desc: "In the second-to-last year of secondary school, I built the game 'Light Out' using HTML and PHP. The goal was to turn all the lights off by switching them on and off.",
          date: "January 2019 - June 2019",
        },
      ],
    },
    {
      type: 'Desktop development',
      projects: [
        {
          name: "Hogent project Fluvius",
          desc: "During the 2nd year of the Applied Computer Science programme at HoGent, my team and I built a desktop application for Fluvius using React. It was a dashboard where they could create objectives and add them to the database.",
          date: "February 2022 - June 2022",
        },
        {
          name: "Software Development Project: Rummikub",
          desc: "In the first model track of the Applied Computer Science programme at HoGent, I worked with 3 others to build the well-known game Rummikub as a Java application.",
          date: "February 2021 - May 2021",
        },
      ],
    },
    {
      type: 'Mobile development',
      projects: [
        {
          name: "Hogent project Delaware B2B (Android)",
          desc: "During the 3rd year of the Applied Computer Science programme at HoGent, my team and I built a B2B Android app for Delaware using Kotlin. It tracked orders that could then be followed via a Track & Trace feature.",
          date: "October 2022 - December 2022",
        },
        {
          name: "Hogent project 'MADiOS'",
          desc: "During the 3rd year of the Applied Computer Science programme at HoGent, I built a Squirdle iOS app using Swift — a game based on the browser game of the same name.",
          date: "October 2022 - December 2022",
        },
      ],
    },
    {
      type: 'Robotics',
      projects: [
        {
          name: "Robotics Elective Sint-Hendrik",
          desc: "An elective course in the final year of secondary school. We had to build a robot that could, among other things, follow a line.",
          date: "September 2019 - March 2020",
        },
      ],
    },
  ],
  fr: [
    {
      type: 'Électronique',
      projects: [
        {
          name: "Simon Says avec Arduino UNO",
          desc: "Simon Says avec Arduino. Pour ce projet, nous devions créer un jeu Simon Says à l'aide d'un Arduino, en utilisant divers composants électroniques tels que des LED, des boutons et un buzzer.",
          date: "Février 2024 - Juin 2024",
        },
        {
          name: "Lampe LED japonaise",
          desc: "Pour le cours d'« Électronique de puissance », j'ai réalisé une lampe LED de style japonais, ce qui impliquait de piloter une LED de forte puissance.",
          date: "Octobre 2025 - Décembre 2025",
        },
        {
          name: "Testeur de câbles universel",
          desc: "Un testeur de câbles universel conçu pour vérifier le bon fonctionnement de différents types de câbles.",
          date: "Février 2026 - Juin 2026",
        },
      ],
    },
    {
      type: 'Développement web',
      projects: [
        {
          name: "Hogent project Delaware B2B",
          desc: "Pendant la 3e année du bachelier en Informatique Appliquée à la HoGent, mon équipe et moi avons développé une application B2B pour Delaware avec Blazor et .NET. Elle permettait de suivre des commandes grâce à une fonctionnalité de Track & Trace.",
          date: "Octobre 2022 - Décembre 2022",
        },
        {
          name: "Hogent project Fluvius",
          desc: "Pendant la 2e année du bachelier en Informatique Appliquée à la HoGent, mon équipe et moi avons développé une application web pour Fluvius avec React. Il s'agissait d'un tableau de bord permettant de consulter leurs objectifs.",
          date: "Février 2022 - Juin 2022",
        },
        {
          name: "Hogent project 'P1kus3ru's arcade'",
          desc: "Pendant la 2e année du bachelier en Informatique Appliquée à la HoGent, j'ai créé une arcade avec React, sur laquelle on peut principalement jouer à « GuessWho ».",
          date: "Octobre 2021 - Décembre 2021",
        },
        {
          name: "Travail de fin d'études ICT Sint-Hendrik",
          desc: "En avant-dernière année du secondaire, j'ai créé le jeu « Light Out » en HTML et PHP. Le but était d'éteindre toutes les lumières en les allumant et les éteignant.",
          date: "Janvier 2019 - Juin 2019",
        },
      ],
    },
    {
      type: 'Développement desktop',
      projects: [
        {
          name: "Hogent project Fluvius",
          desc: "Pendant la 2e année du bachelier en Informatique Appliquée à la HoGent, mon équipe et moi avons développé une application desktop pour Fluvius avec React. Il s'agissait d'un tableau de bord permettant de créer des objectifs et de les ajouter à la base de données.",
          date: "Février 2022 - Juin 2022",
        },
        {
          name: "Software Development Project: Rummikub",
          desc: "Dans le premier trajet modèle du bachelier en Informatique Appliquée à la HoGent, j'ai réalisé avec 3 autres étudiants le célèbre jeu Rummikub sous la forme d'une application Java.",
          date: "Février 2021 - Mai 2021",
        },
      ],
    },
    {
      type: 'Développement mobile',
      projects: [
        {
          name: "Hogent project Delaware B2B (Android)",
          desc: "Pendant la 3e année du bachelier en Informatique Appliquée à la HoGent, mon équipe et moi avons développé une application Android B2B pour Delaware avec Kotlin. Elle permettait de suivre des commandes grâce à une fonctionnalité de Track & Trace.",
          date: "Octobre 2022 - Décembre 2022",
        },
        {
          name: "Hogent project 'MADiOS'",
          desc: "Pendant la 3e année du bachelier en Informatique Appliquée à la HoGent, j'ai développé une application iOS Squirdle avec Swift, un jeu basé sur le jeu de navigateur du même nom.",
          date: "Octobre 2022 - Décembre 2022",
        },
      ],
    },
    {
      type: 'Robotique',
      projects: [
        {
          name: "Option Robotique Sint-Hendrik",
          desc: "Un cours à option en dernière année du secondaire. Il fallait construire un robot capable, entre autres, de suivre une ligne.",
          date: "Septembre 2019 - Mars 2020",
        },
      ],
    },
  ],
};

export default function useProjects() {
  const { locale } = useRouter();
  return content[(locale as Locale) ?? DEFAULT_LOCALE];
}
