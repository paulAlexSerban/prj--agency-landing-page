import config from "./config";
import Head from "next/head";
import styles from "@/styles/templates/generic/generic.module.scss";
import { useEffect, useId } from "react";
import GenericTemplate from "./Generic.template";

// MODULES
import Navigation from "@/core/organisms/Navigation/Navigation.js";
import Footer from "@/core/organisms/Footer/Footer.js";

// @todo: import mastheadCss from "@/styles/_05_library/organisms/masthead/masthead.module.scss";

export default function Generic({ title, keywords, description, children, content, pageProperties }) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`).forEach((el) => {
      const template = new GenericTemplate(el);
    });
  });

  const mainContent = content.main;

  return (
    <div data-next-cmp={`${config.name}-${ID}`} className={`${styles.base}`} id="page-top">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      {children}
      <Navigation sections={mainContent} />
      <Footer />
    </div>
  );
}

Generic.defaultProps = { ...config.defaultProps };
