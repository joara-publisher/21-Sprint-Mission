import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "@/styles/globals.css";

const nanumSquare = localFont({
  src: [
    { path: "../public/fonts/NanumSquareL.woff2", weight: "300" },
    { path: "../public/fonts/NanumSquareR.woff2", weight: "400" },
    { path: "../public/fonts/NanumSquareB.woff2", weight: "700" },
    { path: "../public/fonts/NanumSquareEB.woff2", weight: "800" },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>do it!</title>
        <meta
          name="description"
          content="할 일 목록을 관리하는 홈페이지 do it!"
        />
      </Head>
      <div className={nanumSquare.className}>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}
