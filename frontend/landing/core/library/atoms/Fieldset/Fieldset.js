import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/fieldset/fieldset.module.scss";

export default function Fieldset({
  children = {},
  name = "",
  required = false,
  legend = "",
  cols = 1,
}) {
  const ID = useId();
  return (
    <fieldset
      name={name}
      className={`${styles.base} ${
        cols !== 1 ? styles[`base--${cols}-cols`] : ""
      }`}
      data-next-cmp={`${config.name}-${ID}`}
      data-required={required}
    >
      {legend && <legend className={styles.legend}>{legend}</legend>}
      {children}
    </fieldset>
  );
}
