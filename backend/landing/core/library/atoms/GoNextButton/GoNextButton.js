import { useId, useEffect } from "react";
import config from "./config";
import styles from "@/styles/atoms/go-next-button/go-next-button.module.scss";
import ChevronDown from "@/svgs/chevron-down.svg";
import { GoNextButtonAtom } from "./GoNextButton.atom";

export default function GoNextButton({ href }) {
  const ID = useId();
  const jsHook = "js-go-next-button";

  useEffect(() => {
    document
      .querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`)
      .forEach((el) => new GoNextButtonAtom(el, jsHook));
  });

  return (
    <a
      className={`${styles.base} ${jsHook}`}
      data-next-cmp={`${config.name}-${ID}`}
      href={`#${href}`}
    >
      <ChevronDown className={styles.svg} />
    </a>
  );
}
