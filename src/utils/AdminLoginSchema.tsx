import * as Yup from "yup";
export const AdminLoginSchema = Yup.object({
  Mobile: Yup.number()
    .typeError("The value must be a number")
    .min(10, "mobile no must be 10 number")
    .integer("The value must be a number")
    .required("This field is required"),
  Password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .required("This field is required"),
});
