import config from "./config";
import { parallax } from "core/plugins/parallax";
import { breakpoints } from "core/plugins/breakpoints";
import { scrollSpy } from "core/plugins/scrollspy";
import Component from "../../../prototypes/Component";
import styles from "@/styles/organisms/spotlight/spotlight.module.scss";
import BREAKPOINTS from "@/utils/constants/breakpoints";

export class SpotlightOrganism extends Component {
  constructor(el) {
    super(el);
    this.srcset = [];
    this.#init();
  }

  #setupDomReferences() {
    this.elements.image = this.el.querySelector(config.selectors.image);
  }

  #getSrcset() {
    const rawSrcset = this.elements.image.srcset.split(",");

    rawSrcset.forEach((set) => {
      const cleanSet = set.replace(/^\s/g, "").split(" ");
      const width = parseInt(cleanSet[1]);
      this.srcset.push({
        path: cleanSet[0],
        width: width,
      });
    });
  }

  #setBackgroundImage() {
    this.#getSrcset();
    const viewportWidth = window.innerWidth;
    const imageSrc = this.srcset.find((src) => src.width > viewportWidth);
    if (imageSrc) {
      this.el.style.setProperty("--image-src", `url(${imageSrc.path})`);
    }
  }

  #setupPlugins() {
    super.register(breakpoints);
    super.register(parallax);
    super.register(scrollSpy);
  }

  #initPlugins() {
    this.breakpoints = this.plugins.breakpoints(BREAKPOINTS);
    const parallax = this.plugins.parallax(this.el, this.breakpoints);
    const scrollSpy = this.plugins.scrollSpy(this.el, styles);
  }

  #setEventListeners() {
    window.addEventListener("resize", () => {
      this.#setBackgroundImage();
    });
  }

  #init() {
    this.#setupDomReferences();
    this.#setupPlugins();
    // this.#initPlugins();

    // this.#setEventListeners();
    // this.#setBackgroundImage();
  }
}
