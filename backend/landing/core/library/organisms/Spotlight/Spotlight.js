import { config } from "./Spotlight.config";
import { useEffect, useId } from "react";
import styles from "@/styles/_05_library/organisms/spotlight/spotlight.module.scss";
import ChevronDown from "@/svgs/chevron-down.svg";
import { SpotlightOrganism } from "./Spotlight.organism";
import SpotlightTemplates from "./Spotlight.templates";

export default function Spotlight({ children, position, imageSrc, content, sectionId }) {
  const ID = useId();

  useEffect(() => {
    console.log("spotlight");
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new SpotlightOrganism(el).init());
  });

  return (
    <section
      data-next={`${config.name}-${ID}`}
      id={sectionId}
      className={`${styles.base} ${styles[position]} ${styles.inactive}`}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {children}
      {/* <div className={styles.content}>
        <div className="container">
          <SpotlightTemplates position={position} content={content}/>
        </div>
      </div>
      <a href="#two" className={`${styles.goToNext}`}>
        <ChevronDown className={styles.svg} />
      </a> */}
    </section>
  );
}
