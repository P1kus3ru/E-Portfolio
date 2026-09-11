import { type NextPage } from "next";
import Head from "next/head";
import Education from "~/sections/Education";

const EducationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jona De Neve - Education</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Education />
      </main>
    </>
  );
};

export default EducationPage;
