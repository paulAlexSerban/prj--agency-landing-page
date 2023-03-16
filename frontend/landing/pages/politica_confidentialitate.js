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
  return {
    props: {
      defaultProps: {
        title: `Politica de confidențialitate » ${process.env.PROJECT_NAME}`,
        keywords: "agency, website, landing page, agency-landing-page",
        description: `Politica de confidentialitate » ${process.env.PROJECT_NAME}`,
        projectName: process.env.PROJECT_NAME,
        officialCompanyName: process.env.OFFICIAL_COMPANY_NAME,
        officialRegistrationCode: process.env.OFFICIAL_REGISTRATION_CODE,
        officialCommerceLedgerId: process.env.OFFICIAL_COMMERCE_LEDGER_ID,
        officialOfficeAddress: process.env.OFFICIAL_OFFICE_ADDRESS
      },
    },
  };
}

export { getStaticProps };
