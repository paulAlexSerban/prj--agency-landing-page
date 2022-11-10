import Component from "../../../Component";
import { scrollSpy } from "core/plugins/scrollspy";
import styles from "@/styles/_05_library/organisms/form/form.module.scss";

export class FormOrganism extends Component {
  constructor(el) {
    super(el);
  }

  #setupPlugins () {
    super.register(scrollSpy);
  }

  #initPlugins() {
    const scrollSpy = this.plugins.scrollSpy(this.el, styles)
  }

  init() {
    this.#setupPlugins();
    this.#initPlugins();
  }
};