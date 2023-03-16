import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/paragraph/paragraph.module.scss";

export default function Paragraph({ text, alignment }) {
  const ID = useId();

  return (
    <p className={[styles.base, styles[alignment]].join(" ")} data-next-cmp={`${config.name}-${ID}`}>
      {text}
    </p>
  );
}
