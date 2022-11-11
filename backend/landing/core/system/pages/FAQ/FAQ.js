import getStaticProps from "./FAQ.model";
import GenericTemplate from "@/templates/Generic/Generic";

export { getStaticProps };
export default function FAQ({ type }) {
  return (
    <GenericTemplate pageType={type}>
      FAQ Page
    </GenericTemplate>
  );
}
