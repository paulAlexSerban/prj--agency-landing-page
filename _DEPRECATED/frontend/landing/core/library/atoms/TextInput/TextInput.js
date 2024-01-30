import styles from "@/styles/atoms/text-input/text-input.module.scss";

export default function TextInput({
  placeholder,
  inputName,
  inputId,
  inputValue,
  required,
  type = "text",
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
        type={type}
        className={styles.input}
        required={required}
        value={inputValue}
        onChange={handleChange}
        data-invalid={isInvalid}
      />
      <span className={styles.labelText} data-type="label">
        {placeholderText}
      </span>
    </label>
  );
}
