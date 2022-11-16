import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/molecules/form/form.module.scss";

export default function Form({ children }) {
  const ID = useId();

  return (
    <form data-next={`${config.name}-${ID}`} className={styles.base}>
      {children}
    </form>
  );
}
