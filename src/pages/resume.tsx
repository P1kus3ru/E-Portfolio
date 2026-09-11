import { type NextPage } from "next";
import Head from "next/head";
import Resume from "~/sections/Resume";

const ResumePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jona De Neve - Resume</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center print:block">
        <Resume />
      </main>
    </>
  );
};

export default ResumePage;
