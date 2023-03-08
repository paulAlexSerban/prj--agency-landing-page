import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/text-input/text-input.module.scss";

export default function TextInput({
  placeholder,
  inputName,
  inputId,
  inputValue,
  required,
  type = "text"
}) {
  const ID = useId();

  return (
    <label className={styles.base} htmlFor={inputId}>
      <input
        placeholder={placeholder}
        name={inputName}
        id={inputId}
        value={inputValue}
        type={type}
        className={styles.input}
        data-next-cmp={`${config.name}-${ID}`}
        data-required={required}
      />
    </label>
  );
}
