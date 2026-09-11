import { type NextPage } from "next";
import Head from "next/head";
import Qualifications from "~/sections/Qualifications";
import useTranslations from "~/i18n/useTranslations";

const QualificationsPage: NextPage = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{`Jona De Neve - ${t.nav.qualifications}`}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Qualifications />
      </main>
    </>
  );
};

export default QualificationsPage;
