import { type NextPage } from "next";
import Head from "next/head";
import Interests from "~/sections/Interests";
import useTranslations from "~/i18n/useTranslations";

const InterestsPage: NextPage = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{`Jona De Neve - ${t.nav.interests}`}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Interests />
      </main>
    </>
  );
};

export default InterestsPage;
