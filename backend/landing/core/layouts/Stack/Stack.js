import { base } from "@/styles/layouts/stack/stack.module.scss";
export default function Stack({ children }) {
  return <div className={base}>{children}</div>;
}
