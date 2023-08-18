import aboutUs from "@/content/landing/about-us.json";
import products from "@/content/landing/products.json";
import benefits from "@/content/landing/benefits.json";
import contact from "@/content/landing/contact.json";

import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";

import Head from "next/head";
import LandingTemplate from "@/core/templates/Landing/Landing";
const Navigation = dynamic(() =>
  import("@/core/organisms/Navigation/Navigation")
);
// ORGANISMS
import Spotlight from "@/core/organisms/Spotlight/Spotlight";
import MastHeader from "@/core/organisms/MastHeader/MastHeader.js";
import Footer from "@/core/organisms/Footer/Footer.js";
const Form = dynamic(() => import("@/core/organisms/Form/Form"), {
  ssr: false,
});

// MOLECULES
import Card from "@/core/molecules/Card/Card";
const ProductCard = dynamic(
  () => import("@/core/molecules/ProductCard/ProductCard"),
  {
    ssr: false,
  }
);
import ProductList from "@/core/molecules/ProductList/ProductList";

// ATOMS
import GoNextButton from "@/core/atoms/GoNextButton/GoNextButton";
import PageTitle from "@/core/atoms/PageTitle/PageTitle";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Heading from "@/core/atoms/Heading/Heading";

// LAYOUT
import Content from "@/core/layouts/Content/Content";
import LineUp from "@/core/layouts/LineUp/LineUp";
import RAM from "@/core/layouts/RAM/RAM";

// styles
import pageTitleCss from "@/styles/atoms/page-title/page-title.module.scss";
import goNextStyles from "@/styles/atoms/go-next-button/go-next-button.module.scss";
import mastheadCss from "@/styles/organisms/masthead/masthead.module.scss";

import useOnScreen from "@/hooks/useOnScreen";

export default function Landing(props) {
  const modalContainerRef = useRef(null);
  const formRef = useRef(null);
  const { defaultProps, content } = props;
  const mainContent = content.main;

  const formRefValue = useOnScreen(formRef);
  const [isFormRef, setIsFormRef] = useState(false);
  useEffect(() => {
    if (!isFormRef) {
      setIsFormRef(formRefValue);
    }
  }, [formRefValue]);

  return (
    <LandingTemplate
      content={content}
      preloadClasses={[
        mastheadCss.isPreload,
        pageTitleCss.isPreload,
        goNextStyles.isPreload,
      ]}
    >
      <Head>
        <title>{defaultProps.title}</title>
        <meta name="keywords" content={defaultProps.keywords} />
        <meta name="description" content={defaultProps.description} />
        <meta property="og:title" content={defaultProps.title} />
        <meta property="og:url" content="https://www.monekymoney.inc" />
        <meta property="og:description" content={defaultProps.description} />
        <meta property="og:site_name" content={defaultProps.title} />
      </Head>

      <Navigation navList={mainContent} />
      <MastHeader image="all-three-facing-cropped" s3KeyPrefix={defaultProps.s3KeyPrefix}>
        <PageTitle text="Landing Page" />
        <GoNextButton
          href={mainContent[Object.keys(mainContent)[0]].sectionId}
        />
      </MastHeader>
      <Spotlight
        sectionId={mainContent.spotlight.sectionId}
        position={mainContent.spotlight.sectionEl.spotlight.position}
      >
        <Heading
          level={mainContent.spotlight.heading.level}
          mainText={mainContent.spotlight.heading.mainText}
          subheading={mainContent.spotlight.heading.subheading}
          hasSeparator
        />
        <LineUp columns="3">
          <Paragraph text={mainContent.spotlight.content.paragraph} />
          <Paragraph text={mainContent.spotlight.content.paragraph_1} />
          <Paragraph text={mainContent.spotlight.content.paragraph_2} />
        </LineUp>
      </Spotlight>
      <Content sectionId={mainContent.benefits.sectionId}>
        <Heading
          level={mainContent.benefits.heading.level}
          mainText={mainContent.benefits.heading.mainText}
          subheading={mainContent.benefits.heading.subheading}
          hasSeparator
        />
        <RAM layout="hasColumns">
          <Card
            iconName="percent"
            heading="Lorem ipsum dolor sit amet"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            iconName="computer"
            heading="Lorem amet consectetur"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            iconName="warranty"
            heading="Lorem warranty ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            iconName="flexible"
            heading="Lorem flexible ipsum"
            text="Lorem flexible ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            iconName="money"
            heading="Lorem money ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet."
          />
          <Card
            iconName="recycle"
            heading="Lorem recycle ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet."
          />
        </RAM>
      </Content>
      <Spotlight
        sectionId={mainContent.spotlight_1.sectionId}
        position={mainContent.spotlight_1.sectionEl.spotlight.position}
        image={mainContent.spotlight_1.sectionEl.spotlight.imageSrc}
        s3KeyPrefix={defaultProps.s3KeyPrefix}
      >
        <Heading
          level={mainContent.spotlight_1.heading.level}
          mainText={mainContent.spotlight_1.heading.mainText}
        />

        <ProductList>
          {mainContent.spotlight_1.content.map((item, index) => {
            return (
              <ProductCard
                key={index}
                iconName={item.iconName}
                heading={item.heading}
                description={item.description}
                modalContent={item.content}
                id={item.id}
                modalContainer={modalContainerRef}
              />
            );
          })}
        </ProductList>
      </Spotlight>
      <Content sectionId="contact">
        <Heading
          level={mainContent.contact.heading.level}
          mainText={mainContent.contact.heading.mainText}
          subheading={mainContent.contact.heading.subheading}
          hasSeparator
          inverted
        />
        <div ref={formRef}>
          {formRefValue && (
            <Form
              submitButtonLabel="Trimite mesaj!"
              recaptchaKey={defaultProps.recaptchaSiteKey}
              action={defaultProps.formSubmitEndpoint}
              modalContainer={modalContainerRef}
              phoneNumber={defaultProps.officialPhoneNumber}
            ></Form>
          )}
        </div>
      </Content>
      <Footer
        projectName={defaultProps.projectName}
        registrationCode={defaultProps.officialRegistrationCode}
        commerceLedgerId={defaultProps.officialCommerceLedgerId}
        phoneNumber={defaultProps.officialPhoneNumber}
        officialEmail={defaultProps.officialEmail}
        modalContainer={modalContainerRef}
      />
      {/* only add as children: analytics scripts, survey form, cookie bar, and other components that are not actual part of the page content*/}
      {/* {children} */}
      <div className="portalContainer" ref={modalContainerRef}></div>
    </LandingTemplate>
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

  const defaultProps = {
    title: `${PROJECT_NAME}: Lorem Monkey`,
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
  };

  const content = {
    main: {
      spotlight: aboutUs,
      benefits,
      spotlight_1: products,
      contact,
    },
  };

  return { props: { defaultProps, content } };
}

export { getStaticProps };
