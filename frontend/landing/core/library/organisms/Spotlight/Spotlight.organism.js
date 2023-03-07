import config from "./config";
import { parallax } from "core/plugins/parallax";
import { breakpoints } from "core/plugins/breakpoints";
import { scrollSpy } from "core/plugins/scrollspy";
import Component from "../../../prototypes/Component";
import styles from "@/styles/organisms/spotlight/spotlight.module.scss";
import BREAKPOINTS from "@/utils/constants/breakpoints";
import IMAGE_RENDITIONS from "@/utils/constants/image-renditions";

export class SpotlightOrganism extends Component {
  constructor(el) {
    super(el);
    this.srcset = [];
    this.#init();
  }

  #getImagePath() {
    const imageName = this.el.getAttribute("data-bkg-image");
    this.imagePath = `images/${imageName}`;

    this.#getImageRenditionsPaths();
  }

  #getImageRenditionsPaths() {
    this.imageRenditionsPaths = {};
    IMAGE_RENDITIONS.forEach(
      (rendition) =>
        (this.imageRenditionsPaths[
          rendition
        ] = `${this.imagePath}-${rendition}`)
    );

    this.#getDevicePixelRatio();
  }

  #getDevicePixelRatio() {
    this.dpr = window.devicePixelRatio;
  }

  #getWindowWidth() {
    this.windowWidth =
      Math.max(document.documentElement.clientWidth, window.innerWidth) *
      this.dpr;
  }

  #setBackgroundImage() {
    const imageRendition = parseInt(this.el.getAttribute("data-img-rendition"));
    const isCorrectRendition = Boolean(this.windowWidth <= imageRendition);

    if (!isCorrectRendition) {
      let correctRendition = IMAGE_RENDITIONS.find((width) => {
        return width > this.windowWidth;
      });

      correctRendition = correctRendition
        ? `${correctRendition}`
        : "original";

      this.el.style.setProperty(
        "--image-src",
        `url(/${this.imagePath}-${correctRendition}.webp)`
      );
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

  #setupEventListeners() {
    window.addEventListener("resize", () => {
      this.#getWindowWidth();
      this.#setBackgroundImage();
    });
    window.addEventListener("orientationchange", () => {
      this.#getWindowWidth();
      this.#setBackgroundImage();
    });
    window.addEventListener("load", () => {
      this.#getWindowWidth();
      this.#setBackgroundImage();
    });
    window.addEventListener("fullscreenchange", () => {
      this.#getWindowWidth();
      this.#setBackgroundImage();
    });
  }

  #init() {
    this.#setupPlugins();
    this.#initPlugins();
    this.#setupEventListeners();
    this.#getImagePath();
    this.#getWindowWidth();
    this.#setBackgroundImage();
  }
}
