
import { parallax } from "core/plugins/parallax";
import { breakpoints } from "core/plugins/breakpoints";
import Component from "../../../Component";
import BREAKPOINTS from "@/utils/constants/breakpoints";
import { config } from "./MastHeader.config";

export class MastHeaderOrganism extends Component {
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
      const rawWidth = cleanSet[1];
      const width = rawWidth ? parseInt(rawWidth.substr(0, rawWidth.length - 1)) : undefined;
      const setObj = {
        path: cleanSet[0],
        width: width,
      };
      this.srcset.push(setObj);
    });
  }

  #setBackgroundImage() {
    const viewportWidth = window.innerWidth;
    const imageSrc = this.srcset.find((src) => src.width > viewportWidth);
    if (imageSrc) {
      this.el.style.setProperty("--image-src", `url(${imageSrc.path})`);
    }
  }

  #setupPlugins () {
    super.register(breakpoints);
    super.register(parallax);
  }

  #setEventListeners() {
    window.addEventListener("resize", () => {
      this.#setBackgroundImage();
    });
  }

  #initPlugins() {
    const breakpoints = this.plugins.breakpoints(BREAKPOINTS);
    this.plugins.parallax(this.el, breakpoints);
  }

  #init() {
    this.#setupDomReferences();
    this.#setupPlugins();
    this.#initPlugins();
    this.#getSrcset();
    this.#setEventListeners();
    this.#setBackgroundImage();
  }
};
