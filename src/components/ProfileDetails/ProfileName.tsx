import {
  CalendarIcon,
  CurrencyRupeeIcon,
  EnvelopeIcon,
  FlagIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  ReceiptPercentIcon,
  StarIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  CheckBadgeIcon,
} from "@heroicons/react/20/solid";
import { Button, Modal } from "flowbite-react";
import moment from "moment";
import { useState } from "react";


const ProfileName = ({ userData }: any) => {

  const { firstName, lastName, middleName, dateOfBirth } = userData?.userDetails
    ?.personalDetails ?? { firstName: "", lastName: "", middleName: "" };
  const fullName = `${firstName} ${middleName} ${lastName}`;

  const { city } = userData?.userDetails.addressDetails;
  const { income } = userData?.userDetails.basicDetails;

  return (
    <>
      <div className="relative p-8 bg-gradient-to-br from-white via-gray-50 to-purple-50 rounded-2xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-pink-100/20 to-red-100/20 rounded-2xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <HeartIcon className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <StarIcon className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="relative">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent font-Onest leading-tight">
                    {fullName}
                  </h1>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <CheckBadgeIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-green-600 font-Onest">Verified Profile</span>
                  </div>
                </div>
                
                {/* Age and Profession Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full">
                    <CalendarIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700 font-Onest">
                      {moment().diff(moment(dateOfBirth), 'years')} years old
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                    </svg>
                    <span className="text-sm font-medium text-purple-700 font-Onest">Software Engineer</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="hidden md:flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-bold text-gray-900 font-Onest">4.9</span>
                </div>
                <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-900 font-Onest">98% Match</span>
                </div>
              </div>
            </div>
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Location Card */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPinIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 font-Onest">Location</div>
                    <div className="text-sm font-bold text-gray-900 font-Onest">{city}</div>
                    <div className="text-xs text-blue-600 font-Onest">2.5 km away</div>
                  </div>
                </div>
              </div>
              
              {/* Income Card */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CurrencyRupeeIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 font-Onest">Annual Income</div>
                    <div className="text-sm font-bold text-gray-900 font-Onest">
                      {Intl.NumberFormat("en-In", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      }).format(income)}
                    </div>
                    <div className="text-xs text-green-600 font-Onest">High earning potential</div>
                  </div>
                </div>
              </div>
              
              {/* DOB Card */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CalendarIcon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 font-Onest">Date of Birth</div>
                    <div className="text-sm font-bold text-gray-900 font-Onest">
                      {moment(dateOfBirth).format("DD MMM YYYY")}
                    </div>
                    <div className="text-xs text-purple-600 font-Onest">Perfect age match</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${userData?.email}`} className="flex-1 sm:flex-initial">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold font-Onest transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <EnvelopeIcon className="h-5 w-5 group-hover:animate-pulse" />
                Send Message
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </a>

            <a href={`tel:${userData?.mobileNumber}`} className="flex-1 sm:flex-initial">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold font-Onest transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group relative overflow-hidden"
              >
                <PhoneArrowDownLeftIcon className="h-5 w-5 group-hover:animate-bounce" />
                Call Now
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </a>

            <button
              type="button"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold font-Onest transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group relative overflow-hidden"
            >
              <VideoCameraIcon className="h-5 w-5 group-hover:animate-pulse" />
              Video Call
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* Interest Indicators */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-Onest">47 people liked this profile</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-Onest">Last active 2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileName;
