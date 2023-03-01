import { isPreload } from "@/plugins/isPreload";
import { addClass } from "@/utils/dom/manipulation";
// import mastheadCss from "@/styles/_05_library/organisms/masthead/masthead.module.scss";
import Template from "@/prototypes/Template";

export default class GenericTemplate extends Template {
  constructor(el) {
    super(el);

    this.#init();
  }

  #setupToucheDevice() {
    if (this.browser.mobile) {
      // @todo: use mastheadCSS.isTouch to take advantage of css-modules
      addClass("isTouch", this.el);
    }
  }

  #setupPlugins() {
    super.register(isPreload);
  }

  #initPlugins() {
    // this.plugins.isPreload(this.el, [ mastheadCss.isPreload ]);
  }

  #init() {
    this.#setupPlugins();
    this.#initPlugins();
    this.#setupToucheDevice();
  }
}
