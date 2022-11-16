import Component from "./Component";
import { detectBrowser } from "@/plugins/detectBrowser";

export default class Template extends Component {
  constructor(el) {
    super(el);

    this.#init();
  }

  #setupPlugins () {
    super.register(detectBrowser);
  }

  #initPlugins() {
    this.browser = this.plugins.detectBrowser();
  }

  #init() {
    this.#setupPlugins();
    this.#initPlugins();
  }
}
