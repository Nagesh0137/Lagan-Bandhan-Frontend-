import { useFormik } from 'formik';
import React, { useState } from 'react';
import { ChangePasswordSchema } from '../../utils/RegisterYup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import { useChangePasswordMutation } from '../../redux/services/userInfo/api';
import Spinner from '../common/ChangeLanguage/Spinner';
import { showToast } from '../../utils/ErrorToast';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  Password: '',
  ChangePassword: '',
  ConfirmPassword: '',
};

const ChangePassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [UpdatePassword, { isLoading }] = useChangePasswordMutation();
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ChangePasswordSchema,
      onSubmit: values => {
        UpdatePassword({
          oldPassword: values?.Password,
          newPassword: values?.ConfirmPassword,
        })
          .unwrap()
          .then(res => {
            if (res?.success) {
              showToast('Password updated, Please login now', 'success');
              navigate('/auth');
            } else {
              showToast('Password is wrong', 'error');
            }
          })
          .catch(err => {
            showToast('Something went wrong', 'error');
          });
      },
    });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header isUserFullyOnboarded />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="flex justify-center items-center min-h-screen py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 font-Onest mb-2">
                {t('ChangePassword.title')}
              </h1>
              <p className="text-gray-600 font-Onest text-sm">
                Secure your account with a new password
              </p>
            </div>
            
            <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Current Password */}
                <div>
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-semibold text-gray-700 font-Onest mb-2">
                    {t('ChangePassword.password')}
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="Password"
                      id="currentPassword"
                      autoComplete="current-password"
                      placeholder="Enter current password"
                      className="w-full px-4 py-3 font-Onest rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-white"
                      value={values.Password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.Password && touched.Password && (
                    <p className="text-red-500 font-Onest text-xs mt-2 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.Password}
                    </p>
                  )}
                </div>

                {/* New Password */}
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-sm font-semibold text-gray-700 font-Onest mb-2">
                    {t('ChangePassword.newPassword')}
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      name="ChangePassword"
                      id="newPassword"
                      autoComplete="new-password"
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 font-Onest rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-white pr-12"
                      value={values.ChangePassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
                      onClick={() => setShowNewPassword(prev => !prev)}>
                      <FontAwesomeIcon
                        className="h-4 w-4 text-gray-500 hover:text-gray-700"
                        icon={showNewPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                  {errors.ChangePassword && touched.ChangePassword && (
                    <p className="text-red-500 font-Onest text-xs mt-2 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.ChangePassword}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-gray-700 font-Onest mb-2">
                    {t('ChangePassword.confirmPassword')}
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="ConfirmPassword"
                      id="confirmPassword"
                      autoComplete="new-password"
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 font-Onest rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 hover:bg-white pr-12"
                      value={values.ConfirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
                      onClick={() => setShowConfirmPassword(prev => !prev)}>
                      <FontAwesomeIcon
                        className="h-4 w-4 text-gray-500 hover:text-gray-700"
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                  {errors.ConfirmPassword && touched.ConfirmPassword && (
                    <p className="text-red-500 font-Onest text-xs mt-2 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.ConfirmPassword}
                    </p>
                  )}
                </div>

                {/* Password Requirements */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-800 font-Onest mb-2">
                    Password Requirements:
                  </h4>
                  <ul className="text-xs text-blue-700 font-Onest space-y-1">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      At least 8 characters long
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Include uppercase and lowercase letters
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Include at least one number
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Include at least one special character
                    </li>
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg font-Onest transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg">
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Updating...
                      </div>
                    ) : (
                      t('ChangePassword.updateButton')
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Security Note */}
            <div className="text-center">
              <p className="text-xs text-gray-500 font-Onest">
                🔒 Your password is encrypted and secure. We recommend using a strong, unique password.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
