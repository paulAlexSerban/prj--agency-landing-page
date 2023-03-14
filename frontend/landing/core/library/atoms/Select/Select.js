import styles from "@/styles/atoms/select/select.module.scss";
import Icon from "@/core/atoms/Icon/Icon";

export default function Select({
  inputName,
  placeholder = "optiuni",
  inputId,
  options = [],
  required,
  validationMessage,
  handleChange,
  isInvalid,
  inputValue,
}) {
  const placeholderText =
    isInvalid && validationMessage
      ? validationMessage
      : required
      ? `${placeholder} *`
      : `${placeholder} (optional)`;

  return (
    <label htmlFor={inputId} className={styles.base}>
      <select
        name={inputName}
        id={inputId}
        className={styles.select}
        required={required}
        onChange={handleChange}
        data-invalid={isInvalid}
      >
        <option value="">{placeholderText}</option>
        {options.map((option, index) => {
          return (
            <option value={option.toLowerCase()} key={index}>
              {option}
            </option>
          );
        })}
      </select>
      <Icon iconName="chevronDown" className={styles.icon} />
      <span
        className={`${styles.labelText} ${
          inputValue !== "" ? styles["labelText--isVisible"] : ""
        }`}
        data-placeholder={placeholderText}
      >
        {placeholderText}
      </span>
    </label>
  );
}
