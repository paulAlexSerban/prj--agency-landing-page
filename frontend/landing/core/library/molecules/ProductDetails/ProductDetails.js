import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/product-details/product-details.module.scss";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Heading from "@/core/atoms/Heading/Heading";

export default function ProductDetails({ content }) {
  const ID = useId();
  return (
    <div className={styles.base} data-next-cmp={`${config.name}-${ID}`}>
      {content.map((item, key) => {
        return (
          <div key={key}>
            <Heading level="3" mainText={item.list.title} />
            <ul>
              {item.list.items.map((specItem, specIndex) => {
                return <li key={specIndex}>{specItem}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
