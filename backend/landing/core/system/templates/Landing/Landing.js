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
import Textarea from "@/core/atoms/Textarea/Textarea";
import Fieldset from "@/core/atoms/Fieldset/Fieldset";
import Radio from "@/core/atoms/Radio/Radio";
import Checkbox from "@/core/atoms/Checkbox/Checkbox";
import Select from "@/core/atoms/Select/Select";

// MOLECULES
import Card from "@/core/molecules/Card/Card";
import Form from "@/core/molecules/Form/Form";

// ORGANISMS
import Navigation from "@/core/organisms/Navigation/Navigation";
import MastHeader from "@/core/organisms/MastHeader/MastHeader.js";
import Spotlight from "@/core/organisms/Spotlight/Spotlight";
import Footer from "@/core/organisms/Footer/Footer.js";

// LAYOUT
import Content from "@/core/layouts/Content/Content";
import LineUp from "@/core/layouts/LineUp/LineUp";
import Stack from "@/core/layouts/Stack/Stack";
import RAM from "@/core/layouts/RAM/RAM";

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
        <GoNextButton
          href={mainContent[Object.keys(mainContent)[1]].sectionId}
        />
      </Spotlight>
      <Content sectionId={mainContent.benefits.sectionId}>
        <Heading
          level={mainContent.benefits.heading.level}
          mainText={mainContent.benefits.heading.mainText}
          subheading={mainContent.benefits.heading.subheading}
          hasSeparator
        />
        <RAM>
          <Card
            iconName="percent"
            heading="Amortizarea 100% si rapida a cheltuileilor"
            text="Achiziția de echipamente IT solicita o investiție majora si perioada lunga de amortizare a cheltuielilor. Inchirierea nu."
          />
          <Card
            iconName="customerService"
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
      </Content>
      <Spotlight
        sectionId={mainContent.spotlight_1.sectionId}
        position={mainContent.spotlight_1.sectionEl.spotlight.position}
        imageSrc={mainContent.spotlight_1.sectionEl.spotlight.imageSrc}
      >
        <Stack>
          <Heading
            level={mainContent.spotlight_1.heading.level}
            mainText={mainContent.spotlight_1.heading.mainText}
          />
        </Stack>
        <GoNextButton
          href={mainContent[Object.keys(mainContent)[2]].sectionId}
        />
      </Spotlight>
      <Spotlight
        sectionId={mainContent.spotlight_2.sectionId}
        position={mainContent.spotlight_2.sectionEl.spotlight.position}
        imageSrc={mainContent.spotlight_2.sectionEl.spotlight.imageSrc}
      >
        <Stack>
          <Heading
            level={mainContent.spotlight_2.heading.level}
            mainText={mainContent.spotlight_2.heading.mainText}
          />
        </Stack>
        <GoNextButton
          href={mainContent[Object.keys(mainContent)[3]].sectionId}
        />
      </Spotlight>

      <Content sectionId="contact">
        <Heading
          level={mainContent.contact.heading.level}
          mainText={mainContent.contact.heading.mainText}
          subheading={mainContent.contact.heading.subheading}
          hasSeparator
          inverted
        />
        <Button
          label="primary button"
          buttonType="primary"
          jsHook="js-submit-button"
        />
        <Button
          label="secondary button"
          buttonType="secondary"
          jsHook="js-submit-button"
        />
        <Fieldset name="identification">
          <TextInput
            placeholder="Name"
            inputName="name"
            inputId="name"
            initValue=""
          />
          <EmailInput
            placeholder="Email"
            inputName="email"
            inputId="email"
            initValue=""
          />
        </Fieldset>

        <Textarea
          placeholder="Enter your message"
          inputName="message"
          inputId="message"
          initValue=""
          rows="6"
        />

        <Fieldset name="gender">
          <Radio inputName="gender" inputId="radio-one" label="male" />
          <Radio inputName="gender" inputId="radio-two" label="feminine" />
        </Fieldset>
        <Fieldset name="gender">
          <Checkbox inputName="gender" inputId="checkbox-one" label="one checkbox" />
          <Checkbox inputName="gender" inputId="checkbox-two" label="two checkbox" />
        </Fieldset>
        <Select options={["Dog", "Hypo", "Kangaroo", "Hamster", "Dolphin", "Spider", "Goldfish"]}/>
      </Content>
      <Footer />
    </div>
  );
}

Landing.defaultProps = { ...config.defaultProps };
