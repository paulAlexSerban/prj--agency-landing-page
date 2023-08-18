import styles from "@/styles/atoms/list/list.module.scss";

export default function List({ items = [], listStyle }) {
  return (
    <ul className={[styles.base, styles[listStyle]].join(" ")}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
