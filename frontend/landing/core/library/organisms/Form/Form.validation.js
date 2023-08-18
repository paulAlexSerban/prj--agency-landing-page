import patterns from "@/utils/constants/patterns";

const VALIDATION = {
  nume_companie: [
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
      message: "Textul contine caractere interzise.",
    },
  ],
  nume_reprezentant: [
    {
      isValid: (value) => !!value,
      message: "Campul este necesar a fi completat.",
    },
    {
      isValid: (value) => value.length > 3,
      message: "Textul este prea scurt.",
    },
    {
      isValid: (value) => value.length < 50,
      message: "Textul este prea lung, maxim 50 de caractere sunt permise.",
    },
    {
      isValid: (value) => {
        const regex = new RegExp(patterns.name);
        const isValid = regex.test(value);
        regex.lastIndex = 0;
        return isValid;
      },
      message: "Textul contine caractere interzise.",
    },
  ],
  telefon: [
    {
      isValid: (value) => !!value,
      message: "Campul este necesar a fi completat.",
    },
    {
      isValid: (value) => value.length >= 9,
      message: "Numarul este prea scurt, minim 9 cifre.",
    },
    {
      isValid: (value) => value.length <= 10,
      message: "Numarul este prea lung, maxim 10 cifre permise.",
    },
    {
      isValid: (value) => {
        const regex = new RegExp(patterns.phone);
        const isValid = regex.test(value);
        regex.lastIndex = 0;
        return isValid;
      },
      message: "Numerul de telefon poate contine doar numere si cratime.",
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
      message: "Adresa de email contine caractere interzise.",
    },
  ],
  numar_echipamente: [
    {
      isValid: (value) => !!value,
      message: "Campul este necesar a fi completat.",
    },
  ],
  perioada: [
    {
      isValid: (value) => !!value,
      message: "Perioada este necesar a fi selectata.",
    },
  ],
  tip_de_utilizare: [
    {
      isValid: (value) => !!value.length > 0,
      message: "Tipul de utilizare este necesar a fi selectat.",
    },
  ],
  politica_confidentialitate: [
    {
      isValid: (value) => !!value.length > 0,
      message:
        "Politica de confidențialitate a datelor este necesar a fi acceptata pentru a putea transmite mesajul.",
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
      message: "Textul contine caractere interzise.",
    },
  ],
};

export default VALIDATION;
