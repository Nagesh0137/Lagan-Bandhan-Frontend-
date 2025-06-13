import React, { useState } from 'react';

import { useFormik } from 'formik';
import { registerSchema } from '../../utils/RegisterYup';
import {
  useDoLoginMutation,
  useDoRegisterMutation,
  useMakePaymentMutation,
} from '../../redux/services/register/api';
import Login from './Login';
import { useTranslation } from 'react-i18next';
import { showToast } from '../../utils/ErrorToast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { skipPayment } from '../../config/constant';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  Mobile: '',
  Email: '',
  Password: '',
};

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>('Login');

  const [doRegister, { isLoading: isRegisterLoading }] =
    useDoRegisterMutation();
  const [doLogin] = useDoLoginMutation();

  const [makePayment, { isLoading: isPaymentLoading }] =
    useMakePaymentMutation();
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: values => {
        doRegister({
          email: values?.Email,
          mobileNumber: values?.Mobile,
          password: values?.Password,
        })
          .unwrap()
          .then(res => {
            if (res?.data && res?.data?.token && res?.data?.id) {
              //make payment after registration
              if (skipPayment) {
                doLogin({
                  mobileNumber: values?.Mobile,
                  password: values?.Password,
                })
                  .unwrap()
                  .then(res => {
                    if (res?.success) {
                      localStorage.setItem('token', res?.data?.token ?? '');
                      navigate('/home', { replace: true });
                    } else {
                      showToast('Incorrect Mobile Number or Password', 'error');
                    }
                  })
                  .catch(() => {
                    showToast('Something went wrong', 'error');
                  });
              } else {
                let data = {
                  number: values?.Mobile,
                  MID: 'MID' + Date.now(),
                  transactionId: 'T' + Date.now(),
                  userId: res?.data?.id,
                };

                makePayment(data)
                  .unwrap()
                  .then(res => {
                    if (res.success === true) {
                      window.location.href =
                        res.data.instrumentResponse.redirectInfo.url;
                    }
                  })
                  .catch(error => showToast('Something went wrong', 'error'));
              }
            } else {
              setIsLoading(false);
              showToast(
                'Mobile number already exist please try with login',
                'error',
              );
            }
          })
          .catch(() => {
            setIsLoading(false);
            showToast('Something went wrong', 'error');
          });
      },
    });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://whitethread.s3.amazonaws.com/matrimony/profile/78efs.webp"
                  className="w-full h-[650px] object-cover rounded-2xl shadow-2xl"
                  alt="Happy Couple"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold font-Onest mb-2">Find Your Perfect Match</h3>
                  <p className="text-white/90 font-Onest">Join thousands of happy couples who found love through Lagna Bandhan</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Tab Navigation */}
                <div className="bg-gradient-to-r from-red-500 to-rose-600 px-8 py-4">
                  <div className="flex justify-center space-x-8">
                    <button
                      type="button"
                      onClick={() => setSelectedTab('Login')}
                      className={`py-2 px-6 rounded-lg font-semibold font-Onest transition-all duration-200 ${
                        selectedTab === 'Login'
                          ? 'bg-white text-red-600 shadow-lg'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}>
                      {t('registerDetails.login.title')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedTab('Signup')}
                      className={`py-2 px-6 rounded-lg font-semibold font-Onest transition-all duration-200 ${
                        selectedTab === 'Signup'
                          ? 'bg-white text-red-600 shadow-lg'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}>
                      {t('registerDetails.login.signUp')}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {selectedTab === 'Login' ? (
                    <Login onSignupClick={() => setSelectedTab('Signup')} />
                  ) : (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 font-Onest">
                          {t('registerDetails.register.title')}
                        </h2>
                        <p className="text-gray-500 text-sm mt-1 font-Onest">
                          Create your account to start your journey
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Mobile Number Input */}
                        <div className="space-y-2">
                          <label
                            htmlFor="Mobile"
                            className="block text-sm font-semibold text-gray-700 font-Onest">
                            {t('registerDetails.register.mobile')}
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              maxLength={10}
                              name="Mobile"
                              id="Mobile"
                              placeholder="Enter mobile number"
                              autoComplete="off"
                              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 font-Onest text-gray-900 placeholder-gray-400"
                              value={values.Mobile}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          {errors.Mobile && touched.Mobile ? (
                            <p className="text-red-500 font-Onest text-xs mt-1 flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.Mobile}
                            </p>
                          ) : null}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                          <label
                            htmlFor="Email"
                            className="block text-sm font-semibold text-gray-700 font-Onest">
                            {t('registerDetails.register.email')}
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                              </svg>
                            </div>
                            <input
                              type="email"
                              name="Email"
                              id="Email"
                              placeholder="Enter email address"
                              autoComplete="off"
                              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 font-Onest text-gray-900 placeholder-gray-400"
                              value={values.Email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          {errors.Email && touched.Email ? (
                            <p className="text-red-500 font-Onest text-xs mt-1 flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.Email}
                            </p>
                          ) : null}
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                          <label
                            htmlFor="Password"
                            className="block text-sm font-semibold text-gray-700 font-Onest">
                            {t('registerDetails.register.password')}
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <input
                              type={showPassword ? 'text' : 'password'}
                              name="Password"
                              id="Password"
                              placeholder="Create password"
                              autoComplete="off"
                              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 font-Onest text-gray-900 placeholder-gray-400"
                              value={values.Password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowPassword(prev => !prev)}>
                              <FontAwesomeIcon
                                className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                icon={showPassword ? faEyeSlash : faEye}
                              />
                            </button>
                          </div>
                          {errors.Password && touched.Password ? (
                            <p className="text-red-500 font-Onest text-xs mt-1 flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.Password}
                            </p>
                          ) : null}
                        </div>

                        {/* Subscription Fee Notice */}
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span className="text-red-700 text-sm font-medium font-Onest">
                              {t('registerDetails.register.charges')}
                            </span>
                          </div>
                        </div>

                        {/* Register Button */}
                        <button
                          type="submit"
                          disabled={isLoading || isPaymentLoading || isRegisterLoading}
                          className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 px-4 rounded-lg font-semibold font-Onest transition-all duration-200 hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]">
                          {isLoading || isPaymentLoading || isRegisterLoading ? (
                            <div className="flex items-center justify-center space-x-2">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              <span>Creating Account...</span>
                            </div>
                          ) : (
                            <span className="flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                              </svg>
                              Register and Pay
                            </span>
                          )}
                        </button>
                      </form>
                    </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
