import styles from "@/styles/molecules/copyright/copyright.module.scss";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Link from "next/link";

export default function Copyright({
  projectName,
  registrationCode,
  commerceLedgerId,
  phoneNumber,
  officialEmail,
}) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.base}>
      <Paragraph
        size="small"
        alignment="center"
        text={
          <>
            <Link href={`tel:${phoneNumber}`} legacyBehavior>
              <a aria-label="Phone number">
                Tel: {phoneNumber.replace("+4", "")}
              </a>
            </Link>{" "}
            &nbsp;|&nbsp;{" "}
            <Link href={`mailto:${officialEmail}`} legacyBehavior>
              <a aria-label="Official email">{officialEmail}</a>
            </Link>
          </>
        }
      />
      <Paragraph
        size="small"
        alignment="center"
        text={`Copyright © ${year} ${projectName}, ${registrationCode}, ${commerceLedgerId}`}
      />
      <div className={styles.links}>
        <Link href="/confidentiality_agreement">Confidentiality Agreement</Link>
        <Link href="/sitemap.xml">Sitemap</Link>
      </div>
    </div>
  );
}
