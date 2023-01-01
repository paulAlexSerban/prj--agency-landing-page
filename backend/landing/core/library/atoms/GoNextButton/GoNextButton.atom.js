
import { smoothScroll } from "core/plugins/smoothScroll";
import Component from "../../../prototypes/Component";
export class GoNextButtonAtom extends Component {
  constructor(el, jsHook) {
    super(el);
    this.#init();
    this.jsHook = jsHook;
  }

  #setupPlugins() {
    super.register(smoothScroll);
  }

  #initPlugins() {
    this.smoothScroll = this.plugins.smoothScroll();
  }

  #setupEvents() {
    this.el.addEventListener("click", (e) => {
      e.preventDefault();
      this.smoothScroll.on(e.target, this.jsHook);
    })
  }

  #init() {
    this.#setupPlugins();
    this.#initPlugins();
    this.#setupEvents();
  }
}