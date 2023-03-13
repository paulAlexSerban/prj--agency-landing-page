import { useState, useEffect, useMemo } from "react";
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
  // The hasChanges and hasErrors values are computed using the getDirtyFields and getErrorFields utility functions respectively.
  // To prevent unnecessary re-computations, use the useMemo hook to memoize these values
  const dirtyFields = useMemo(
    () => getDirtyFields(form, formState),
    [form, formState]
  );
  const hasChanges = useMemo(
    () => Object.values(dirtyFields).every((isDirty) => !isDirty),
    [dirtyFields]
  );
  const errorFields = useMemo(() => getErrorFields(form), [form]);
  const hasErrors = useMemo(
    () => Object.values(errorFields).flat().length > 0,
    [errorFields]
  );

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
          event.target.reset();
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
    hasErrors,
  };
};

export default useForm;
