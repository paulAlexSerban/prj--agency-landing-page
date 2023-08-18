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
        cols={6}
        required={true}
        type="checkboxField"
        validationMessage="Alegeti tipul de utilizare"
        isInvalid={isInvalid}
      >
        <Checkbox
          inputName="standard"
          inputId="standard"
          label="Standard"
          value="standard"
          checked={checkedValues.standard}
          handleChange={handleFieldChange}
        />
        <Checkbox
          inputName="intermediar"
          inputId="intermediar"
          label="Intermediar"
          value="intermediar"
          checked={checkedValues.intermediar}
          handleChange={handleFieldChange}
        />
        <Checkbox
          inputName="profesional"
          inputId="profesional"
          label="Profesional"
          value="profesional"
          checked={checkedValues.professional}
          handleChange={handleFieldChange}
        />
      </Fieldset>
    </div>
  );
}
