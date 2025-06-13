import * as Yup from "yup";
export const PasswordVerificationSchema = Yup.object({
  Password: Yup.string()
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password is required"),

  ConfirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("Password")], "Passwords must match"),
});
