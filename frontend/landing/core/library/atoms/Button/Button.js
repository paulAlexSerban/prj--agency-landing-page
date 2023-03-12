import { useId, useRef } from "react";
import styles from "@/styles/atoms/button/button.module.scss";

export default function Button({
  label,
  buttonStyle,
  ariaLabel,
  buttonType = "button",
  target,
}) {
  const ID = useId();
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const targetEl = buttonRef.current?.getAttribute("data-target");
    const scrollToEl = document.querySelector(`#${targetEl}`);
    try {
      scrollToEl?.scrollIntoView({ behavior: "smooth" }, true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className={[styles.base, styles[buttonStyle]].join(" ")}
      id={ID}
      aria-label={ariaLabel ? ariaLabel : label}
      type={buttonType}
      data-target={target}
      onClick={buttonType === "cta" ? handleClick : ""}
      ref={buttonRef}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}
