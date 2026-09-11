import { type NextPage } from "next";
import Head from "next/head";
import About from "~/sections/About";
import useTranslations from "~/i18n/useTranslations";

const Home: NextPage = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>Jona De Neve</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <About />
      </main>
    </>
  );
};

export default Home;
