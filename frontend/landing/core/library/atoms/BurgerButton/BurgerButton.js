import styles from "@/styles/atoms/burger-button/burger-button.module.scss";
import { useEffect, useState } from "react";

export default function BurgerButton({
  ariaControls,
  handleMenuToggle,
  isToggled,
  ariaLabel,
  ariaHidden = false,
}) {
  const [classNames, setClassNames] = useState(styles.base);
  useEffect(() => {
    if (isToggled) {
      setClassNames([styles.icon, styles["icon--open"]].join(" "));
    } else {
      setClassNames(styles.icon);
    }
  }, [isToggled]);
  return (
    <button
      className={styles.button}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      aria-expanded={isToggled}
      aria-hidden={ariaHidden}
      onClick={handleMenuToggle}
    >
      <span className={classNames} aria-hidden="true"></span>
    </button>
  );
}
