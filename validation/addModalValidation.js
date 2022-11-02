import * as yup from "yup";

export const addModalValidationSchema = yup.object().shape({
  title: yup.string().required("Title is required."),
  description: yup.string().required("Description is required."),
  price1: yup.number().min(1).required("Small price is required."),
  price2: yup.number().min(1).required("Medium price is required."),
  price3: yup.number().min(1).required("Large price is required."),
  extra: yup.string().required("Extra field is required."),
  extraPrice: yup.number().min(1).required("Extra price field is required."),
});
