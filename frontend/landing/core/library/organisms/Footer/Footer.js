import config from "./Footer.config";
import { useId } from "react";
import styles from "@/styles/organisms/footer/footer.module.scss";
import Copyright from "@/core/molecules/Copyright/Copyright";

export default function Footer({ socialMediaList = [], projectName }) {
  return (
    <footer className={styles.base} id="footer">
      <Copyright projectName={projectName} />
    </footer>
  );
}
