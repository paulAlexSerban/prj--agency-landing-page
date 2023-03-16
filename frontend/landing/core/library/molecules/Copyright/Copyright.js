import styles from "@/styles/molecules/copyright/copyright.module.scss";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";

export default function Copyright({ projectName }) {


  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.base}>
      <Paragraph text={`${year} © ${projectName}`} />
    </div>
  );
}
