import Head from "next/head";
import CTA from "../sections/cta";
import VideoHeader from "../sections/video-header";
import Team from "../sections/team";
import Video from "../sections/video";
import Footer from "../sections/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>SAVEDiversity</title>
        <meta name="description" content="Landing Page von SAVEDiversity" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoHeader></VideoHeader>
      <CTA></CTA>
      <Video></Video>
      <Team></Team>
      <Footer></Footer>
    </>
  );
}
