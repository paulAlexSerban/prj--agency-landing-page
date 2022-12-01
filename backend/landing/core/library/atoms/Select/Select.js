import { useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/select/select.module.scss";
import Icon from "@/core/atoms/Icon/Icon";

export default function Select({
  inputName,
  inputId,
  inputValue,
  options = [],
}) {
  const ID = useId();

  return (
    <label htmlFor={inputId} className={styles.base}>
      <select
        name={inputName}
        id={inputId}
        value={inputValue}
        type="radio"
        className={styles.select}
        data-next-cmp={`${config.name}-${ID}`}
      >
        <option value="">choose an option !!!</option>
        {options.map((option, index) => {
          return (
            <option value={option.toLowerCase()} key={index}>
              {option}
            </option>
          );
        })}
        {/* <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option> */}
      </select>
      <Icon iconName="chevronDown" className={styles.icon} />
    </label>
  );
}
