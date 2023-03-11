import { useId, useRef, useEffect, useState } from "react";
import config from "./config";
import styles from "@/styles/atoms/select/select.module.scss";
import Icon from "@/core/atoms/Icon/Icon";
const { log } = console;

export default function Select({
  inputName,
  placeholder = "optiuni",
  inputId,
  options = [],
  required,
  validationMessage,
}) {
  const ID = useId();
  const selectRef = useRef(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    selectRef.current.addEventListener("change", () => {
      setValue(selectRef.current.value);
    });
  }, []);

  return (
    <label
      htmlFor={inputId}
      className={styles.base}
      data-validation-message={validationMessage}
    >
      <select
        name={inputName}
        id={inputId}
        type="radio"
        className={styles.select}
        data-next-cmp={`${config.name}-${ID}`}
        data-required={required}
        ref={selectRef}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => {
          return (
            <option value={option.toLowerCase()} key={index}>
              {option}
            </option>
          );
        })}
        {/* <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option> */}
      </select>
      <Icon iconName="chevronDown" className={styles.icon} />
      <span
        className={`${styles.labelText} ${
          value ? styles["labelText--isVisible"] : ""
        }`}
        data-type="label"
        data-placeholder={placeholder}
      >
        {placeholder}
      </span>
    </label>
  );
}
