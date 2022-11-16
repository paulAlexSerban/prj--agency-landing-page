import { base } from "@/styles/_04_layouts/content/content.module.scss";
export default function Content({ children, sectionId }) {
  return <div className={base} id={sectionId}>{children}</div>;
}
