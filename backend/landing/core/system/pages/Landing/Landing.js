import getStaticProps from "./Landing.model";
import LandingTemplate from "@/templates/Landing/Landing";
import Navigation from "@/organisms/Navigation/Navigation";

import Paragraph from "@/atoms/Paragraph/Paragraph";
import SectionHeading from "@/atoms/SectionHeading/SectionHeading";
import GoNextButton from "@/atoms/GoNextButton/GoNextButton";
import PageTitle from "@/atoms/PageTitle/PageTitle";

import MastHeader from "@/organisms/MastHeader/MastHeader.js";
import Spotlight from "@/organisms/Spotlight/Spotlight";
// import Benefits from "@/organisms/Benefits/Benefits";
// import Form from "@/organisms/Form/Form";

import LineUp from "@/layouts/LineUp/LineUp";

export { getStaticProps };
export default function Landing({ type }) {
  const navList = [
    { href: "despre_noi", label: "despre noi" },
    { href: "servicii", label: "servicii" },
    { href: "produse", label: "produse" },
    { href: "contact", label: "contact" },
  ];

  const spotlight_1 = {
    position: "bottom",
    image_src: "images/pic02.jpg",
    content: {
      heading: "Echipamente IT recondiționate oferite sub formă 'tech-as-a-Service'",
      paragraphs: [
        "Din ce în ce mai multe companii aleg să închirieze echipamente IT. Motivele încep de la deductibilitatea costurilor pentru a păstra lichiditățile înspre investirea în domeniul de activitate și ajung la simplificarea  gestiunii pentru echipamente IT. Antreprenorul modern dorește să se concentreze pe afacerea sa pentru a crește  profitul și alege soluții simple pentru toate domeniile adiacente. Fie că ai pornit acum la drum sau ai un business care funcționează deja, nu vrei să investești timp și bani în ce nu aduce profit direct în afacerea ta.",
        "  Costurile pentru IT sunt clare și simplu de gestionat. Un singur contract cu o singură taxă per angajat, aceasta claritate aduce scalabilitate afacerii tale și te ține in controlul costurilor. Fie că ai un eveniment unde ai nevoie de echipamente pentru o echipa temporară, fie că ai angajați pe perioadă determinată, închirierea este soluția pentru tine.",
      ],
    },
  };

  const spotlight_2 = {
    position: "right",
    image_src: "images/pic03.jpg",
    content: {
      heading: "Echipamente IT recondiționate oferite sub formă 'tech-as-a-Service'",
      paragraphs: [
        "Din ce în ce mai multe companii aleg să închirieze echipamente IT. Motivele încep de la deductibilitatea costurilor pentru a păstra lichiditățile înspre investirea în domeniul de activitate și ajung la simplificarea  gestiunii pentru echipamente IT. Antreprenorul modern dorește să se concentreze pe afacerea sa pentru a crește  profitul și alege soluții simple pentru toate domeniile adiacente. Fie că ai pornit acum la drum sau ai un business care funcționează deja, nu vrei să investești timp și bani în ce nu aduce profit direct în afacerea ta.",
        "  Costurile pentru IT sunt clare și simplu de gestionat. Un singur contract cu o singură taxă per angajat, aceasta claritate aduce scalabilitate afacerii tale și te ține in controlul costurilor. Fie că ai un eveniment unde ai nevoie de echipamente pentru o echipa temporară, fie că ai angajați pe perioadă determinată, închirierea este soluția pentru tine.",
      ],
    },
  };

  const spotlight_3 = {
    position: "left",
    image_src: "images/pic04.jpg",
    content: {
      heading: "Echipamente IT recondiționate oferite sub formă 'tech-as-a-Service'",
      paragraphs: [
        "Din ce în ce mai multe companii aleg să închirieze echipamente IT. Motivele încep de la deductibilitatea costurilor pentru a păstra lichiditățile înspre investirea în domeniul de activitate și ajung la simplificarea  gestiunii pentru echipamente IT. Antreprenorul modern dorește să se concentreze pe afacerea sa pentru a crește  profitul și alege soluții simple pentru toate domeniile adiacente. Fie că ai pornit acum la drum sau ai un business care funcționează deja, nu vrei să investești timp și bani în ce nu aduce profit direct în afacerea ta.",
        "  Costurile pentru IT sunt clare și simplu de gestionat. Un singur contract cu o singură taxă per angajat, aceasta claritate aduce scalabilitate afacerii tale și te ține in controlul costurilor. Fie că ai un eveniment unde ai nevoie de echipamente pentru o echipa temporară, fie că ai angajați pe perioadă determinată, închirierea este soluția pentru tine.",
      ],
    },
  };

  return (
    <LandingTemplate pageType={type}>
      <Navigation navList={navList} />
      <MastHeader goNext="spotlightOne">
        <PageTitle text="Închiriere echipamente IT" />
        <GoNextButton href="spotlightOne" />
      </MastHeader>
      <Spotlight sectionId="spotlightOne" position={spotlight_1.position} imageSrc={spotlight_1.image_src}>
        <LineUp columns="3">
          <SectionHeading level="3" mainText="Section heading - level 3" subheading="subheading text" />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Sit amet purus gravida quis. Morbi tempus iaculis urna id volutpat lacus laoreet. Convallis tellus id interdum velit laoreet id donec ultrices." />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Sit amet purus gravida quis. Morbi tempus iaculis urna id volutpat lacus laoreet. Convallis tellus id interdum velit laoreet id donec ultrices." />
        </LineUp>
        <GoNextButton href="spotlightTwo" />
      </Spotlight>
      <Spotlight sectionId="spotlightTwo" position={spotlight_2.position} imageSrc={spotlight_2.image_src}>
        <GoNextButton href="spotlightThree" />
      </Spotlight>
      <Spotlight sectionId="spotlightThree" goNext="" position={spotlight_3.position} imageSrc={spotlight_3.image_src}>
        <GoNextButton href="#" />
      </Spotlight>
      {/* <Benefits /> */}
      {/* <Form /> */}
      {navList.map((item, index) => {
        return (
          <section key={index} id={item.href} style={{ height: "1000px" }}>
            <Paragraph text={item.label} />
          </section>
        );
      })}
    </LandingTemplate>
  );
}
