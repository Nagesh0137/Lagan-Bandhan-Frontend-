import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import { useUpdateUserMutation } from '../../../redux/services/admin/api';
import { showToast } from '../../../utils/ErrorToast';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  UserCircleIcon,
  DocumentTextIcon,
  ArrowLeftIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
interface propState {
  userData: any;
}

const UserDetailsScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  let { userData } = (location?.state as propState) ?? { userData: null };

  const userInfo = [
    // Personal Details
    {
      Name: 'Full Name',
      data: userData?.userDetails?.personalDetails?.fullName ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Date Of Birth',
      data: userData?.userDetails?.personalDetails?.dateOfBirth ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Time Of Birth',
      data: userData?.userDetails?.personalDetails?.timeOfBirth ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Birth Place',
      data: userData?.userDetails?.personalDetails?.bornPlace ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Marriage Status',
      data: userData?.userDetails?.personalDetails?.marriageStatus ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Gender',
      data: userData?.userDetails?.personalDetails?.gender ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Blood Group',
      data: userData?.userDetails?.personalDetails?.bloodGroup ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Religion',
      data: userData?.userDetails?.personalDetails?.religion ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Caste',
      data: userData?.userDetails?.personalDetails?.caste ?? '',
      category: 'Personal Information'
    },
    {
      Name: 'Sub Caste',
      data: userData?.userDetails?.personalDetails?.subCaste ?? '',
      category: 'Personal Information'
    },
    // Basic Details
    {
      Name: 'Education',
      data: userData?.userDetails?.basicDetails?.education ?? '',
      category: 'Professional Information'
    },
    {
      Name: 'Occupation',
      data: userData?.userDetails?.basicDetails?.occupation ?? '',
      category: 'Professional Information'
    },
    {
      Name: 'Income Per Year',
      data: userData?.userDetails?.basicDetails?.income ?? '',
      category: 'Professional Information'
    },
    {
      Name: 'Height (in feet)',
      data: userData?.userDetails?.basicDetails?.height ?? '',
      category: 'Physical Attributes'
    },
    {
      Name: 'Weight (in kg)',
      data: userData?.userDetails?.basicDetails?.weight ?? '',
      category: 'Physical Attributes'
    },
    {
      Name: 'Skin Color',
      data: userData?.userDetails?.basicDetails?.skinColor ?? '',
      category: 'Physical Attributes'
    },
    // Family Details
    {
      Name: 'Mother Full Name',
      data: userData?.userDetails?.familyDetails?.motherName ?? '',
      category: 'Family Information'
    },
    {
      Name: 'Mother Mobile Number',
      data: userData?.userDetails?.familyDetails?.motherMobileNumber ?? '',
      category: 'Family Information'
    },
    {
      Name: 'Father Full Name',
      data: userData?.userDetails?.familyDetails?.fatherName ?? '',
      category: 'Family Information'
    },
    {
      Name: 'Father Mobile Number',
      data: userData?.userDetails?.familyDetails?.fatherMobileNumber ?? '',
      category: 'Family Information'
    },
    {
      Name: 'No Of Brothers',
      data: userData?.userDetails?.familyDetails?.numOfBrothers ?? '',
      category: 'Family Information'
    },
    {
      Name: 'No Of Sisters',
      data: userData?.userDetails?.familyDetails?.numOfSisters ?? '',
      category: 'Family Information'
    },
    // Address Details
    {
      Name: 'Address',
      data: userData?.userDetails?.addressDetails?.address ?? '',
      category: 'Address Information'
    },
    {
      Name: 'Temp Address',
      data: userData?.userDetails?.addressDetails?.tempAddress ?? '',
      category: 'Address Information'
    },
    {
      Name: 'City',
      data: userData?.userDetails?.addressDetails?.city ?? '',
      category: 'Address Information'
    },
    {
      Name: 'PinCode',
      data: userData?.userDetails?.addressDetails?.pincode ?? '',
      category: 'Address Information'
    },
    {
      Name: 'Taluka',
      data: userData?.userDetails?.addressDetails?.taluka ?? '',
      category: 'Address Information'
    },
    {
      Name: 'District',
      data: userData?.userDetails?.addressDetails?.district ?? '',
      category: 'Address Information'
    },
    {
      Name: 'State',
      data: userData?.userDetails?.addressDetails?.state ?? '',
      category: 'Address Information'
    },
  ];

  // Group user info by category
  const groupedUserInfo = userInfo.reduce((acc: any, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const handleSuccess = () => {
    showToast('User Updated Successfully', 'success');
    navigate(-1);
  };

  const handleButton = (status: string) => {
    updateUser({
      mobileNumber: userData?.mobileNumber,
      status,
    })
      .unwrap()
      .then(handleSuccess)
      .catch(err => showToast('Something went wrong', 'error'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <Header />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-Onest">
                    User Profile Review
                  </h1>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-Onest mt-1">
                    Review and approve user registration details
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Profile Photos Section */}
            <div className="xl:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-Onest flex items-center">
                    <UserCircleIcon className="w-6 h-6 mr-2 text-blue-600" />
                    Profile Photos
                  </h2>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Profile Photo */}
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 font-Onest">
                      Profile Picture
                    </h3>
                    <div className="relative inline-block">
                      {userData?.photoDetails?.profilePhoto ? (
                        <img
                          src={userData?.photoDetails?.profilePhoto}
                          className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-lg border-4 border-white dark:border-gray-700"
                          alt="Profile"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className="hidden w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg">
                        <UserCircleIcon className="w-32 h-32 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Aadhar Card */}
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 font-Onest">
                      Identity Document
                    </h3>
                    <div className="relative inline-block">
                      {userData?.photoDetails?.adharCard?.includes('.pdf') ? (
                        <a 
                          href={userData?.photoDetails?.adharCard} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <div className="w-64 h-32 sm:w-80 sm:h-40 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 rounded-2xl shadow-lg border-2 border-red-200 dark:border-red-700 flex items-center justify-center group-hover:shadow-xl transition-all duration-200">
                            <div className="text-center">
                              <DocumentTextIcon className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-2" />
                              <p className="text-sm font-medium text-red-700 dark:text-red-300 font-Onest">PDF Document</p>
                              <p className="text-xs text-red-500 dark:text-red-400 font-Onest">Click to view</p>
                            </div>
                          </div>
                        </a>
                      ) : userData?.photoDetails?.adharCard ? (
                        <div className="group cursor-pointer">
                          <img
                            src={userData?.photoDetails?.adharCard}
                            className="w-64 h-32 sm:w-80 sm:h-40 object-cover rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-600 group-hover:shadow-xl transition-all duration-200"
                            alt="Identity Document"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-2xl flex items-center justify-center transition-all duration-200">
                            <EyeIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-64 h-32 sm:w-80 sm:h-40 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                          <p className="text-gray-500 dark:text-gray-400 font-Onest">No document uploaded</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Details Section */}
            <div className="xl:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-Onest flex items-center">
                    <DocumentTextIcon className="w-6 h-6 mr-2 text-purple-600" />
                    Personal Information
                  </h2>
                </div>

                <div className="p-6">
                  {/* User Details by Category */}
                  {Object.entries(groupedUserInfo).map(([category, items]: [string, any]) => (
                    <div key={category} className="mb-8 last:mb-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-Onest mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                        {category}
                      </h3>
                      
                      {/* Desktop View */}
                      <div className="hidden md:block">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {items.map((item: any, index: number) => (
                            <div 
                              key={index}
                              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                                    {item.Name}
                                  </p>
                                  <p className="text-base font-semibold text-gray-900 dark:text-white font-Onest mt-1">
                                    {item.data || 'N/A'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mobile View */}
                      <div className="md:hidden space-y-3">
                        {items.map((item: any, index: number) => (
                          <div 
                            key={index}
                            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4"
                          >
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                              {item.Name}
                            </p>
                            <p className="text-base font-semibold text-gray-900 dark:text-white font-Onest mt-1">
                              {item.data || 'N/A'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  type="button"
                  onClick={() => handleButton('ACTIVE')}
                  disabled={isLoading}
                  className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-2xl transition-all duration-200 font-Onest shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                >
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  {isLoading ? 'Processing...' : 'Approve User'}
                </button>
                
                <button
                  type="button"
                  onClick={() => handleButton('REJECT')}
                  disabled={isLoading}
                  className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-700 border-2 border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 font-semibold rounded-2xl hover:bg-red-50 dark:hover:bg-red-900 hover:border-red-400 dark:hover:border-red-500 transition-all duration-200 font-Onest shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                >
                  <XCircleIcon className="w-5 h-5 mr-2" />
                  {isLoading ? 'Processing...' : 'Reject User'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDetailsScreen;
