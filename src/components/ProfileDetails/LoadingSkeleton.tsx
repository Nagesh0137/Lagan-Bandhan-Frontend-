import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 animate-pulse">
      {/* Header Skeleton */}
      <div className="w-full h-16 bg-gray-200 mb-6"></div>
      
      {/* Stats Cards Skeleton */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="w-12 h-6 bg-gray-300 rounded mb-1"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Profile Image Skeleton */}
            <div className="xl:col-span-1">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="aspect-[3/4] bg-gray-300"></div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[1, 2, 3].map((i) => (
                      <div key={i}>
                        <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded mx-auto"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile Details Skeleton */}
            <div className="xl:col-span-2 space-y-8">
              {/* Profile Name Skeleton */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="w-64 h-10 bg-gray-300 rounded mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                        <div>
                          <div className="w-16 h-3 bg-gray-300 rounded mb-2"></div>
                          <div className="w-20 h-4 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 h-12 bg-gray-300 rounded-xl"></div>
                  <div className="flex-1 h-12 bg-gray-300 rounded-xl"></div>
                </div>
              </div>
              
              {/* Profile Info Skeleton */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((section) => (
                    <div key={section}>
                      <div className="w-48 h-6 bg-gray-300 rounded mb-4"></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div key={item} className="bg-gray-100 rounded-xl p-4">
                            <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="w-32 h-5 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Additional Cards Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((card) => (
                  <div key={card} className="bg-white rounded-2xl shadow-xl p-6">
                    <div className="w-40 h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-gray-100 rounded-xl p-3">
                          <div className="flex justify-between items-center">
                            <div className="w-20 h-4 bg-gray-300 rounded"></div>
                            <div className="w-16 h-4 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
