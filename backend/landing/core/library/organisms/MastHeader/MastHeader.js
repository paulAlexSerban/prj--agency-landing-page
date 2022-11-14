import { config } from "./MastHeader.config";
import styles from "@/styles/_05_library/organisms/masthead/masthead.module.scss";
import { useEffect, useId } from "react";

import { MastHeaderOrganism } from "./MastHeader.organism";
import PageTitle from "@/atoms/PageTitle/PageTitle";
import GoNextButton from "@/atoms/GoNextButton/GoNextButton";

export default function MastHeader() {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new MastHeaderOrganism(el));
  });

  return (
    <header
      data-next={`${config.name}-${ID}`}
      className={styles.base}
      style={{ backgroundImage: "url(header-bg.jpg)" }}
    >
      <div className={`${styles.container}`}>
        <PageTitle text="Închiriere echipamente IT" />
        <GoNextButton href="#servicii" />
      </div>
    </header>
  );
}
