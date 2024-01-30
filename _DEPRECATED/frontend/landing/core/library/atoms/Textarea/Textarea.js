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
  const placeholderText =
    isInvalid && validationMessage
      ? validationMessage
      : required
      ? `${placeholder} *`
      : `${placeholder} (optional)`;

  return (
    <label htmlFor={inputId} className={styles.base}>
      <textarea
        placeholder={placeholderText}
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
        {placeholderText}
      </span>
    </label>
  );
}
