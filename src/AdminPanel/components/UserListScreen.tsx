import { Dropdown } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteUserMutation,
  useGetProfilesQuery,
} from '../../redux/services/admin/api';
import { showToast } from '../../utils/ErrorToast';
import { useFormik } from 'formik';
import { SearchSchema } from '../../utils/SearchSchema';
import Header from './common/Header';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  EllipsisVerticalIcon,
  UserIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const initialValues = {
  fullName: '',
};

const UserListScreen = ({ status }: { status: 'ACTIVE' | 'PENDING' }) => {
  const [page, setPage] = useState(0);
  const [fullName, setFullName] = useState<string | null>(null);
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetProfilesQuery({
    page,
    status,
    fullName: fullName,
  });
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SearchSchema,
    onSubmit: values => {
      setFullName(values?.fullName);
    },
  });

  const handleDeleteUser = (userId: string) => {
    deleteUser({ userId })
      .unwrap()
      .then(res => {
        if (res?.success) {
          showToast('User Deleted Successfully', 'success');
        } else {
          showToast('Something went wrong', 'error');
        }
      })
      .catch(err => {
        showToast('Something went wrong', 'error');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <Header />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 sm:mb-12">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-Onest mb-4">
                {status === 'ACTIVE' ? 'Active Users' : 'Pending Users'}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-Onest max-w-2xl mx-auto lg:mx-0">
                Manage and monitor your platform's user base with advanced search and filtering options
              </p>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
            
            {/* Search and Filter Section */}
            <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                
                {/* Search Form */}
                <div className="flex-1 max-w-2xl">
                  <form onSubmit={handleSubmit} className="relative">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        className="block w-full pl-12 pr-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 font-Onest text-sm sm:text-base shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="Search users by name..."
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={e => {
                          handleBlur(e);
                          if (values?.fullName === '') {
                            setFullName(null);
                          }
                        }}
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl px-6 py-2 transition-all duration-200 font-Onest text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>

                {/* Filter Button */}
                <div className="flex justify-center lg:justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-Onest shadow-sm hover:shadow-md"
                  >
                    <FunnelIcon className="w-5 h-5 mr-2" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="overflow-hidden">
              {isFetching || isLoading ? (
                <div className="flex items-center justify-center py-24">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-200 dark:border-gray-600 rounded-full animate-spin border-t-blue-600 dark:border-t-blue-400"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Desktop Table View */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                            SrNO
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                            User
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                            Date of Birth
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                            Status & Gender
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                            Education
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                            Occupation
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                            Income & Height
                          </th>
                          <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {data?.data?.userData?.map((item: any, index: number) => (
                          <tr 
                            key={index} 
                            className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-Onest">
                              {index + 1 + page * 10}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div 
                                className="flex items-center space-x-4 cursor-pointer group-hover:scale-[1.02] transition-transform duration-200"
                                onClick={() =>
                                  navigate('/admin/userInfo', {
                                    state: { userData: item },
                                  })
                                }
                              >
                                <div className="relative">
                                  <img
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600 shadow-sm"
                                    src={item?.photoDetails?.profilePhoto ?? ''}
                                    alt={item?.userDetails?.personalDetails?.fullName ?? 'User'}
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                      target.nextElementSibling?.classList.remove('hidden');
                                    }}
                                  />
                                  <div className="hidden w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                                    <UserIcon className="w-6 h-6 text-white" />
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900 dark:text-white font-Onest">
                                    {item?.userDetails?.personalDetails?.fullName ?? 'N/A'}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-Onest">
                              {item?.userDetails?.personalDetails?.dateOfBirth ?? 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="space-y-1">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 font-Onest">
                                  {item?.userDetails?.personalDetails?.marriageStatus ?? 'N/A'}
                                </span>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                                  {item?.userDetails?.personalDetails?.gender ?? 'N/A'}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-Onest">
                              {item?.userDetails?.basicDetails?.education ?? 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-Onest">
                              {item?.userDetails?.basicDetails?.occupation ?? 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white font-Onest">
                                  ₹{item?.userDetails?.basicDetails?.income ?? 'N/A'}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                                  {item?.userDetails?.basicDetails?.height ?? 'N/A'}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                              <Dropdown
                                inline
                                label=""
                                dismissOnClick={false}
                                renderTrigger={() => (
                                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200">
                                    <EllipsisVerticalIcon className="w-5 h-5" />
                                  </button>
                                )}
                              >
                                <Dropdown.Item
                                  className="font-Onest flex items-center space-x-2"
                                  onClick={() =>
                                    navigate('/admin/userInfo', {
                                      state: { userData: item },
                                    })
                                  }
                                >
                                  <EyeIcon className="w-4 h-4" />
                                  <span>View Profile</span>
                                </Dropdown.Item>
                                <Dropdown.Item className="font-Onest flex items-center space-x-2">
                                  <PencilIcon className="w-4 h-4" />
                                  <span>Edit</span>
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="font-Onest flex items-center space-x-2 text-red-600 dark:text-red-400"
                                  onClick={() => handleDeleteUser(item._id)}
                                >
                                  <TrashIcon className="w-4 h-4" />
                                  <span>Delete</span>
                                </Dropdown.Item>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden space-y-4 p-4 sm:p-6">
                    {data?.data?.userData?.map((item: any, index: number) => (
                      <div
                      key={index}
                      className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200"
                      >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4 flex-1">
                        {/* Sr No */}
                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 mr-2">
                          #{index + 1 + page * 10}
                        </span>
                        <div 
                          className="flex items-center space-x-4 cursor-pointer flex-1"
                          onClick={() =>
                          navigate('/admin/userInfo', {
                            state: { userData: item },
                          })
                          }
                        >
                          <div className="relative">
                          <img
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-500 shadow-sm"
                            src={item?.photoDetails?.profilePhoto ?? ''}
                            alt={item?.userDetails?.personalDetails?.fullName ?? 'User'}
                            onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          <div className="hidden w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                            <UserIcon className="w-8 h-8 text-white" />
                          </div>
                          </div>
                          <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-Onest">
                            {item?.userDetails?.personalDetails?.fullName ?? 'N/A'}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                            {item?.userDetails?.personalDetails?.dateOfBirth ?? 'N/A'}
                          </p>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 font-Onest mt-1">
                            {item?.userDetails?.personalDetails?.marriageStatus ?? 'N/A'}
                          </span>
                          </div>
                        </div>
                        </div>
                        <Dropdown
                        inline
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200">
                          <EllipsisVerticalIcon className="w-5 h-5" />
                          </button>
                        )}
                        >
                        <Dropdown.Item
                          className="font-Onest flex items-center space-x-2"
                          onClick={() =>
                          navigate('/admin/userInfo', {
                            state: { userData: item },
                          })
                          }
                        >
                          <EyeIcon className="w-4 h-4" />
                          <span>View Profile</span>
                        </Dropdown.Item>
                        <Dropdown.Item className="font-Onest flex items-center space-x-2">
                          <PencilIcon className="w-4 h-4" />
                          <span>Edit</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="font-Onest flex items-center space-x-2 text-red-600 dark:text-red-400"
                          onClick={() => handleDeleteUser(item._id)}
                        >
                          <TrashIcon className="w-4 h-4" />
                          <span>Delete</span>
                        </Dropdown.Item>
                        </Dropdown>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                        <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                          Gender
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white font-Onest mt-1">
                          {item?.userDetails?.personalDetails?.gender ?? 'N/A'}
                        </p>
                        </div>
                        <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                          Education
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white font-Onest mt-1">
                          {item?.userDetails?.basicDetails?.education ?? 'N/A'}
                        </p>
                        </div>
                        <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                          Occupation
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white font-Onest mt-1">
                          {item?.userDetails?.basicDetails?.occupation ?? 'N/A'}
                        </p>
                        </div>
                        <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider font-Onest">
                          Income
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white font-Onest mt-1">
                          ₹{item?.userDetails?.basicDetails?.income ?? 'N/A'}
                        </p>
                        </div>
                      </div>
                      </div>
                    ))}
                    </div>
                </>
              )}
            </div>

            {/* Pagination */}
            {!isLoading && !isFetching && data?.data?.userData?.length > 0 && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center space-x-4">
                  {page > 0 && (
                    <button
                      type="button"
                      onClick={() => setPage(prev => prev - 1)}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-2xl transition-all duration-200 font-Onest shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <ArrowLeftIcon className="w-4 h-4 mr-2" />
                      Page {page}
                    </button>
                  )}
                  {data?.data?.userData?.length >= 10 && (
                    <button
                      type="button"
                      onClick={() => setPage(prev => prev + 1)}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-2xl transition-all duration-200 font-Onest shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Page {page + 2}
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserListScreen;
