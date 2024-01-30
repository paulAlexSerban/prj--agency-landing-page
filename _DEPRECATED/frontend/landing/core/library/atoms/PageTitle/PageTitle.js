import styles from "@/styles/atoms/page-title/page-title.module.scss";

export default function PageTitle({ text }) {
  return <h1 className={styles.base}>{text}</h1>;
}
