import { type NextPage } from "next";
import Head from "next/head";
import Skills from "~/sections/Skills";
import useTranslations from "~/i18n/useTranslations";

const SkillsPage: NextPage = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{`Jona De Neve - ${t.nav.skills}`}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Skills />
      </main>
    </>
  );
};

export default SkillsPage;
