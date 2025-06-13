import * as Yup from "yup";
export const userDetailsSchema = Yup.object({
  FirstName: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("userDetails.personalInfo.errors.required"),
  MiddleName: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("userDetails.personalInfo.errors.required"),
  LastName: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("userDetails.personalInfo.errors.required"),
  DateOfBirth: Yup.date()
    .required("userDetails.personalInfo.errors.required")
    .max(new Date(), "You can't be born in the future!"),
  TimeOfBirth: Yup.string().required(
    "userDetails.personalInfo.errors.required"
  ),
  MarriageStatus: Yup.string().required(
    "userDetails.personalInfo.errors.required"
  ),
  Gender: Yup.string().required("userDetails.personalInfo.errors.required"),
  BloodGroup: Yup.string().required("userDetails.personalInfo.errors.required"),
  Caste: Yup.string().required("userDetails.personalInfo.errors.required"),
  SubCaste: Yup.string().required("userDetails.personalInfo.errors.required"),
  BirthPlace: Yup.string().required("userDetails.personalInfo.errors.required"),
  Religion: Yup.string().required("userDetails.personalInfo.errors.required"),

  // Basic Info
  Education: Yup.string().required("userDetails.personalInfo.errors.required"),
  // Occupation: Yup.string().required("userDetails.personalInfo.errors.required"),
  // Income: Yup.number()
  //   .typeError("userDetails.personalInfo.errors.typeError")
  //   .nullable("userDetails.personalInfo.errors.typeError")
  //   .required("userDetails.personalInfo.errors.required"),
  Height: Yup.number()
    .typeError("userDetails.personalInfo.errors.typeError")
    .nullable("userDetails.personalInfo.errors.typeError")
    .required("userDetails.personalInfo.errors.required"),
  Weight: Yup.number()
    .typeError("userDetails.personalInfo.errors.typeError")
    .nullable("userDetails.personalInfo.errors.typeError")
    .required("userDetails.personalInfo.errors.required"),
  SkinColor: Yup.string().required("userDetails.personalInfo.errors.required"),

  // Family Info
  MotherName: Yup.string().required("userDetails.personalInfo.errors.required"),
  FatherName: Yup.string().required("userDetails.personalInfo.errors.required"),
  BrotherName: Yup.string().notRequired(),
  SisterName: Yup.string().notRequired(),
  MotherMobileNumber: Yup.number().required(
    "userDetails.personalInfo.errors.required"
  ),
  FatherMobileNumber: Yup.number().required(
    "userDetails.personalInfo.errors.required"
  ),
  BrotherNumber: Yup.number().notRequired(),
  SisterNumber: Yup.number().notRequired(),

  // Address Info
  Address: Yup.string().required("userDetails.personalInfo.errors.required"),
  TempAddress: Yup.string().required(
    "userDetails.personalInfo.errors.required"
  ),
  City: Yup.string().required("userDetails.personalInfo.errors.required"),
  Taluka: Yup.string().required("userDetails.personalInfo.errors.required"),
  PinCode: Yup.string().required("userDetails.personalInfo.errors.required"),
  District: Yup.string().required("userDetails.personalInfo.errors.required"),
  State: Yup.string().required("userDetails.personalInfo.errors.required"),
});

export const registerSchema = Yup.object({
  Mobile: Yup.number()
    .typeError("The value must be a number")
    .min(10, "mobile no must be 10 number")
    .integer("The value must be a number")
    .required("This field is required"),
  Email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  Password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .required("This field is required"),
});

export const PhotoUploadSchema = Yup.object({
  Photo: Yup.string().required("userDetails.personalInfo.errors.required"),
  PDF: Yup.string().required("userDetails.personalInfo.errors.required"),
});

export const loginSchema = Yup.object({
  Mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("This field is required"),
  Password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required"),
});

export const ChangePasswordSchema = Yup.object({
  Password: Yup.string().required("This field is required"),
  ChangePassword: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  ConfirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("ChangePassword")], "Passwords must match"),
});
