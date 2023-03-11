import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/email-input/email-input.module.scss";

export default function EmailInput({
  placeholder,
  inputName,
  inputId,
  inputValue,
  required,
  validationMessage,
}) {
  const ID = useId();

  return (
    <label
      className={styles.base}
      htmlFor={inputId}
      data-validation-message={validationMessage}
    >
      <input
        placeholder={placeholder}
        name={inputName}
        id={inputId}
        value={inputValue}
        type="email"
        className={styles.input}
        data-next-cmp={`${config.name}-${ID}`}
        data-required={required}
      />
      <span
        className={styles.labelText}
        data-type="label"
        data-placeholder={placeholder}
      >
        {placeholder}
      </span>
    </label>
  );
}
