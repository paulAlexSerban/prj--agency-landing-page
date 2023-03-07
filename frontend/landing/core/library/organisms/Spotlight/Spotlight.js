import config from "./config";
import { useEffect, useId } from "react";
import styles from "@/styles/organisms/spotlight/spotlight.module.scss";
import { SpotlightOrganism } from "./Spotlight.organism";

export default function Spotlight({ children, position, imageSrc, sectionId }) {
  const ID = useId();
  const imageRendition = 320;
  const bkgImage = imageSrc;

  useEffect(() => {
    document
      .querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`)
      .forEach((el) => new SpotlightOrganism(el));
  });

  return (
    <section
      data-next-cmp={`${config.name}-${ID}`}
      data-bkg-image={bkgImage}
      data-img-rendition={imageRendition}
      id={sectionId}
      className={`${styles.base} ${styles[position]} ${styles.inactive}`}
      style={{
        "--image-src": `url(/images/${bkgImage}-${imageRendition}.webp)`,
      }}
    >
      <div className={styles.content}>{children}</div>
    </section>
  );
}
