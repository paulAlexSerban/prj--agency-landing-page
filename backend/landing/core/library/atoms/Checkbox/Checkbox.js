import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/checkbox/checkbox.module.scss";
import Icon from "@/core/atoms/Icon/Icon";

export default function Checkbox({ inputName, inputId, inputValue, label }) {
  const ID = useId();

  return (
    <label htmlFor={inputId} className={styles.base} tabIndex="0">
      <input
        name={inputName}
        id={inputId}
        value={inputValue}
        type="checkbox"
        className={styles.input}
        data-next-cmp={`${config.name}-${ID}`}
        tabIndex="-1"
      />
      <span className={styles.checkbox}>
        <Icon iconName="checkMark" className={styles.icon} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}
