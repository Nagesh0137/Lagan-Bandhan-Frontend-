import React, { useEffect, useState } from "react";
import Header from "../Header";
import ProfileName from "./ProfileName";
import ProfileInfoEnhanced from "./ProfileInfoEnhanced";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import { 
  FlagIcon, 
  HeartIcon, 
  ShareIcon, 
  BookmarkIcon,
  CheckBadgeIcon,
  StarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  VideoCameraIcon
} from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Modal, Button } from "flowbite-react";
import { useReportUserProfileMutation } from "../../redux/services/userInfo/api";
import { showToast } from "../../utils/ErrorToast";
import moment from "moment";

interface propState {
  userData: any;
}

export const ProfileDetailsCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [reportProfile, {isLoading}] = useReportUserProfileMutation();

  let { userData } = (location?.state as propState) ?? { userData: null };

  // Extract user details for dynamic display
  const personalDetails = userData?.userDetails?.personalDetails || {};
  const basicDetails = userData?.userDetails?.basicDetails || {};
  const addressDetails = userData?.userDetails?.addressDetails || {};
  const partnerPreferences = userData?.userDetails?.partnerpreferences || {};
  const familyDetails = userData?.userDetails?.familyDetails || {};
  
  const age = personalDetails.dateOfBirth ? moment().diff(moment(personalDetails.dateOfBirth), 'years') : null;
  
  // Calculate dynamic stats from available photos
  const profilePhotos = userData?.photoDetails ? Object.values(userData.photoDetails).filter(photo => photo && typeof photo === 'string') as string[] : [];
  const photoCount = profilePhotos.length;
  
  useEffect(() => {
    if (!userData) {
      navigate("/home", { replace: true });
    }
  }, [userData, navigate]);

  const handleSubmit = () => {
    reportProfile({
      description,
      reportedUserId: userData?._id || '',
      reportingUserId: "1",
    })
      .unwrap()
      .then((res) =>{
        if(res.success){
          showToast('Reported successfully', 'success');
        }
      })
      .catch((err) =>  showToast('Something went wrong', 'error'));
  };

  const openReportModal = () => {
    setOpenModal(true);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Add haptic feedback or toast notification here
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Add haptic feedback or toast notification here
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${userData?.userDetails?.personalDetails?.firstName || 'User'}'s Profile`,
        text: 'Check out this amazing profile on A2Z Matrimony!',
        url: window.location.href,
      });
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard!', 'success');
    }
  };


  return (
    <>
      {/* Custom Animations */}
      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .gradient-border {
          background: linear-gradient(45deg, #8b5cf6, #ec4899, #ef4444);
          padding: 2px;
          border-radius: 1rem;
        }
        
        .gradient-border > div {
          background: white;
          border-radius: calc(1rem - 2px);
        }
      `}</style>
      
      <Header isUserFullyOnboarded={true} />
      
      {/* Main Container with Background */}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-20 left-1/2 w-60 h-60 bg-gradient-to-br from-pink-400/5 to-red-400/5 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          
          {/* Floating Hearts Animation */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 text-pink-300 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>
            <HeartIcon className="w-full h-full" />
          </div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 text-purple-300 animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}>
            <StarIcon className="w-full h-full" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 text-blue-300 animate-bounce" style={{animationDelay: '2s', animationDuration: '6s'}}>
            <SparklesIcon className="w-full h-full" />
          </div>
        </div>

        {/* Notification Toast */}
        {showNotification && (
          <div className="absolute top-24 right-4 bg-white rounded-xl shadow-xl border border-gray-100 p-4 max-w-sm animate-slide-in-right z-40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <CheckBadgeIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 font-Onest">Profile Verified!</div>
                <div className="text-xs text-gray-500 font-Onest">Authentic and verified profile</div>
              </div>
              <button 
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Dynamic User Stats */}
        {(age || basicDetails.education || addressDetails.city || basicDetails.occupation) && (
          <div className="relative pt-6 pb-6">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
                  {age && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CalendarDaysIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-bold text-gray-900 font-Onest">{age}</div>
                          <div className="text-xs text-gray-600 font-Onest">Years Old</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {basicDetails.education && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 font-Onest truncate max-w-[60px] sm:max-w-[80px]">{basicDetails.education}</div>
                          <div className="text-xs text-gray-600 font-Onest">Education</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {addressDetails.city && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 font-Onest truncate max-w-[60px] sm:max-w-[80px]">{addressDetails.city}</div>
                          <div className="text-xs text-gray-600 font-Onest">Location</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {basicDetails.occupation && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 font-Onest truncate max-w-[60px] sm:max-w-[80px]">{basicDetails.occupation}</div>
                          <div className="text-xs text-gray-600 font-Onest">Profession</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative pb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-red-600/5"></div>
          
          <div className="relative w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
                
                {/* Profile Image Column */}
                <div className="lg:col-span-1">
                  <div className="lg:sticky lg:top-24">
                    <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
                      {/* Image Container */}
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          src={userData?.photoDetails?.profilePhoto || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face'}
                          alt="Profile Photo"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face';
                          }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Floating Action Buttons */}
                        <div className="absolute top-4 right-4 flex flex-col gap-3">
                          {/* Report Button */}
                          <button
                            onClick={openReportModal}
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group/report"
                          >
                            <FlagIcon className="h-5 w-5 text-red-500 group-hover/report:text-red-600" />
                          </button>
                          
                          {/* Favorite Button */}
                          <button 
                            onClick={handleLike}
                            className={`w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 group/heart ${
                              isLiked ? 'bg-pink-500 animate-glow' : 'bg-white/90 hover:bg-white'
                            }`}
                          >
                            <HeartIcon className={`h-5 w-5 transition-colors duration-200 ${
                              isLiked ? 'text-white' : 'text-pink-500 group-hover/heart:text-pink-600'
                            }`} />
                          </button>
                          
                          {/* Bookmark Button */}
                          <button 
                            onClick={handleBookmark}
                            className={`w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 group/bookmark ${
                              isBookmarked ? 'bg-blue-500 animate-glow' : 'bg-white/90 hover:bg-white'
                            }`}
                          >
                            <BookmarkIcon className={`h-5 w-5 transition-colors duration-200 ${
                              isBookmarked ? 'text-white' : 'text-blue-500 group-hover/bookmark:text-blue-600'
                            }`} />
                          </button>
                          
                          {/* Share Button */}
                          <button 
                            onClick={handleShare}
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group/share"
                          >
                            <ShareIcon className="h-5 w-5 text-purple-500 group-hover/share:text-purple-600" />
                          </button>
                        </div>
                        
                        {/* Status Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                            <span className="text-sm font-medium font-Onest">Recently Active</span>
                          </div>
                        </div>
                        
                        {/* Premium Badge - Only show if verified */}
                        {userData?.isVerified && (
                          <div className="absolute top-4 left-4">
                            <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1.5 rounded-full shadow-lg">
                              <CheckBadgeIcon className="w-4 h-4" />
                              <span className="text-xs font-bold font-Onest">VERIFIED</span>
                            </div>
                          </div>
                        )}

                        {/* Age Badge - Only show if age is available */}
                        {age && (
                          <div className="absolute bottom-4 right-4">
                            <div className="flex items-center gap-1 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full shadow-lg">
                              <CalendarDaysIcon className="w-3 h-3" />
                              <span className="text-xs font-Onest">{age} years</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Dynamic Quick Stats */}
                      <div className="p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50">
                        <div className="grid grid-cols-2 gap-4 text-center mb-4">
                          {photoCount > 0 && (
                            <div className="group hover:scale-110 transition-transform duration-200">
                              <div className="text-2xl font-bold text-pink-600 font-Onest group-hover:text-pink-700">{photoCount}</div>
                              <div className="text-xs text-gray-600 font-Onest">Photos</div>
                              <div className="flex justify-center mt-1 gap-1">
                                {[...Array(Math.min(5, photoCount))].map((_, i) => (
                                  <div key={i} className="w-1 h-1 bg-pink-400 rounded-full"></div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {basicDetails.height && (
                            <div className="group hover:scale-110 transition-transform duration-200">
                              <div className="text-lg font-bold text-blue-600 font-Onest group-hover:text-blue-700">{basicDetails.height}</div>
                              <div className="text-xs text-gray-600 font-Onest">Height</div>
                            </div>
                          )}
                        </div>

                        {/* Activity Indicators - Only show if family details exist */}
                        {(familyDetails.fatherName || familyDetails.motherName) && (
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div className="flex items-center gap-2">
                              <UserGroupIcon className="w-4 h-4 text-gray-500" />
                              <span className="text-xs text-gray-600 font-Onest">Family oriented</span>
                            </div>
                            {personalDetails.religion && (
                              <span className="text-xs text-gray-600 font-Onest bg-gray-100 px-2 py-1 rounded-full">{personalDetails.religion}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Profile Details Column */}
                <div className="lg:col-span-2 space-y-6 lg:space-y-8">
                  {/* Profile Name Section */}
                  <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-1">
                      <div className="bg-white rounded-lg lg:rounded-xl">
                        <ProfileName userData={userData} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Profile Info Section */}
                  <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1">
                      <div className="bg-white rounded-lg lg:rounded-xl">
                        <ProfileInfoEnhanced data={userData?.userDetails} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Features */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* Contact Card - Only show if contact info exists */}
                    {(userData?.email || userData?.mobileNumber) && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <h3 className="text-lg font-bold text-green-800 mb-4 font-Onest flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                          </div>
                          Contact Information
                        </h3>
                        <div className="space-y-3">
                          {userData?.email && (
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group/item">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-600 font-Onest">Email</div>
                                <div className="text-sm text-gray-900 font-Onest truncate">{userData.email}</div>
                              </div>
                            </div>
                          )}
                          
                          {userData?.mobileNumber && (
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group/item">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-600 font-Onest">Phone</div>
                                <div className="text-sm text-gray-900 font-Onest">{userData.mobileNumber}</div>
                              </div>
                            </div>
                          )}
                          
                          {/* Quick Action Buttons */}
                          <div className="grid grid-cols-2 gap-3 mt-4">
                            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg font-Onest">
                              Send Message
                            </button>
                            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg font-Onest">
                              Video Call
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Preferences Card - Only show if partner preferences exist */}
                    {(partnerPreferences?.PPAgeFrom || partnerPreferences?.PPEducation || partnerPreferences?.PPResidingCity) && (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <h3 className="text-lg font-bold text-purple-800 mb-4 font-Onest flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          Partner Preferences
                        </h3>
                        <div className="space-y-3">
                          {(partnerPreferences?.PPAgeFrom && partnerPreferences?.PPAgeTo) && (
                            <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group/pref">
                              <span className="text-sm font-medium text-gray-600 font-Onest flex items-center gap-2">
                                <CalendarDaysIcon className="w-4 h-4 text-purple-500" />
                                Age Range
                              </span>
                              <span className="text-sm text-purple-600 font-bold font-Onest">{partnerPreferences.PPAgeFrom}-{partnerPreferences.PPAgeTo} years</span>
                            </div>
                          )}
                          
                          {partnerPreferences?.PPEducation && (
                            <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group/pref">
                              <span className="text-sm font-medium text-gray-600 font-Onest flex items-center gap-2">
                                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                                </svg>
                                Education
                              </span>
                              <span className="text-sm text-purple-600 font-bold font-Onest truncate max-w-[150px]">{partnerPreferences.PPEducation}</span>
                            </div>
                          )}
                          
                          {partnerPreferences?.PPResidingCity && (
                            <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group/pref">
                              <span className="text-sm font-medium text-gray-600 font-Onest flex items-center gap-2">
                                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                </svg>
                                Location Preference
                              </span>
                              <span className="text-sm text-purple-600 font-bold font-Onest truncate max-w-[150px]">{partnerPreferences.PPResidingCity}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section - Only show if photos exist */}
        {profilePhotos.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-1">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-Onest flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  Photo Gallery
                  <span className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">{photoCount} Photos</span>
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {profilePhotos.slice(0, 8).map((photo, index) => (
                    <div key={index} className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <img
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="flex items-center justify-between">
                            <span className="text-white text-xs font-medium font-Onest">Photo {index + 1}</span>
                            <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <EyeIcon className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {profilePhotos.length > 8 && (
                  <div className="mt-6 text-center">
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold font-Onest hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                      View All {photoCount} Photos
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

                  {/* Quick Actions */}
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 font-Onest flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-slate-400 to-gray-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      Quick Actions
                    </h3>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-100">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-700 font-Onest text-center">Send Interest</div>
                      </button>
                      
                      <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-100">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-700 font-Onest text-center">Voice Call</div>
                      </button>
                      
                      <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-100">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <VideoCameraIcon className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="text-xs font-medium text-gray-700 font-Onest text-center">Video Chat</div>
                      </button>
                      
                      <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-100">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-700 font-Onest text-center">Chat Now</div>
                      </button>
                    </div>
                  </div>

        {/* Mobile Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 shadow-2xl md:hidden z-50">
          <div className="flex items-center gap-3 max-w-sm mx-auto">
            <button 
              onClick={handleLike}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold font-Onest flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all ${
                isLiked 
                  ? 'bg-gradient-to-r from-pink-600 to-red-700 text-white animate-glow' 
                  : 'bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-pink-600 hover:to-red-700'
              }`}
            >
              <HeartIcon className="w-5 h-5" />
              {isLiked ? 'Liked' : 'Like'}
            </button>
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold font-Onest flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:from-blue-600 hover:to-purple-700">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              Message
            </button>
            <button 
              onClick={handleShare}
              className="w-14 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:from-gray-200 hover:to-gray-300"
            >
              <ShareIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
      {/* Enhanced Report Modal */}
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        className="backdrop-blur-sm"
      >
        <Modal.Header className="border-0 pb-0">
          <div className="w-full text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <FlagIcon className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <div className="text-center">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white font-Onest">
              Report User Profile
            </h3>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 font-Onest">
              Help us maintain a safe community by reporting inappropriate content or behavior.
            </p>
            
            <div className="text-left mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-Onest">
                Reason for reporting:
              </label>
              <textarea
                name="postContent"
                rows={4}
                placeholder="Please describe the issue in detail..."
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none font-Onest text-sm"
              />
            </div>
            
            <div className="flex justify-center gap-4">
              <Button 
                disabled={isLoading} 
                onClick={handleSubmit}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 font-Onest border-0 px-6 py-2 text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Report"
                )}
              </Button>
              <Button
                color="gray"
                onClick={() => setOpenModal(false)}
                className="font-Onest px-6 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileDetailsCard;
