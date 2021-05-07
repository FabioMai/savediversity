import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Header from "../sections/header";
import Features from "../sections/features";
import Demo from "../sections/demo";
import Team from "../sections/team";
import Presse from "../sections/presse";
import Footer from "../sections/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>SAVEDiversity</title>
        <meta name="description" content="Landing Page der SAVEDiversity App" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <Header></Header>
      <Features></Features>
      <Demo></Demo>
      <Team></Team>
      <Presse></Presse>
      <Footer></Footer>
    </>
  );
}
