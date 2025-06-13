import { useFormik } from 'formik';
import React, { useState } from 'react';

import Header from '../components/Header';
import { PasswordVerificationSchema } from '../utils/PasswordVerificationSchema';
import { useLocation, useNavigate } from 'react-router-dom';
import OTPInput from 'react-otp-input';
import { useTranslation } from 'react-i18next';
import { useVerifyOtpMutation } from '../redux/services/register/api';
import { showToast } from '../utils/ErrorToast';
import { OtpVerificationSchema } from '../utils/OtpVerificationSchema';

interface propState {
  email: string;
}

const initialValues = {
  OTP: '',
};

const OTPVerificationScreen = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = (location?.state as propState) ?? { email: '' };
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: OtpVerificationSchema,
      onSubmit: values => {
        verifyOtp({
          otp: Number(values?.OTP),
          email,
        })
          .unwrap()
          .then(res => {
            if (res.success) {
              showToast(`Otp correct, Please set new password`, 'success');
              navigate('/PassWordVerification', {
                state: {
                  otp: values?.OTP,
                  email,
                },
              });
            } else {
              showToast('Incorrect OTP, Please try again', 'error');
            }
          })
          .catch(err => {
            showToast(`Something went wrong`, 'error');
          });
      },
    });

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <div className="relative flex justify-center   bg-white h-[350px] mt-12">
          <div className=" border border-gray-200 rounded-3xl mt-12 px-8 py-8 shadow-xl">
            <div>
              <h1 className="text-2xl font-medium font-Onest justify-center flex ">
                {t('forgetPassword.OTP.heading')}
              </h1>
            </div>
            <div className="font-Onest mt-2 sm:text-sm text-xs text-gray-500  w-42">
              We have sent otp on {email}
            </div>
            <div className="divide-x divide-gray-200 mt-2">
              <div className="text-base leading-6 space-y-5 text-gray-700  ">
                <div className="sm:col-span-3 mt-5 ">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('forgetPassword.OTP.title')}
                  </label>
                  <div className="mt-2">
                    <input
                      name="OTP"
                      maxLength={4}
                      className="block text-center font-bold w-64 outline-none font-Onest sm:w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
                      value={values.OTP}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.OTP && touched.OTP ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {errors.OTP}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="relative pt-2 ">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`bg-red-${
                      isLoading ? '400' : '500'
                    } w-64  text-white rounded-md sm:w-72 py-2 font-Onest font-bold flex content-center justify-center`}>
                    {t('forgetPassword.OTP.send')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default OTPVerificationScreen;
