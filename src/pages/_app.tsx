import "@/assets/styles/_styles.scss";
import { AppProps } from "next/app";
import { Abril_Fatface } from "next/font/google";
import Head from "next/head";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Johan Mouchet</title>
        <meta
          name="description"
          content="Design System Architect based in Melbourne, I'm excited about developing creative and intuitive web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Johan Mouchet" />
        <meta property="og:site_name" content="Johan Mouchet" />
        <meta
          property="og:description"
          content="Design System Architect based in Melbourne, I'm excited about developing creative and intuitive web applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#21354f" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#21354f" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <style jsx global>{`
        :root {
          --font-abril-fatface: ${abrilFatface.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
