import * as Yup from 'yup';
export const UpdateDetailsSchema = Yup.object({
  FirstName: Yup.string().required('userDetails.personalInfo.errors.required'),
  MiddleName: Yup.string().required('userDetails.personalInfo.errors.required'),
  LastName: Yup.string().required('userDetails.personalInfo.errors.required'),
  DateOfBirth: Yup.date().required('userDetails.personalInfo.errors.required'),
  TimeOfBirth: Yup.string().required(
    'userDetails.personalInfo.errors.required',
  ),
  MarriageStatus: Yup.string().required(
    'userDetails.personalInfo.errors.required',
  ),
  Gender: Yup.string().required('userDetails.personalInfo.errors.required'),
  BloodGroup: Yup.string().required('userDetails.personalInfo.errors.required'),
  Caste: Yup.string().required('userDetails.personalInfo.errors.required'),
  SubCaste: Yup.string().required('userDetails.personalInfo.errors.required'),
  BirthPlace: Yup.string().required('userDetails.personalInfo.errors.required'),
  Religion: Yup.string().required('userDetails.personalInfo.errors.required'),

  // Basic Info
  Education: Yup.string().required('userDetails.personalInfo.errors.required'),
  // Occupation: Yup.string().required("userDetails.personalInfo.errors.required"),
  // Income: Yup.number().required("userDetails.personalInfo.errors.required"),
  Height: Yup.number().required('userDetails.personalInfo.errors.required'),
  Weight: Yup.number().required('userDetails.personalInfo.errors.required'),

  // Family Info
  MotherName: Yup.string().required('userDetails.personalInfo.errors.required'),
  FatherName: Yup.string().required('userDetails.personalInfo.errors.required'),
  BrotherName: Yup.string().notRequired(),
  SisterName: Yup.string().notRequired(),
  MotherMobileNumber: Yup.number().required(
    'userDetails.personalInfo.errors.required',
  ),
  FatherMobileNumber: Yup.number().required(
    'userDetails.personalInfo.errors.required',
  ),
  BrotherNumber: Yup.number().notRequired(),
  SisterNumber: Yup.number().notRequired(),

  // Address Info
  Address: Yup.string().required('userDetails.personalInfo.errors.required'),
  TempAddress: Yup.string().required(
    'userDetails.personalInfo.errors.required',
  ),
  City: Yup.string().required('userDetails.personalInfo.errors.required'),
  Taluka: Yup.string().required('userDetails.personalInfo.errors.required'),
  PinCode: Yup.string().required('userDetails.personalInfo.errors.required'),
  District: Yup.string().required('userDetails.personalInfo.errors.required'),
  State: Yup.string().required('userDetails.personalInfo.errors.required'),
});
