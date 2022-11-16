import { base } from "@/styles/_04_layouts/stack/stack.module.scss";
export default function Stack({ children }) {
  return <div className={base}>{children}</div>;
}
