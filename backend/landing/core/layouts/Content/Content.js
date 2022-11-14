import { base } from "@/styles/_04_layouts/content/content.module.scss";
export default function Content({ children }) {
  return <div className={base}>{children}</div>;
}
