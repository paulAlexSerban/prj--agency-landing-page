import { useEffect, useId, useState } from "react";
import styles from "@/styles/organisms/spotlight/spotlight.module.scss";

export default function Spotlight({ children, position, imageSrc, sectionId }) {
  const imageRendition = 320;
  const bkgImage = imageSrc;

  const [imgSrc, SetImgSrc] = useState({
    "--image-src": `url(/images/${bkgImage}-${imageRendition}.webp)`,
  });

  return (
    <section
      id={sectionId}
      className={`${styles.base} ${styles[position]} ${styles.inactive}`}
      // style={imgSrc}
    >
      <div className={styles.content}>{children}</div>
    </section>
  );
}
