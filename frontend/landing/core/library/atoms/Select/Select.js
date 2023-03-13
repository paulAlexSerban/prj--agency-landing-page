import { useId, useRef, useEffect, useState } from "react";
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
  const ID = useId();
  const selectRef = useRef(null);

  return (
    <label
      htmlFor={inputId}
      className={styles.base}
      data-validation-message={validationMessage}
    >
      <select
        name={inputName}
        id={inputId}
        className={styles.select}
        required={required}
        ref={selectRef}
        onChange={handleChange}
        data-invalid={isInvalid}
      >
        <option value="">{placeholder}</option>
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
        data-placeholder={placeholder}
      >
        {placeholder}
      </span>
    </label>
  );
}
