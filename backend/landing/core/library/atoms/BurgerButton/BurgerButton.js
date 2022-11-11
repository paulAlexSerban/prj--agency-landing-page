import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/atoms/burger-button/burger-button.module.scss";

export default function BurgerButton({ariaControls, ariaLabel, jsHook = 'js-nav-toggle'}) {
  const ID = useId();

  return (
    <a className={`${styles.button} ${jsHook}`}
        data-next={`${config.name}-${ID}`}
        aria-controls={ariaControls}
        aria-label={ariaLabel}
        aria-expanded="false"
        role="button"
        href={`#${ariaControls}`}>
      <span className={styles.left} aria-hidden="true"></span>
      <span className={styles.right} aria-hidden="true"></span>
    </a>
  );
}
