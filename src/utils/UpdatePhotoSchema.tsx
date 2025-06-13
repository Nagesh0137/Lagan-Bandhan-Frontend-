import * as Yup from "yup";
export const UpdatesPhotoUpload = Yup.object({
  Photo: Yup.string().required("userDetails.personalInfo.errors.required"),
});
