import styles from "@/styles/molecules/copyright/copyright.module.scss";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Link from "next/link";

export default function Copyright({
  projectName,
  registrationCode,
  commerceLedgerId,
}) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.base}>
      <Paragraph
        size="small"
        alignment="center"
        text={`Copytight © ${year} ${projectName}, ${registrationCode}, ${commerceLedgerId}`}
      />
      <Link href="/politica_confidentialitate">
        Politica de confidentialitate
      </Link>
    </div>
  );
}
