import Image from "next/image";
import useSocials from "~/hooks/useSocials";
import avatar from '../../public/images/Avatar.png';

const About = () => {
    const socials = useSocials();
    return (
      <>
        <section className="flex flex-col md:flex-row justify-around" id="about">
            <Image 
            src={avatar}
            alt="Profile picture" 
            className="" 
            />
            <div className="mt-auto">
                <h1 className="mb-0 text-5xl md:text-8xl font-bold uppercase md:mt-auto">
                    Jona
                    <span className="text-primary"> De Neve</span>
                </h1>
                <div className="text-lg font-bold text-secondary mb-5 md:mb-0">
                    <a href="../../public/CV_DeNeveJona_2022.pdf" download="CV_JonaDeNeve_Algemeen">CV</a> ·
                    Veldestraat 27 Merendree 9850 · 26/03/2002  · 0491599081 ·
                    <a href="mailto:jona.de.neve@gmail.com"> jona.de.neve@gmail.com</a>
                </div>
                <p className="mb-5">Student in de IT, 3de modeltraject Toegepaste Informatica aan de Hogent.</p>
                <div className="flex gap-5 justify-center md:justify-start">
                  {socials.map((x) => (
                    <>
                    <a href={x.link} target="_blank" rel="noreferrer">
                        <x.Icon size={30}/>
                    </a>
                    </>
                  ))} 
                </div>
            </div>
        </section>
      </>
    );
  };
  
  export default About;