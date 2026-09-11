import { type NextPage } from "next";
import Head from "next/head";
import Education from "~/sections/Education";
import useTranslations from "~/i18n/useTranslations";

const EducationPage: NextPage = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{`Jona De Neve - ${t.nav.education}`}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Education />
      </main>
    </>
  );
};

export default EducationPage;
