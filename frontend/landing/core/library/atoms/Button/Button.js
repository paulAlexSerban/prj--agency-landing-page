import { useId, useEffect } from "react";
import config from "./config";
import styles from "@/styles/atoms/button/button.module.scss";
import { CtaButtonAtom } from "./Button.atom";

export default function Button({
  label,
  buttonStyle,
  ariaLabel,
  jsHook = "js-button",
  buttonType = "button",
  target,
}) {
  const ID = useId();

  useEffect(() => {
    if (jsHook === "js-cta-button") {
      document
        .querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`)
        .forEach((el) => new CtaButtonAtom(el, jsHook));
    }
  });

  return (
    <button
      className={`${styles.base} ${styles[buttonStyle]} ${jsHook
        .split(".")
        .join("")}`}
      data-next-cmp={`${config.name}-${ID}`}
      aria-label={ariaLabel ? ariaLabel : label}
      type={buttonType}
      target={target}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}
