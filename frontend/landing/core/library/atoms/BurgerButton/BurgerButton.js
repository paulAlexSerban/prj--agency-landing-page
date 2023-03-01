import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/burger-button/burger-button.module.scss";
import Link from "next/link";

export default function BurgerButton({
  ariaControls,
  ariaLabel,
  jsHook = "js-nav-toggle",
}) {
  const ID = useId();

  return (
    <Link href={`#${ariaControls}`} replace>
      <a
        className={`${styles.button} ${jsHook.split(".").join("")}`}
        data-next-cmp={`${config.name}-${ID}`}
        aria-controls={ariaControls}
        aria-label={ariaLabel}
        aria-expanded="false"
        role="button"
      >
        <span className={styles.icon} aria-hidden="true"></span>
      </a>
    </Link>
  );
}
