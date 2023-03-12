import { useId, useRef } from "react";
import styles from "@/styles/atoms/go-next-button/go-next-button.module.scss";
import ChevronDown from "@/svgs/chevron-down.svg";

export default function GoNextButton({ href }) {
  const ID = useId();
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const targetEl = buttonRef.current?.getAttribute("href");
    const scrollToEl = document.querySelector(targetEl);
    try {
      scrollToEl?.scrollIntoView({ behavior: "smooth" }, true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <a
      className={styles.base}
      id={ID}
      href={`#${href}`}
      ref={buttonRef}
      onClick={handleClick}
      rel="noopener noreferrer"
    >
      <ChevronDown className={styles.svg} />
    </a>
  );
}
