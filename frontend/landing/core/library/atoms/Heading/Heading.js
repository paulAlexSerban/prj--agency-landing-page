import { useId } from "react";
import styles from "@/styles/atoms/heading/heading.module.scss";

export default function Heading({
  level = 2,
  mainText,
  subheading,
  hasSeparator,
  parentClassNames = [],
  align = "center",
}) {
  const ID = useId();

  if (parseInt(level) === 1) {
    return (
      <h1
        className={`${styles.heading} ${
          styles[`heading--${parseInt(level)}`]
        } ${hasSeparator ? styles.separator : ""} ${parentClassNames.join(
          " "
        )}`}
      >
        <span className={styles.main}>{mainText}</span>
        {subheading && <span className={styles.subheading}>{subheading}</span>}
      </h1>
    );
  } else if (parseInt(level) === 2) {
    return (
      <h2
        className={[
          styles.heading,
          styles[align],
          styles[`heading--${parseInt(level)}`],
          `${hasSeparator ? styles.separator : ""}`,
          parentClassNames.join(" "),
        ].join(" ")}
      >
        <span className={styles.main}>{mainText}</span>
        {subheading && <span className={styles.subheading}>{subheading}</span>}
      </h2>
    );
  } else if (parseInt(level) === 3) {
    return (
      <h3
        className={[
          styles.heading,
          styles[align],
          styles[`heading--${parseInt(level)}`],
          `${hasSeparator ? styles.separator : ""}`,
          parentClassNames.join(" "),
        ].join(" ")}
      >
        <span className={styles.main}>{mainText}</span>
        {subheading && <span className={styles.subheading}>{subheading}</span>}
      </h3>
    );
  } else if (parseInt(level) === 4) {
    return (
      <h4
        className={[
          styles.heading,
          styles[align],
          styles[`heading--${parseInt(level)}`],
          `${hasSeparator ? styles.separator : ""}`,
          parentClassNames.join(" "),
        ].join(" ")}
      >
        <span className={styles.main}>{mainText}</span>
        {subheading && <span className={styles.subheading}>{subheading}</span>}
      </h4>
    );
  } else if (parseInt(level) === 1) {
    console.error("There should be only one heading level 1 on the page");
  }
}
