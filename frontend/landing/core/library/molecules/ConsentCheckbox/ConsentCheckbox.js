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
          inputName="accept_politica_confidentialitate"
          inputId="accept_politica_confidentialitate"
          label="Declar că am citit și că sunt de acord cu Politica de confidențialitate Linx IT "
          value="accept_politica_confidentialitate"
          checked={checkedValues.basic}
          handleChange={handleFieldChange}
          referencedPageHref="/politica_confidentialitate"
          referencePageLabel="(citeste politica de confidentialitate aici)"
        />
      </Fieldset>
    </div>
  );
}
