import * as Yup from "yup";
export const OtpVerificationSchema = Yup.object({
  OTP: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be exactly 4 digits")
    .max(4, "Must be exactly 4 digits"),
});
