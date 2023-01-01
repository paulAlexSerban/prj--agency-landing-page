import { useEffect, useId } from "react";
import config from "./config";
import NavigationOrganism from "./Navigation.organism";
import styles from "@/styles/organisms/navigation/navigation.module.scss";

import NavigationBar from "@/core/molecules/NavigationBar/NavigationBar";
import NavigationList from "@/core/molecules/NavigationList/NavigationList";
import { getNavigationList } from "./Navigation.utils";

export default function Navigation({ navList }) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`).forEach((el) => new NavigationOrganism(el));
  });

  return (
    <nav className={`${styles.base} js-main-nav`} data-next-cmp={`${config.name}-${ID}`}>
      <div className={`${styles.container}`}>
        <NavigationBar jsToggleHook={config.selectors.navToggler} />
        <NavigationList list={getNavigationList(navList)} />
      </div>
    </nav>
  );
}
