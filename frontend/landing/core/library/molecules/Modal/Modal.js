import styles from "@/styles/molecules/modal/modal.module.scss";
import { useEffect, useState, useRef } from "react";

export default function Modal({
  controlledBy,
  children,
  handleClose,
  isOpen,
  classNames = [],
}) {
  const [bodyOverflow, setBodyOverflow] = useState("auto");
  const [htmlOverflow, setHtmlOverflow] = useState("auto");

  useEffect(() => {
    if (isOpen) {
      setBodyOverflow("hidden");
      setHtmlOverflow("hidden");
      window.addEventListener("keydown", (e) => {
        if (
          e.keyCode === 27 ||
          e.key === "Escape" ||
          e.key === "Esc" ||
          e.code === "Escape" ||
          e.code === "Space" ||
          e.key === "Spacebar"
        ) {
          handleClose();
        }
      });
    } else {
      setBodyOverflow("auto");
      setHtmlOverflow("auto");
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
    document.documentElement.style.overflow = htmlOverflow;
  }, [bodyOverflow, htmlOverflow]);

  return (
    <div
      className={`${styles.base} ${isOpen ? "" : styles["base--isHidden"]}`}
      data-controlled-by={controlledBy}
    >
      <div className={[styles.window, classNames].join(" ")}>
        <span className={styles.closeBtn} onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>

      <div
        className={`${styles.overlay} ${
          isOpen ? "" : styles["overlay--isHidden"]
        }`}
        onClick={handleClose}
      ></div>
    </div>
  );
}
