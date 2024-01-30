import { useId, useRef } from "react";
import styles from "@/styles/atoms/go-next-button/go-next-button.module.scss";
import ChevronDown from "@/svgs/chevron-down.svg";

export default function GoNextButton({ href }) {
  const ID = useId();
  const buttonRef = useRef(null);

  const scrollTo = (targetElementId) => {
    try {
      const scrollToEl = document.querySelector(targetElementId);
      scrollToEl.scrollIntoView({ behavior: "smooth" }, true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const targetElementId = buttonRef.current.getAttribute("href");
    scrollTo(targetElementId);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const targetElementId = buttonRef.current.getAttribute("href");
      scrollTo(targetElementId);
    }
  };

  return (
    <a
      className={styles.base}
      id={ID}
      href={`#${href}`}
      ref={buttonRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      rel="noopener noreferrer"
      aria-label="Scroll la urmatoarea sectiune."
    >
      <ChevronDown className={styles.svg} />
    </a>
  );
}
