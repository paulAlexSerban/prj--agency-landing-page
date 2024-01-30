import styles from "@/styles/organisms/footer/footer.module.scss";
import Copyright from "@/core/molecules/Copyright/Copyright";

export default function Footer({
  projectName,
  registrationCode,
  commerceLedgerId,
  phoneNumber,
  officialEmail,
}) {
  return (
    <footer className={styles.base} id="footer">
      <Copyright
        projectName={projectName}
        registrationCode={registrationCode}
        commerceLedgerId={commerceLedgerId}
        phoneNumber={phoneNumber}
        officialEmail={officialEmail}
      />
    </footer>
  );
}
