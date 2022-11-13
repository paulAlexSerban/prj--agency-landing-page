import { parallax } from "core/plugins/parallax";
import { breakpoints } from "core/plugins/breakpoints";
import { scrollSpy } from "core/plugins/scrollspy";
import Component from "../../../Component";
import styles from "@/styles/_05_library/organisms/spotlight/spotlight.module.scss";
import BREAKPOINTS from "@/utils/constants/breakpoints";

export class SpotlightOrganism extends Component {
  constructor(el) {
    super(el);
  }

  #setupPlugins () {
    super.register(breakpoints);
    super.register(parallax);
    super.register(scrollSpy);
  }

  #initPlugins() {
    const breakpoints = this.plugins.breakpoints(BREAKPOINTS);
    const parallax = this.plugins.parallax(this.el, breakpoints);
    const scrollSpy = this.plugins.scrollSpy(this.el, styles)
  }

  init() {
    this.#setupPlugins();
    this.#initPlugins();
  }
};
