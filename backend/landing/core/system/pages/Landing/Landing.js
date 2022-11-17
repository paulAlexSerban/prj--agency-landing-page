import getStaticProps from "./Landing.model";
import LandingTemplate from "@/templates/Landing/Landing";
import Navigation from "@/organisms/Navigation/Navigation";

import Paragraph from "@/atoms/Paragraph/Paragraph";
import Heading from "@/atoms/Heading/Heading";
import GoNextButton from "@/atoms/GoNextButton/GoNextButton";
import PageTitle from "@/atoms/PageTitle/PageTitle";

import Card from "@/molecules/Card/Card";
import Form from "@/molecules/Form/Form";

import MastHeader from "@/organisms/MastHeader/MastHeader.js";
import Spotlight from "@/organisms/Spotlight/Spotlight";
// import Benefits from "@/organisms/Benefits/Benefits";
// import Form from "@/organisms/Form/Form";

import Content from "@/layouts/Content/Content";
import LineUp from "@/layouts/LineUp/LineUp";
import Stack from "@/layouts/Stack/Stack";
import RAM from "@/layouts/RAM/RAM";

export { getStaticProps };
export default function Landing({ type }) {
  const navList = [
    { href: "despre_noi", label: "despre noi" },
    { href: "servicii", label: "servicii" },
    { href: "produse", label: "produse" },
    { href: "beneficii", label: "beneficii" },
    { href: "contact", label: "contact" },
  ];

  const spotlight_1 = {
    position: "bottom",
    image_src: "images/pic02.jpg",
    content: {
      heading: "heading - lorem",
      subheading: "subheading - lorem",
      paragraphs: [],
    },
  };

  const spotlight_2 = {
    position: "right",
    image_src: "images/pic03.jpg",
    content: {
      heading: "heading - lorem",
      paragraphs: [],
    },
  };

  const spotlight_3 = {
    position: "left",
    image_src: "images/pic04.jpg",
    content: {
      heading: "heading - lorem",
      paragraphs: [],
    },
  };

  return (
    <LandingTemplate pageType={type}>
      <Navigation navList={navList} />
      <MastHeader>
        <PageTitle text="Închiriere echipamente IT" />
        <GoNextButton href="despre_noi" />
      </MastHeader>
      <Spotlight sectionId="despre_noi" position={spotlight_1.position} imageSrc={spotlight_1.image_src}>
        <LineUp columns="3">
          <Heading
            level="3"
            mainText="Echipamente IT reconditionate de inchiriat"
            subheading="Gestiune simplificata si cost-control"
          />
          <Paragraph text="Din ce în ce mai multe companii aleg să închirieze echipamente IT. Motivele încep de la deductibilitatea costurilor pentru a păstra lichiditățile înspre investirea în domeniul de activitate și ajung la simplificarea  gestiunii pentru echipamente IT. Antreprenorul modern dorește să se concentreze pe afacerea sa pentru a crește  profitul și alege soluții simple pentru toate domeniile adiacente. Fie că ai pornit acum la drum sau ai un business care funcționează deja, nu vrei să investești timp și bani în ce nu aduce profit direct în afacerea ta." />
          <Paragraph text="Costurile pentru IT sunt clare și simplu de gestionat. Un singur contract cu o singură taxă per angajat, aceasta claritate aduce scalabilitate afacerii tale și te ține in controlul costurilor. Fie că ai un eveniment unde ai nevoie de echipamente pentru o echipa temporară, fie că ai angajați pe perioadă determinată, închirierea este soluția pentru tine." />
        </LineUp>
        <GoNextButton href="servicii" />
      </Spotlight>
      <Spotlight sectionId="servicii" position={spotlight_2.position} imageSrc={spotlight_2.image_src}>
        <Stack>
          <Heading level="3" mainText="Servicii" />
        </Stack>
        <GoNextButton href="produse" />
      </Spotlight>
      <Spotlight sectionId="produse" goNext="" position={spotlight_3.position} imageSrc={spotlight_3.image_src}>
        <Stack>
          <Heading level="3" mainText="Produse" />
        </Stack>
        <GoNextButton href="beneficii" />
      </Spotlight>
      <Content sectionId="beneficii">
        <Heading level="3" mainText="Beneficii" subheading="@todo: scurt intro in beneficii" hasSeparator />
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
      <Content sectionId="contact">
        <Heading
          level="3"
          mainText="Hai sa facem treaba!"
          subheading="@todo: scurt call-to-action text"
          hasSeparator
          inverted
        />
      </Content>
    </LandingTemplate>
  );
}
