import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/modal/modal.module.scss";
import Heading from "@/core/atoms/Heading/Heading";
import FlexGrid from "@/core/layouts/FlexGrid/FlexGrid";
import Button from "@/core/atoms/Button/Button";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";

export default function ProductModal({
  controlledBy,
  children,
  heading = "Modal Window Heading",
  subheading,
  description
}) {
  const ID = useId();
  return (
    <div
      className={`${styles.base} hidden`}
      data-next-cmp={`${config.name}-${ID}`}
      data-controlled-by={controlledBy}
    >
      <span className={`${styles["close-btn"]} js-close-btn`}>&times;</span>
      <Heading mainText={heading} subtitle={subheading} hasSeparator />
      <Paragraph text={description}/>
      {children}
      <div className={styles.buttonContainer}>
        <Button
          label="Contacteaza-ne!"
          buttonStyle="primary"
          jsHook="js-cta-button"
          target="contact"
        />
      </div>
    </div>
  );
}
