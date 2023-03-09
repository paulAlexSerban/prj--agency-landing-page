import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/card/card.module.scss";

import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Icon from "@/core/atoms/Icon/Icon";
import Heading from "@/core/atoms/Heading/Heading";

export default function Card({ iconName, heading, text }) {
  const ID = useId();
  return (
    <div className={styles.base} data-next-cmp={`${config.name}-${ID}`}>
      <Icon className={styles.icon} iconName={iconName} />
      <Heading className={styles.heading} level="3" mainText={heading} />
      {text && <Paragraph className={styles.text} text={text} />}
    </div>
  );
}
