import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/copyright/copyright.module.scss";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";

export default function Copyright({ projectName }) {
  const ID = useId();

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.base} data-next-cmp={`${config.name}-${ID}`}>
      <Paragraph text={`${year} © ${projectName}`} />
    </div>
  );
}
