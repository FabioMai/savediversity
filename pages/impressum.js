import Head from "next/head";
import Navbar from "../components/navbar";

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum</title>
        <meta name="description" content="Impressum von SAVEDiversity" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-16">
        Impressum
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <br></br>
        <p>
          Fabio Maienschein
          <br />
          Lochhamer Stra&szlig;e 7a
          <br />
          82152 Planegg
        </p>

        <h2 className="text-2xl text-black mt-8">Kontakt</h2>
        <p>E-Mail: kontakt@savediversity.de</p>
      </p>
    </>
  );
}
