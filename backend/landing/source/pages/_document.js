import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=optional" rel="stylesheet" type="text/css" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700&display=optional"
            rel="stylesheet"
            type="text/css"
          />


        </Head>
        <body id="page-top">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
