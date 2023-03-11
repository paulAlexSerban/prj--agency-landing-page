import { useId, useState } from "react";
import config from "./config";
import styles from "@/styles/atoms/fieldset/fieldset.module.scss";

export default function Fieldset({
  children = {},
  name = "",
  required = false,
  legend = "",
  cols = 1,
  type,
  validationMessage,
}) {
  const ID = useId();
  const [valid, setValid] = useState(true);
  return (
    <fieldset
      name={name}
      id={name}
      className={`${styles.base} ${
        cols !== 1 ? styles[`base--${cols}-cols`] : ""
      }`}
      data-next-cmp={`${config.name}-${ID}`}
      data-required={required}
      data-form-item-type={type}
      data-validation-message={validationMessage}
      data-placeholder={legend}
    >
      {legend && (
        <legend className={styles.legend} data-type="label">
          {valid ? legend : validationMessage}
        </legend>
      )}
      {children}
    </fieldset>
  );
}
