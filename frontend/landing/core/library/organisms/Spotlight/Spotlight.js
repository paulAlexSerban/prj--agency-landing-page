import React from "react";
import styles from "@/styles/organisms/spotlight/spotlight.module.scss";
import dynamic from "next/dynamic";
const ParallaxImage = dynamic(
  () => import("@/core/molecules/ParallaxImage/ParallaxImage"),
  {
    ssr: false,
  }
);

/**
 * Spotlight component
 * @param {ReactNode} children - React children
 * @param {string} position - Position of spotlight (top|bottom)
 * @param {object} image - Image object
 * @param {string} sectionId - Section ID
 * @param {string} s3KeyPrefix - S3 Key Prefix
 */

export default function Spotlight({
  children,
  position,
  image,
  sectionId,
  s3KeyPrefix,
}) {
  // Set base class for component
  let positionClass = styles.base;
  // If position is set, append the position class to the base class
  if (position) {
    positionClass = `${styles.base} ${styles[position]}`;
  }
  return (
    <section id={sectionId} className={positionClass}>
      {image && <ParallaxImage image={image} s3KeyPrefix={s3KeyPrefix} />}
      {children && <div className={styles.content}>{children}</div>}
    </section>
  );
}
