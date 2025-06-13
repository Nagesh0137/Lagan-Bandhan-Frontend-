import * as Yup from "yup";
export const EmailVerfificationSchema = Yup.object({
  Email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
});
