import { config } from "./MastHeader.config";
import styles from "@/styles/_05_library/organisms/masthead/masthead.module.scss";
import { useEffect, useId } from "react";
import ChevronDown from "@/svgs/chevron-down.svg";
import { MastHeaderOrganism } from "./MastHeader.organism";

export default function MastHeader() {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new MastHeaderOrganism(el).init());
  });

  return (
    <header
      data-next={`${config.name}-${ID}`}
      className={styles.base}
      style={{ backgroundImage: "url(header-bg.jpg)" }}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.title}>
          <span className={styles.mainHeading}>Închiriere echipamente IT</span>
        </h1>

        <a className={`${styles.button} text-uppercase`} href="#how_it_works">
          <span className={styles.buttonText}>Afla mai multe</span>
          <ChevronDown className={styles.svg} />
        </a>
      </div>
    </header>
  );
}
