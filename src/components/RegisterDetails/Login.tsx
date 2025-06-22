import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { loginSchema } from '../../utils/RegisterYup';
import { useDoLoginMutation } from '../../redux/services/register/api';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import { showToast } from '../../utils/ErrorToast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getServerStatus } from '../../utils/connectionUtils';
import { baseUrl } from '../../config/api';

const initialValues = {
  Mobile: '',
  Password: '',
};

type LoginProps = {
  onSignupClick: () => void;
};
const Login = ({ onSignupClick }: LoginProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isServerOnline, setIsServerOnline] = useState<boolean>(true);
  const [serverCheckLoading, setServerCheckLoading] = useState<boolean>(false);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [doLogin, { isLoading }] = useDoLoginMutation();

  // Check server status on component mount
  useEffect(() => {
    checkServerAvailability();
  }, []);

  const checkServerAvailability = async () => {
    setServerCheckLoading(true);
    try {
      const status = await getServerStatus(baseUrl);
      setIsServerOnline(status.isOnline);
      if (!status.isOnline) {
        showToast(status.message, 'error');
      }
    } catch (error) {
      setIsServerOnline(false);
      showToast('Unable to check server status', 'error');
    } finally {
      setServerCheckLoading(false);
    }
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async values => {
        // Check server connectivity before attempting login
        if (!isServerOnline) {
          showToast('Server is not available. Please check if the backend server is running.', 'error');
          return;
        }

        // Validate mobile number format before sending
        const mobileNumber = values.Mobile.trim();
        
        // Additional validation
        if (!mobileNumber || mobileNumber.length !== 10 || !/^\d{10}$/.test(mobileNumber)) {
          showToast('Mobile number must be exactly 10 digits', 'error');
          return;
        }

        if (!values.Password) {
          showToast('Password is required', 'error');
          return;
        }

        // Check if user exists by mobile number
        try {
          const userRes = await fetch(baseUrl + '/user/getByMobile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobileNumber }),
          });
          const userData = await userRes.json();
          
          // Check if user was found (success: 1 means user exists)
          if (userData?.success !== 1) {
            showToast('User not found. Please register first.', 'error');
            return;
          }
          
          // User exists, check payment status
          const user = userData.data;
          const paymentInfo = user.paymentInfo;
          const isPaymentDone = paymentInfo && (paymentInfo.status === 'succeeded' || paymentInfo.code === 'PAYMENT_SUCCESS' || paymentInfo.paymentDetails?.status === 'captured');
          
          if (!isPaymentDone) {
            // Redirect to payment page with user details
            navigate('/payment', { 
              state: { 
                userId: user._id,
                mobileNumber, 
                message: 'Your account exists but payment is pending. Please complete the payment to continue.' 
              } 
            });
            return;
          }
        } catch (err) {
          console.error('Error checking user:', err);
          showToast('Error connecting to server. Please try again.', 'error');
          return;
        }

        // If payment is done, proceed with login
        try {
          const res = await doLogin({ 
            mobileNumber: mobileNumber, 
            password: values.Password.trim() 
          }).unwrap();

          console.log('Login response:', res);
          if (res?.success === 1) {
            localStorage.setItem('token', res?.data?.token ?? '');
            showToast('Login successful!', 'success');
            navigate('/home', { replace: true });
          } else {
            showToast(res?.data?.message || 'Login failed', 'error');
          }
        } catch (error: any) {
          console.error('Login error:', error);
          // Enhanced error handling for different scenarios
          let errorMessage = 'Something went wrong';
          
          // Check for network connectivity issues
          if (error?.status === 'FETCH_ERROR' || error?.name === 'TypeError' || !navigator.onLine) {
            errorMessage = 'Unable to connect to server. Please check your internet connection and try again.';
            setIsServerOnline(false);
          } else if (error?.data?.message) {
            errorMessage = error.data.message;
          } else if (error?.message) {
            errorMessage = error.message;
          } else if (error?.status === 401) {
            errorMessage = 'Invalid credentials. Please check your mobile number and password.';
          } else if (error?.status === 500) {
            errorMessage = 'Server error. Please try again later.';
          } else if (error?.status === 404) {
            errorMessage = 'Service not available. Please try again later.';
          } else if (error?.originalStatus === 'PARSING_ERROR') {
            errorMessage = 'Invalid response from server. Please try again.';
          } else if (error?.originalStatus === 'TIMEOUT_ERROR') {
            errorMessage = 'Request timeout. Please check your connection and try again.';
          }
          
          showToast(errorMessage, 'error');
        }
      },
    });
  const EmailVerification = () => {
    navigate('/emailVerification');
  };

  return (
    <div className="flex flex-col justify-center w-full min-h-[500px]  via-white ">
      <div className="relative flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="bg-white  rounded-2xl  overflow-hidden">
            {/* Header Section with Brand Colors */}
            {/* <div className="bg-gradient-to-r from-red-500 to-rose-600 px-8 py-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-white font-Onest">
                  Jeevan Sobati
                </h1>
              </div>
              <p className="text-red-100 text-sm font-Onest">
                Welcome back to your matrimony journey
              </p>
            </div> */}

            {/* Form Content */}
            <div className="px-8 py-8 space-y-6">
              {/* Server Status Indicator */}
              {!isServerOnline && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-700 text-sm font-medium">
                        Server is not available
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={checkServerAvailability}
                      disabled={serverCheckLoading}
                      className="text-red-600 hover:text-red-800 text-sm font-medium disabled:opacity-50"
                    >
                      {serverCheckLoading ? 'Checking...' : 'Retry'}
                    </button>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 font-Onest">
                  {t('registerDetails.login.title')}
                </h2>
                <p className="text-gray-500 text-sm mt-1 font-Onest">
                  Sign in to find your perfect match
                </p>
              </div>

              {/* Mobile Number Input */}
              <div className="space-y-2">
                <label
                  htmlFor="Mobile"
                  className="block text-sm font-semibold text-gray-700 font-Onest">
                  {t('registerDetails.login.mobile')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    name="Mobile"
                    id="Mobile"
                    placeholder="Enter mobile number"
                    autoComplete="tel"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 font-Onest text-gray-900 placeholder-gray-400"
                    value={values.Mobile}
                    onChange={(e) => {
                      // Only allow numeric input and limit to 10 digits
                      const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                      handleChange({ target: { name: 'Mobile', value } });
                    }}
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

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="Password"
                  className="block text-sm font-semibold text-gray-700 font-Onest">
                  {t('registerDetails.login.password')}
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
                    placeholder="Enter password"
                    autoComplete="current-password"
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

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={EmailVerification}
                  className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors duration-200 font-Onest">
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={
                  isLoading || 
                  !isServerOnline ||
                  !values.Mobile || 
                  !values.Password || 
                  values.Mobile.length !== 10 ||
                  !/^\d{10}$/.test(values.Mobile) ||
                  !!errors.Mobile || 
                  !!errors.Password
                }
                className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 px-4 rounded-lg font-semibold font-Onest transition-all duration-200 hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]">
                {isLoading ? (
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
                    <span>Signing in...</span>
                  </div>
                ) : !isServerOnline ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.768 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Server Unavailable
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    {t('registerDetails.login.title')}
                  </span>
                )}
              </button>

              {/* Sign Up Link */}
              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-gray-600 text-sm font-Onest">
                  {t('registerDetails.login.message')}
                  <button
                    type="button"
                    onClick={onSignupClick}
                    className="ml-1 font-semibold text-red-600 hover:text-red-700 transition-colors duration-200">
                    Create Account
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 flex justify-center items-center space-x-6 text-xs text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-Onest">100% Secure</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-Onest">Verified Profiles</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-Onest">Privacy Protected</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
