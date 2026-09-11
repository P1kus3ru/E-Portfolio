import { type NextPage } from "next";
import Head from "next/head";
import Experience from "~/sections/Experience";

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jona De Neve - Experience</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Experience />
      </main>
    </>
  );
};

export default ExperiencePage;
