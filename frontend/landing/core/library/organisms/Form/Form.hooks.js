import { useState } from "react";
import { getDirtyFields, getErrorFields } from "./Form.utils";

const OPTIONS = {
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
};

const useForm = (formState, action, recaptchaKey) => {
  const [form, setForm] = useState({ ...formState });
  const [submitAttempt, setSubmitAttempt] = useState(false);
  const dirtyFields = getDirtyFields(form, formState);
  const hasChanges = Object.values(dirtyFields).every((isDirty) => !isDirty);
  const errorFields = getErrorFields(form);

  const submitForm = async () => {
    const response = await fetch(action, OPTIONS);
    const result = await response.json();
    console.log({ result });
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasErrors = Object.values(errorFields).flat().length > 0;
    setSubmitAttempt(true);
    if (hasErrors) return;
    grecaptcha.ready(() => {
      grecaptcha
        .execute(recaptchaKey, {
          action: "submit",
        })
        .then((token) => {
          setSubmitAttempt(false);
          form.recaptchaToken = token;
          OPTIONS.body = JSON.stringify(form);
          submitForm();
          setForm(formState);
        });
    });
  };

  return {
    form,
    handleChange,
    handleSubmit,
    hasChanges,
    errorFields,
    submitAttempt,
  };
};

export default useForm;
