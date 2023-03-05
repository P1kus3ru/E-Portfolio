import { type NextPage } from "next";
import Head from "next/head";
import useSocials from "~/hooks/useSocials";

const Home: NextPage = () => {
  const socials = useSocials();
  return (
    <>
      <Head>
        <title>Jona De Neve</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full flex-col items-center justify-center overflow-y-scroll">
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Jona
                        <span className="text-primary"> De Neve</span>
                    </h1>
                    <div className="">
                        <a href="../../public/CV_DeNeveJona_2022.pdf" download="CV_JonaDeNeve_Algemeen">CV</a> ·
                        Veldestraat 27 Merendree 9850 · 26/03/2002  · 0491599081 ·
                        <a href="mailto:jona.deneve@student.hogent.be">jona.de.neve@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Student in de IT, 3de modeltraject Toegepaste Informatica aan de Hogent.</p>
                    <div className="">
                      {socials.map((x) => (
                        <>
                        <a href={x.link} target="_blank" rel="noreferrer">
                            <x.Icon />
                        </a>
                        </>
                      ))} 
                    </div>
                </div>
            </section>
      </main>
    </>
  );
};

export default Home;
