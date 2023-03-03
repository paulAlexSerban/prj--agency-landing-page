import Component from "@/prototypes/Component";
import config from "./config";
import { noBubbling } from "@/utils/dom/events";

export class ProductCardMolecule extends Component {
  constructor(el) {
    super(el);
    this.modalID = this.el.getAttribute("id");
    this.#init();
  }

  #setupDomReferences() {
    this.elements.modal = document.querySelector(
      `[data-controlled-by="${this.modalID}"]`
    );
    this.elements.overlay = document.querySelector(config.selectors.overlay);

    if(this.elements.modal) {
      this.elements.closeModalBtn = this.elements.modal.querySelector(
        `.${config.hooks.btnCloseModal}`
      );
    }

  }

  #setupEventListeners() {
    this.el.addEventListener("click", (e) => {
      noBubbling(e);
      this.#openModal();
    });

    this.elements.closeModalBtn.addEventListener("click", (e) => {
      noBubbling(e);
      this.#closeModal();
    });
    this.elements.overlay.addEventListener("click", (e) => {
      this.#closeModal();
    });
  }

  #openModal() {
    this.elements.modal.classList.remove("hidden");
    this.elements.overlay.classList.remove("hidden");

    //     document.addEventListener("keydown", (e) => {
    //   noBubbling(e);
    //   if (
    //     e.key === "Escape" &&
    //     !this.elements.modal.classList.contains("hidden")
    //   ) {
    //     this.#closeModal();
    //   }
    // });
  }

  #closeModal() {
    this.elements.modal.classList.add("hidden");
    this.elements.overlay.classList.add("hidden");
  }

  #init() {
    this.#setupDomReferences();
    if (this.elements.modal) {
      this.#setupEventListeners();
    }
  }
}

export default ProductCardMolecule;
