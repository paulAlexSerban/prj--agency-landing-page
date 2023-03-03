/**
 * content from ./content/landing and ./content/fragments should be rendered here
 */

import aboutUs from "@/content/landing/about-us.json";
import products from "@/content/landing/products.json";
import benefits from "@/content/landing/benefits.json";
import contact from "@/content/landing/contact.json";

export default async function getStaticProps() {
  return {
    props: {
      pageProperties: {
        templateType: "",
      },
      content: {
        main: {
          spotlight: { ...aboutUs },
          benefits: { ...benefits },
          spotlight_1: { ...products },
          contact: { ...contact },
        },
      },
    },
  };
}
