import { isPreload } from "@/plugins/isPreload";
import { addClass } from "@/utils/dom/manipulation";
import mastheadCss from "@/styles/_05_library/organisms/masthead/masthead.module.scss";
import { detectBrowser } from "@/plugins/detectBrowser";
import Component from "../../Component";

export class GenericTemplate extends Component {
  constructor(el) {
    super(el);
  }

  #setupToucheDevice () {
    if (this.browser.mobile) {
      addClass("isTouch", this.el);
    }
  };

  #setupPlugins () {
    super.register(isPreload);
    super.register(detectBrowser);
  }

  #initPlugins() {
    this.plugins.isPreload(this.el, [ mastheadCss.isPreload ]);
    this.browser = this.plugins.detectBrowser();
  }

  init() {
    this.#setupPlugins();
    this.#initPlugins();
    this.#setupToucheDevice();
  }
}
