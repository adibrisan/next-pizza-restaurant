import * as yup from "yup";

export const cashModalValidationSchema = yup.object().shape({
  customer: yup.string().required("Your name is required."),
  phone: yup
    .string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Please enter the 10 digit phone number."
    )
    .required("Your phone number is required."),
  address: yup.string().required("Your address is required."),
});
