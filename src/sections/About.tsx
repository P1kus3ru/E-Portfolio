import Image from "next/image";
import { useEffect, useRef } from "react";
import useSocials from "~/hooks/useSocials";
import avatar from '../../public/images/Avatar.png';

const About = () => {
  const socials = useSocials();
  const refHero = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    console.log(refHero.current?.offsetHeight);
  }, []);
  
  return (
    <>
      <section className="hero min-h-full py-16 w-full" id="about">
        <div ref={refHero} className="hero-content flex-col lg:flex-row md:gap-10">
          <Image 
          src={avatar}
          alt="Profile picture" 
          className="mask mask-squircle max-w-2xl lg:w-1/2"
          priority
          />
          <div className="">
              <h1 className="mb-0 text-5xl md:text-7xl font-bold uppercase md:mt-auto">
                  Jona
                  <span className="text-primary"> De Neve</span>
              </h1>
              <div className="text-lg font-bold text-secondary mb-5 md:mb-2">
                  <a href="../../public/CV_DeNeveJona_2022.pdf" download="CV_JonaDeNeve_Algemeen">CV</a> ·
                  Veldestraat 27 Merendree 9850 · 26/03/2002  · 0491599081 ·
                  <a href="mailto:jona.de.neve@gmail.com"> jona.de.neve@gmail.com</a>
              </div>
              <p className="mb-5">Student in de IT, 3de modeltraject Toegepaste Informatica aan de Hogent.</p>
              <div className="flex gap-5 justify-center md:justify-start">
                {socials.map((x) => (
                  <>
                  <a key={x.name} href={x.link} target="_blank" rel="noreferrer">
                      <x.Icon size={30}/>
                  </a>
                  </>
                ))} 
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
  
  export default About;