import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/checkbox/checkbox.module.scss";
import Icon from "@/core/atoms/Icon/Icon";
import Link from "next/link";
import linkStyles from "@/styles/atoms/link/link.module.scss";

export default function Checkbox({
  inputName,
  inputId,
  inputValue,
  label,
  handleChange,
  referencedPageHref = "",
  referencePageLabel = "",
  modifierStyle,
}) {
  const ID = useId();

  return (
    <label htmlFor={inputId} className={styles.base} tabIndex="0">
      <input
        name={inputName}
        id={inputId}
        value={label}
        type="checkbox"
        className={styles.input}
        data-next-cmp={`${config.name}-${ID}`}
        tabIndex="-1"
        onChange={handleChange}
      />
      <span className={styles.checkbox}>
        <Icon iconName="checkMark" className={styles.icon} />
      </span>
      <span className={styles.label}>
        {label}
        {referencedPageHref && referencePageLabel && (
          <Link href={referencedPageHref} className={linkStyles.default}>
            {referencePageLabel}
          </Link>
        )}
      </span>
    </label>
  );
}
