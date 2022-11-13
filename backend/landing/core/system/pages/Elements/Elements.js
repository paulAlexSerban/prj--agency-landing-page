import getStaticProps from "./Elements.model";
import GenericTemplate from "@/templates/Generic/Generic";
import Navigation from "@/organisms/Navigation/Navigation";

export { getStaticProps };
export default function Elements({ type }) {
  return (
    <GenericTemplate pageType={type}>
      <Navigation />
      Elements Page
    </GenericTemplate>
  );
}
