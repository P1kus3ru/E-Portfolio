import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import usePersonalInfo from "~/hooks/usePersonalInfo";
import useSocials from "~/hooks/useSocials";

const About = () => {
  const socials = useSocials();
  const info = usePersonalInfo();
  const refHero = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    console.log(refHero.current?.offsetHeight);
  }, []);
  
  return (
    <>
      <section className="hero min-h-screen py-16 w-full" id="about">
        <div ref={refHero} className="hero-content flex-col md:flex-row md:gap-10">
          <Image 
          src="/images/Avatar.png"
          alt="Profile picture"
          width={500}
          height={500}
          className="mask mask-squircle w-full md:max-w-2xl md:w-1/2"
          priority
          />
          <div className="">
              <h1 className="mb-0 text-5xl md:text-7xl font-bold uppercase md:mt-auto">
                  Jona
                  <span className="text-primary"> De Neve</span>
              </h1>
              <div className="text-lg font-bold text-secondary mb-5 md:mb-2">
                  {info.birthdate} · {info.address} · {info.phone} ·
                  <a href={`mailto:${info.email}`}> {info.email}</a>
              </div>
              <p className="mb-5"></p>
              <div className="flex gap-5 justify-center md:justify-start">
                {socials.map((x) => (
                  <a key={x.name} href={x.link} target="_blank" rel="noreferrer">
                      <x.Icon size={30}/>
                  </a>
                ))}
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
  
  export default About;