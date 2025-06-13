import React from 'react';
import { AdminInfo } from './types';

const Information = ({ title, User, icon }: AdminInfo) => {
  return (
    <div className="w-full h-full">
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 border border-gray-100 dark:border-gray-700 overflow-hidden group h-full min-h-[200px] flex flex-col justify-between">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Particles Effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-40 group-hover:animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-60 group-hover:animate-pulse"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon Container */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative">
              <div className="p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-600 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              {/* Icon Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
          </div>
          
          {/* Content Container */}
          <div className="flex-1 flex flex-col justify-center text-center space-y-3">
            {/* Value */}
            <div className="relative">
              <h3 className="text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-Onest tracking-tight leading-none group-hover:scale-105 transition-transform duration-200">
                {User}
              </h3>
              {/* Value Underline */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
            </div>
            
            {/* Title */}
            <div className="relative">
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg font-medium font-Onest leading-relaxed px-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
                {title}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default Information;
