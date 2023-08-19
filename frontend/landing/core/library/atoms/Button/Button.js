import { useRef } from "react";
import styles from "@/styles/atoms/button/button.module.scss";
import Link from "next/link";

export default function Button({
  label,
  buttonStyle,
  ariaLabel,
  buttonType = "button",
  target,
  disabled = false,
  onClick,
}) {
  const buttonRef = useRef(null);

  const scrollTo = (targetEl) => {
    const scrollToEl = document.querySelector(targetEl);
    try {
      scrollToEl.scrollIntoView({ behavior: "smooth" }, true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    const targetEl = buttonRef.current.getAttribute("data-target");
    scrollTo(targetEl);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const targetEl = buttonRef.current.getAttribute("data-target");
      scrollTo(targetEl);
    }
  };

  return (
    <>
      {buttonType === "link" ? (
        <Link href={target} legacyBehavior>
          <a
            className={[styles.base, styles[buttonStyle]].join(" ")}
            aria-label={ariaLabel ? ariaLabel : label}
            aria-labelledby={ariaLabel ? `${ID}-label` : null}
          >
            <span className={styles.label}>{label}</span>
          </a>
        </Link>
      ) : (
        <button
          className={[styles.base, styles[buttonStyle]].join(" ")}
          aria-label={ariaLabel ? ariaLabel : label}
          aria-labelledby={ariaLabel ? `${ID}-label` : null}
          type={buttonType === "cta" ? "button" : buttonType}
          data-target={target}
          onClick={buttonType === "cta" ? handleClick : null}
          onKeyDown={buttonType === "cta" ? handleKeyDown : null}
          ref={buttonRef}
          disabled={disabled}
        >
          <span className={styles.label}>{label}</span>
        </button>
      )}
    </>
  );
}
