import { type NextPage } from "next";
import Head from "next/head";
import Skills from "~/sections/Skills";

const SkillsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jona De Neve - Skills</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Skills />
      </main>
    </>
  );
};

export default SkillsPage;
