import Head from "next/head";
import Script from "next/script";
import Navigation from "@/components/Navigation.js";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";

export default function GenericTemplate({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />

        <Script id="stripe-js" src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" />
      </Head>

      <Navigation />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

GenericTemplate.defaultProps = {
  title: "Agency",
  keywords: "agency, website, landing page",
  description: "Landing age for agency website",
};
