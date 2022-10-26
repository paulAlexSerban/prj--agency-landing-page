import "../styles/styles.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
