import getStaticProps from "./Landing.model";
import LandingTemplate from "@/core/templates/Landing/Landing";

export { getStaticProps };
export default function Landing({ content, pageProperties, children }) {
  return (
    <LandingTemplate content={content} pageProperties={pageProperties}>
      {/* only add as children: analytics scripts, survey form, cookie bar, and other components that are not actual part of the page content*/}
      {children}
    </LandingTemplate>
  );
}
