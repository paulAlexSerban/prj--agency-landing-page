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
import Form from "@/core/organisms/Form/Form";

// MOLECULES
import Card from "@/core/molecules/Card/Card";
import ProductCard from "@/core/molecules/ProductCard/ProductCard";
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

export default function Landing(props) {
  const modalContainerRef = useRef(null);
  const { defaultProps, content } = props;
  const mainContent = content.main;
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
      </Head>
      <Navigation navList={mainContent} />
      <MastHeader image="all-three-facing">
        <PageTitle text="Închiriere echipamente IT" />
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
            heading="Amortizarea 100% si rapida a cheltuileilor"
            text="Achiziția de echipamente IT solicita o investiție majora si perioada lunga de amortizare a cheltuielilor. Inchirierea nu."
          />
          <Card
            iconName="computer"
            heading="Echipament IT as a service"
            text="Upgrade si downgrade disponibile, garanție pe viață, stoc tampon alocat, costuri clare, gestiune simplificata, nu ai stoc."
          />
          <Card
            iconName="warranty"
            heading="Garantie pe viata"
            text="Garanție pentru toata perioada contractului cu noi. Mai mult decât atât ai parte de serviciul pick-up and return pentru echipamentul defect."
          />
          <Card
            iconName="flexible"
            heading="Contract flexibil"
            text="Ai nevoie de echipamente IT pentru o perioada determinata? Nici o problema. Poți încheia cu noi o colaborare pe o perioada de la 1 zi la 12 luni."
          />
          <Card
            iconName="money"
            heading="Buy back"
            text="Ai decis sa alegi serviciile noastre însa ai deja o flota de
              echipamente? Noi îți facem o oferta de buy-back pentru cele vechi
              si poți folosi fondurile pentru a achita elemente ale noului
              contract."
          />
          <Card
            iconName="recycle"
            heading="Prietenos cu mediul"
            text="pentru orice laptop recondiționat salvezi 280 Kg CO2 echivalentul distanței parcurse cu mașina de la București la Viena."
          />
        </RAM>
      </Content>
      <Spotlight
        sectionId={mainContent.spotlight_1.sectionId}
        position={mainContent.spotlight_1.sectionEl.spotlight.position}
        imageSrc={mainContent.spotlight_1.sectionEl.spotlight.imageSrc}
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
        <Form
          submitButtonLabel="Trimite mesaj!"
          recaptchaKey={defaultProps.recaptchaSiteKey}
          action={defaultProps.formSubmitEndpoint}
          modalContainer={modalContainerRef}
        ></Form>
      </Content>
      <Footer
        projectName={defaultProps.projectName}
        registrationCode={defaultProps.officialRegistrationCode}
        commerceLedgerId={defaultProps.officialCommerceLedgerId}
      />
      {/* only add as children: analytics scripts, survey form, cookie bar, and other components that are not actual part of the page content*/}
      {/* {children} */}
      <div ref={modalContainerRef}></div>
    </LandingTemplate>
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

  const defaultProps = {
    title: "Inchiriere echipamente IT - ITaaS » Lynx IT",
    keywords: "agency, website, landing page, agency-landing-page",
    description: "Inchiriere echipamente IT - ITaaS » Lynx IT",
    projectName: PROJECT_NAME,
    recaptchaSiteKey: RECAPTCHA_SITE_KEY,
    formSubmitEndpoint: SUBMIT_FORM_ENDPOINT,
    officialCompanyName: OFFICIAL_COMPANY_NAME,
    officialRegistrationCode: OFFICIAL_REGISTRATION_CODE,
    officialCommerceLedgerId: OFFICIAL_COMMERCE_LEDGER_ID,
    officialOfficeAddress: OFFICIAL_OFFICE_ADDRESS,
    officialPhoneNumber: OFFICIAL_PHONE_NUMBER,
    officialEmail: OFFICIAL_EMAIL,
  };

  const content = {
    main: {
      spotlight: aboutUs,
      benefits,
      spotlight_1: products,
      contact,
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
  };

  return { props: { defaultProps, content } };
}

export { getStaticProps };
