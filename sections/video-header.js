import Script from "next/script";

export default function VideoHeader() {
  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div className="relative z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl">
        <div className="xl:ml-[750px] max-w-7xl w-full pt-56 lg:pt-16 pb-20 text-center xl:py-48 xl:text-left">
          <h1 className="max-w-lg text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">
              SAVEDiversity - Wir können nur schützen, was wir kennen
            </span>
          </h1>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none filter brightness-75"
        id="maxi"
      >
        <source src="/maxi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Script strategy="lazyOnload">
        {`document.getElementById("maxi").playbackRate = 0.5`}
      </Script>
    </header>
  );
}
