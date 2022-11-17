import Component from "./Component";
import { detectBrowser } from "@/plugins/detectBrowser";

export default class Template extends Component {
  constructor(el) {
    super(el);

    this.#initTemplate();
  }

  #setupPlugins () {
    super.register(detectBrowser);
  }

  #initPlugins() {
    this.browser = this.plugins.detectBrowser();
  }

  #initTemplate() {
    this.#setupPlugins();
    this.#initPlugins();
  }
}
