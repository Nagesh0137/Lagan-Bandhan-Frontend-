import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useUpdateInfoMutation } from "../../redux/services/userInfo/api";
import { showToast } from "../../utils/ErrorToast";
import { StateData } from "../../utils/StateObject";
import { UpdateDetailsSchema } from "../../utils/UpdateDetailsSchema";
import Header from "../Header";
import Spinner from "../common/ChangeLanguage/Spinner";
import { calculateAge } from "../../config/constant";
import { Footer } from "flowbite-react";

type initialValuesTypes = {
  FirstName: string;
  MiddleName: string;
  LastName: string;
  DateOfBirth: string;
  TimeOfBirth: string;
  MarriageStatus: string;
  Gender: string;
  BloodGroup: string;
  Caste: string;
  SubCaste: string;
  BirthPlace: string;
  Religion: string;
  Education: string;
  Occupation: string;
  Income: string;
  Height: string;
  Weight: string;
  SkinColor: string;
  MotherName: string;
  FatherName: string;

  MotherMobileNumber: string;
  FatherMobileNumber: string;
  numOfBrothers: string;
  numOfSisters: string;
  Address: string;
  TempAddress: string;
  City: string;
  PinCode: string;
  Taluka: string;
  District: string;
  State: string;
  PPAnnualIncome: string;
  PPCaste: string;
  PPEducation: string;
  PPResidingCountry: string;
  PPResidingState: string;
  PPResidingCity: string;
  PPHeight: string;
  PPWeight: string;
  PPSkinColor: string;
  Rashi: string;
  Nakshatra: string;
};

