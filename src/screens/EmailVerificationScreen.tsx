import { useFormik } from 'formik';
import React from 'react';

import Header from '../components/Header';
import { PasswordVerificationSchema } from '../utils/PasswordVerificationSchema';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCheckEmailMutation } from '../redux/services/register/api';
import { showToast } from '../utils/ErrorToast';
import { EmailVerfificationSchema } from '../utils/EmailVerfificationSchema';

const initialValues = {
  Email: '',
};

const EmailVerificationScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [checkEmail, { isLoading }] = useCheckEmailMutation();
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: EmailVerfificationSchema,
      onSubmit: values => {
        checkEmail({
          email: values?.Email,
        })
          .unwrap()
          .then(res => {
            if (res.success) {
              showToast(
                `OTP sent to ${values?.Email}, Please check.`,
                'success',
              );
              navigate('/OTPVerification', {
                state: {
                  email: values?.Email,
                },
              });
            } else {
              showToast(
                `Provided email: ${values?.Email}, Not found.`,
                'error',
              );
            }
          })
          .catch(error => {
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
                {t('forgetPassword.email.heading')}
              </h1>
            </div>
            <div className="divide-x divide-gray-200 mt-2">
              <div className="text-base leading-6 space-y-5 text-gray-700  ">
                <div className="sm:col-span-3 mt-10 ">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium leading-6 text-gray-900 font-Onest">
                    {t('forgetPassword.email.title')}
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="Email"
                      id="Mobile"
                      placeholder="Email"
                      autoComplete="given-name"
                      className="block w-64 outline-none font-Onest sm:w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={values.Email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Email && touched.Email ? (
                      <p className="text-red-500 font-Onest text-xs mt-1">
                        {errors.Email}
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
                    {t('forgetPassword.email.send')}
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

export default EmailVerificationScreen;
