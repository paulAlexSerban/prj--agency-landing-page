import "@/styles/_03_base/base.scss";
import "@/styles/_06_system/pages/index.page.scss";
import "@/styles/_06_system/templates/generic.template.scss";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
