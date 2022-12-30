import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/product-details/product-details.module.scss";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";

export default function ProductDetails({}) {
  const ID = useId();

  return (
    <div className={styles.base} data-next-cmp={`${config.name}-${ID}`}>
      <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
    </div>
  );
}
