import Head from "next/head";
import Header from "@/components/Header";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apple redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Landing />
      </main>
    </>
  );
}
