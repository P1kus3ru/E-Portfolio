import { type NextPage } from "next";
import Head from "next/head";
import About from "~/sections/About";
import Education from "~/sections/Education";
import Experience from "~/sections/Experience";
import Interests from "~/sections/Interests";
import Skills from "~/sections/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jona De Neve</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-full flex-col items-center">
        <About />
        <div className="divider"></div>
        <Experience />
        <div className="divider"></div>
        <Education />
        <div className="divider"></div>
        <Skills />
        <div className="divider"></div>
        <Interests />
      </main>
    </>
  );
};

export default Home;
