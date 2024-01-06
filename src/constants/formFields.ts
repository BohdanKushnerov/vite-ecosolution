import reqExp from "constants/regExp";

type FieldName = "fullName" | "email" | "phone";

const formFields: {
  name: FieldName;
  label: string;
  type: string;
  placeholder: string;
  pattern: {
    value: RegExp;
    message: string;
  };
  requiredMessage: string;
}[] = [
  {
    name: "fullName",
    label: "Full name",
    type: "text",
    placeholder: "John Rosie",
    pattern: {
      value: reqExp.fullNameRegExp,
      message: "Invalid Fullname",
    },
    requiredMessage: "Wrong Fullname",
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "johnrosie@gmail.com",
    pattern: {
      value: reqExp.emailRegExp,
      message: "Invalid Email",
    },
    requiredMessage: "Wrong Email",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "380961234567",
    pattern: {
      value: reqExp.phoneRegExp,
      message: "Invalid Phone",
    },
    requiredMessage: "Wrong Phone",
  },
];

export default formFields;
