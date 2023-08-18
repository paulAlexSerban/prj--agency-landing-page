import styles from "@/styles/atoms/fieldset/fieldset.module.scss";

export default function Fieldset({
  children = {},
  name = "",
  required = false,
  legend = "",
  cols = 1,
  type,
  validationMessage,
  isInvalid,
}) {
  const legendText =
    isInvalid && validationMessage
      ? validationMessage
      : required
      ? `${legend} *`
      : `${legend} (optional)`;

  return (
    <fieldset
      name={name}
      id={name}
      className={`${styles.base} ${
        cols !== 1 ? styles[`base--${cols}-cols`] : ""
      }`}
      required={required}
      data-invalid={isInvalid}
    >
      {legend && (
        <legend className={styles.legend} data-type="label">
          {legendText}
        </legend>
      )}
      {children}
    </fieldset>
  );
}
