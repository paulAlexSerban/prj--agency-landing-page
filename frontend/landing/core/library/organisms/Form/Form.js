import { useId, useState } from "react";
import formStyles from "@/styles/organisms/form/form.module.scss";
import Button from "@/core/atoms/Button/Button";
import TextInput from "@/core/atoms/TextInput/TextInput";
import PhoneInput from "@/core/atoms/PhoneInput/PhoneInput";
import EmailInput from "@/core/atoms/EmailInput/EmailInput";
import Checkbox from "@/core/atoms/Checkbox/Checkbox";
import Select from "@/core/atoms/Select/Select";
import Textarea from "@/core/atoms/Textarea/Textarea";
import useForm from "./Form.hooks";
import Script from "next/script";
import Fieldset from "@/core/atoms/Fieldset/Fieldset";
import CheckboxFieldset from "@/core/molecules/CheckboxField/CheckboxField";
const INITIAL_STATE = {
  nume_companie: "",
  nume_reprezentant: "",
  telefon: "",
  email: "",
  numar_echipamente: "",
  perioada: "",
  tip_de_utilizare: [],
  message: "",
};

export default function Form({
  children,
  submitButtonLabel = "Submit Form!",
  recaptchaKey,
  action,
}) {
  const ID = useId();

  const {
    form,
    handleChange,
    handleSubmit,
    hasChanges,
    errorFields,
    submitAttempt,
    hasErrors,
  } = useForm(INITIAL_STATE, action, recaptchaKey);

  return (
    <form id={ID} className={formStyles.base} onSubmit={handleSubmit}>
      <div className={formStyles.formContainer}>
        {/* {children} */}
        <Fieldset name="identification" cols={2}>
          <TextInput
            placeholder="Nume companie"
            inputName="nume_companie"
            inputId="nume_companie"
            required={false}
            handleChange={handleChange}
            inputValue={form?.nume_companie}
            isInvalid={errorFields?.nume_companie?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.nume_companie?.length &&
              errorFields?.nume_companie[0].message
            }
          />

          <TextInput
            placeholder="Nume reprezentant"
            inputName="nume_reprezentant"
            inputId="nume_reprezentant"
            required={true}
            handleChange={handleChange}
            inputValue={form?.nume_reprezentant}
            isInvalid={
              errorFields?.nume_reprezentant?.length > 0 && submitAttempt
            }
            validationMessage={
              errorFields?.nume_reprezentant?.length &&
              errorFields?.nume_reprezentant[0].message
            }
          />

          <PhoneInput
            placeholder="Telefon"
            inputName="phone"
            inputId="telefon"
            required={true}
            handleChange={handleChange}
            inputValue={form?.telefon}
            isInvalid={errorFields?.telefon?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.telefon?.length && errorFields?.telefon[0].message
            }
          />

          <EmailInput
            placeholder="Email"
            inputName="email"
            inputId="email"
            required={false}
            handleChange={handleChange}
            inputValue={form?.email}
            isInvalid={errorFields?.email?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.email?.length && errorFields?.email[0].message
            }
          />
        </Fieldset>
        <CheckboxFieldset
          fieldName="tip_de_utilizare"
          fieldId="tip_de_utilizare"
          legend="Tip de utilizare:"
          fieldValues={form?.tip_de_utilizare}
          isInvalid={errorFields?.tip_de_utilizare?.length > 0 && submitAttempt}
          handleChange={handleChange}
        />
        <Fieldset name="perioada-si-cantitate" cols={2}>
          <TextInput
            placeholder="Numar de echipamente"
            inputName="numar_echipamente"
            inputId="numar_echipamente"
            required={true}
            handleChange={handleChange}
            inputValue={form?.numar_echipamente}
            isInvalid={
              errorFields?.numar_echipamente?.length > 0 && submitAttempt
            }
            validationMessage={
              errorFields?.numar_echipamente?.length &&
              errorFields?.numar_echipamente[0].message
            }
          />

          <Select
            placeholder="Pe ce perioada?"
            inputName="perioada"
            inputId="perioada"
            required={true}
            handleChange={handleChange}
            inputValue={form?.perioada}
            options={["1 - 30 zile", "1 - 6 luni", "6 - 24 luni"]}
            isInvalid={errorFields?.perioada?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.perioada?.length && errorFields?.perioada[0].message
            }
          />
        </Fieldset>

        <Textarea
          placeholder="Mesaj (optional)"
          inputName="message"
          inputId="message"
          required={false}
          handleChange={handleChange}
          initValue={form?.message}
          rows="6"
          isInvalid={errorFields?.message?.length > 0 && submitAttempt}
          validationMessage={
            errorFields?.message?.length && errorFields?.message[0].message
          }
        />
      </div>
      <div className={formStyles.actionContainer}>
        <Button
          label={submitButtonLabel}
          buttonStyle="primary"
          buttonType="submit"
          disabled={(hasChanges || hasErrors) && submitAttempt}
        />
        <Button
          label="Suna!"
          buttonStyle="primary"
          buttonType="link"
          target="tel:+40723320333"
        />
      </div>

      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`}
        strategy="lazyOnload"
      />
    </form>
  );
}
