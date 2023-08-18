import GenericTemplate from "@/core/templates/Generic/Generic";
import Head from "next/head";
import dynamic from "next/dynamic";
const Navigation = dynamic(() =>
  import("@/core/organisms/Navigation/Navigation")
);
import Section from "@/core/organisms/Section/Section";
import Heading from "@/core/atoms/Heading/Heading";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Content from "@/core/layouts/Content/Content";
import Footer from "@/core/organisms/Footer/Footer";
import List from "@/core/atoms/List/List";

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
      <Section sectionId="confidentiality_agreement">
        <Heading
          level="1"
          mainText="Confidentiality Agreement"
          hasSeparator
        />
        <Content>
          <Heading mainText="Moneky Money Inc." align="left" level="2" />
          <List
            items={[
              "Fiscal Code: 123123123",
              "Reg. Com: R40/1231/2032",
              "Office Address: Nowehre 123, 123123, Romania",
            ]}
          />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet." />
        </Content>
        <Content>
          <Heading mainText="Lorem ipsum" align="left" level="3" />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet." />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet." />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet." />
        </Content>
        <Content>
          <Heading mainText="A. Lorem Ipsum" align="left" level="3" />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet:" />
          <List
            listStyle="disc"
            items={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            ]}
          />
        </Content>

        <Content>
          <Heading mainText="B. Lorem ipsum" align="left" level="3" />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet:" />
          <List
            listStyle="disc"
            items={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            ]}
          />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet." />
        </Content>

        <Content>
          <Heading
            mainText="C. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet"
            align="left"
            level="3"
          />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet:" />

          <List
            listStyle="disc"
            items={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consecelit, sed do eiusmod tempor incididunt ut labore et dolore magtetur adipiscing elit, sed do eiusmoelit, sed do eiusmod tempor incididunt ut labore et dolore magd tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet, consectetur adipiselit, sed do eiusmod tempor incididunt ut labore et dolore magcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit ametelit, sed do eiusmod tempor incididunt ut labore et dolore mag, consectetur adipiscing elit, sed do eiusmod telit, sed do eiusmod tempor incididunt ut labore et dolore magempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consectetur adipiselit, sed do eiusmod tempor incididunt ut labore et dolore magcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incielit, sed do eiusmod tempor incididunt ut labore et dolore magdidunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            ]}
          />
        </Content>
        <Content>
          <Heading
            mainText="Elit, sed do eiusmod tempor incididunt ut labore et dolore mag"
            align="left"
            level="3"
          />
          <Paragraph text="Pelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore mag" />
          <Paragraph text="Ielit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore mag" />
          <Paragraph text="Pelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore mag" />
        </Content>
        <Content>
          <Heading
            mainText="Delit, sed do eiusmod tempor incididunt ut labore et dolore mag"
            align="left"
            level="3"
          />
          <Paragraph text="Îelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore magelit, sed do eiusmod tempor incididunt ut labore et dolore mag:" />
          <List
            listStyle="disc"
            items={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consecelit, sed do eiusmod tempor incididunt ut labore et dolore magtetur adipiscing elit, sed do eiusmoelit, sed do eiusmod tempor incididunt ut labore et dolore magd tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet, consectetur adipiselit, sed do eiusmod tempor incididunt ut labore et dolore magcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit ametelit, sed do eiusmod tempor incididunt ut labore et dolore mag, consectetur adipiscing elit, sed do eiusmod telit, sed do eiusmod tempor incididunt ut labore et dolore magempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consectetur adipiselit, sed do eiusmod tempor incididunt ut labore et dolore magcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet;",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incielit, sed do eiusmod tempor incididunt ut labore et dolore magdidunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
            ]}
          />
          <Paragraph text="Îolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a." />
        </Content>
        <Content>
          <Heading mainText="Tolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a" align="left" level="3" />
          <Paragraph text="Iolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a" />
        </Content>
        <Content>
          <Heading
            mainText="olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a"
            align="left"
            level="3"
          />
          <Paragraph text="Plor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a." />
          <Paragraph text="Olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a." />
          <Paragraph text="Plor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a." />
          <Paragraph text="Olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a." />
        </Content>
        <Content>
          <Heading mainText="S Lorem ipsum dolor sit aolor sit amet, consv" align="left" level="3" />
          <Paragraph text="Plor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a." />
          <Paragraph text="Olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit aolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a." />
        </Content>
        <Content>
          <Heading mainText="Contact" align="left" level="3" />
          <Paragraph text="Îolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit a." />
        </Content>
      </Section>
      <Footer
        projectName={defaultProps.projectName}
        registrationCode={defaultProps.officialRegistrationCode}
        commerceLedgerId={defaultProps.officialCommerceLedgerId}
        phoneNumber={defaultProps.officialPhoneNumber}
        officialEmail={defaultProps.officialEmail}
      />
      {/* only add as children: analytics scripts, survey form, cookie bar, and other components that are not actual part of the page content*/}
      {/* {children} */}
    </GenericTemplate>
  );
}

function getStaticProps() {
  const {
    PROJECT_NAME,
    RECAPTCHA_SITE_KEY,
    SUBMIT_FORM_ENDPOINT,
    OFFICIAL_COMPANY_NAME,
    OFFICIAL_REGISTRATION_CODE,
    OFFICIAL_COMMERCE_LEDGER_ID,
    OFFICIAL_OFFICE_ADDRESS,
    OFFICIAL_PHONE_NUMBER,
    OFFICIAL_EMAIL,
    S3_BUCKET_IMAGES,
  } = process.env;

  return {
    props: {
      defaultProps: {
        title: `${PROJECT_NAME}: Lorem mollit ipsum ipsum dolor sit amet`,
        keywords:
          "monekymoney, lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do, eiusmod, tempor",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        projectName: PROJECT_NAME,
        recaptchaSiteKey: RECAPTCHA_SITE_KEY,
        formSubmitEndpoint: SUBMIT_FORM_ENDPOINT,
        officialCompanyName: OFFICIAL_COMPANY_NAME,
        officialRegistrationCode: OFFICIAL_REGISTRATION_CODE,
        officialCommerceLedgerId: OFFICIAL_COMMERCE_LEDGER_ID,
        officialOfficeAddress: OFFICIAL_OFFICE_ADDRESS,
        officialPhoneNumber: OFFICIAL_PHONE_NUMBER,
        officialEmail: OFFICIAL_EMAIL,
        s3KeyPrefix: S3_BUCKET_IMAGES,
      }
    },
  };
}

export { getStaticProps };
