import "@/styles/base/base.scss";
import "@/styles/pages/index.page.scss";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
