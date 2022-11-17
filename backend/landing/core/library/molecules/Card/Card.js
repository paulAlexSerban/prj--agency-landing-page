import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/molecules/card/card.module.scss";

import Paragraph from "@/atoms/Paragraph/Paragraph";
import Icon from "@/atoms/Icon/Icon";
import Heading from "@/atoms/Heading/Heading";

export default function Card({iconName, heading, text}) {
  const ID = useId();
  return (
    <div className={styles.base} data-next={`${config.name}-${ID}`}>
      <Icon className={styles.icon} iconName={iconName} />
      <Heading className={styles.heading} level="4" mainText={heading} />
      <Paragraph className={styles.text} text={text} />
    </div>
  );
}
