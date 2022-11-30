import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/page-title/page-title.module.scss";

export default function PageTitle({text}) {
  const ID = useId();

  return <h1 className={styles.base} data-next-cmp={`${config.name}-${ID}`}>{text}</h1>;
}
