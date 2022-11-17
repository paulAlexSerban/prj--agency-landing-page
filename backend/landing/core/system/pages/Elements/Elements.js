import getStaticProps from "./Elements.model";
import GenericTemplate from "@/core/templates/Generic/Generic";

export { getStaticProps };
export default function Elements({ content, pageProperties, children }) {
  return (
    <GenericTemplate content={content} pageProperties={pageProperties}>
      {children}
    </GenericTemplate>
  );
}
