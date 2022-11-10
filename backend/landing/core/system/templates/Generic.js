import { config } from "./Generic.config";
import Head from "next/head";
import Navigation from "@/organisms/Navigation/Navigation.js";
import MastHeader from "@/organisms/MastHeader/MastHeader.js";
import Footer from "@/organisms/Footer/Footer.js";
import { useEffect, useId } from "react";
import { GenericTemplate } from "./Generic.template";
import mastheadCss from "@/styles/_05_library/organisms/masthead/masthead.module.scss";

export default function Generic({ title, keywords, description, children }) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => {new GenericTemplate(el).init()});
  },);

  return (
      <div data-next={`${config.name}-${ID}`} id="page-top" className={mastheadCss.isPreload}>
        <Head>
          <title>{title}</title>
          <meta name="keywords" content={keywords} />
          <meta name="description" content={description} />
        </Head>
        <Navigation />
        <MastHeader />
        {children}
        <Footer />
      </div>
  );
}

Generic.defaultProps = { ...config.defaultProps };
