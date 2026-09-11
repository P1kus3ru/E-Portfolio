import { type NextPage } from "next";
import Head from "next/head";
import Resume from "~/sections/Resume";
import useTranslations from "~/i18n/useTranslations";

const ResumePage: NextPage = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{`Jona De Neve - ${t.nav.resume}`}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center print:block">
        <Resume />
      </main>
    </>
  );
};

export default ResumePage;
