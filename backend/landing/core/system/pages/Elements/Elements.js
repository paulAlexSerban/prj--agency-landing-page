import getStaticProps from "./Elements.model";
import GenericTemplate from "@/templates/Generic/Generic";

export { getStaticProps };
export default function Elements({ type }) {
  return (
    <GenericTemplate pageType={type}>
      Elements Page
    </GenericTemplate>
  );
}
