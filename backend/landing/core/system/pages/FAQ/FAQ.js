import getStaticProps from "./FAQ.model";
import GenericTemplate from "@/templates/Generic/Generic";
import Navigation from "@/organisms/Navigation/Navigation";

export { getStaticProps };
export default function FAQ({ type }) {
  return (
    <GenericTemplate pageType={type}>
      <Navigation />
      FAQ Page
    </GenericTemplate>
  );
}
