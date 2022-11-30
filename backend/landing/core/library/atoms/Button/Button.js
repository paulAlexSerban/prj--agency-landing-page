import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/button/button.module.scss";
import Link from "next/link";

export default function Button({ label, buttonType, ariaLabel, jsHook = "js-button" }) {
  const ID = useId();

  return (
    <button
      className={`${styles.base} ${styles[buttonType]} ${jsHook.split(".").join("")}`}
      data-next-cmp={`${config.name}-${ID}`}
      aria-label={ariaLabel ? ariaLabel : label}>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
