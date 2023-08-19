import { useRef, useEffect, useState, useId } from "react";
import styles from "@/styles/organisms/navigation/navigation.module.scss";
import NavigationList from "@/core/molecules/NavigationList/NavigationList";
import { getNavigationList } from "./Navigation.utils";
import BREAKPOINTS from "@/utils/constants/breakpoints";
import LogoIcon from "@/core/atoms/LogoIcon/LogoIcon";
import BurgerButton from "@/core/atoms/BurgerButton/BurgerButton";
import classNames from "classnames";

export default function Navigation({ navList }) {
  const ID = useId();
  const navRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const maxWidthToggleDesktop = parseInt(BREAKPOINTS.desktop[1].split("px")[0]);

  const scrollTo = (targetElementId) => {
    const scrollToEl = document.querySelector(targetElementId);
    scrollToEl?.scrollIntoView({ behavior: "smooth" }, true);
  };

  const navbarShrink = () => {
    requestAnimationFrame(() => {
      if (window.scrollY === 0) {
        setShrink(false);
      } else {
        setShrink(true);
      }
    });
  };

  const handleMenuToggle = (e) => {
    e.preventDefault();
    const scrollToTarget = e.target?.getAttribute("href");

    requestAnimationFrame(() => {
      if (window.innerWidth < maxWidthToggleDesktop && !scrollToTarget) {
        setNavOpen(!navOpen);
      }
      if (scrollToTarget) {
        scrollTo(scrollToTarget);
      }
    });
  };

  const handleScroll = () => {
    requestAnimationFrame(() => {
      navbarShrink();
      if (window.innerWidth < maxWidthToggleDesktop) {
        setNavOpen(false);
      }
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });

  const classes = classNames(styles.base, {
    [styles.show]: navOpen,
    [styles.shrink]: shrink,
  });

  return (
    <nav ref={navRef} className={classes} id={ID}>
      <h2 className="visuallyhidden">Main Menu</h2>
      <div className={`${styles.container}`}>
        <LogoIcon shrink={shrink} />
        <BurgerButton
          ariaControls={ID}
          isToggled={navOpen}
          ariaLabel="Open main menu."
          handleMenuToggle={handleMenuToggle}
          ariaHidden={!navOpen}
        />

        {navList && (
          <NavigationList
            list={getNavigationList(navList)}
            handleMenuToggle={handleMenuToggle}
          />
        )}
      </div>
    </nav>
  );
}
