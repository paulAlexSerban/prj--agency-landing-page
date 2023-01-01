import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/product-list/product-list.module.scss";

import RAM from "@/core/layouts/RAM/RAM";

export default function ProductList({ children }) {
  const ID = useId();

  return (
    <div className={styles.base} data-next-cmp={`${config.name}-${ID}`}>
      <RAM>{children}</RAM>
    </div>
  );
}
