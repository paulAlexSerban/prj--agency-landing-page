import styles from "@/styles/organisms/masthead/masthead.module.scss";
import ParallaxImage from "@/core/molecules/ParallaxImage/ParallaxImage";

export default function MastHeader({ children, image, s3KeyPrefix }) {
  return (
    <header className={styles.base}>
      {image && (
        <ParallaxImage image={image} speed={25} s3KeyPrefix={s3KeyPrefix} />
      )}
      <div className={styles.container}>{children}</div>
    </header>
  );
}
