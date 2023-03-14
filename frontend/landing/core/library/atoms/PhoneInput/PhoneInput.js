import { useId } from "react";
import styles from "@/styles/atoms/phone-input/phone-input.module.scss";

export default function PhoneInput({
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

  const placeholderText =
    isInvalid && validationMessage
      ? validationMessage
      : required
      ? `${placeholder} *`
      : `${placeholder} (optional)`;

  return (
    <label className={styles.base} htmlFor={inputId}>
      <input
        placeholder={placeholderText}
        name={inputName}
        id={inputId}
        value={inputValue}
        type="text"
        className={styles.input}
        required={required}
        onChange={handleChange}
        data-invalid={isInvalid}
      />
      <span className={styles.labelText} data-type="label">
        {placeholderText}
      </span>
    </label>
  );
}
