import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/molecules/copyright/copyright.module.scss";
import Paragraph from "@/atoms/Paragraph/Paragraph";

export default function Copyright() {
  const ID = useId();

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.base} data-next={`${config.name}-${ID}`}>
      <Paragraph text={`${year} © LynxIT`} />
    </div>
  );
}
