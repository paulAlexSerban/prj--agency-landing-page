import config from "./config";
import styles from "@/styles/organisms/masthead/masthead.module.scss";
import { useEffect, useId } from "react";
import { MastHeaderOrganism } from "./MastHeader.organism";

export default function MastHeader({ children }) {
  const ID = useId();
  const bkgImage = "header-bg";
  const imageRendition = 320;

  useEffect(() => {
    document
      .querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`)
      .forEach((el) => new MastHeaderOrganism(el));
  });

  return (
    <header
      data-next-cmp={`${config.name}-${ID}`}
      data-bkg-image={bkgImage}
      data-img-rendition={imageRendition}
      className={styles.base}
      style={{ "--image-src": `url(images/${bkgImage}-${imageRendition}px.webp)` }}
    >
      <div className={`${styles.container}`}>{children}</div>
    </header>
  );
}
