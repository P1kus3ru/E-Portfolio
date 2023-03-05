import { type NextPage } from "next";
import Head from "next/head";
import About from "~/sections/About";
import Experience from "~/sections/Experience";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jona De Neve</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full flex-col items-center">
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <hr className="m-0" />
        <hr className="m-0" />
      </main>
    </>
  );
};

export default Home;
