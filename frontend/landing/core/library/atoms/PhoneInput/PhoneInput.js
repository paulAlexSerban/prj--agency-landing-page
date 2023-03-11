import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/phone-input/phone-input.module.scss";

export default function PhoneInput({
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
        type="text"
        className={styles.input}
        data-next-cmp={`${config.name}-${ID}`}
        data-required={required}
        data-form-item-type="phoneNumber"
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
