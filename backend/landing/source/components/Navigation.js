import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Navigation() {
  let dom = {};
  const setupDomReferences = () => {
    dom = {
      navbarCollapsible: document.body.querySelector("#mainNav"),
      navbarToggler: document.body.querySelector(".navbar-toggler"),
      responsiveNavItems: [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")),
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
      dom.navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      dom.navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  useEffect(() => {
    setupDomReferences();
    setupEvents();
    navbarShrink();
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src="navbar-logo.svg" alt="..." />
        </a>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
