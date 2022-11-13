import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/atoms/paragraph/paragraph.module.scss";

export default function Paragraph({text}) {
  const ID = useId();

  return <p className={styles.base} data-next={`${config.name}-${ID}`}>{text}</p>;
}
