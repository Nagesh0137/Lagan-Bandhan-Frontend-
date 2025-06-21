import React from 'react';
import Header from '../components/Header';
import Footer from '../components/common/Footer';
import { HiShieldCheck, HiLockClosed, HiUserGroup, HiGlobe, HiEye, HiCog } from 'react-icons/hi';

const PrivacyPolicyScreen = () => {
  return (
    <>
      <Header isUserFullyOnboarded={false} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-100 dark:bg-green-800 rounded-full">
              <HiShieldCheck className="w-12 h-12 text-green-600 dark:text-green-300" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-Onest">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Onest">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information 
            to provide you with the best matrimony experience.
          </p>
        </div>
      </div>

      {/* Privacy Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <HiLockClosed className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-Onest">
                Secure Encryption
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-Onest">
              All your data is protected with industry-standard 256-bit SSL encryption
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <HiUserGroup className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-Onest">
                No Third-Party Sharing
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-Onest">
              We never sell or share your personal information with external parties
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <HiCog className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-Onest">
                Full Control
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-Onest">
              You have complete control over your data and privacy settings
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
              Welcome to <strong>Jeevan Sobati</strong>! We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
            </p>
          </section>

          {/* Section 1: Information We Collect */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <HiEye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                1. Information We Collect
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-Onest">
              We collect the following types of information from users:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 font-Onest">
                  Personal Information
                </h4>
                <p className="text-blue-800 dark:text-blue-200 text-sm font-Onest">
                  Your name, age, gender, marital status, email address, phone number, and other relevant details provided during registration.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 font-Onest">
                  Profile Information
                </h4>
                <p className="text-green-800 dark:text-green-200 text-sm font-Onest">
                  Information about your educational background, job details, family background, and preferences for a life partner.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2 font-Onest">
                  Usage Data
                </h4>
                <p className="text-purple-800 dark:text-purple-200 text-sm font-Onest">
                  Data about how you interact with the platform, including your browsing activities, searches, and preferences.
                </p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-pink-900 dark:text-pink-300 mb-2 font-Onest">
                  Communication Data
                </h4>
                <p className="text-pink-800 dark:text-pink-200 text-sm font-Onest">
                  Messages, photos, and other content you share through our platform with other users.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                <HiCog className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                2. How We Use Your Information
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-Onest">
              We use the information collected for the following purposes:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-3 font-Onest">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To help you connect with potential matches on the platform.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To provide personalized recommendations based on your preferences.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To improve and enhance the platform's features and services.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To communicate with you regarding platform updates, services, and promotions.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To ensure security, prevent fraud, and protect the integrity of our platform.
              </li>
            </ul>
          </section>

          {/* Section 3: Sharing Your Information */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                <HiUserGroup className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                3. Sharing Your Information
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-Onest">
              We respect your privacy and will not share, sell, or rent your personal information to third parties, except under the following circumstances:
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 font-Onest">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  With your consent, to facilitate potential matches on the platform.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To comply with legal obligations or respond to lawful requests by government authorities.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To enforce our Terms and Conditions, or protect our rights, privacy, and safety.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Data Security */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
                <HiLockClosed className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                4. Data Security
              </h2>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
              <p className="text-red-800 dark:text-red-200 leading-relaxed font-Onest">
                We use industry-standard measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Section 5: Your Rights */}
          <section>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3">
                <HiShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-Onest">
                5. Your Rights
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-Onest">
              As a user, you have the right to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                <ul className="text-indigo-800 dark:text-indigo-200 space-y-2 font-Onest">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access and update your personal information at any time through your account settings.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Request the deletion of your personal data, subject to certain exceptions.
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                <ul className="text-indigo-800 dark:text-indigo-200 space-y-2 font-Onest">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Withdraw consent for the processing of your data by deleting your account.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Control who can see your profile and personal information.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-Onest">
              Contact Us About Privacy
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-Onest">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at{' '}
              <a href="mailto:privacy@jeevansobati.com" className="text-green-600 dark:text-green-400 hover:underline">
                privacy@jeevansobati.com
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
      <Footer />
    </>
  );
};

export default PrivacyPolicyScreen;
