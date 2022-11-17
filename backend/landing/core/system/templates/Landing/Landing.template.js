import { isPreload } from "@/plugins/isPreload";
import { addClass } from "@/utils/dom/manipulation";
import mastheadCss from "@/styles/organisms/masthead/masthead.module.scss";
import pageTitleCss from "@/styles/atoms/page-title/page-title.module.scss";
import goNextStyles from "@/styles/atoms/go-next-button/go-next-button.module.scss";
import Template from "@/prototypes/Template";

export class LandingTemplate extends Template {
  constructor(el) {
    super(el);

    this.#init();
  }

  #setupToucheDevice () {
    if (this.browser.mobile) {
      // @todo: use mastheadCSS.isTouch to take advantage of css-modules
      addClass("isTouch", this.el);
    }
  };

  #setupPlugins () {
    super.register(isPreload);
  }

  #initPlugins() {
    this.plugins.isPreload(this.el, [ mastheadCss.isPreload, pageTitleCss.isPreload , goNextStyles.isPreload]);
  }

  #init() {
    this.#setupPlugins();
    this.#initPlugins();
    this.#setupToucheDevice();
  }
}

export default LandingTemplate;