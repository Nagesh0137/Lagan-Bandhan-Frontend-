import React from 'react';

import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useUpdateInfoMutation } from '../../redux/services/userInfo/api';
import { userDetailsSchema } from '../../utils/RegisterYup';
import { StateData } from '../../utils/StateObject';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import Spinner from '../common/ChangeLanguage/Spinner';
import { showToast } from '../../utils/ErrorToast';
import { calculateAge } from '../../config/constant';

const initialValues = {
  FirstName: '',
  MiddleName: '',
  LastName: '',
  DateOfBirth: '',
  TimeOfBirth: '',
  MarriageStatus: '',
  Gender: '',
  BloodGroup: '',
  Caste: '',
  SubCaste: '',
  BirthPlace: '',
  Religion: '',
  Education: '',
  Occupation: '',
  Income: '',
  Height: '',
  Weight: '',
  SkinColor: '',
  MotherName: '',
  FatherName: '',
  MotherMobileNumber: '',
  FatherMobileNumber: '',
  numOfBrothers: '',
  numOfSisters: '',
  Address: '',
  TempAddress: '',
  City: '',
  PinCode: '',
  Taluka: '',
  District: '',
  State: StateData[0].name,
  PPAnnualIncome: '',
  PPCaste: '',
  PPEducation: '',
  PPResidingCountry: '',
  PPResidingState: '',
  PPResidingCity: '',
  PPHeight: '',
  PPWeight: '',
  PPSkinColor: '',
  Rashi: '',
  Nakshatra: '',
};
const UserDetails = () => {
  const { t } = useTranslation();
  const [updateInfo, { isLoading }] = useUpdateInfoMutation();
  const navigate = useNavigate();
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userDetailsSchema,
      onSubmit: values => {
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
          .then(res => {
            if (res) {
              // console.log({ values });

              navigate('/photoUpload', { replace: true });
            } else {
              showToast('Something went wrong', 'error');
            }
          })
          .catch(() => {
            showToast('Something went wrong', 'error');
          });
      },
    });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="lg:px-96 p-6">
          <div className="border-b border-gray-900/10 pb-12 border border-gray-200 border-r-2 p-8 rounded-3xl">
            <h2 className="text-base  leading-7 text-gray-900 font-Onest font-semibold">
              {t('userDetails.personalInfo.title')}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 font-Onest"></p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="Birth Place"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.firstName')}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="FirstName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.FirstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.FirstName && touched.FirstName ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.FirstName)}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.middleName')}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="MiddleName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.MiddleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.MiddleName && touched.MiddleName ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.MiddleName)}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.lastName')}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="LastName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.LastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.LastName && touched.LastName ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.LastName)}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.dateOfBirth')}
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="DateOfBirth"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.DateOfBirth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.DateOfBirth && touched.DateOfBirth ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.DateOfBirth)}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.timeOfBirth')}
                </label>
                <div className="mt-2">
                  <input
                    type="time"
                    name="TimeOfBirth"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.TimeOfBirth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.TimeOfBirth && touched.TimeOfBirth ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.TimeOfBirth)}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="Birth Place"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.birthPlace')}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="BirthPlace"
                    id="Birth Place"
                    autoComplete="given-name"
                    className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.BirthPlace}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.BirthPlace && touched.BirthPlace ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.BirthPlace)}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="Marriage"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.marriageStatus')}
                </label>
                <div className="mt-2">
                  <select
                    id="Marriage"
                    name="MarriageStatus"
                    autoComplete="Marriage"
                    className="font-Onest block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={values.MarriageStatus}
                    onChange={handleChange}
                    onBlur={handleBlur}>
                    <option> Select</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                    <option>Divorced</option>
                    <option>Separated</option>
                  </select>
                  {errors.MarriageStatus && touched.MarriageStatus ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.MarriageStatus)}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="Gender"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.gender')}
                </label>
                <div className="mt-2">
                  <select
                    id="Gender"
                    name="Gender"
                    autoComplete="Gender"
                    className="font-Onest block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={values.Gender}
                    onChange={handleChange}
                    onBlur={handleBlur}>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>other</option>
                  </select>
                  {errors.Gender && touched.Gender ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.Gender)}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="bloodGroup"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.bloodGroup')}
                </label>
                <div className="mt-2">
                  <select
                    id="bloodGroup"
                    name="BloodGroup"
                    autoComplete="bloodGroup"
                    className="font-Onest block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={values.BloodGroup}
                    onChange={handleChange}
                    onBlur={handleBlur}>
                    <option></option>
                    <option>A +</option>
                    <option>A -</option>
                    <option> B +</option>
                    <option>B -</option>
                    <option> AB +</option>
                    <option>AB -</option>
                    <option>O +</option>
                    <option>O -</option>
                  </select>
                  {errors.BloodGroup && touched.BloodGroup ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.BloodGroup)}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="Religion"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.religion')}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Religion"
                    id="Religion"
                    autoComplete="Religion"
                    className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.Religion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.Religion && touched.Religion ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.Religion)}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="Caste"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.caste')}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Caste"
                    id="Caste"
                    autoComplete="given-name"
                    className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.Caste}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.Caste && touched.Caste ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.Caste)}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="sm:col-span-2 col-span-3">
                <label
                  htmlFor="SubCaste"
                  className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                  {t('userDetails.personalInfo.fields.subCaste')}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="SubCaste"
                    id="SubCaste"
                    autoComplete="given-name"
                    className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.SubCaste}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.SubCaste && touched.SubCaste ? (
                    <p className="text-red-500 font-Onest text-xs mt-1">
                      {t(errors.SubCaste)}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="border-b border-gray-900/10 pb-12 border border-gray-200 border-r-2 p-8 rounded-3xl">
              <h2 className="text-base font-bold leading-7 text-gray-900 font-Onest">
                {t('userDetails.basicInfo.title')}
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 font-Onest"></p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="Education"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.basicInfo.fields.education')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Education"
                      id="Education"
                      autoComplete="given-name"
                      className="block w-full font-Onest rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.Education}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Education && touched.Education ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Education)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="Occupation"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.basicInfo.fields.occupation')}
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
                    />
                    {errors.Occupation && touched.Occupation ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Occupation)}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="Income"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.basicInfo.fields.income')} Per Year
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
                    />
                    {errors.Income && touched.Income ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Income)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="Height"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.basicInfo.fields.height')}
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
                    />
                    {errors.Height && touched.Height ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Height)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="Weight"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.basicInfo.fields.weight')}
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
                    />
                    {errors.Weight && touched.Weight ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Weight)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="SkinColor"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.basicInfo.fields.skinColor')}
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
                    />
                    {errors.SkinColor && touched.SkinColor ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.SkinColor)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="SkinColor"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Rashi'}
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
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="SkinColor"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Nakshatra'}
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
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="border-b border-gray-900/10 pb-12 border border-gray-200 border-r-2 p-8 rounded-3xl">
              <h2 className="text-base font-bold leading-7 text-gray-900 font-Onest">
                {t('userDetails.familyInfo.title')}
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 font-Onest"></p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="MotherName"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.familyInfo.fields.motherName')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="MotherName"
                      id="MotherName"
                      className="block  font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.MotherName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.MotherName && touched.MotherName ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.MotherName)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="MotherMobileNumber"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.familyInfo.fields.motherMobileNo')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="MotherMobileNumber"
                      maxLength={10}
                      id="MotherMobileNumber"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.MotherMobileNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.MotherMobileNumber && touched.MotherMobileNumber ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.MotherMobileNumber)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="FatherName"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.familyInfo.fields.fatherName')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="FatherName"
                      id="FatherName"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.FatherName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.FatherName && touched.FatherName ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.FatherName)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="FatherMobileNumber"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.familyInfo.fields.fatherMobileNo')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="FatherMobileNumber"
                      maxLength={10}
                      id="FatherMobileNumber"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.FatherMobileNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.FatherMobileNumber && touched.FatherMobileNumber ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.FatherMobileNumber)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="BrotherSisterName"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.familyInfo.fields.brotherName')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="numOfBrothers"
                      id="BrotherName"
                      placeholder="eg:-1 brothers Name married/unmarried"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.numOfBrothers}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.numOfBrothers && touched.numOfBrothers ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.numOfBrothers)}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="SisterName"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.familyInfo.fields.sisterName')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="numOfSisters"
                      id="SisterName"
                      placeholder="eg:-1 sister Name married/unmarried"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.numOfSisters}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.numOfSisters && touched.numOfSisters ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.numOfSisters)}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="border-b border-gray-900/10 pb-12 border border-gray-200 border-r-2 p-8 rounded-3xl">
              <h2 className="text-base font-bold leading-7 text-gray-900 font-Onest">
                {t('userDetails.addressInfo.title')}
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 font-Onest"></p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="Address"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.addressInfo.fields.address')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Address"
                      id="Address"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.Address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Address && touched.Address ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Address)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="TempAddress"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.addressInfo.fields.tempAddress')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="TempAddress"
                      id="TempAddress"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.TempAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.TempAddress && touched.TempAddress ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.TempAddress)}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.addressInfo.fields.city')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="City"
                      id="City"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.City}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.City && touched.City ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.City)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="Pincode"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.addressInfo.fields.pinCode')}
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
                    />
                    {errors.PinCode && touched.PinCode ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.PinCode)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="taluka"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.addressInfo.fields.taluka')}
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
                    />
                    {errors.Taluka && touched.Taluka ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.Taluka)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="district"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.addressInfo.fields.district')}
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
                    />
                    {errors.District && touched.District ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {t(errors.District)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('userDetails.addressInfo.fields.state')}
                  </label>
                  <div className="mt-2">
                    <select
                      name="State"
                      id="State"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      value={values.State}
                      onChange={handleChange}
                      onBlur={handleBlur}>
                      {StateData.map((value, index) => {
                        return (
                          <option key={index} value={value.name}>
                            {value.name}
                          </option>
                        );
                      })}
                    </select>
                    {errors.State && touched.State ? (
                      <p className="text-red-500 font-Onest text-sm mt-2 text-xs mt-1">
                        {t(errors.State)}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expectations from partner */}
          <div className="mt-10">
            <div className="border-b border-gray-900/10 pb-12 border border-gray-200 border-r-2 p-8 rounded-3xl">
              <h2 className="text-base font-bold leading-7 text-gray-900 font-Onest">
                {'Partner Preferences'}
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 font-Onest"></p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPAnnualIncome"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Annual Income'}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="PPAnnualIncome"
                      id="PPAnnualIncome"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.PPAnnualIncome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPCaste"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Caste'}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="PPCaste"
                      id="PPCaste"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.PPCaste}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPEducation"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Education'}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="PPEducation"
                      id="PPEducation"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.PPEducation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPResidingCountry"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Residing Country'}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="PPResidingCountry"
                      id="PPResidingCountry"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.PPResidingCountry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPResidingState"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Residing State'}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="PPResidingState"
                      id="PPResidingState"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.PPResidingState}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPResidingCity"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Residing City'}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="PPResidingCity"
                      id="PPResidingCity"
                      autoComplete="given-name"
                      className="block font-Onest w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.PPResidingCity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPHeight"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Height'}
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
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPWeight"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Weight'}
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
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="PPSkinColor"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {'Skin Color'}
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
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-500 mt-3 sm:w-52 text-white rounded-md w-full py-2 font-Onest font-bold flex content-center justify-center">
            {t('userDetails.submit')}
          </button>
        </div>
      </form>
    </>
  );
};

export default UserDetails;
