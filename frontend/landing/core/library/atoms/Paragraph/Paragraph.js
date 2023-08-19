import styles from "@/styles/atoms/paragraph/paragraph.module.scss";

export default function Paragraph({ text, alignment, size }) {
  return (
    <p className={[styles.base, styles[alignment], styles[size]].join(" ")}>
      {text}
    </p>
  );
}
