import GenericTemplate from "@/core/templates/Generic/Generic";
import Head from "next/head";
import dynamic from "next/dynamic";
const Navigation = dynamic(() =>
  import("@/core/organisms/Navigation/Navigation")
);
import Section from "@/core/organisms/Section/Section";
import Heading from "@/core/atoms/Heading/Heading";

export default function PoliticaConfidentialitate(props) {
  const { defaultProps, content } = props;

  return (
    <GenericTemplate>
      <Head>
        <title>{defaultProps.title}</title>
        <meta name="keywords" content={defaultProps.keywords} />
        <meta name="description" content={defaultProps.description} />
      </Head>
      <Navigation />
      <Section sectionId="politica_de_confidentialitate">
        <Heading
          level="1"
          mainText="Politica de confidențialitate"
          hasSeparator
        />
      </Section>
      {/* only add as children: analytics scripts, survey form, cookie bar, and other components that are not actual part of the page content*/}
      {/* {children} */}
    </GenericTemplate>
  );
}

function getStaticProps() {
  const {
    PROJECT_NAME = "Agency Landing Page",
    RECAPTCHA_SITE_KEY = "xxx",
    SUBMIT_FORM_ENDPOINT = "/api/form",
    OFFICIAL_COMPANY_NAME = "COMPANY NAME SRL",
    OFFICIAL_REGISTRATION_CODE = "RO123123",
    OFFICIAL_COMMERCE_LEDGER_ID = "J40/1234/1234",
    OFFICIAL_OFFICE_ADDRESS = "Office: Str. MyStreet, nr. 1991, MyCity, ",
    OFFICIAL_PHONE_NUMBER = "+40723222333",
    OFFICIAL_EMAIL = "test@agency.com",
  } = process.env;

  return {
    props: {
      defaultProps: {
        title: `Politica de confidențialitate » ${process.env.PROJECT_NAME}`,
        keywords: "agency, website, landing page, agency-landing-page",
        description: `Politica de confidentialitate » ${process.env.PROJECT_NAME}`,
        projectName: PROJECT_NAME,
        recaptchaSiteKey: RECAPTCHA_SITE_KEY,
        formSubmitEndpoint: SUBMIT_FORM_ENDPOINT,
        officialCompanyName: OFFICIAL_COMPANY_NAME,
        officialRegistrationCode: OFFICIAL_REGISTRATION_CODE,
        officialCommerceLedgerId: OFFICIAL_COMMERCE_LEDGER_ID,
        officialOfficeAddress: OFFICIAL_OFFICE_ADDRESS,
        officialPhoneNumber: OFFICIAL_PHONE_NUMBER,
        officialEmail: OFFICIAL_EMAIL,
      },
    },
  };
}

export { getStaticProps };
