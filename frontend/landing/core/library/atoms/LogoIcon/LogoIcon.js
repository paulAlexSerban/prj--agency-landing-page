import { useRef } from "react";
import Icon from "@/core/atoms/Icon/Icon";
import styles from "@/styles/atoms/logo-icon/logo-icon.module.scss";

export default function LogoIcon() {
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
    const targetEl = buttonRef.current.getAttribute("href");
    scrollTo(targetEl);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const targetEl = buttonRef.current.getAttribute("href");
      scrollTo(targetEl);
    }
  };

  return (
    <a
      className={styles.base}
      href="#pageTop"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={buttonRef}>
      <Icon iconName="rowLogoText" />
    </a>
  );
}
