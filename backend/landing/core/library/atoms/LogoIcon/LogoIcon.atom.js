
import { smoothScroll } from "core/plugins/smoothScroll";
import Component from "../../../Component";
class LogoAtom extends Component {
  constructor(el) {
    super(el);
    this.#init();
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
      this.smoothScroll.on(e.target);
    })
  }

  #init() {
    this.#setupPlugins();
    this.#initPlugins();
    this.#setupEvents();
  }
}

export default LogoAtom;