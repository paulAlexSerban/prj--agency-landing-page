import styles from "@/styles/organisms/footer/footer.module.scss";
import Copyright from "@/core/molecules/Copyright/Copyright";

export default function Footer({ projectName, registrationCode, commerceLedgerId }) {
  return (
    <footer className={styles.base} id="footer">
      <Copyright projectName={projectName}  registrationCode={registrationCode} commerceLedgerId={commerceLedgerId}/>
    </footer>
  );
}