const UpdateProfile = () => {
  const { t } = useTranslation();
  const [updateInfo, { isLoading }] = useUpdateInfoMutation();
  const navigate = useNavigate();
  const data: any = JSON.parse(localStorage.getItem("userDetails") ?? "");

  console.log({ data });

  const initialValues: initialValuesTypes = {
    FirstName: data?.userDetails?.personalDetails?.firstName ?? "",
    MiddleName: data?.userDetails?.personalDetails?.middleName ?? "",
    LastName: data?.userDetails?.personalDetails?.lastName ?? "",
    DateOfBirth: data?.userDetails?.personalDetails?.dateOfBirth ?? "",
    TimeOfBirth: data?.userDetails?.personalDetails?.timeOfBirth ?? "",
    MarriageStatus: data?.userDetails?.personalDetails?.marriageStatus ?? "",
    Gender: data?.userDetails?.personalDetails?.gender ?? "",
    BloodGroup: data?.userDetails?.personalDetails?.bloodGroup ?? "",
    Caste: data?.userDetails?.personalDetails?.caste ?? "",
    SubCaste: data?.userDetails?.personalDetails?.subCaste ?? "",
    BirthPlace: data?.userDetails?.personalDetails?.bornPlace ?? "",
    Religion: data?.userDetails?.personalDetails?.religion ?? "",
    Education: data?.userDetails?.basicDetails?.education ?? "",
    Occupation: data?.userDetails?.basicDetails?.occupation ?? "",
    Income: data?.userDetails?.basicDetails?.income ?? "",
    Height: data?.userDetails?.basicDetails?.height ?? "",
    Weight: data?.userDetails?.basicDetails?.weight ?? "",
    SkinColor: data?.userDetails?.basicDetails?.skinColor ?? "",
    Rashi: data?.userDetails?.basicDetails?.rashi ?? "",
    Nakshatra: data?.userDetails?.basicDetails?.nakshatra ?? "",
    MotherName: data?.userDetails?.familyDetails?.motherName ?? "",
    FatherName: data?.userDetails?.familyDetails?.fatherName ?? "",
    numOfBrothers: data?.userDetails?.familyDetails?.numOfBrothers ?? "",
    numOfSisters: data?.userDetails?.familyDetails?.numOfSisters ?? "",
    MotherMobileNumber:
      data?.userDetails?.familyDetails?.motherMobileNumber ?? "",
    FatherMobileNumber:
      data?.userDetails?.familyDetails?.fatherMobileNumber ?? "",

    Address: data?.userDetails?.addressDetails?.address ?? "",
    TempAddress: data?.userDetails?.addressDetails?.tempAddress ?? "",
    City: data?.userDetails?.addressDetails?.city ?? "",
    PinCode: data?.userDetails?.addressDetails?.pincode ?? "",
    Taluka: data?.userDetails?.addressDetails?.taluka ?? "",
    District: data?.userDetails?.addressDetails?.district ?? "",
    State: data?.userDetails?.addressDetails?.state ?? "",
    PPAnnualIncome: data?.userDetails?.partnerpreferences?.PPAnnualIncome ?? "",
    PPCaste: data?.userDetails?.partnerpreferences?.PPCaste ?? "",
    PPEducation: data?.userDetails?.partnerpreferences?.PPEducation ?? "",
    PPResidingCountry:
      data?.userDetails?.partnerpreferences?.PPResidingCountry ?? "",
    PPResidingState:
      data?.userDetails?.partnerpreferences?.PPResidingState ?? "",
    PPResidingCity: data?.userDetails?.partnerpreferences?.PPResidingCity ?? "",
    PPHeight: data?.userDetails?.partnerpreferences?.PPHeight ?? "",
    PPWeight: data?.userDetails?.partnerpreferences?.PPWeight ?? "",
    PPSkinColor: data?.userDetails?.partnerpreferences?.PPSkinColor ?? "",
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UpdateDetailsSchema,
      onSubmit: (values) => {
        updateInfo({
          age: calculateAge(values?.DateOfBirth),
          userDetails: {
            personalDetails: {
              firstName: values?.FirstName,
              middleName: values?.MiddleName,
              lastName: values?.LastName,
              dateOfBirth: values?.DateOfBirth,
              timeOfBirth: values?.TimeOfBirth,
              marriageStatus: values?.MarriageStatus,
              bornPlace: values?.BirthPlace,
              gender: values?.Gender,
              religion: values?.Religion,
              caste: values?.Caste,
              subCaste: values?.SubCaste,
              bloodGroup: values?.BloodGroup,
              fullName: `${values.FirstName} ${values.MiddleName} ${values.LastName}`,
            },
            basicDetails: {
              education: values?.Education,
              occupation: values?.Occupation,
              income: values?.Income,
              height: values?.Height,
              weight: values?.Weight,
              skinColor: values?.SkinColor,
              rashi: values?.Rashi,
              nakshatra: values?.Nakshatra,
            },
            familyDetails: {
              motherName: values?.MotherName,
              motherMobileNumber: values?.MotherMobileNumber,
              fatherName: values?.FatherName,
              fatherMobileNumber: values?.FatherMobileNumber,
              numOfBrothers: values?.numOfBrothers,
              numOfSisters: values?.numOfSisters,
            },
            addressDetails: {
              address: values?.Address,
              pincode: values?.PinCode,
              city: values?.City,
              taluka: values?.Taluka,
              district: values?.District,
              state: values?.State,
              tempAddress: values?.TempAddress,
            },
            partnerpreferences: {
              PPAnnualIncome: values?.PPAnnualIncome,
              PPCaste: values?.PPCaste,
              PPEducation: values?.PPEducation,
              PPResidingCountry: values?.PPResidingCountry,
              PPResidingState: values?.PPResidingState,
              PPResidingCity: values?.PPResidingCity,
              PPHeight: values?.PPHeight,
              PPWeight: values?.PPWeight,
              PPSkinColor: values?.PPSkinColor,
            },
          },
        })
          .unwrap()
          .then((res) => {
            if (res) {
              showToast("Details updated successfully", "success");
              navigate("/home", { replace: true });
            } else {
              showToast("Something went wrong", "error");
            }
          })
          .catch(() => {
            showToast("Something went wrong", "error");
          });
      },
    });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header isUserFullyOnboarded />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Update Your Profile
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Keep your information up to date to find your perfect match
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {t("userDetails.personalInfo.title")}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.firstName")}
                    </label>
                    <input
                      type="text"
                      name="FirstName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.FirstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter first name"
                    />
                    {errors.FirstName && touched.FirstName ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.FirstName)}
                      </p>
                    ) : null}
                  </div>

                  {/* Middle Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.middleName")}
                    </label>
                    <input
                      type="text"
                      name="MiddleName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.MiddleName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter middle name"
                    />
                    {errors.MiddleName && touched.MiddleName ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.MiddleName)}
                      </p>
                    ) : null}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.lastName")}
                    </label>
                    <input
                      type="text"
                      name="LastName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.LastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter last name"
                    />
                    {errors.LastName && touched.LastName ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.LastName)}
                      </p>
                    ) : null}
                  </div>

                  {/* Date of Birth */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.dateOfBirth")}
                    </label>
                    <input
                      type="date"
                      name="DateOfBirth"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.DateOfBirth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.DateOfBirth && touched.DateOfBirth ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.DateOfBirth)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.timeOfBirth")}
                    </label>
                    <input
                      type="time"
                      name="TimeOfBirth"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.TimeOfBirth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.TimeOfBirth && touched.TimeOfBirth ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.TimeOfBirth)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.birthPlace")}
                    </label>
                    <input
                      type="text"
                      name="BirthPlace"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.BirthPlace}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter birth place"
                    />
                    {errors.BirthPlace && touched.BirthPlace ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.BirthPlace)}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.marriageStatus")}
                    </label>
                    <select
                      name="MarriageStatus"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium bg-white"
                      value={values.MarriageStatus}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Marriage Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Separated">Separated</option>
                    </select>
                    {errors.MarriageStatus && touched.MarriageStatus ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.MarriageStatus)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.gender")}
                    </label>
                    <select
                      name="Gender"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium bg-white"
                      value={values.Gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.Gender && touched.Gender ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.Gender)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.bloodGroup")}
                    </label>
                    <select
                      name="BloodGroup"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium bg-white"
                      value={values.BloodGroup}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A +">A+</option>
                      <option value="A -">A-</option>
                      <option value="B +">B+</option>
                      <option value="B -">B-</option>
                      <option value="AB +">AB+</option>
                      <option value="AB -">AB-</option>
                      <option value="O +">O+</option>
                      <option value="O -">O-</option>
                    </select>
                    {errors.BloodGroup && touched.BloodGroup ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.BloodGroup)}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.religion")}
                    </label>
                    <input
                      type="text"
                      name="Religion"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.Religion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter religion"
                    />
                    {errors.Religion && touched.Religion ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.Religion)}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.caste")}
                    </label>
                    <input
                      type="text"
                      name="Caste"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.Caste}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter caste"
                    />
                    {errors.Caste && touched.Caste ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.Caste)}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.personalInfo.fields.subCaste")}
                    </label>
                    <input
                      type="text"
                      name="SubCaste"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 font-medium"
                      value={values.SubCaste}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter sub caste"
                    />
                    {errors.SubCaste && touched.SubCaste ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.SubCaste)}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Information Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {t("userDetails.basicInfo.title")}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.basicInfo.fields.education")}
                    </label>
                    <input
                      type="text"
                      name="Education"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 font-medium"
                      value={values.Education}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter education"
                    />
                    {errors.Education && touched.Education ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.Education)}
                      </p>
                    ) : null}
                  </div>

                  {/* Occupation */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.basicInfo.fields.occupation")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Occupation"
                        id="Occupation"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.Occupation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter occupation"
                      />
                    </div>
                    {errors.Occupation && touched.Occupation ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Occupation)}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.basicInfo.fields.income")} Per Year
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Income"
                        id="Income"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.Income}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter annual income"
                      />
                    </div>
                    {errors.Income && touched.Income ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Income)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.basicInfo.fields.height")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        step="0.2"
                        name="Height"
                        id="Height"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.Height}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Height in feet"
                      />
                    </div>
                    {errors.Height && touched.Height ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Height)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.basicInfo.fields.weight")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Weight"
                        id="Weight"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.Weight}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Weight in kg"
                      />
                    </div>
                    {errors.Weight && touched.Weight ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Weight)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.basicInfo.fields.skinColor")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="SkinColor"
                        id="Weight"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.SkinColor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter skin color"
                      />
                    </div>
                    {errors.SkinColor && touched.SkinColor ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.SkinColor)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Rashi
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Rashi"
                        id="Weight"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.Rashi}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter rashi"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Nakshatra
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Nakshatra"
                        id="Weight"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.Nakshatra}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter nakshatra"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Family Information Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {t("userDetails.familyInfo.title")}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mother Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.familyInfo.fields.motherName")}
                    </label>
                    <input
                      type="text"
                      name="MotherName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 font-medium"
                      value={values.MotherName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter mother's name"
                    />
                    {errors.MotherName && touched.MotherName ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.MotherName)}
                      </p>
                    ) : null}
                  </div>

                  {/* Mother Mobile Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.familyInfo.fields.motherMobileNo")}
                    </label>
                    <input
                      type="tel"
                      name="MotherMobileNumber"
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 font-medium"
                      value={values.MotherMobileNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter mother's mobile number"
                    />
                    {errors.MotherMobileNumber && touched.MotherMobileNumber ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.MotherMobileNumber)}
                      </p>
                    ) : null}
                  </div>

                  {/* Father Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.familyInfo.fields.fatherName")}
                    </label>
                    <input
                      type="text"
                      name="FatherName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 font-medium"
                      value={values.FatherName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter father's name"
                    />
                    {errors.FatherName && touched.FatherName ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.FatherName)}
                      </p>
                    ) : null}
                  </div>

                  {/* Father Mobile Number */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.familyInfo.fields.fatherMobileNo")}
                    </label>
                    <input
                      type="tel"
                      name="FatherMobileNumber"
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 font-medium"
                      value={values.FatherMobileNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter father's mobile number"
                    />
                    {errors.FatherMobileNumber && touched.FatherMobileNumber ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.FatherMobileNumber)}
                      </p>
                    ) : null}
                  </div>

                  {/* Brother Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.familyInfo.fields.brotherName")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="numOfBrothers"
                        id="BrotherName"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.numOfBrothers}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter number of brothers"
                      />
                    </div>
                    {errors.numOfBrothers && touched.numOfBrothers ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.numOfBrothers)}
                      </p>
                    ) : null}
                  </div>

                  {/* Sister Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.familyInfo.fields.sisterName")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="numOfSisters"
                        id="SisterName"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.numOfSisters}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter number of sisters"
                      />
                    </div>
                    {errors.numOfSisters && touched.numOfSisters ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.numOfSisters)}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-pink-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3v18h18M9 9h6M9 15h6"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {t("userDetails.addressInfo.title")}
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Address */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.addressInfo.fields.address")}
                    </label>
                    <input
                      type="text"
                      name="Address"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 font-medium"
                      value={values.Address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your address"
                    />
                    {errors.Address && touched.Address ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.Address)}
                      </p>
                    ) : null}
                  </div>

                  {/* Temp Address */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.addressInfo.fields.tempAddress")}
                    </label>
                    <input
                      type="text"
                      name="TempAddress"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 font-medium"
                      value={values.TempAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter temporary address"
                    />
                    {errors.TempAddress && touched.TempAddress ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.TempAddress)}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.addressInfo.fields.city")}
                    </label>
                    <input
                      type="text"
                      name="City"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 font-medium"
                      value={values.City}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter city"
                    />
                    {errors.City && touched.City ? (
                      <p className="text-red-500 text-sm font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {t(errors.City)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.addressInfo.fields.pinCode")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="PinCode"
                        id="PinCode"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.PinCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter pin code"
                      />
                    </div>
                    {errors.PinCode && touched.PinCode ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.PinCode)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.addressInfo.fields.taluka")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="Taluka"
                        id="Taluka"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.Taluka}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter taluka"
                      />
                    </div>

                    {errors.Taluka && touched.Taluka ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Taluka)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.addressInfo.fields.district")}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="District"
                        id="District"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.District}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter district"
                      />
                    </div>
                    {errors.District && touched.District ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.District)}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t("userDetails.addressInfo.fields.state")}
                    </label>
                    <div className="mt-2">
                      <select
                        name="State"
                        id="State"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={values.State}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {StateData.map((value, index) => {
                          return (
                            <option key={index} value={value.name}>
                              {value.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {errors.State && touched.State ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.State)}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Preferences Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-red-600 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3v18h18M9 9h6M9 15h6"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Partner Preferences
                  </h2>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Annual Income */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Annual Income
                    </label>
                    <input
                      type="text"
                      name="PPAnnualIncome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-200 font-medium"
                      value={values.PPAnnualIncome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter partner's annual income"
                    />
                  </div>

                  {/* Caste */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Caste
                    </label>
                    <input
                      type="text"
                      name="PPCaste"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-200 font-medium"
                      value={values.PPCaste}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter partner's caste"
                    />
                  </div>

                  {/* Education */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Education
                    </label>
                    <input
                      type="text"
                      name="PPEducation"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-200 font-medium"
                      value={values.PPEducation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter partner's education"
                    />
                  </div>

                  {/* Residing Country */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Residing Country
                    </label>
                    <input
                      type="text"
                      name="PPResidingCountry"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-200 font-medium"
                      value={values.PPResidingCountry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter residing country"
                    />
                  </div>

                  {/* Residing State */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Residing State
                    </label>
                    <input
                      type="text"
                      name="PPResidingState"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-200 font-medium"
                      value={values.PPResidingState}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter residing state"
                    />
                  </div>

                  {/* Residing City */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Residing City
                    </label>
                    <input
                      type="text"
                      name="PPResidingCity"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-200 font-medium"
                      value={values.PPResidingCity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter residing city"
                    />
                  </div>

                  {/* Height */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Height
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="PPHeight"
                        id="PPHeight"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.PPHeight}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter height"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Weight
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="PPWeight"
                        id="PPWeight"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.PPWeight}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter weight"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Skin Color
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="PPSkinColor"
                        id="PPSkinColor"
                        autoComplete="given-name"
                        className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={values.PPSkinColor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter skin color"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-3 text-lg"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    <span>{t("userDetails.submit")}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateProfile;
