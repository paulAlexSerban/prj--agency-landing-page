import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/textarea/textarea.module.scss";

export default function Textarea({
  placeholder,
  inputName,
  inputId,
  inputValue,
  rows,
  required
}) {
  const ID = useId();

  return (
    <label htmlFor={inputId} className={styles.base}>
      <textarea
        placeholder={placeholder}
        name={inputName}
        id={inputId}
        value={inputValue}
        rows={rows}
        className={styles.input}
        data-next-cmp={`${config.name}-${ID}`}
        data-required={required}
      ></textarea>
    </label>
  );
}
