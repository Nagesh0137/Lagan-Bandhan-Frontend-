import * as Yup from "yup";
export const SearchSchema = Yup.object({
  fullName: Yup.string().required("userDetails.personalInfo.errors.required"),
});
