import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Filter } from '../components/HomeDetails/Filter/Filter';
import ProfileCard from '../components/HomeDetails/ProfileCard/ProfileCard';
import Spinner from '../components/common/ChangeLanguage/Spinner';
import Footer from '../components/common/Footer';
import NotFound from '../components/common/NotFound';
import {
  useGetProfilesQuery,
  useGetUserInfoQuery,
} from '../redux/services/userInfo/api';
import { showToast } from '../utils/ErrorToast';
import { SearchSchema } from '../utils/SearchSchema';
import MarqueeSider from '../components/common/MarqueeSider';

const initialValues = {
  fullName: '',
};

export default function HomeScreen() {
  const { data, isLoading } = useGetUserInfoQuery({});
  const [fullName, setFullName] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [selectedIncomeRange, setSelectedIncomeRange] = useState<string | null>(
    null,
  );
  const [skip, setSkip] = useState(true);

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SearchSchema,
    onSubmit: values => {
      setFullName(values?.fullName);
    },
  });

  const {
    data: profileData,
    isLoading: isProfileListLoading,
    isFetching,
  } = useGetProfilesQuery(
    {
      fullName: fullName,
      selectedAge,
      selectedIncomeRange,
      page,
    },
    { skip },
  );

  const navigate = useNavigate();

  if (data?.redirectTo) {
    navigate(`/${data?.redirectTo}`, {
      replace: true,
    });
  }

  useEffect(() => {
    setInterval(() => {
      setSkip(false);
    }, 1000);
  });

  if (!data?.redirectTo) {
    const fullName = `${data?.data?.userDetails?.personalDetails?.firstName} ${data?.data?.userDetails?.personalDetails?.lastName}`;
    const email = `${data?.data?.email}`;
    const photo = `${data?.data?.photoDetails?.profilePhoto}`;

    localStorage.setItem('name', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('photo', photo);
    localStorage.setItem('userDetails', JSON.stringify(data?.data));
  }

  const handleNavigation = (item: any) => {
    navigate('/details', { state: { userData: item } });
  };

  const setData = async (item: any) => {
    const LocalStorageKey = 'fevorite'; // Replace with your actual key

    const data = localStorage.getItem(LocalStorageKey);
    let newArray = [];

    if (data) {
      const respData = JSON.parse(data);
      const isAlreadyAdded = respData.filter(
        (resp: { _id: any }) => resp._id === item._id,
      );

      if (isAlreadyAdded.length >= 1) {
        showToast('Already added in favorites', 'error');
      } else {
        newArray = JSON.parse(data);
        newArray.push(item);
        localStorage.setItem(LocalStorageKey, JSON.stringify(newArray));
        showToast('Added to Fervorite', 'success');
      }
    } else {
      newArray.push(item);
      localStorage.setItem(LocalStorageKey, JSON.stringify(newArray));
      showToast('Added to Fervorite', 'success');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <Header isUserFullyOnboarded={true} />
      {/* <MarqueeSider /> */}
      
      {/* Hero Section with Search */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-500 via-rose-500 to-pink-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 font-Onest">
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Life Partner
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-100 mb-8 max-w-3xl mx-auto font-Onest">
              Discover meaningful connections with thousands of verified profiles. 
              Your journey to happiness starts here.
            </p>
            
            {/* Enhanced Search Section */}
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Search Input */}
                  <div className="relative flex-1 w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="search"
                      name="fullName"
                      id="search-profiles"
                      className="block w-full pl-12 pr-4 py-4 text-lg font-Onest text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 placeholder-gray-400"
                      placeholder="Search by name, profession, or location..."
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={e => {
                        handleBlur(e);
                        if (values?.fullName === '') {
                          setFullName(null);
                        }
                      }}
                    />
                  </div>
                  
                  {/* Filter Component */}
                  <div className="flex gap-3">
                    <Filter
                      onSelect={(selectedAge, selectedIncomeRange) => {
                        setSelectedAge(selectedAge);
                        setSelectedIncomeRange(selectedIncomeRange);
                      }}
                      onCancel={() => {
                        setSelectedAge(null);
                        setSelectedIncomeRange(null);
                      }}
                    />
                    
                    {/* Search Button */}
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-4 focus:ring-red-500/20 transition-all duration-200 transform hover:scale-105 shadow-lg font-Onest">
                      <svg className="w-5 h-5 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search
                    </button>
                  </div>
                </div>
                
                {/* Active Filters Display */}
                {(selectedAge || selectedIncomeRange || fullName) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 font-medium font-Onest">Active filters:</span>
                    {fullName && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800 font-Onest">
                        Name: {fullName}
                        <button
                          type="button"
                          onClick={() => setFullName(null)}
                          className="ml-2 text-red-600 hover:text-red-800">
                          ×
                        </button>
                      </span>
                    )}
                    {selectedAge && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 font-Onest">
                        Age: {selectedAge}
                        <button
                          type="button"
                          onClick={() => setSelectedAge(null)}
                          className="ml-2 text-blue-600 hover:text-blue-800">
                          ×
                        </button>
                      </span>
                    )}
                    {selectedIncomeRange && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 font-Onest">
                        Income: {selectedIncomeRange}
                        <button
                          type="button"
                          onClick={() => setSelectedIncomeRange(null)}
                          className="ml-2 text-green-600 hover:text-green-800">
                          ×
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 -mt-8">
        {isLoading || isProfileListLoading || isFetching ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <Spinner />
          </div>
        ) : profileData?.data?.count === 0 ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4">
              <NotFound
                image={require('../assets/Not Found.png')}
                label="No profiles found"
              />
              <p className="text-gray-600 text-center mt-4 font-Onest">
                Try adjusting your search criteria or filters to find more matches.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Results Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 font-Onest">
                      Discover Profiles
                    </h2>
                    <p className="text-gray-600 mt-1 font-Onest">
                      {profileData?.data?.count ? `${profileData.data.count} profiles found` : 'Browse through our verified profiles'}
                    </p>
                  </div>
                  
                  {/* Sort/View Options */}
                  {/* <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-Onest">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                      </svg>
                      Sort by Relevance
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Profiles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {profileData?.data?.userData?.map((item: any, index: number) => {
                  const fullName = `${item?.userDetails?.personalDetails?.firstName} ${item?.userDetails?.personalDetails?.middleName} ${item?.userDetails?.personalDetails?.lastName}`;
                  return (
                    <div
                      key={item?.id || index}
                      className="group transform transition-all duration-300 hover:scale-105">
                      <ProfileCard
                        dob={item?.userDetails?.personalDetails?.dateOfBirth}
                        city={item?.userDetails?.addressDetails?.city}
                        occupation={item?.userDetails?.basicDetails?.occupation}
                        caste={item?.userDetails?.personalDetails?.caste}
                        photo={
                          item?.photoDetails?.profilePhoto ??
                          'https://bmd.gov.bd/file/img/nwp/notfound.png'
                        }
                        name={fullName}
                        onClick={() => handleNavigation(item)}
                        handleAddToFevorite={() => setData(item)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Load More Section */}
            {profileData?.data?.count % 10 === 0 && (
              <div className="text-center mb-12">
                <button
                  type="button"
                  onClick={() => {
                    setPage(prev => prev + 1);
                  }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-4 focus:ring-red-500/20 transition-all duration-200 transform hover:scale-105 shadow-lg font-Onest">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Load More Profiles
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Statistics Section */}
      {!isLoading && !isProfileListLoading && !isFetching && (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-Onest">
                Trusted by Thousands
              </h3>
              <p className="text-gray-300 text-lg font-Onest">
                Join our growing community of successful matches
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-red-400 mb-2 font-Onest">10K+</div>
                <div className="text-gray-300 font-Onest">Active Profiles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-rose-400 mb-2 font-Onest">5K+</div>
                <div className="text-gray-300 font-Onest">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-pink-400 mb-2 font-Onest">99%</div>
                <div className="text-gray-300 font-Onest">Verified Profiles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2 font-Onest">24/7</div>
                <div className="text-gray-300 font-Onest">Support</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isLoading && !isProfileListLoading && !isFetching && <Footer />}
    </div>
  );
}
