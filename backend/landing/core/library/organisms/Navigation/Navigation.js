import { useEffect,  useId  } from "react";
import { config } from "./Navigation.config";

import { NavigationOrganism } from "./Navigation.organism";
import styles from "@/styles/_05_library/organisms/navigation/navigation.module.scss";

import Logo from  "@/atoms/logo/Logo";

export default function Navigation() {
  const ID = useId();

  useEffect(() => {
      document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new NavigationOrganism(el).init());
  });

  return (
    <nav className={`${styles.base} navbar navbar-expand-lg navbar-dark fixed-top js-main-nav`} data-next={`${config.name}-${ID}`} >
      <div className={`${styles.container}`}>
        <Logo />
        <button
          className={`${styles.toggle} js-nav-toggle`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navigation__list navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li className={`${styles.listItem} nav-item`}>
              <a className={`${styles.link} nav-link js-nav-link`} href="#about">
                Despre noi
              </a>
            </li>
            <li className={`${styles.listItem} nav-item`}>
              <a className={`${styles.link} nav-link js-nav-link`} href="#services">
                Beneficii
              </a>
            </li>
            <li className={`${styles.listItem} nav-item`}>
              <a className={`${styles.link} nav-link js-nav-link`} href="#products">
                Produse
              </a>
            </li>
            <li className={`${styles.listItem} nav-item`}>
              <a className={`${styles.link} nav-link js-nav-link`} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
