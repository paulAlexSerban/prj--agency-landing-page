import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/radio/radio.module.scss";
import Icon from "@/core/atoms/Icon/Icon";

export default function Radio({ inputName, inputId, inputValue, label }) {
  const ID = useId();

  return (
    <label htmlFor={inputId} className={styles.base} tabIndex="0">
      <input
        name={inputName}
        id={inputId}
        value={label}
        type="radio"
        className={styles.input}
        data-next-cmp={`${config.name}-${ID}`}
        tabIndex="-1"
      />
      <span className={styles.radioBox}>
        <Icon iconName="checkMark" className={styles.icon} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}

/** How to use:
 * <Fieldset name="gender" required="true">
  *  <Radio inputName="gender" inputId="radio-one" label="male" />
  *  <Radio inputName="gender" inputId="radio-two" label="feminine" />
 * </Fieldset> */
