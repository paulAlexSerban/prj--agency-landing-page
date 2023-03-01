import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/heading/heading.module.scss";

export default function Heading({
  level = 2,
  mainText,
  subheading,
  hasSeparator,
}) {
  const ID = useId();

  if (parseInt(level) === 2) {
    return (
      <h2
        className={`${styles.heading} ${
          styles[`heading--${parseInt(level)}`]
        } ${hasSeparator ? styles.separator : ""}`}
        data-next-cmp={`${config.name}-${ID}`}
      >
        <span className={styles.main}>{mainText}</span>
        {subheading && <span className={styles.subheading}>{subheading}</span>}
      </h2>
    );
  } else if (parseInt(level) === 3) {
    return (
      <h3
        className={`${styles.heading} ${
          styles[`heading--${parseInt(level)}`]
        } ${hasSeparator ? styles.separator : ""}`}
        data-next-cmp={`${config.name}-${ID}`}
      >
        <span className={styles.main}>{mainText}</span>
        {subheading && <span className={styles.subheading}>{subheading}</span>}
      </h3>
    );
  } else if (parseInt(level) === 4) {
    return (
      <h4
        data-test="test"
        className={`${styles.heading} ${
          styles[`heading--${parseInt(level)}`]
        } ${hasSeparator ? styles.separator : ""}`}
        data-next-cmp={`${config.name}-${ID}`}
      >
        <span className={styles.main}>{mainText}</span>
        {subheading && <span className={styles.subheading}>{subheading}</span>}
      </h4>
    );
  } else if (parseInt(level) === 1) {
    console.error("There should be only one heading level 1 on the page");
  }
}
