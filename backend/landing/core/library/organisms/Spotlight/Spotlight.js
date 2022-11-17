import { config } from "./Spotlight.config";
import { useEffect, useId, useState } from "react";
import styles from "@/styles/_05_library/organisms/spotlight/spotlight.module.scss";
import ChevronDown from "@/svgs/chevron-down.svg";
import { SpotlightOrganism } from "./Spotlight.organism";
import SpotlightTemplates from "./Spotlight.templates";
import Image from "next/image";

export default function Spotlight({ children, position, imageSrc, sectionId }) {
  const ID = useId();
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new SpotlightOrganism(el));
  }, [loadingComplete]);

  return (
    <section
      data-next={`${config.name}-${ID}`}
      id={sectionId}
      className={`${styles.base} ${styles[position]} ${styles.inactive}`}
    >
      <Image
        className={`${styles.image} ${config.hooks.image}`}
        src={`/${imageSrc}`}
        fill
        quality="100"
        alt="alternative text"
        onLoadingComplete={() => {
          setLoadingComplete(true);
        }}
      />
      <div className={styles.content}>{children}</div>
    </section>
  );
}
