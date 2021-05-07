import Head from "next/head";

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="SAVEDiversity 3D Demo" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <iframe
          src="https://my.spline.design/savediversityphones-374904d8691c3c2cf87116bc46488ae7/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}
