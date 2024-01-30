// This component renders a div with a class of base, and id of sectionId.
// The sectionId props is used to make the content section scrollable.
// The children props is used for rendering the child components.

import { base } from "@/styles/layouts/content/content.module.scss";
export default function Content({ children, sectionId }) {
  return (
    <div className={base} id={sectionId}>
      {children}
    </div>
  );
}
