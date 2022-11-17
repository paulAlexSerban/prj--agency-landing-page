import config from "./config";
import burgerStyles from "@/styles/atoms/burger-button/burger-button.module.scss";
import navigationStyles from "@/styles/organisms/navigation/navigation.module.scss";
import logoStyles from "@/styles/atoms/logo-icon/logo-icon.module.scss";
import Component from "@/prototypes/Component";
import { breakpoints } from "@/plugins/breakpoints";
import { smoothScroll } from "@/plugins/smoothScroll";
import BREAKPOINTS from "@/utils/constants/breakpoints";

export class NavigationOrganism extends Component {
  constructor(el) {
    super(el);
    this.#init();
  }

  #setupPlugins() {
    super.register(breakpoints);
    super.register(smoothScroll);
  }

  #initPlugins() {
    this.breakpoints = this.plugins.breakpoints(BREAKPOINTS);
    this.smoothScroll = this.plugins.smoothScroll();
  }

  #setupDomReferences() {
    this.elements.mainNav = document.body.querySelector(config.selectors.mainNav);
    this.elements.navToggler = document.body.querySelector(config.selectors.navToggler);
    this.elements.navList = document.body.querySelector(config.selectors.navList);
    this.elements.navItems = [].slice.call(document.querySelectorAll(config.selectors.navItems));
  }

  #setupEvents() {
    document.addEventListener("scroll", () => {
      this.#navbarShrink();
    });

    this.elements.navItems.map((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const maxWidthToggleDesktop = parseInt(BREAKPOINTS.desktop[1].split("px")[0]);
        if (window.innerWidth < maxWidthToggleDesktop) this.elements.navToggler.click();
        this.smoothScroll.on(e.target);
      });
    });

    this.elements.navToggler.addEventListener("click", (e) => {
      e.preventDefault();
      this.el.classList.toggle(navigationStyles.show);
      this.el.classList.toggle(burgerStyles.open);
    });

    this.breakpoints.on(">desktop", () => {
      this.el.classList.remove(navigationStyles.show);
      this.el.classList.remove(burgerStyles.open);
    });
  }

  #navbarShrink() {
    if (!this.elements.mainNav) {
      return;
    }
    if (window.scrollY === 0) {
      this.el.classList.remove(navigationStyles.shrink);
      this.el.classList.remove(logoStyles.shrink);
    } else {
      this.el.classList.add(navigationStyles.shrink);
      this.el.classList.add(logoStyles.shrink);
    }
  }

  #init() {
    this.#setupDomReferences();
    this.#setupPlugins();
    this.#initPlugins();
    this.#setupEvents();
    this.#navbarShrink();
  }
}

export default NavigationOrganism;