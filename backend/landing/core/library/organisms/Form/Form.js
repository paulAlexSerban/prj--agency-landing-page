import { useId, useEffect } from "react";
import FormOrganism from "./Form.organism";
import config from "./config";
import styles from "@/styles/organisms/form/form.module.scss";

export default function Form({ children }) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`).forEach((el) => new FormOrganism(el));
  });

  return (
    <form
      action="/api/form"
      method="POST"
      data-next-cmp={`${config.name}-${ID}`}
      className={styles.base}
      encType="multipart/form-data"
    >
      {children}
    </form>
  );
}
