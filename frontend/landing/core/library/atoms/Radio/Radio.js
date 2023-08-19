import styles from "@/styles/atoms/radio/radio.module.scss";
import Icon from "@/core/atoms/Icon/Icon";

export default function Radio({ inputName, inputId, inputValue, label }) {
  return (
    <label htmlFor={inputId} className={styles.base} tabIndex="0">
      <input
        name={inputName}
        id={inputId}
        value={label}
        type="radio"
        className={styles.input}
        tabIndex="-1"
      />
      <span className={styles.radioBox}>
        <Icon iconName="checkMark" className={styles.icon} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}
