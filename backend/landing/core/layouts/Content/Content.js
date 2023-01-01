import { base } from "@/styles/layouts/content/content.module.scss";
export default function Content({ children, sectionId }) {
  return (
    <div className={base} id={sectionId}>
      {children}
    </div>
  );
}
