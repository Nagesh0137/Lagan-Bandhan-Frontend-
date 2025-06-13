import { faHeart as solidHeart, faMapMarkerAlt, faBriefcase, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { ProfileCardProps } from './types';

const ProfileCard = ({
  name,
  photo,
  dob,
  city,
  occupation,
  caste,
  onClick,
  handleAddToFevorite,
  handleRemoveFromFavorite,
}: ProfileCardProps) => {
  const age = dob ? moment().diff(dob, 'years') : 0;

  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 w-full max-w-sm mx-auto">
      
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] relative">
          <img
            src={photo}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Age Badge */}
          {dob && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full shadow-lg">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendarAlt} className="w-3 h-3" />
                <span className="font-bold text-xs font-Onest">{age} yrs</span>
              </div>
            </div>
          )}
          
          {/* Favorite/Remove Button */}
          {handleAddToFevorite && (
            <div className="absolute top-4 right-4">
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleAddToFevorite();
                }}
                className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group/heart">
                <FontAwesomeIcon 
                  icon={solidHeart} 
                  className="w-4 h-4 text-red-500 group-hover/heart:text-red-600 transition-colors" 
                />
              </button>
            </div>
          )}
          
          {/* Remove from Favorites Button */}
          {handleRemoveFromFavorite && (
            <div className="absolute top-4 right-4">
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleRemoveFromFavorite();
                }}
                className="w-10 h-10 bg-red-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-200 group/remove">
                <svg className="w-4 h-4 text-white group-hover/remove:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          )}
          
          {/* Online Status Indicator */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-medium font-Onest">Recently Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 font-Onest line-clamp-1 group-hover:text-red-600 transition-colors">
          {name}
        </h3>

        {/* Details Grid */}
        <div className="space-y-3">
          {/* Occupation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500">
              <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
              <span className="font-medium text-sm font-Onest">Profession</span>
            </div>
            <span className="text-gray-700 font-medium text-sm font-Onest max-w-[120px] text-right line-clamp-1" title={occupation}>
              {occupation}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-500">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
              <span className="font-medium text-sm font-Onest">Location</span>
            </div>
            <span className="text-gray-700 font-medium text-sm font-Onest">
              {city}
            </span>
          </div>

          {/* Caste */}
          {caste && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-500">
                <FontAwesomeIcon icon={faUsers} className="w-4 h-4" />
                <span className="font-medium text-sm font-Onest">Community</span>
              </div>
              <span className="text-gray-700 font-medium text-sm font-Onest">
                {caste}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-2.5 px-4 rounded-xl font-semibold font-Onest hover:from-red-600 hover:to-rose-700 transition-all duration-200 transform hover:scale-105 shadow-md">
            View Profile
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-200 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ProfileCard;
