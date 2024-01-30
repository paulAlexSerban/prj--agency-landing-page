import styles from "@/styles/molecules/product-list/product-list.module.scss";
import RAM from "@/core/layouts/RAM/RAM";

export default function ProductList({ children }) {
  return (
    <div className={styles.base}>
      <RAM>{children}</RAM>
    </div>
  );
}
