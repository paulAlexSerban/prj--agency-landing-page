import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/atoms/heading/heading.module.scss";

export default function Heading({ level = 2, mainText, subheading, hasSeparator }) {
  const ID = useId();
  if (level !== 1) {
    return (
      <h2
        className={`${styles.heading} ${styles[`heading--${level}`]} ${hasSeparator ? styles.separator : ""}`}
        data-next={`${config.name}-${ID}`}
      >
        <span className={styles.main}>{mainText}</span>
        <span className={styles.subheading}>{subheading}</span>
      </h2>
    );
  }
}
