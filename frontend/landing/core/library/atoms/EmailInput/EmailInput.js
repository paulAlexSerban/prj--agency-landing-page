import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/email-input/email-input.module.scss";

export default function EmailInput({
  placeholder,
  inputName,
  inputId,
  inputValue,
  required,
  handleChange,
  isInvalid,
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
        required={required}
        onChange={handleChange}
        data-invalid={isInvalid}
      />
      <span className={styles.labelText} data-type="label">
        {isInvalid && validationMessage ? validationMessage : placeholder}
      </span>
    </label>
  );
}
