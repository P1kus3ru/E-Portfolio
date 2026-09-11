import { type NextPage } from "next";
import Head from "next/head";
import Projects from "~/sections/Projects";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jona De Neve - Projects</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Projects />
      </main>
    </>
  );
};

export default ProjectsPage;
