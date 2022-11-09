import getStaticProps from "./Index.model";
import Generic from "@/templates/Generic";
import Spotlight from "@/organisms/Spotlight/Spotlight";

export { getStaticProps };
export default function Index({ designation }) {
  return (
    <Generic>
      <Spotlight position="bottom" imageSrc="images/pic02.jpg"/>
      <Spotlight position="right" imageSrc="images/pic03.jpg" />
      <Spotlight position="left" imageSrc="images/pic04.jpg"/>
    </Generic>
  );
}

// import GenericTemplate from "@/components/system/templates/Generic.template.js";
// import Services from "core/Services.js";
// import ProductList from "core/ProductList.js";
// import Timeline from "core/Timeline.js";
// import ClientList from "core/ClientList.js";
// import Contact from "core/Contact.js";
// import About from "core/About.js";

// export default function Index() {
//   return (
//     <h1>INDEX PAGE</h1>
//     // <GenericTemplate>
//       // <About />
//       // <Services />
//       // <ProductList />
//       // <Timeline />
//       // <ClientList />
//       // <Contact />
//     // </GenericTemplate>
//   );
// }
