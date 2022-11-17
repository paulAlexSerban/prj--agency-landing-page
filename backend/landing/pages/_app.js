import "@/styles/base/base.scss";
import "@/styles/pages/index.page.scss";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
