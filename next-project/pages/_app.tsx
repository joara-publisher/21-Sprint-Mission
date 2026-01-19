import type { AppProps } from "next/app";
import localFont from "next/font/local";
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
    <div className={nanumSquare.className}>
      <Component {...pageProps} />
    </div>
  );
}
