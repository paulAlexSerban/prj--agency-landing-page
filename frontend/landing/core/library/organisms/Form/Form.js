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

const INITIAL_STATE = {
  nume_companie: "",
  nume_reprezentant: "",
  telefon: "",
  email: "",
  numar_echipamente: ""
};

import Fieldset from "@/core/atoms/Fieldset/Fieldset";
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
            required={true}
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
            required={true}
            handleChange={handleChange}
            inputValue={form?.email}
            isInvalid={errorFields?.email?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.email?.length && errorFields?.email[0].message
            }
          />
        </Fieldset>
        <Fieldset
            name="tip_de_utilizare"
            legend="Tip de utilizare:"
            cols={6}
            required={true}
            type="checkboxField"
            validationMessage="Alegeti tipul de utilizare"
          >
            <Checkbox inputName="basic" inputId="basic" label="Basic" />
            <Checkbox
              inputName="standard"
              inputId="standard"
              label="Standard"
            />
            <Checkbox
              inputName="professional"
              inputId="professional"
              label="Professional"
            />
          </Fieldset>
          <Fieldset name="perioada-si-cantitate" cols={2}>
            <TextInput
            placeholder="Numar de echipamente"
            inputName="numar_echipamente"
            inputId="numar_echipamente"
            required={true}
            handleChange={handleChange}
            inputValue={form?.numar_echipamente}
            isInvalid={errorFields?.numar_echipamente?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.numar_echipamente?.length && errorFields?.numar_echipamente[0].message
            }
            />

            {/* <Select
              placeholder="Pe ce perioada?"
              inputName="perioada"
              inputId="perioada"
              required={true}
              validationMessage="Alegeti perioada pe care doriti echipamentul"
              options={["1 - 30 zile", "1 - 6 luni", "6 - 24 luni"]}
            /> */}
          </Fieldset>

          {/* <Textarea
            placeholder="Mesaj (optional)"
            inputName="message"
            inputId="message"
            initValue=""
            rows="6"
            required={false}
          /> */}
      </div>

      <Button
        label={submitButtonLabel}
        buttonStyle="primary"
        buttonType="submit"
        disabled={hasChanges}
      />
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`}
        strategy="lazyOnload"
      />
    </form>
  );
}
