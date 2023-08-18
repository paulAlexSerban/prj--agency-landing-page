import styles from "@/styles/molecules/modal/modal.module.scss";

export default function Modal({
  controlledBy,
  children,
  handleClose,
  isOpen,
  classNames = [],
}) {
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
