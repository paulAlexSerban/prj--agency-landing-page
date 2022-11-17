import { useId, useEffect } from "react";
import config from "./config";
import styles from "@/styles/atoms/go-next-button/go-next-button.module.scss";
import ChevronDown from "@/svgs/chevron-down.svg";
import { GoNextButtonAtom } from "./GoNextButton.atom";

export default function GoNextButton({ href }) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new GoNextButtonAtom(el));
  });

  return (
    <a className={styles.base} data-next={`${config.name}-${ID}`} href={`#${href}`}>
      <ChevronDown className={styles.svg} />
    </a>
  );
}
