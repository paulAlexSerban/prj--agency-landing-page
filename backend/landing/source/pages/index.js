import GenericTemplate from "@/templates/Generic.js";
import Services from "@/components/Services.js";
import ProductList from "@/components/ProductList.js";
import Timeline from "@/components/Timeline.js";
import ClientList from "@/components/ClientList.js";
import Contact from "@/components/Contact.js";

export default function Home() {
  return (
    <GenericTemplate>
      <Services />
      <ProductList />
      <Timeline />
      <ClientList />
      <Contact />
    </GenericTemplate>
  );
}
