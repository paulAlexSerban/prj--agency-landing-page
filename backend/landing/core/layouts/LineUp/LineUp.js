import { base } from "@/styles/layouts/lineup/lineup.module.scss";
export default function LineUp({ children, columns }) {
  return <div className={base} style={{ "--lineup-cols": columns }}>{children}</div>;
}
