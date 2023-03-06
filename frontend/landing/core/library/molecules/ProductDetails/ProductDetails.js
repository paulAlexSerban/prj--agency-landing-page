import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/product-details/product-details.module.scss";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Heading from "@/core/atoms/Heading/Heading";

export default function ProductDetails({ content }) {
  const ID = useId();
  return (
    <div className={styles.base} data-next-cmp={`${config.name}-${ID}`}>
    <Heading level="3" mainText="Exemplu echipament:" parentClassNames={[styles.heading]} />
      {content.map((item, key) => {
        return (
          <div key={key} className={styles.specWrapper}>
            <Heading level="4" mainText={item.list.title} parentClassNames={[styles.listHeading]} />
            <ul className={styles.list}>
              {item.list.items.map((specItem, specIndex) => {
                return <li key={specIndex} className={styles.listItem}>{specItem}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
