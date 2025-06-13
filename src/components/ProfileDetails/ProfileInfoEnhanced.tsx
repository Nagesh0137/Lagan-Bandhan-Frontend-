import { CurrencyRupeeIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";

function ProfileInfoEnhanced({ data }: any) {
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
              {dateOfBirth ? moment(dateOfBirth).format("DD MMM YYYY") : "N/A"}
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
              {timeOfBirth ? moment(timeOfBirth, ["HH:mm"]).format("hh:mm a") : "N/A"}
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
            <span className="text-lg font-bold text-gray-900 font-Onest">{bornPlace || "N/A"}</span>
          </div>

          {/* Additional Personal Fields */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-indigo-600 font-Onest">
                Marriage Status
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{marriageStatus || "N/A"}</span>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-teal-600 font-Onest">
                Gender
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{gender || "N/A"}</span>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-rose-600 font-Onest">
                Blood Group
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{bloodGroup || "N/A"}</span>
          </div>

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
            <span className="text-lg font-bold text-gray-900 font-Onest">{caste || "N/A"}</span>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-violet-600 font-Onest">
                Religion
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{religion || "N/A"}</span>
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
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <label className="text-sm font-semibold text-blue-600 font-Onest">
                Education
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{education || "N/A"}</span>
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
                Occupation
              </label>
            </div>
            <span className="text-lg font-bold text-gray-900 font-Onest">{occupation || "N/A"}</span>
          </div>

          {/* Income */}
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
              {income ? Intl.NumberFormat("en-In", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(income) : "N/A"}
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
            <span className="text-lg font-bold text-gray-900 font-Onest">{height || "N/A"}</span>
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
            <span className="text-lg font-bold text-gray-900 font-Onest">{weight || "N/A"}</span>
          </div>

          {/* Additional Fields */}
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
            <span className="text-lg font-bold text-gray-900 font-Onest">{skinColor || "N/A"}</span>
          </div>

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
            <span className="text-lg font-bold text-gray-900 font-Onest">{rashi || "N/A"}</span>
          </div>

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
            <span className="text-lg font-bold text-gray-900 font-Onest">{nakshatra || "N/A"}</span>
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
            Family Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mother Information */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-pink-700 font-Onest">Mother's Details</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 font-Onest">Name</span>
                <span className="text-sm font-bold text-gray-900 font-Onest">{motherName || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 font-Onest">Phone</span>
                {motherMobileNumber ? (
                  <a href={`tel:${motherMobileNumber}`}>
                    <span className="text-sm font-bold text-pink-600 hover:underline font-Onest">{motherMobileNumber}</span>
                  </a>
                ) : (
                  <span className="text-sm font-bold text-gray-900 font-Onest">N/A</span>
                )}
              </div>
            </div>
          </div>

          {/* Father Information */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-700 font-Onest">Father's Details</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 font-Onest">Name</span>
                <span className="text-sm font-bold text-gray-900 font-Onest">{fatherName || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 font-Onest">Phone</span>
                {fatherMobileNumber ? (
                  <a href={`tel:${fatherMobileNumber}`}>
                    <span className="text-sm font-bold text-blue-600 hover:underline font-Onest">{fatherMobileNumber}</span>
                  </a>
                ) : (
                  <span className="text-sm font-bold text-gray-900 font-Onest">N/A</span>
                )}
              </div>
            </div>
          </div>

          {/* Siblings Information */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 md:col-span-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-700 font-Onest">Siblings</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 font-Onest">Brother</span>
                <span className="text-sm font-bold text-gray-900 font-Onest">{brotherName || "N/A"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 font-Onest">Sister</span>
                <span className="text-sm font-bold text-gray-900 font-Onest">{sisterName || "N/A"}</span>
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
            Address Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address Fields */}
          {[
            { label: "Address", value: address, color: "orange" },
            { label: "Temporary Address", value: tempAddress, color: "red" },
            { label: "City", value: city, color: "blue" },
            { label: "District", value: district, color: "green" },
            { label: "State", value: state, color: "purple" },
            { label: "Pincode", value: pincode, color: "yellow" },
            { label: "Taluka", value: taluka, color: "pink" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 bg-${item.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <svg className={`w-4 h-4 text-${item.color}-600`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <label className={`text-sm font-semibold text-${item.color}-600 font-Onest`}>
                  {item.label}
                </label>
              </div>
              <span className="text-lg font-bold text-gray-900 font-Onest">{item.value || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Preferences Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-Onest">
            Partner Preferences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Annual Income", value: PPAnnualIncome, color: "green" },
            { label: "Caste", value: PPCaste, color: "blue" },
            { label: "Education", value: PPEducation, color: "purple" },
            { label: "Residing Country", value: PPResidingCountry, color: "red" },
            { label: "Residing State", value: PPResidingState, color: "yellow" },
            { label: "Residing City", value: PPResidingCity, color: "pink" },
            { label: "Height", value: PPHeight, color: "indigo" },
            { label: "Weight", value: PPWeight, color: "teal" },
            { label: "Skin Color", value: PPSkinColor, color: "orange" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 bg-${item.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <svg className={`w-4 h-4 text-${item.color}-600`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <label className={`text-sm font-semibold text-${item.color}-600 font-Onest`}>
                  {item.label}
                </label>
              </div>
              <span className="text-lg font-bold text-gray-900 font-Onest">{item.value || "N/A"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfoEnhanced;
