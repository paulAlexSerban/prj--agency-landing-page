import patterns from "@/utils/constants/patterns";

const VALIDATION = {
  company_name: [
    {
      isValid: (value) => {
        if (!!value) {
          const regex = new RegExp(patterns.name);
          const isValid = regex.test(value);
          regex.lastIndex = 0;
          return isValid;
        } else {
          return true;
        }
      },
      message: "Forbidden characters in company name.",
    },
  ],
  contact_name: [
    {
      isValid: (value) => !!value,
      message: "Mandatory field.",
    },
    {
      isValid: (value) => value.length > 3,
      message: "Name is too short, minimum 3 characters are required.",
    },
    {
      isValid: (value) => value.length < 50,
      message: "Name is too long, maximum 50 characters are allowed.",
    },
    {
      isValid: (value) => {
        const regex = new RegExp(patterns.name);
        const isValid = regex.test(value);
        regex.lastIndex = 0;
        return isValid;
      },
      message: "Forbidden characters in name.",
    },
  ],
  phone_number: [
    {
      isValid: (value) => !!value,
      message: "Mandatory field.",
    },
    {
      isValid: (value) => value.length >= 9,
      message: "Number is too short, minimum 9 digits are required.",
    },
    {
      isValid: (value) => value.length <= 20,
      message: "Number is too long, maximum 20 digits are allowed.",
    },
    {
      isValid: (value) => {
        const regex = new RegExp(patterns.phone);
        const isValid = regex.test(value);
        regex.lastIndex = 0;
        return isValid;
      },
      message: "Forbidden characters in phone number.",
    },
  ],
  email: [
    {
      isValid: (value) => {
        if (!!value) {
          const regex = new RegExp(patterns.email);
          const isValid = regex.test(value);
          regex.lastIndex = 0;
          return isValid;
        } else {
          return true;
        }
      },
      message: "Forbidden characters in email.",
    },
  ],
  quantity_no: [
    {
      isValid: (value) => !!value,
      message: "Quantity is required to be filled.",
    },
  ],
  time_period: [
    {
      isValid: (value) => !!value,
      message: "Period is required to be selected.",
    },
  ],
  utilization_type: [
    {
      isValid: (value) => !!value.length > 0,
      message: "Utilization type is required to be selected.",
    },
  ],
  confidentiality_agreement: [
    {
      isValid: (value) => !!value.length > 0,
      message:
        "Confidentiality Agreement: You must agree to the terms and conditions.",
    },
  ],
  message: [
    {
      isValid: (value) => {
        if (!!value) {
          const regex = new RegExp(patterns.text);
          const isValid = regex.test(value);
          regex.lastIndex = 0;
          return isValid;
        } else {
          return true;
        }
      },
      message: "Forbidden characters in message",
    },
  ],
};

export default VALIDATION;
