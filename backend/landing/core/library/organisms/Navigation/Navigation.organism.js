import { config } from "./Navigation.config";
import styles from "@/styles/_05_library/organisms/navigation/navigation.module.scss";
import { parallax } from "core/plugins/parallax";
import { breakpoints } from "core/plugins/breakpoints";
import Component from "../../../Component";

export class NavigationOrganism extends Component {
  constructor(el) {
    super(el);
  }

  #setupPlugins() {
    super.register(breakpoints);
    super.register(parallax);
  }

  #initPlugins() {
    const breakpoints = this.plugins.breakpoints({
      xlarge: ["1281px", "1680px"],
      large: ["981px", "1280px"],
      medium: ["737px", "980px"],
      small: ["481px", "736px"],
      xsmall: [null, "480px"],
    });
    const parallax = this.plugins.parallax(this.el, breakpoints);
  }

  #setupDomReferences() {
    this.elements.mainNav = document.body.querySelector(config.selectors.mainNav);
    this.elements.navToggler = document.body.querySelector(config.selectors.navToggler);
    this.elements.navItems = [].slice.call(document.querySelectorAll(config.selectors.navItems));
  }

  #setupEvents() {
    document.addEventListener("scroll", () => {
      this.#navbarShrink()
    });

    this.elements.navItems.map((item) => {
      item.addEventListener("click", () => {
        if (window.getComputedStyle(this.elements.navToggler).display !== "none") {
          this.elements.navToggler.click();
        }
      });
    });
  }

  #navbarShrink() {
    if (!this.elements.mainNav) {
      return;
    }
    if (window.scrollY === 0) {
      this.elements.mainNav.classList.remove(styles.shrink);
    } else {
      this.elements.mainNav.classList.add(styles.shrink);
    }
  }

  init() {
    this.#setupDomReferences();
    this.#setupEvents();
    this.#setupPlugins();
    this.#initPlugins();
    this.#navbarShrink()
  }
}
