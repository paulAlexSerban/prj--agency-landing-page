import { config } from "./MastHeader.config";
import styles from "@/styles/_05_library/organisms/masthead/masthead.module.scss";
import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { MastHeaderOrganism } from "./MastHeader.organism";

export default function MastHeader({ children }) {
  const ID = useId();
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new MastHeaderOrganism(el));
  }, [loadingComplete]);

  return (
    <header data-next={`${config.name}-${ID}`} className={styles.base}>
      <Image
        className={`${styles.image} ${config.hooks.image}`}
        src="/header-bg.jpg"
        layout="fill"
        quality="100"
        alt="alternative text"
        onLoadingComplete={() => {
          setLoadingComplete(true);
        }}
      />
      <div className={`${styles.container}`}>{children}</div>
    </header>
  );
}
