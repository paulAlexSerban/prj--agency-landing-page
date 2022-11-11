import { config } from "./config";
import Head from "next/head";
import styles from "@/styles/_06_system/templates/landing/landing.module.scss";
import { useEffect, useId } from "react";
import { LandingTemplate } from "./Landing.template";

import Navigation from "@/organisms/Navigation/Navigation.js";
import Footer from "@/organisms/Footer/Footer.js";
import mastheadCss from "@/styles/_05_library/organisms/masthead/masthead.module.scss";

export default function Landing({ title, keywords, description, children, pageType }) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => {
      const template = new LandingTemplate(el);
    });
  });

  return (
    <div data-next={`${config.name}-${ID}`}
         id="page-top"
         className={`${styles.base} ${mastheadCss.isPreload}`}
         page-type={pageType}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

Landing.defaultProps = { ...config.defaultProps };
