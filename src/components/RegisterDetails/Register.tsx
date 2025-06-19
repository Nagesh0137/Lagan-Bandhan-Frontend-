import React, { useState } from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../../utils/RegisterYup';
import {
  useDoLoginMutation,
  useDoRegisterMutation,
  useCheckEmailMutation,
} from '../../redux/services/register/api';
import Login from './Login';
import { useTranslation } from 'react-i18next';
import { showToast } from '../../utils/ErrorToast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { skipPayment } from '../../config/constant';
import { useNavigate } from 'react-router-dom';
import useRazorpay from '../../hooks/useRazorpay';

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
  const [doRegister, { isLoading: isRegisterLoading }] = useDoRegisterMutation();
  const [doLogin] = useDoLoginMutation();
  const [checkEmail] = useCheckEmailMutation();

  const { handleCreateOrder, loading: isPaymentLoading } = useRazorpay();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleRegisterSubmit = async (values: typeof initialValues) => {
    setIsLoading(true);
    
    try {
      // Check if user already exists by email
      const emailCheck = await checkEmail({
        email: values.Email
      }).unwrap();

      if (emailCheck.exists) {
        // User already exists
        showToast('Email already registered. Please try logging in.', 'error');
        setSelectedTab('Login');
        setIsLoading(false);
        return;
      }

      // If user doesn't exist, proceed with registration
      // The registration logic is handled by the formik onSubmit
      
    } catch (error) {
      console.log('Email check failed, proceeding with registration');
      // If email check fails, proceed with registration anyway
    }
    
    setIsLoading(false);
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: values => {
        setIsLoading(true);
        console.log('Registering with values:', values);
        doRegister({
          email: values?.Email,
          mobileNumber: values?.Mobile,
          password: values?.Password,
        })
          .unwrap()
          .then(res => {
            console.log('Register Response:', res?.data);
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
                      setIsLoading(false);
                      navigate('/home', { replace: true });
                    } else {
                      setIsLoading(false);
                      showToast('Incorrect Mobile Number or Password', 'error');
                    }
                  })
                  .catch(() => {
                    setIsLoading(false);
                    showToast('Something went wrong', 'error');
                  });              } else {
                // Use Razorpay for payment
                setIsLoading(false);
                handleCreateOrder(25100, 'INR', res?.data?.id); // 100 rupees
                showToast('Registration successful! Please complete payment and then login.', 'success');
                setSelectedTab('Login');
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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[600px]">
            {/* Left Side - Hero Section */}
            <div className="relative bg-gradient-to-br from-red-500 via-rose-500 to-pink-600 p-8 flex flex-col justify-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-white">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-3 font-Onest">
                    Welcome to <br />
                    <span className="text-red-100">Lagna Bandhan</span>
                  </h1>
                  <p className="text-red-100 text-lg leading-relaxed">
                    Find your perfect life partner from thousands of verified profiles
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-red-100">Verified Profiles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-red-100">Secure & Private</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-red-100">Success Stories</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-red-100 italic">
                    "Found my perfect match through Lagna Bandhan. Highly recommended!"
                  </p>
                  <p className="text-xs text-red-200 mt-2">- Happy Couple</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="p-8 flex flex-col justify-center">
              {/* Tab Navigation */}
              <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                <button
                  type="button"
                  onClick={() => setSelectedTab('Login')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedTab === 'Login'
                      ? 'bg-white text-red-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}>
                  {t('registerDetails.login.title')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTab('Signup')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedTab === 'Signup'
                      ? 'bg-white text-red-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}>
                  {t('registerDetails.login.signUp')}
                </button>
              </div>

              {/* Content */}
              {selectedTab === 'Login' ? (
                <Login onSignupClick={() => setSelectedTab('Signup')} />
              ) : (
                <div>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Create Account
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Join thousands of happy couples
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                          placeholder="Enter mobile number"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-sm"
                          value={values.Mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.Mobile && touched.Mobile && (
                        <p className="text-red-500 text-xs mt-1">{errors.Mobile}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                          placeholder="Enter email address"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-sm"
                          value={values.Email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.Email && touched.Email && (
                        <p className="text-red-500 text-xs mt-1">{errors.Email}</p>
                      )}
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                          placeholder="Create password"
                          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-sm"
                          value={values.Password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}>
                          <FontAwesomeIcon
                            className="h-5 w-5 text-gray-400 hover:text-gray-600"
                            icon={showPassword ? faEyeSlash : faEye}
                          />
                        </button>
                      </div>
                      {errors.Password && touched.Password && (
                        <p className="text-red-500 text-xs mt-1">{errors.Password}</p>
                      )}
                    </div>

                    {/* Pricing Notice */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-red-800 text-sm font-medium">
                            Registration Fee: ₹251
                          </p>
                          <p className="text-red-600 text-xs mt-1">
                            One-time payment for premium matrimony services
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading || isPaymentLoading || isRegisterLoading}
                      className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                      {isLoading || isPaymentLoading || isRegisterLoading ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Creating Account...
                        </div>
                      ) : (
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                          Create Account & Pay
                        </span>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                      By registering, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;