import { useEffect, useId } from "react";
import { config } from "./Navigation.config";

import { NavigationOrganism } from "./Navigation.organism";
import styles from "@/styles/_05_library/organisms/navigation/navigation.module.scss";

import NavigationBar from "@/molecules/NavigationBar/NavigationBar";
import NavigationList from "@/molecules/NavigationList/NavigationList";

export default function Navigation({navList}) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new NavigationOrganism(el));
  });

  return (
    <nav className={`${styles.base} js-main-nav`} data-next={`${config.name}-${ID}`}>
      <div className={`${styles.container}`}>
        <NavigationBar jsToggleHook={config.selectors.navToggler} />
        <NavigationList list={navList} />
      </div>
    </nav>
  );
}
