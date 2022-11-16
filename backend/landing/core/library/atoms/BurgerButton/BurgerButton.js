import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/atoms/burger-button/burger-button.module.scss";
import Link from "next/link";

export default function BurgerButton({ ariaControls, ariaLabel, jsHook = "js-nav-toggle" }) {
  const ID = useId();

  return (
    <Link
      href={`#${ariaControls}`}
      replace
      className={`${styles.button} ${jsHook.split(".").join("")}`}
      data-next={`${config.name}-${ID}`}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      aria-expanded="false"
      role="button"
    >
      <span className={styles.icon} aria-hidden="true"></span>
    </Link>
  );
}