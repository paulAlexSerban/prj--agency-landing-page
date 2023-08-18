import { useId, useState, useEffect } from "react";
import formStyles from "@/styles/organisms/form/form.module.scss";
import Button from "@/core/atoms/Button/Button";
import TextInput from "@/core/atoms/TextInput/TextInput";
import PhoneInput from "@/core/atoms/PhoneInput/PhoneInput";
import EmailInput from "@/core/atoms/EmailInput/EmailInput";
import Select from "@/core/atoms/Select/Select";
import Textarea from "@/core/atoms/Textarea/Textarea";
import useForm from "./Form.hooks";
import Script from "next/script";
import Fieldset from "@/core/atoms/Fieldset/Fieldset";
import CategoriesFieldset from "@/core/molecules/CategoriesFieldset/CategoriesFieldset";
import ConsentCheckbox from "@/core/molecules/ConsentCheckbox/ConsentCheckbox";
import { createPortal } from "react-dom";
import Modal from "@/core/molecules/Modal/Modal";
import Heading from "@/core/atoms/Heading/Heading";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
const INITIAL_STATE = {
  company_name: "",
  contact_name: "",
  phone_number: "",
  email: "",
  quantity_no: "",
  time_period: "",
  utilization_type: [],
  message: "",
  confidentiality_agreement: [],
};

export default function Form({
  children,
  submitButtonLabel = "Submit Form!",
  recaptchaKey,
  action,
  modalContainer,
  phoneNumber,
}) {
  const ID = useId();
  const [mounted, setMounted] = useState(false);

  const {
    form,
    handleChange,
    handleSubmit,
    hasChanges,
    errorFields,
    submitAttempt,
    hasErrors,
    successModal,
    failModal,
    setFailModal,
    setSuccessModal,
  } = useForm(INITIAL_STATE, action, recaptchaKey);

  const handleCloseModal = () => {
    setSuccessModal(false);
    setFailModal(false);
  };

  useEffect(() => {
    if (!successModal || !failModal) {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [successModal, failModal]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <form id={ID} className={formStyles.base} onSubmit={handleSubmit}>
      <div className={formStyles.formContainer}>
        {/* {children} */}
        <Fieldset name="identification" cols={2}>
          <TextInput
            placeholder="Company Name"
            inputName="company_name"
            inputId="company_name"
            required={false}
            handleChange={handleChange}
            inputValue={form?.company_name}
            isInvalid={errorFields?.company_name?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.company_name?.length &&
              errorFields?.company_name[0].message
            }
          />

          <TextInput
            placeholder="Contact Name"
            inputName="contact_name"
            inputId="contact_name"
            required={true}
            handleChange={handleChange}
            inputValue={form?.contact_name}
            isInvalid={errorFields?.contact_name?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.contact_name?.length &&
              errorFields?.contact_name[0].message
            }
          />

          <PhoneInput
            placeholder="Phone Number"
            inputName="phone"
            inputId="phone_number"
            required={true}
            handleChange={handleChange}
            inputValue={form?.phone_number}
            isInvalid={errorFields?.phone_number?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.phone_number?.length &&
              errorFields?.phone_number[0].message
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
        <CategoriesFieldset
          fieldName="utilization_type"
          fieldId="utilization_type"
          legend="Utilization type:"
          fieldValues={form?.utilization_type}
          isInvalid={errorFields?.utilization_type?.length > 0 && submitAttempt}
          handleChange={handleChange}
        />
        <Fieldset name="quantity-and-period" cols={2}>
          <TextInput
            placeholder="Quantity"
            inputName="quantity_no"
            inputId="quantity_no"
            required={true}
            handleChange={handleChange}
            inputValue={form?.quantity_no}
            isInvalid={errorFields?.quantity_no?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.quantity_no?.length &&
              errorFields?.quantity_no[0].message
            }
          />

          <Select
            placeholder="Period?"
            inputName="time_period"
            inputId="time_period"
            required={true}
            handleChange={handleChange}
            inputValue={form?.time_period}
            options={["1 - 30 zile", "1 - 6 luni", "6 - 24 luni"]}
            isInvalid={errorFields?.time_period?.length > 0 && submitAttempt}
            validationMessage={
              errorFields?.time_period?.length &&
              errorFields?.time_period[0].message
            }
          />
        </Fieldset>

        <Textarea
          placeholder="Message:"
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
        <ConsentCheckbox
          fieldName="confidentiality_agreement"
          fieldId="confidentiality_agreement"
          legend="Confidentiality Agreement:"
          fieldValues={form?.confidentiality_agreement}
          isInvalid={
            errorFields?.confidentiality_agreement?.length > 0 && submitAttempt
          }
          handleChange={handleChange}
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
          label="Call!"
          buttonStyle="primary"
          buttonType="link"
          target={`tel:${phoneNumber}`}
        />
      </div>

      {mounted && modalContainer.current && successModal
        ? createPortal(
            <Modal
              controlledBy={ID}
              isOpen={successModal}
              handleClose={handleCloseModal}
              classNames={[formStyles.modal]}
            >
              <div className={formStyles.modalContent}>
                <Heading mainText="Message successfully sent!" hasSeparator />
                <Paragraph
                  alignment="center"
                  text="Thanks for contacting us! We will get back to you shortly."
                />
              </div>
            </Modal>,
            modalContainer.current
          )
        : null}
      {mounted && modalContainer.current && failModal
        ? createPortal(
            <Modal
              controlledBy={ID}
              isOpen={failModal}
              handleClose={handleCloseModal}
              classNames={[formStyles.modal]}
            >
              <div className={formStyles.modalContent}>
                <Heading mainText="Error!" hasSeparator />
                <Paragraph
                  alignment="center"
                  text="Something went wrong. Please try again later or call us."
                />
                <div className={formStyles.actionContainer}>
                  <Button
                    label="Call!"
                    buttonStyle="primary"
                    buttonType="link"
                    target={`tel:${phoneNumber}`}
                  />
                </div>
              </div>
            </Modal>,
            modalContainer.current
          )
        : null}
    </form>
  );
}
