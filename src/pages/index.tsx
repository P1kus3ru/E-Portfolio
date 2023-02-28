import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import { useState } from "react";

const Home: NextPage = () => {
  const [inputText, setInputText] = useState('');
  const hello = api.example.hello.useQuery({text: inputText});


  return (
    <>
      <Head>
        <title>Jona De Neve</title>
        <meta name="description" content="E-Porfolio of Jona De Neve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <button className="btn btn-primary">Button</button>
      </main>
    </>
  );
};

export default Home;
