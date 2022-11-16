import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/molecules/navigation-bar/navigation-bar.module.scss";
// import Logo from "@/atoms/Logo/Logo";
import BurgerButton from "@/atoms/BurgerButton/BurgerButton";

export default function NavigationBar({jsToggleHook}) {
  const ID = useId();

  return (
    <div data-next={`${config.name}-${ID}`} className={styles.base}>
      {/* <Logo /> */}
      <BurgerButton ariaControls="navigationBar" ariaLabel="Toggle navigation" jsHook={jsToggleHook} />
    </div>
  );
}
