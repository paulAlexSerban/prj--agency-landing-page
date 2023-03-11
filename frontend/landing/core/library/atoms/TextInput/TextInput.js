import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/text-input/text-input.module.scss";

export default function TextInput({
  placeholder,
  inputName,
  inputId,
  inputValue,
  required,
  type = "text",
  validationMessage,
}) {
  const ID = useId();
  console.log(validationMessage);
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
        type={type}
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
