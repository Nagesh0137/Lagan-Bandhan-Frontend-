import { CurrencyRupeeIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";

function ProfileInfo({ data }: any) {
  const { t } = useTranslation();
  const {
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    timeOfBirth,
    bornPlace,
    marriageStatus,
    gender,
    bloodGroup,
    caste,
    religion,
  } = data?.personalDetails || {};
  const {
    education,
    occupation,
    income,
    height,
    weight,
    rashi,
    nakshatra,
    skinColor,
  } = data?.basicDetails || {};
  const {
    motherName,
    motherMobileNumber,
    fatherName,
    fatherMobileNumber,
    brotherName,
    brotherMobileNumber,
    sisterName,
    sisterMobileNumber,
  } = data?.familyDetails || {};

  const { address, city, district, pincode, state, taluka, tempAddress } =
    data?.addressDetails || {};

  const {
    PPAnnualIncome,
    PPCaste,
    PPEducation,
    PPResidingCountry,
    PPResidingState,
    PPResidingCity,
    PPHeight,
    PPWeight,
    PPSkinColor,
  } = data?.partnerpreferences || {};

  return (
    <div className="p-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl">
      {/* Personal Information Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-Onest">
            {t("userDetails.personalInfo.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Name */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-blue-600 font-Onest">
                {t("userDetails.personalInfo.fields.firstName")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{firstName}</span>
          </div>

          {/* Middle Name */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-purple-600 font-Onest">
                {t("userDetails.personalInfo.fields.middleName")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{middleName}</span>
          </div>

          {/* Last Name */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-pink-600 font-Onest">
                {t("userDetails.personalInfo.fields.lastName")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{lastName}</span>
          </div>

          {/* Date of Birth */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-green-600 font-Onest">
                {t("userDetails.personalInfo.fields.dateOfBirth")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {moment(dateOfBirth).format("DD MMM YYYY")}
            </span>
          </div>

          {/* Time of Birth */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-yellow-600 font-Onest">
                {t("userDetails.personalInfo.fields.timeOfBirth")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {moment(timeOfBirth, ["HH:mm"]).format("hh:mm a")}
            </span>
          </div>

          {/* Birth Place */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-red-600 font-Onest">
                {t("userDetails.personalInfo.fields.birthPlace")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{bornPlace}</span>
          </div>

          {/* Marriage Status */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-indigo-600 font-Onest">
                {t("userDetails.personalInfo.fields.marriageStatus")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{marriageStatus}</span>
          </div>

          {/* Gender */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-teal-600 font-Onest">
                {t("userDetails.personalInfo.fields.gender")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{gender}</span>
          </div>

          {/* Blood Group */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-red-600 font-Onest">
                {t("userDetails.personalInfo.fields.bloodGroup")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{bloodGroup}</span>
          </div>

          {/* Caste */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-orange-600 font-Onest">
                {t("userDetails.personalInfo.fields.caste")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{caste}</span>
          </div>

          {/* Religion */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-purple-600 font-Onest">
                {t("userDetails.personalInfo.fields.religion")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{religion}</span>
          </div>
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-Onest">
            {t("userDetails.basicInfo.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-blue-600 font-Onest">
                {t("userDetails.basicInfo.fields.education")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{education}</span>
          </div>

          {/* Occupation */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-purple-600 font-Onest">
                {t("userDetails.basicInfo.fields.occupation")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{occupation}</span>
          </div>

          {/* Income */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <CurrencyRupeeIcon className="w-4 h-4 text-green-600" />
              </div>
              <label className="text-sm font-semibold text-green-600 font-Onest">
                {t("userDetails.basicInfo.fields.income")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {Intl.NumberFormat("en-In", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(income)}
            </span>
          </div>

          {/* Height */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-yellow-600 font-Onest">
                {t("userDetails.basicInfo.fields.height")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{height}</span>
          </div>

          {/* Weight */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-pink-600 font-Onest">
                {t("userDetails.basicInfo.fields.weight")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{weight}</span>
          </div>

          {/* Skin Color */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-orange-600 font-Onest">
                Skin Color
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{skinColor ?? "NA"}</span>
          </div>

          {/* Rashi */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-indigo-600 font-Onest">
                Rashi
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{rashi ?? "NA"}</span>
          </div>

          {/* Nakshatra */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-teal-600 font-Onest">
                Nakshatra
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{nakshatra ?? "NA"}</span>
          </div>
        </div>
      </div>
      {/* Family Information Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-Onest">
            {t("userDetails.familyInfo.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mother Information */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pink-600 font-Onest">Mother Details</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500 font-Onest">
                  {t("userDetails.familyInfo.fields.motherName")}
                </label>
                <div className="text-lg font-bold text-gray-900 font-Onest">{motherName}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 font-Onest">
                  {t("userDetails.familyInfo.fields.motherMobileNo")}
                </label>
                <div className="text-lg font-bold text-gray-900 font-Onest">
                  <a href={`tel:${motherMobileNumber}`} className="hover:text-pink-600 transition-colors">
                    {motherMobileNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Father Information */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 font-Onest">Father Details</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500 font-Onest">
                  {t("userDetails.familyInfo.fields.fatherName")}
                </label>
                <div className="text-lg font-bold text-gray-900 font-Onest">{fatherName}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 font-Onest">
                  {t("userDetails.familyInfo.fields.fatherMobileNo")}
                </label>
                <div className="text-lg font-bold text-gray-900 font-Onest">
                  <a href={`tel:${fatherMobileNumber}`} className="hover:text-blue-600 transition-colors">
                    {fatherMobileNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Brother Information */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-600 font-Onest">Brother Details</h3>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 font-Onest">
                {t("userDetails.familyInfo.fields.brotherName")}
              </label>
              <div className="text-lg font-bold text-gray-900 font-Onest">
                {brotherName && brotherName ? brotherName : "NA"}
              </div>
            </div>
          </div>

          {/* Sister Information */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-purple-600 font-Onest">Sister Details</h3>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500 font-Onest">
                {t("userDetails.familyInfo.fields.sisterName")}
              </label>
              <div className="text-lg font-bold text-gray-900 font-Onest">
                {sisterName && sisterName ? sisterName : "NA"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address Information Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-Onest">
            {t("userDetails.addressInfo.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-orange-600 font-Onest">
                {t("userDetails.addressInfo.fields.address")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{address}</span>
          </div>

          {/* Temporary Address */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-red-600 font-Onest">
                {t("userDetails.addressInfo.fields.tempAddress")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{tempAddress}</span>
          </div>

          {/* City */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-blue-600 font-Onest">
                {t("userDetails.addressInfo.fields.city")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{city}</span>
          </div>

          {/* Pincode */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-green-600 font-Onest">
                {t("userDetails.addressInfo.fields.pinCode")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{pincode}</span>
          </div>

          {/* Taluka */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-purple-600 font-Onest">
                {t("userDetails.addressInfo.fields.taluka")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{taluka}</span>
          </div>

          {/* District */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-yellow-600 font-Onest">
                {t("userDetails.addressInfo.fields.district")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{district}</span>
          </div>

          {/* State */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-indigo-600 font-Onest">
                {t("userDetails.addressInfo.fields.state")}
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{state}</span>
          </div>
        </div>
      </div>

      {/* Partner Preferences Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-Onest">
            Partner Preferences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Annual Income */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <CurrencyRupeeIcon className="w-4 h-4 text-green-600" />
              </div>
              <label className="text-sm font-semibold text-green-600 font-Onest">
                Annual Income
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPAnnualIncome || "NA"}
            </span>
          </div>

          {/* Caste */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-orange-600 font-Onest">
                Caste
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPCaste || "NA"}
            </span>
          </div>

          {/* Education */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-blue-600 font-Onest">
                Education
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPEducation || "NA"}
            </span>
          </div>

          {/* Residing Country */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-red-600 font-Onest">
                Residing Country
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPResidingCountry || "NA"}
            </span>
          </div>

          {/* Residing State */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-purple-600 font-Onest">
                Residing State
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPResidingState || "NA"}
            </span>
          </div>

          {/* Residing City */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-indigo-600 font-Onest">
                Residing City
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPResidingCity || "NA"}
            </span>
          </div>

          {/* Height */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-yellow-600 font-Onest">
                Height
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPHeight || "NA"}
            </span>
          </div>

          {/* Weight */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-pink-600 font-Onest">
                Weight
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPWeight || "NA"}
            </span>
          </div>

          {/* Skin Color */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-teal-600 font-Onest">
                Skin Color
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">
              {PPSkinColor || "NA"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
