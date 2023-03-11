import Component from "@/prototypes/Component";
import config from "./config";
import { noBubbling } from "@/utils/dom/events";
import patterns from "@/utils/constants/patterns";
const { log } = console;
class FormOrganism extends Component {
  constructor(el, recaptchaKey, action) {
    super(el);

    this.RECAPTCHA_SITE_KEY = recaptchaKey;
    this.ENDPOINT = action;

    this.OPTIONS = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
    };
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
    let formStates = [];

    const validationTests = {
      text: (el) => {
        const inputValue = el.value;
        const hasContent = inputValue.length > 0;
        const regex = new RegExp(patterns[el.name]);
        const contentIsValid = regex.test(inputValue);
        regex.lastIndex = 0;
        formStates.push({
          fieldId: el.id,
          isValid: hasContent && contentIsValid,
          value: hasContent && contentIsValid ? inputValue : null,
          validationPattern: el.name,
        });
      },
      number: (el) => {
        const inputValue = el.value;
        const hasContent = inputValue.length > 0;
        formStates.push({
          fieldId: el.id,
          isValid: hasContent,
          value: hasContent ? inputValue : null,
        });
      },
      email: (el) => {
        const inputValue = el.value;
        const hasContent = inputValue.length > 0;
        const regex = new RegExp(patterns[el.name]);
        const contentIsValid = regex.test(inputValue);
        regex.lastIndex = 0;

        formStates.push({
          fieldId: el.id,
          isValid: hasContent && contentIsValid,
          value: hasContent && contentIsValid ? inputValue : null,
          validationPattern: el.name,
        });
      },
      phoneNumber: (el) => {
        const inputValue = el.value;
        const hasContent = inputValue.length >= 9;
        const regex = new RegExp(patterns[el.name]);
        const contentIsValid = regex.test(inputValue);
        regex.lastIndex = 0;
        formStates.push({
          fieldId: el.id,
          isValid: hasContent && contentIsValid,
          value: hasContent && contentIsValid ? inputValue : null,
          validationPattern: el.name,
        });
      },
      textarea: (el) => {
        const isRequired = el.getAttribute("data-required") === "true";
        const inputValue = el.value;
        const hasContent = inputValue.length > 0;
        const regex = new RegExp(patterns[el.name]);
        const contentIsValid = regex.test(inputValue);
        regex.lastIndex = 0;
        if (isRequired) {
          formStates.push({
            fieldId: el.id,
            isValid: hasContent && contentIsValid,
            value: hasContent && contentIsValid ? inputValue : null,
            validationPattern: el.name,
          });
        } else if (hasContent) {
          formStates.push({
            fieldId: el.id,
            isValid: contentIsValid,
            value: contentIsValid ? inputValue : null,
            validationPattern: el.name,
          });
        }
      },
      "select-one": (el) => {
        formStates.push({
          fieldId: el.id,
          isValid: Boolean(el.value),
          value: Boolean(el.value) ? el.value : null,
        });
      },
      checkboxField: (el) => {
        const checkboxes = el.querySelectorAll("input");
        let checked = [];
        for (const checkbox of checkboxes) {
          if (checkbox.checked) checked.push(checkbox.value);
        }
        formStates.push({
          fieldId: el.id,
          isValid: Boolean(checked.length),
          value: Boolean(checked.length) ? checked : null,
        });
      },
    };

    formElements.forEach((item) => {
      const inputType = item.getAttribute("data-form-item-type") || item.type;
      const isRequired = Boolean(item.getAttribute("data-required"));

      const hasValidationTest = validationTests.hasOwnProperty(inputType);

      if (isRequired && hasValidationTest) {
        if (Boolean(item.getAttribute("data-form-item-type"))) {
          validationTests[item.getAttribute("data-form-item-type")](item);
        } else if (hasValidationTest) {
          validationTests[item.type](item);
        }
      }
    });

    const isNotValid = formStates.filter((input) => {
      return !input.isValid;
    });

    return { isNotValid, formStates };
  }

  #setupEventListeners() {
    this.elements.submitButton.addEventListener("click", async (event) => {
      noBubbling(event);
      const formData = {};
      const formValidation = this.#formValidations(
        Array.from(this.el.elements)
      );

      const isFormValid = !(formValidation.isNotValid.length > 0);
      if (isFormValid) {
        formValidation.formStates.forEach((validInput) => {
          const inputEl = document.querySelector(`#${validInput.fieldId}`);
          inputEl.removeAttribute("invalid");
          const container =
            inputEl.closest("label") || inputEl.closest("fieldset");
          const label = container.querySelector("[data-type='label']");
          const placeholderText = container.getAttribute("data-placeholder");
          label.innerText = placeholderText;
        });
        grecaptcha.ready(() => {
          grecaptcha
            .execute(this.RECAPTCHA_SITE_KEY, {
              action: "submit",
            })
            .then((token) => {
              formData.token = token;
            })
            .then(async () => {
              formData.body = formValidation.formStates;
              this.OPTIONS.body = JSON.stringify(formData);
              const response = await fetch(this.ENDPOINT, this.OPTIONS);
              const result = await response.json();
            });
        });
      } else {
        formValidation.formStates.forEach((item) => {
          const inputEl = document.querySelector(`#${item.fieldId}`);
          const container =
            inputEl.closest("label") || inputEl.closest("fieldset");
          const label = container.querySelector("[data-type='label']");
          const validationMessage = container.getAttribute(
            "data-validation-message"
          );
          const placeholderText = container.getAttribute("data-placeholder");
          console.log({
            inputEl,
            container,
            label,
            validationMessage,
            placeholderText,
          });
          if (item.isValid) {
            inputEl.removeAttribute("invalid");
            label.innerText = placeholderText;
          } else {
            inputEl.setAttribute("invalid", "true");
            label.innerText = validationMessage;
          }
        });
      }
    });
  }

  #loadGoogleRecaptcha() {
    this.googleScriptElement = document.createElement("script");
    this.googleScriptElement.src = `https://www.google.com/recaptcha/api.js?render=${this.RECAPTCHA_SITE_KEY}`;
    this.el.appendChild(this.googleScriptElement);
  }

  #init() {
    this.#setupDomReferences();
    this.#loadGoogleRecaptcha();
    this.#setupEventListeners();
  }
}

export default FormOrganism;
