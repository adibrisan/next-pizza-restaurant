import * as yup from "yup";

export const adminValidationSchema = yup.object().shape({
  username: yup.string().required("Your username is required."),
  password: yup.string().required("Your password is required."),
});
