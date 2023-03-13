import VALIDATION from "./Form.validation";

export const getDirtyFields = (form, formState) =>
  Object.keys(form).reduce((acc, key) => {
    const isDirty = form[key] !== formState[key];
    return { ...acc, [key]: isDirty };
  }, {});

export const getErrorFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    if (!VALIDATION[key]) return acc;

    const errorsPerField = VALIDATION[key]
      // get a list of potential errors for each field
      // by running through all the checks
      .map((validation) => ({
        isValid: validation.isValid(form[key]),
        message: validation.message,
      }))
      // only keep the errors
      .filter((errorPerField) => !errorPerField.isValid);

    return { ...acc, [key]: errorsPerField };
  }, {});
