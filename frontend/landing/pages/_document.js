import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="svgs/favicon.svg" />
        <meta name="robots" content="all" />
      </Head>
      <body id="pageTop">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
