import { useState, useEffect, useRef } from "react";

import Checkbox from "@/core/atoms/Checkbox/Checkbox";
import Fieldset from "@/core/atoms/Fieldset/Fieldset";

export default function CategoriesFieldset({
  fieldName,
  legend,
  handleChange,
  isInvalid,
  fieldValues,
  reset,
}) {
  const [checkedValues, setCheckedValues] = useState({});
  const fieldRef = useRef(null);
  const handleFieldChange = (event) => {
    const checkboxValue = event.target.value;
    setCheckedValues((prev) => ({
      ...prev,
      [checkboxValue]: !prev[checkboxValue],
    }));
  };

  const selectedValues = Object.keys(checkedValues).filter(
    (value) => checkedValues[value]
  );

  useEffect(() => {
    const event = {
      target: {
        id: fieldName,
        value: selectedValues,
      },
    };
    handleChange(event);
  }, [checkedValues]);

  return (
    <div ref={fieldRef}>
      <Fieldset
        name={fieldName}
        legend={legend}
        cols={1}
        required={true}
        type="checkboxField"
        validationMessage="Alegeti tipul de utilizare"
        isInvalid={isInvalid}
      >
        <Checkbox
          inputName="confidentiality_agreement_accept"
          inputId="confidentiality_agreement_accept"
          label="I declare that I have read and understood the Confidentiality Agreement and I agree with the processing of my personal data."
          value="confidentiality_agreement_accept"
          checked={checkedValues.basic}
          handleChange={handleFieldChange}
          referencedPageHref="/confidentiality_agreement"
          referencePageLabel="(read more here)"
        />
      </Fieldset>
    </div>
  );
}
