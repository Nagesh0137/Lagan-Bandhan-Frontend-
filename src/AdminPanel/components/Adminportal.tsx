import React from 'react';
import Information from './Information';
import { 
  UserCircleIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon 
} from '@heroicons/react/20/solid';

import Header from '../../../src/AdminPanel/components/common/Header';
import { useGetDashboardQuery } from '../../redux/services/admin/api';
import Spinner from '../../components/common/ChangeLanguage/Spinner';

const Adminportal = () => {
  const { data, isLoading } = useGetDashboardQuery({});

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="antialiased bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-screen">
      <Header />

      <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pt-24 sm:pt-28 max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-8 sm:mb-12 text-center lg:text-left">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-Onest">
              Dashboard Overview
            </h1>
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
          </div>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-Onest max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Monitor your platform's key metrics and performance in real-time
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {/* Total Users Card */}
          <div className="group transform hover:scale-[1.02] transition-all duration-300 ease-out">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <Information
                title="Total Users"
                User={data?.data?.totalUsers?.toLocaleString() || '0'}
                icon={
                  <UserGroupIcon
                    className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 drop-shadow-sm"
                  />
                }
              />
            </div>
          </div>
          
          {/* Today's New Users Card */}
          <div className="group transform hover:scale-[1.02] transition-all duration-300 ease-out">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <Information
                title="Today's New Users"
                User={data?.data?.totalUsersToday?.toLocaleString() || '0'}
                icon={
                  <UserCircleIcon
                    className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 drop-shadow-sm"
                  />
                }
              />
            </div>
          </div>
          
          {/* Total Income Card */}
          <div className="group transform hover:scale-[1.02] transition-all duration-300 ease-out">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <Information
                title="Total Income"
                User={`₹${data?.data?.totalIncome?.toLocaleString() || '0'}`}
                icon={
                  <CurrencyDollarIcon
                    className="h-10 w-10 sm:h-12 sm:w-12 text-amber-600 drop-shadow-sm"
                  />
                }
              />
            </div>
          </div>
          
          {/* Today's Income Card */}
          <div className="group transform hover:scale-[1.02] transition-all duration-300 ease-out">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <Information
                title="Today's Income"
                User={`₹${data?.data?.totalIncomeToday?.toLocaleString() || '0'}`}
                icon={
                  <ChartBarIcon
                    className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 drop-shadow-sm"
                  />
                }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Adminportal;
