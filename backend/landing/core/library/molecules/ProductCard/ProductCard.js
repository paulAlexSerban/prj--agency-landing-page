import { useId, useEffect } from "react";
import config from "./config";
import styles from "@/styles/molecules/product-card/product-card.module.scss";
import ProductCardModule from "./ProductCard.molecule";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Icon from "@/core/atoms/Icon/Icon";
import Heading from "@/core/atoms/Heading/Heading";


export default function ProductCard({ iconName, heading, text, id }) {
  const ID = useId();

  useEffect(() => {
    document
      .querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`)
      .forEach((el) => new ProductCardModule(el));
  });

  return (
    <div className={styles.base} data-next-cmp={`${config.name}-${ID}`} id={id}>
      <div className={styles.content}>
        <Icon className={styles.icon} iconName={iconName} />
        <Heading className={styles.heading} level={4} mainText={heading} />
        {text && <Paragraph className={styles.text} text={text} />}
      </div>

    </div>
  );
}
