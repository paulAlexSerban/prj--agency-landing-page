import styles from "@/styles/_05_library/organisms/spotlight/spotlight.module.scss";

export default function SpotlightTemplates({ position, content }) {
  if (position === "bottom") {
    return (
      <div className="row">
        <div className="col-12 col-md-4">
          <header className={styles.header}>
            <h2>{content.heading}</h2>
          </header>
        </div>
        <div className={`${styles.textContainer} col-12 col-md-8`}>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.text}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }
}
