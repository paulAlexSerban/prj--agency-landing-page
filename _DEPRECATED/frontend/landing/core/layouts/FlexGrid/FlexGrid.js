import styles from "@/styles/layouts/flex-grid/flex-grid.module.scss";
import { useId } from "react";
export default function FlexGrid({
  children,
  sectionId,
  classNames = [],
  container = false,
  row = false,
  col = false,
}) {
  const id = useId();
  if (container) {
    return (
      <div className={styles.base} id={sectionId ? sectionId : id}>
        <div className={classNames.map((cls) => styles[cls]).join(" ")}>
          {children}
        </div>
      </div>
    );
  } else if (row) {
    return (
      <div
        className={`${styles.row} ${classNames
          .map((cls) => styles[cls])
          .join(" ")}`}
        id={id}
      >
        {children}
      </div>
    );
  } else if (col) {
    return (
      <div className={classNames.map((cls) => styles[cls]).join(" ")} id={id}>
        {children}
      </div>
    );
  }
}
