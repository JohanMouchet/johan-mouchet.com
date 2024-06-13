import "@/assets/styles/_styles.scss";
import { AppProps } from "next/app";
import { Abril_Fatface, Inria_Serif, Source_Sans_3 } from "next/font/google";
import Head from "next/head";

const display = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});
const serif = Inria_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const sans = Source_Sans_3({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Johan Mouchet — Design System Architect</title>
        <meta
          name="description"
          content="Design System Architect with front-end engineering expertise, seamlessly blending design and engineering to create delightful user-centred products."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Johan Mouchet — Design System Architect"
        />
        <meta property="og:site_name" content="Johan Mouchet" />
        <meta
          property="og:description"
          content="Design System Architect with front-end engineering expertise, seamlessly blending design and engineering to create delightful user-centred products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f1f3f6" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#273042" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <style jsx global>{`
        :root {
          --font-display: ${display.style.fontFamily};
          --font-serif: ${serif.style.fontFamily};
          --font-sans: ${sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
