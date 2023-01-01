import { config } from "./config";
import Head from "next/head";
import styles from "@/styles/templates/landing/landing.module.scss";
import { useEffect, useId } from "react";
import LandingTemplate from "./Landing.template";

// ATOMS
import GoNextButton from "@/core/atoms/GoNextButton/GoNextButton";
import PageTitle from "@/core/atoms/PageTitle/PageTitle";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Heading from "@/core/atoms/Heading/Heading";
import Button from "@/core/atoms/Button/Button";
import TextInput from "@/core/atoms/TextInput/TextInput";
import EmailInput from "@/core/atoms/EmailInput/EmailInput";
import PhoneInput from "@/core/atoms/PhoneInput/PhoneInput";
import Textarea from "@/core/atoms/Textarea/Textarea";
import Fieldset from "@/core/atoms/Fieldset/Fieldset";
import Radio from "@/core/atoms/Radio/Radio";
import Checkbox from "@/core/atoms/Checkbox/Checkbox";
import Select from "@/core/atoms/Select/Select";

// MOLECULES
import Card from "@/core/molecules/Card/Card";
import ProductCard from "@/core/molecules/ProductCard/ProductCard";
import ProductList from "@/core/molecules/ProductList/ProductList";
import ProductModal from "@/core/molecules/ProductModal/ProductModal";
import ProductDetails from "@/core/molecules/ProductDetails/ProductDetails";

// ORGANISMS
import Navigation from "@/core/organisms/Navigation/Navigation";
import MastHeader from "@/core/organisms/MastHeader/MastHeader.js";
import Spotlight from "@/core/organisms/Spotlight/Spotlight";
import Footer from "@/core/organisms/Footer/Footer.js";
import Form from "@/core/organisms/Form/Form";

// LAYOUT
import Content from "@/core/layouts/Content/Content";
import LineUp from "@/core/layouts/LineUp/LineUp";
import Stack from "@/core/layouts/Stack/Stack";
import RAM from "@/core/layouts/RAM/RAM";
import FlexGrid from "@/core/layouts/FlexGrid/FlexGrid";

// styles
import pageTitleCss from "@/styles/atoms/page-title/page-title.module.scss";
import goNextStyles from "@/styles/atoms/go-next-button/go-next-button.module.scss";
import mastheadCss from "@/styles/organisms/masthead/masthead.module.scss";

