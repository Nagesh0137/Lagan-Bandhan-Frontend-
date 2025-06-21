import React from 'react';
import Header from '../components/Header';
import Footer from '../components/common/Footer';
import { HiExclamationCircle, HiInformationCircle, HiCreditCard, HiSupport, HiClock } from 'react-icons/hi';

const RefundAndReturnPolicy = () => {
  return (
    <>
      <Header isUserFullyOnboarded={false} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900 dark:to-red-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-orange-100 dark:bg-orange-800 rounded-full">
              <HiCreditCard className="w-12 h-12 text-orange-600 dark:text-orange-300" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-Onest">
            Refund and Return Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Onest">
            Understanding our refund policy helps ensure transparency in all your transactions with Jeevan Sobati. 
            Please read this policy carefully before making any payments.
          </p>
        </div>
      </div>

      {/* Policy Alert */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-200 dark:border-orange-700 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
            <div className="flex items-center justify-center">
              <HiExclamationCircle className="w-8 h-8 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white font-Onest">
                Important: No Refunds Policy
              </h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center font-Onest">
              All payments made to <strong>Jeevan Sobati</strong> for premium membership plans or any other services are 
              <strong className="text-red-600 dark:text-red-400"> final and non-refundable</strong>. We do not offer refunds, exchanges, 
              or returns for any payments or services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">

          {/* Introduction */}
          <section>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-Onest mb-6">
              At <strong>Jeevan Sobati</strong>, we strive to provide the best possible matrimonial services to help you find your life partner. Please read this policy carefully as it outlines the terms regarding refunds and returns.
            </p>
          </section>

          {/* Why We Have This Policy */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <HiInformationCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                Why We Have This Policy
              </h2>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <p className="text-blue-800 dark:text-blue-200 leading-relaxed font-Onest">
                As a digital platform offering matrimonial services, our services are considered intangible and irrevocable once accessed. 
                The payment covers access to premium features and matchmaking services, which begin immediately upon payment. Therefore, 
                it is not possible to issue refunds or returns after the service has been used.
              </p>
            </div>
          </section>

          {/* What This Means for You */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-3">
                <HiExclamationCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                What This Means for You
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2 font-Onest">
                  ❌ No Refunds
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm font-Onest">
                  No refunds even in cases of dissatisfaction or failure to find a match
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2 font-Onest">
                  ❌ No Exchanges
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm font-Onest">
                  Cannot exchange one membership plan for another once purchased
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2 font-Onest">
                  ❌ No Returns
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm font-Onest">
                  Digital services cannot be returned once accessed
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2 font-Onest">
                  ❌ Final Sale
                </h4>
                <p className="text-red-800 dark:text-red-200 text-sm font-Onest">
                  All payments are considered final upon successful transaction
                </p>
              </div>
            </div>
          </section>

          {/* Subscription Cancellations */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <HiClock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                Subscription Cancellations
              </h2>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-3 font-Onest">
                    ✅ What You Can Do
                  </h4>
                  <ul className="text-purple-800 dark:text-purple-200 space-y-2 font-Onest">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Cancel your subscription to prevent future charges
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Continue using premium features until the current period ends
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Access your account data during the active period
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-3 font-Onest">
                    ❌ What You Cannot Expect
                  </h4>
                  <ul className="text-purple-800 dark:text-purple-200 space-y-2 font-Onest">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Refund for the current billing period
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Partial refunds for unused time
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Immediate termination of services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Exceptional Circumstances */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <HiSupport className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                Exceptional Circumstances
              </h2>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <p className="text-green-800 dark:text-green-200 mb-4 font-Onest">
                While our general policy is no refunds, we may consider exceptions in very rare circumstances:
              </p>
              <ul className="text-green-800 dark:text-green-200 space-y-2 font-Onest">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Technical issues preventing access to services for extended periods
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Billing errors or duplicate charges
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fraudulent activities on your account
                </li>
              </ul>
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-800/30 rounded-lg">
                <p className="text-green-900 dark:text-green-200 font-semibold font-Onest">
                  📧 If you believe you qualify for an exception, please contact our support team immediately with detailed information about your situation.
                </p>
              </div>
            </div>
          </section>

          {/* Before You Purchase */}
          <section>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-4 font-Onest">
                💡 Before You Purchase - Please Consider
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-yellow-800 dark:text-yellow-200 space-y-2 font-Onest">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Try our free features first
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Read all terms and conditions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Understand the features included
                  </li>
                </ul>
                <ul className="text-yellow-800 dark:text-yellow-200 space-y-2 font-Onest">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Choose the right plan duration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Contact support for clarifications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Remember: All sales are final
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-Onest">
              Need Help or Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-Onest">
              If you have any questions or concerns regarding this policy, feel free to contact our support team:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:billing@jeevansobati.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 font-Onest"
              >
                📧 billing@jeevansobati.com
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 font-Onest"
              >
                💬 Contact Support
              </a>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-600">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundAndReturnPolicy;
