import { config } from "./config";
import Head from "next/head";
import styles from "@/styles/_06_system/templates/generic/generic.module.scss";
import { useEffect, useId } from "react";
import GenericTemplate from "./Generic.template";

import Navigation from "@/organisms/Navigation/Navigation.js";
import Footer from "@/organisms/Footer/Footer.js";

// @todo: import mastheadCss from "@/styles/_05_library/organisms/masthead/masthead.module.scss";

export default function Generic({ title, keywords, description, children, pageType }) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => {
      const template = new GenericTemplate(el);
    });
  });

  return (
    <div data-next={`${config.name}-${ID}`}
        className={`${styles.base}`}
        id="page-top"
        page-type={pageType}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      {children}
      <Footer />
    </div>
  );
}

Generic.defaultProps = { ...config.defaultProps };