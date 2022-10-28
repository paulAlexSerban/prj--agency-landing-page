import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import LogoIcon from "../public/svgs/logo-lynxit-icon-text.svg";

export default function Navigation() {
  let dom = {};
  const setupDomReferences = () => {
    dom = {
      navbarCollapsible: document.body.querySelector(".js-main-nav"),
      navbarToggler: document.body.querySelector(".navbar-toggler"),
      responsiveNavItems: [].slice.call(document.querySelectorAll("#navbarResponsive nav-link")),
    };
  };

  const setupEvents = () => {
    document.addEventListener("scroll", navbarShrink);
    dom.responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(dom.navbarToggler).display !== 'none') {
              dom.navbarToggler.click();
          }
      });
  });
  };

  const navbarShrink = () => {
    if (!dom.navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      dom.navbarCollapsible.classList.remove("shrink");
    } else {
      dom.navbarCollapsible.classList.add("shrink");
    }
  };

  useEffect(() => {
    setupDomReferences();
    setupEvents();
    navbarShrink();
  });

  return (
    <nav className="navigation__base navbar navbar-expand-lg navbar-dark fixed-top js-main-nav">
      <div className="navigation__container container">
        <a className="navigation__logo-link navbar-brand" href="#page-top">
          <LogoIcon className="navigation__logo-icon" />
        </a>
        <button
          className="navigation__toggle navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <FontAwesomeIcon className="ms-1" icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navigation__list navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="navigation__list-item nav-item">
              <a className="navigation__link nav-link" href="#services">
                Servicii
              </a>
            </li>
            <li className="navigation__list-item nav-item">
              <a className="navigation__link navigation__link nav-link" href="#products">
                Produse
              </a>
            </li>
            <li className="navigation__list-item nav-item">
              <a className="navigation__link nav-link" href="#about">
                Despre noi
              </a>
            </li>
            <li className="navigation__list-item nav-item">
              <a className="navigation__link nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
