import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="icon" type="image/x-icon" href="svgs/favicon.svg" />

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;800;900&display=swap"
                type="text/css"
                rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Mohave:wght@300&display=swap"
                type="text/css"
                rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
