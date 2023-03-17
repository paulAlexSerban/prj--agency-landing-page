import styles from "@/styles/organisms/section/section.module.scss";

export default function Section({ children, sectionId }) {
  return (
    <section id={sectionId} className={styles.base}>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
