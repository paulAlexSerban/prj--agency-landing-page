import { useId } from "react";
import styles from "@/styles/atoms/burger-button/burger-button.module.scss";
import Link from "next/link";

export default function BurgerButton({
  ariaControls,
  ariaLabel,
  navToggleClass = "js-nav-toggle",
}) {
  const ID = useId();

  return (
    <Link href={`#${ariaControls}`} replace legacyBehavior>
      <a
        className={[styles.button, navToggleClass].join(" ")}
        data-next-cmp={ID}
        aria-controls={ariaControls}
        aria-label={ariaLabel}
        aria-expanded="false"
        role="button"
        tabIndex={0}
        rel="noopener noreferrer"
      >
        <span className={styles.icon} aria-hidden="true"></span>
      </a>
    </Link>
  );
}
