/**
 * content from ./content/landing and ./content/fragments should be rendered here
 */

import aboutUs from "@/content/landing/about-us.json";
import services from "@/content/landing/services.json";
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
          spotlight_1: { ...services },
          spotlight_2: { ...products },
          benefits: {...benefits},
          contact: { ...contact}
        },
      },
    },
  };
}
