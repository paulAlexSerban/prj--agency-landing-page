import getStaticProps from "./Landing.model";
import LandingTemplate from "@/templates/Landing/Landing";
import Navigation from "@/organisms/Navigation/Navigation";


import Paragraph from "@/atoms/Paragraph/Paragraph";
// import MastHeader from "@/organisms/MastHeader/MastHeader.js";
// import Spotlight from "@/organisms/Spotlight/Spotlight";
// import Benefits from "@/organisms/Benefits/Benefits";
// import Form from "@/organisms/Form/Form";

export { getStaticProps };
export default function Landing({ type }) {

  const navList = [
    { href: "despre_noi", label: "despre noi" },
    { href: "servicii", label: "servicii" },
    { href: "produse", label: "produse" },
    { href: "contact", label: "contact" }
  ];

  return (
    <LandingTemplate pageType={type}>
      <Navigation navList={navList}/>
      {navList.map((item, index) => {
        return <section key={index} id={item.href} style={{height: "1000px"}}>
          <Paragraph text={item.label}/>
        </section>
      })}
      {/* <MastHeader /> */}
      {/* <Spotlight
        position="bottom"
        imageSrc="images/pic02.jpg"
        content={{
          heading: "Echipamente IT recondiționate oferite sub formă 'tech-as-a-Service'",
          paragraphs: [
            "Din ce în ce mai multe companii aleg să închirieze echipamente IT. Motivele încep de la deductibilitatea costurilor pentru a păstra lichiditățile înspre investirea în domeniul de activitate și ajung la simplificarea  gestiunii pentru echipamente IT. Antreprenorul modern dorește să se concentreze pe afacerea sa pentru a crește  profitul și alege soluții simple pentru toate domeniile adiacente. Fie că ai pornit acum la drum sau ai un business care funcționează deja, nu vrei să investești timp și bani în ce nu aduce profit direct în afacerea ta.",
            "  Costurile pentru IT sunt clare și simplu de gestionat. Un singur contract cu o singură taxă per angajat, aceasta claritate aduce scalabilitate afacerii tale și te ține in controlul costurilor. Fie că ai un eveniment unde ai nevoie de echipamente pentru o echipa temporară, fie că ai angajați pe perioadă determinată, închirierea este soluția pentru tine.",
          ],
        }}
      /> */}
      {/* <Spotlight position="right" imageSrc="images/pic03.jpg" /> */}
      {/* <Spotlight position="left" imageSrc="images/pic04.jpg" /> */}
      {/* <Benefits /> */}
      {/* <Form /> */}
    </LandingTemplate>
  );
}
