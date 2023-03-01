import getStaticProps from "./FAQ.model";
import GenericTemplate from "@/core/templates/Generic/Generic";

export { getStaticProps };
export default function FAQ({ content, pageProperties, children }) {
  return (
    <GenericTemplate content={content} pageProperties={pageProperties}>
      {children}
    </GenericTemplate>
  );
}
