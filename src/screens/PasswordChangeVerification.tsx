import { useFormik } from 'formik';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import { useChangePasswordMutation } from '../redux/services/userInfo/api';

import { showToast } from '../../src/utils/ErrorToast';
import { useLocation, useNavigate } from 'react-router-dom';
import { boolean } from 'yup';
import { ChangePasswordSchema } from '../utils/RegisterYup';
import Header from '../components/Header';
import Spinner from '../components/common/ChangeLanguage/Spinner';
import { useForgetPasswordMutation } from '../redux/services/register/api';
import { PasswordVerificationSchema } from '../utils/PasswordVerificationSchema';

interface propState {
  email: string;
}

const initialValues = {
  Password: '',
  ConfirmPassword: '',
};

const PasswordChangeVerification = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = (location?.state as propState) ?? {
    email: '',
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [UpdatePassword, { isLoading }] = useForgetPasswordMutation();
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: PasswordVerificationSchema,
      onSubmit: values => {
        UpdatePassword({
          password: values?.Password,
          email,
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

  return (
    <>
      <Header />
      <div className="  lg:flex"></div>
      <div className=" flex flex-col justify-center w-full">
        <div className="relative ">
          <form onSubmit={handleSubmit}>
            <div className="relative flex justify-center bg-white h-[450px] ">
              <div className=" border border-red-100 rounded-3xl mt-12 px-10 py-10">
                <div className="divide-x divide-gray-200 ">
                  <div className="text-base leading-6 space-y-5 text-gray-700 ">
                    <div>
                      <h1 className="text-2xl font-semibold font-Onest justify-center flex mb-10 ">
                        {t('ChangePassword.title')}
                      </h1>
                    </div>

                    <div className=" mt-5 ">
                      <label
                        htmlFor="Password"
                        className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                        {t('ChangePassword.newPassword')}
                      </label>
                      <div className="mt-2 flex ">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="Password"
                          id="Password"
                          autoComplete="off"
                          className="block w-64 font-Onest sm:w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={values.Password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="relative top-2  h-6 pb-1 right-9  justify-center items-center flex rounded-sm flex-row  ">
                          <FontAwesomeIcon
                            className="text-gray-400"
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={() => setShowPassword(prev => !prev)}
                          />
                        </div>
                      </div>
                      {errors.Password && touched.Password ? (
                        <p className="text-red-500 font-Onest text-xs mt-1 flex ">
                          {errors.Password}
                        </p>
                      ) : null}
                    </div>
                    <div className=" mt-5">
                      <label
                        htmlFor="Password"
                        className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                        {t('ChangePassword.confirmPassword')}
                      </label>
                      <div className="mt-2 flex ">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="ConfirmPassword"
                          id="Password"
                          autoComplete="off"
                          className="block w-64 font-Onest  sm:w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={values.ConfirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="relative top-2  h-6 pb-1 right-9  justify-center items-center flex rounded-sm flex-row gap-1 ">
                          <FontAwesomeIcon
                            className="text-gray-400"
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={() => setShowPassword(prev => !prev)}
                          />
                        </div>
                      </div>
                      {errors.ConfirmPassword && touched.ConfirmPassword ? (
                        <p className="text-red-500 font-Onest text-xs mt-1 flex">
                          {errors.ConfirmPassword}
                        </p>
                      ) : null}
                    </div>

                    <div className="relative pt-2">
                      <button
                        type="submit"
                        className="bg-red-500 w-64 text-white sm:w-72 rounded-md  py-2 font-Onest font-bold flex content-center justify-center">
                        {t('ChangePassword.updateButton')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordChangeVerification;
