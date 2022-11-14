
import { parallax } from "core/plugins/parallax";
import { breakpoints } from "core/plugins/breakpoints";
import Component from "../../../Component";
import BREAKPOINTS from "@/utils/constants/breakpoints";

export class MastHeaderOrganism extends Component {
  constructor(el) {
    super(el);
    this.#init();
  }

  #setupPlugins () {
    super.register(breakpoints);
    super.register(parallax);
  }

  #initPlugins() {
    const breakpoints = this.plugins.breakpoints(BREAKPOINTS);
    this.plugins.parallax(this.el, breakpoints);
  }

  #init() {
    this.#setupPlugins();
    this.#initPlugins();
  }
};