export default function Landing({
  title,
  keywords,
  description,
  children,
  content,
  pageProperties,
}) {
  const ID = useId();
  useEffect(() => {
    document
      .querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`)
      .forEach((el) => {
        const template = new LandingTemplate(el);
      });
  });

  const mainContent = content.main;

  return (
    <div
      data-next-cmp={`${config.name}-${ID}`}
      id="page-top"
      className={`${styles.base} ${mastheadCss.isPreload} ${pageTitleCss.isPreload} ${goNextStyles.isPreload}`}
    >
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      {children}
      {/*
        Navigation
      */}
      <Navigation navList={mainContent} />

      <MastHeader>
        <PageTitle text="Închiriere echipamente IT" />
        <GoNextButton
          href={mainContent[Object.keys(mainContent)[0]].sectionId}
        />
      </MastHeader>

      <Spotlight
        sectionId={mainContent.spotlight.sectionId}
        position={mainContent.spotlight.sectionEl.spotlight.position}
        imageSrc={mainContent.spotlight.sectionEl.spotlight.imageSrc}
      >
        <LineUp columns="3">
          <Heading
            level={mainContent.spotlight.heading.level}
            mainText={mainContent.spotlight.heading.mainText}
            subheading={mainContent.spotlight.heading.subheading}
          />
          <Paragraph text={mainContent.spotlight.content.paragraph} />
          <Paragraph text={mainContent.spotlight.content.paragraph_1} />
        </LineUp>
      </Spotlight>
      <Content sectionId={mainContent.benefits.sectionId}>
        <FlexGrid classNames={["grid--full-width", "col"]} container>
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
              text="Ai decis sa alegi serviciile noastre însa ai deja o flota de echipamente pe care dorești sa o monetizeze? Nici o problema. Noi îți facem o oferta de buy-back pentru cele vechi si poți folosi fondurile pentru a achita elemente ale noului contract."
            />
            <Card
              iconName="recycle"
              heading="Prietenos cu mediul"
              text="pentru orice laptop recondiționat salvezi 280 Kg CO2 echivalentul distanței parcurse cu mașina de la București la Viena"
            />
          </RAM>
          <FlexGrid row>
            <FlexGrid
              col={true}
              classNames={[
                "col-tablet-6",
                "offset-tablet-3",
                "col-desktop-4",
                "offset-desktop-4",
              ]}
            >
              <Button
                label="Call To Action"
                buttonStyle="primary"
                jsHook="js-cta-button"
                target="contact"
              />
            </FlexGrid>
          </FlexGrid>
        </FlexGrid>
      </Content>
      <Spotlight
        sectionId={mainContent.spotlight_1.sectionId}
        position={mainContent.spotlight_1.sectionEl.spotlight.position}
        imageSrc={mainContent.spotlight_1.sectionEl.spotlight.imageSrc}
      >
        <FlexGrid classNames={["grid--full-width", "col"]} container>
          <Heading
            level={mainContent.spotlight_1.heading.level}
            mainText={mainContent.spotlight_1.heading.mainText}
          />

          <ProductList>
            <ProductCard iconName="basic" heading="Basic" id="basic-product" />
            <ProductCard
              iconName="standard"
              heading="Standard"
              id="standard-product"
            />
            <ProductCard
              iconName="professional"
              heading="Professional"
              id="professional-product"
            />
          </ProductList>
          <FlexGrid row>
            <FlexGrid
              col={true}
              classNames={[
                "col-tablet-6",
                "offset-tablet-3",
                "col-desktop-4",
                "offset-desktop-4",
              ]}
            >
              <Button
                label="Call To Action"
                buttonStyle="primary"
                jsHook="js-cta-button"
                target="contact"
              />
            </FlexGrid>
          </FlexGrid>
        </FlexGrid>
      </Spotlight>
      <Content sectionId="contact">
        <Heading
          level={mainContent.contact.heading.level}
          mainText={mainContent.contact.heading.mainText}
          subheading={mainContent.contact.heading.subheading}
          hasSeparator
          inverted
        />
        <Form>
          <FlexGrid classNames={["grid--full-width", "col"]} container>
            <Fieldset name="identification">
              <FlexGrid row>
                <FlexGrid col classNames={["col-tablet-12"]}>
                  <TextInput
                    placeholder="Nume companie"
                    inputName="nume_compoanie"
                    inputId="nume_compoanie"
                    initValue=""
                    required="true"
                  />
                </FlexGrid>

                <FlexGrid col classNames={["col-tablet-12"]}>
                  <TextInput
                    placeholder="Persoana de contact"
                    inputName="persoana_de_contact"
                    inputId="persoana_de_contact"
                    initValue=""
                    required="true"
                  />
                </FlexGrid>

                <FlexGrid col classNames={["col-tablet-6"]}>
                  <PhoneInput
                    placeholder="Telefon"
                    inputName="Telefon"
                    inputId="Telefon"
                    initValue=""
                    required="true"
                  />
                </FlexGrid>

                <FlexGrid col classNames={["col-tablet-6"]}>
                  <EmailInput
                    placeholder="Email"
                    inputName="email"
                    inputId="email"
                    initValue=""
                    required="true"
                  />
                </FlexGrid>
              </FlexGrid>
            </Fieldset>

            <Fieldset name="tip_de_utilizare" legend="Tip de utilizare:">
              <FlexGrid row>
                <FlexGrid col classNames={["col-smartphone-2", "col-tablet-3"]}>
                  <Checkbox inputName="basic" inputId="basic" label="Basic" />
                </FlexGrid>

                <FlexGrid col classNames={["col-smartphone-2", "col-tablet-3"]}>
                  <Checkbox
                    inputName="standard"
                    inputId="standard"
                    label="Standard"
                  />
                </FlexGrid>
                <FlexGrid col classNames={["col-smartphone-2", "col-tablet-3"]}>
                  <Checkbox
                    inputName="professional"
                    inputId="professional"
                    label="Professional"
                  />
                </FlexGrid>
              </FlexGrid>
            </Fieldset>

            <Fieldset name="perioada-si-cantitate">
              <FlexGrid row>
                <FlexGrid col classNames={["col-tablet-6"]}>
                  <TextInput
                    placeholder="Numar echipamente"
                    inputName="numar_echipamente"
                    inputId="numar_echipamente"
                    initValue=""
                    required="true"
                  />
                </FlexGrid>
                <FlexGrid col classNames={["col-tablet-6"]}>
                  <Select
                    placeholder="Pe ce perioada"
                    inputName="perioada"
                    required="true"
                    options={["1 - 30 zile", "1 - 6 luni", "6 - 24 luni"]}
                  />
                </FlexGrid>
              </FlexGrid>
            </Fieldset>

            <Textarea
              placeholder="Detalii"
              inputName="message"
              inputId="message"
              initValue=""
              rows="6"
              required="true"
            />

            <FlexGrid row>
              <FlexGrid
                col={true}
                classNames={[
                  "col-tablet-6",
                  "offset-tablet-3",
                  "col-desktop-4",
                  "offset-desktop-4",
                ]}
              >
                <Button
                  label="Trimite mesaj"
                  buttonStyle="primary"
                  jsHook="js-submit-button"
                  buttonType="submit"
                />
              </FlexGrid>
            </FlexGrid>
          </FlexGrid>
        </Form>
      </Content>
      <Footer />
      <ProductModal controlledBy="basic-product" heading="Configuratie Basic">
        <ProductDetails image="_RBC4637" />
      </ProductModal>
      <ProductModal
        controlledBy="standard-product"
        heading="Configuratie Standard"
      >
        <ProductDetails image="_RBC4626" />
      </ProductModal>
      <ProductModal
        controlledBy="professional-product"
        heading="Configuratie Professional"
      >
        <ProductDetails imagfe="_RBC4630" />
      </ProductModal>
      <div className="overlay hidden"></div>
    </div>
  );
}

Landing.defaultProps = { ...config.defaultProps };
