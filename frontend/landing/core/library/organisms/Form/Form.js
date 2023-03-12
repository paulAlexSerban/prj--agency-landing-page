import { useId, useEffect } from "react";
import FormOrganism from "./Form.organism";
import config from "./config";
import styles from "@/styles/organisms/form/form.module.scss";
import Button from "@/core/atoms/Button/Button";

export default function Form({
  children,
  submitButtonLabel = "Submit",
  recaptchaKey,
  action,
}) {
  const ID = useId();
  // useEffect(() => {
  //   document
  //     .querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`)
  //     .forEach((el) => new FormOrganism(el, recaptchaKey, action));
  // });

  return (
    <form data-next-cmp={`${config.name}-${ID}`} className={styles.base}>
      <div className={styles.formContainer}>{children}</div>

      <Button
        label={submitButtonLabel}
        buttonStyle="primary"
        jsHook="js-submit-button"
        buttonType="submit"
      />
    </form>
  );
}
