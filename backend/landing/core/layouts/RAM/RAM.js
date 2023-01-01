import styles from "@/styles/layouts/ram/ram.module.scss";
export default function RAM({ children, layout = "isAutoFit" }) {
  return <div className={`${styles.base} ${styles[`base--${layout}`]}`}>{children}</div>;
}
