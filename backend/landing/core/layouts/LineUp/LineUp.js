import { base } from "@/styles/_04_layouts/lineup/lineup.module.scss";
export default function LineUp({ children, columns }) {
  return <div className={base} style={{ "--lineup-cols": columns }}>{children}</div>;
}
