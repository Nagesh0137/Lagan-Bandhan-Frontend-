import React from 'react';
import Header from '../components/Header';
import Footer from '../components/common/Footer';
import { HiDocumentText, HiShieldCheck, HiExclamationCircle, HiInformationCircle } from 'react-icons/hi';

const TermsConditionScreen = () => {
  return (
    <>
      <Header isUserFullyOnboarded={false} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-800 rounded-full">
              <HiDocumentText className="w-12 h-12 text-blue-600 dark:text-blue-300" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-Onest">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Onest">
            Please read these terms carefully before using our matrimony platform. 
            By using Jeevan Sobati, you agree to be bound by these terms and conditions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Notice */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <HiInformationCircle className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2 font-Onest">
                Important Notice
              </h3>
              <p className="text-blue-800 dark:text-blue-200 font-Onest">
                Welcome to <strong>Jeevan Sobati</strong>, a premier matrimony platform maintained by 
                <strong> A2Z IT HUB</strong>. By using our platform, you agree to comply with and be bound 
                by the following terms and conditions. If you do not agree to these terms, please do not use this platform.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-dark">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">
            {/* Section 1: Acceptance of Terms */}
            <section>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                  <HiShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-Onest">
                By accessing and using <strong>Jeevan Sobati</strong> (the "Platform"), you accept and agree to be bound by these Terms and Conditions (the "Agreement"). This Agreement is an electronic contract that establishes the legally binding terms you must accept to use the Platform and avail its services.
              </p>
            </section>

            {/* Section 2: Eligibility */}
            <section>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  <HiInformationCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                  2. Eligibility
                </h2>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3 font-Onest">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You must be at least 18 years of age or the legal age of marriage under the laws of India.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You must be unmarried, divorced, or legally separated and free to enter into a lawful marriage.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The use of this Platform is restricted to individuals seeking a life partner for marriage.
                </li>
              </ul>
            </section>

            {/* Section 3: Registration and Account Security */}
            <section>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                  <HiShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                  3. Registration and Account Security
                </h2>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3 font-Onest">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You are responsible for maintaining the confidentiality of your account details, including your username and password.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You agree to provide accurate, true, and up-to-date information during the registration process.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  You must not create an account for anyone other than yourself, and impersonation of any individual is strictly prohibited.
                </li>
              </ul>
            </section>

            {/* Section 4: User Conduct and Responsibilities */}
            <section>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-3">
                  <HiExclamationCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                  4. User Conduct and Responsibilities
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-Onest">
                As a user of the Platform, you agree to:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3 font-Onest">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Use the Platform for matrimonial purposes only.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Not engage in any unlawful activity, harassment, or abusive behavior toward other users.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Refrain from uploading any inappropriate or offensive content, including but not limited to images, messages, or comments.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Not solicit money or engage in financial transactions with other users.
                </li>
              </ul>
            </section>

            {/* Section 5: Termination of Service */}
            <section>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                  <HiExclamationCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                  5. Termination of Service
                </h2>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3 font-Onest">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Jeevan Sobati</strong> reserves the right to terminate or suspend your account without notice if you violate these Terms and Conditions or engage in inappropriate behavior.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Users found guilty of fraudulent practices, harassment, or any form of illegal activity will have their accounts permanently deactivated.
                </li>
              </ul>
            </section>

            {/* Section 6: Fees and Payment */}
            <section>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                  <HiInformationCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                  6. Fees and Payment
                </h2>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-3 font-Onest">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Some features of the Platform may require payment. You agree to pay any applicable fees associated with the services you choose to access.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fees paid for premium or enhanced services are non-refundable unless stated otherwise.
                </li>
              </ul>
            </section>

            {/* Additional sections continue in similar format... */}
            
            {/* Contact Information */}
            <section className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-Onest">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-Onest">
                For any questions regarding these Terms and Conditions, please contact us at{' '}
                <a href="mailto:support@jeevansobati.com" className="text-pink-600 dark:text-pink-400 hover:underline">
                  support@jeevansobati.com
                </a>
              </p>
            </section>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-Onest">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditionScreen;
