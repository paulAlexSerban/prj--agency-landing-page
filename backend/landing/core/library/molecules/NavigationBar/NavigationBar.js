import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/navigation-bar/navigation-bar.module.scss";
import LogoIcon from "@/core/atoms/LogoIcon/LogoIcon";
import BurgerButton from "@/core/atoms/BurgerButton/BurgerButton";

export default function NavigationBar({jsToggleHook}) {
  const ID = useId();

  return (
    <div data-next={`${config.name}-${ID}`} className={styles.base}>
      <LogoIcon />
      <BurgerButton ariaControls="navigationBar" ariaLabel="Toggle navigation" jsHook={jsToggleHook} />
    </div>
  );
}


