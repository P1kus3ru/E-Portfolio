import { type NextPage } from "next";
import Head from "next/head";
import Experience from "~/sections/Experience";
import useTranslations from "~/i18n/useTranslations";

const ExperiencePage: NextPage = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{`Jona De Neve - ${t.nav.experience}`}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Experience />
      </main>
    </>
  );
};

export default ExperiencePage;
