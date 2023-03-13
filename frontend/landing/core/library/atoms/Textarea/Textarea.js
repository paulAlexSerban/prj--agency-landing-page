import { useId } from "react";
import styles from "@/styles/atoms/textarea/textarea.module.scss";

export default function Textarea({
  placeholder,
  inputName,
  inputId,
  inputValue,
  rows,
  required,
  validationMessage,
  handleChange,
  isInvalid,
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
        required={required}
        onChange={handleChange}
        data-invalid={isInvalid}
      ></textarea>
      <span className={styles.labelText} data-type="label">
        {isInvalid && validationMessage ? validationMessage : placeholder}
      </span>
    </label>
  );
}
