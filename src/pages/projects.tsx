import { type NextPage } from "next";
import Head from "next/head";
import Projects from "~/sections/Projects";
import useTranslations from "~/i18n/useTranslations";

const ProjectsPage: NextPage = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{`Jona De Neve - ${t.nav.projects}`}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Projects />
      </main>
    </>
  );
};

export default ProjectsPage;
