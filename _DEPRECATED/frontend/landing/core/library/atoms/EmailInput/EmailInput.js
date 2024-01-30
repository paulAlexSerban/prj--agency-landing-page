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
        type="email"
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
