import { type NextPage } from "next";
import Head from "next/head";
import Interests from "~/sections/Interests";

const InterestsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jona De Neve - Interests</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Interests />
      </main>
    </>
  );
};

export default InterestsPage;
