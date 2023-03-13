import { useId } from "react";
import config from "./config";
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
  const ID = useId();
  return (
    <label className={styles.base} htmlFor={inputId}>
      <input
        placeholder={placeholder}
        name={inputName}
        id={inputId}
        type="text"
        className={styles.input}
        required={required}
        value={inputValue}
        onChange={handleChange}
        data-invalid={isInvalid}
      />
      <span className={styles.labelText} data-type="label">
        {isInvalid && validationMessage ? validationMessage : placeholder}
      </span>
    </label>
  );
}

/**
        <label
          className={styles.base}
          htmlFor="nume_reprezentant"
          data-validation-message="Campul trebuie completat cu informatiile aferente"
        >
          <input
            placeholder="Nume Reprezentant"
            name="nume_reprezentant"
            id="nume_reprezentant"
            type="text"
            className={styles.input}
            required
            value={form.nume_reprezentant}
            onChange={handleChange}
            invalid={errorFields.nume_reprezentant?.length}
          />
          <span className={styles.labelText} data-type="label">
            {errorFields.nume_reprezentant?.length
              ? errorFields.nume_reprezentant[0].message
              : "Nume reprezentant"}
          </span>
        </label>
 */
