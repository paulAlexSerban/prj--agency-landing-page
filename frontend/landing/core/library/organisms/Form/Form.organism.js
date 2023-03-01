import Component from "@/prototypes/Component";
import config from "./config";
import { noBubbling } from "@/utils/dom/events";
import patterns from "@/utils/constants/patterns";

const SITE_KEY = "xxxx";

class FormOrganism extends Component {
  constructor(el) {
    super(el);
    this.#init();
  }

  #setupDomReferences() {
    this.elements.submitButton = this.el.querySelector(
      `.${config.hooks.submitBtn}`
    );
  }

  #getNamedFields(formElements) {
    let namedElements = [];
    formElements.forEach((item) => {
      if (!parseInt(item) && parseInt(item) !== 0) {
        namedElements.push(item);
      }
    });

    return namedElements;
  }

  #formValidations(formElements) {
    let areValid = [];

    const namedFields = this.#getNamedFields(Object.keys(formElements));

    let validationTests = {
      text: (el) => {
        areValid.push({
          [el.name]: new RegExp(patterns[el.name]).test(el.value),
        });
      },
      email: (el) => {
        areValid.push({
          [el.name]: new RegExp(patterns[el.name]).test(el.value),
        });
      },
      textarea: (el) => {
        areValid.push({
          [el.name]: new RegExp(patterns[el.name]).test(el.value),
        });
      },
      "select-one": (el) => {
        areValid.push({ [el.name]: Boolean(el.value) });
      },
    };

    namedFields.forEach((item) => {
      const isRadioNodeList = formElements[item] instanceof RadioNodeList;
      const isRequired = isRadioNodeList
        ? Boolean(formElements[item][0].getAttribute("data-required"))
        : Boolean(formElements[item].getAttribute("data-required"));

      const input = isRadioNodeList
        ? formElements[item][0]
        : formElements[item];

      const hasValidationTest = validationTests.hasOwnProperty(input.type);

      if (isRequired && hasValidationTest) {
        validationTests[input.type](input);
      }
    });

    areValid.find((item) => {
      return Object.values(item)[0];
    });
  }

  #setupEventListeners() {
    this.el.addEventListener("submit", async (event) => {
      noBubbling(event);
      const formData = {};
      const isFormValid = this.#formValidations(this.el.elements);

      grecaptcha.ready(() => {
        grecaptcha
          .execute(SITE_KEY, {
            action: "submit",
          })
          .then((token) => {
            // console.log(token);
            // console.log(isFormValid);
          });
      });
    });
  }

  #loadGoogleRecaptcha() {
    this.googleScriptElement = document.createElement("script");
    this.googleScriptElement.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    this.el.appendChild(this.googleScriptElement);
  }

  #init() {
    this.#setupDomReferences();
    this.#loadGoogleRecaptcha();
    this.#setupEventListeners();
  }
}

export default FormOrganism;
