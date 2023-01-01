import getStaticProps from "./Landing.model";
import LandingTemplate from "@/core/templates/Landing/Landing";

export { getStaticProps };
export default function Landing(props, { children }) {
  return (
    <LandingTemplate
      content={props.content}
      pageProperties={props.pageProperties}
    >
      {/* only add as children: analytics scripts, survey form, cookie bar, and other components that are not actual part of the page content*/}
      {children}
    </LandingTemplate>
  );
}
