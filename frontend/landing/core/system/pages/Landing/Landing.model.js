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
        project_name: process.env.PROJECT_NAME,
        recaptcha_site_key: process.env.RECAPTCHA_SITE_KEY,
        form_submit_endpoint: process.env.SUBMIT_FORM_ENDPOINT,
      },
      content: {
        main: {
          spotlight: { ...aboutUs },
          benefits: { ...benefits },
          spotlight_1: { ...products },
          contact: { ...contact },
        },
        socialMediaList: [
          {
            name: "envelope",
            href: "mailto:contact@linxit.ro",
            label: "Email",
          },
          {
            name: "phone",
            href: "tel:+40723320333",
            label: "Phone",
          },
        ],
      },
    },
  };
}
