import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/fieldset/fieldset.module.scss";

export default function Fieldset({ children, name }) {
  const ID = useId();
  return (
    <fieldset
      name={name}
      className={styles.base}
      data-next-cmp={`${config.name}-${ID}`}
    >
      {children}
    </fieldset>
  );
}
