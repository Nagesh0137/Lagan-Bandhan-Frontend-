import { useFormik } from 'formik';
import React, { useState } from 'react';
import { PhotoUploadSchema } from '../../utils/RegisterYup';

import { useTranslation } from 'react-i18next';
import {
  useUpdateInfoMutation,
  useUploadToS3Mutation,
} from '../../redux/services/userInfo/api';
import Spinner from '../common/ChangeLanguage/Spinner';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { showToast } from '../../utils/ErrorToast';

const initialValues = {
  Photo: '',
  PDF: '',
};

const PhotoUpload = () => {
  const { t } = useTranslation();
  const [uploadToS3] = useUploadToS3Mutation();
  const [updateInfo] = useUpdateInfoMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [adhar, setAdhar] = useState<string | null>(null);

  const showErroToast = () => showToast('Something went wrong', 'error');
  const { values, errors, handleBlur, handleSubmit, touched, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: PhotoUploadSchema,
      onSubmit: values => {
        setLoading(true);
        uploadToS3({ file: values?.Photo, type: 'profilePhoto' })
          .unwrap()
          .then(res => {
            //upload document
            if (res?.response_data?.url) {
              uploadToS3({ file: values?.PDF, type: 'document' })
                .unwrap()
                .then(res2 => {
                  if (res2?.response_data?.url) {
                    updateInfo({
                      photoDetails: {
                        adharCard: res2?.response_data?.url,
                        profilePhoto: res?.response_data?.url,
                      },
                    })
                      .unwrap()
                      .then(result => {
                        setLoading(false);
                        if (result) {
                          navigate('/home', { replace: true });
                        } else {
                          showErroToast();
                        }
                      })
                      .catch(() => {
                        setLoading(false);
                        showErroToast();
                      });
                  } else {
                    setLoading(false);
                    showErroToast();
                  }
                })
                .catch(err => {
                  setLoading(false);
                  showErroToast();
                });
            } else {
              setLoading(false);
            }
          })
          .catch(err => {
            setLoading(false);
            showErroToast();
          });
      },
    });

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mt-3">
          <div className="border-b sm:w-5/6 sm:h-[43rem] justify-center items-center  border-gray-900/10  border  border-gray-200 border-r-2  rounded-3xl p-8 ">
            {/* Profile photo upload */}
            <div className="sm:flex justify-center">
              <div className="sm:p-12">
                <h1 className="mb-2 font-Onest flex justify-center">
                  {t('photoDetails.photoUpload.photo')}
                </h1>
                <div className="flex justify-center">
                  {values?.Photo && photo ? (
                    <img
                      src={photo}
                      className="w-80 h-64 rounded-lg  cursor-pointer "
                      alt=""
                    />
                  ) : (
                    <label className="flex items-center justify-center w-80 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-10 h-10 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold font-Onest">
                            {t('photoDetails.photoUpload.button')}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-Onest">
                          {t('photoDetails.photoUpload.text')}
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        name="Photo"
                        value={values.Photo}
                        onBlur={handleBlur}
                        className="hidden"
                        accept="image/png, image/jpeg"
                        onChange={event => {
                          if (!event?.target?.files) {
                            return;
                          }
                          if (event?.target?.files[0].size / 1024 > 5270) {
                            alert('Maximum file size is 5 mb ');
                            return;
                          }
                          setPhoto(
                            URL.createObjectURL(event?.target?.files[0]),
                          );
                          setFieldValue('Photo', event?.target?.files[0]);
                        }}
                      />
                    </label>
                  )}
                </div>
                {errors.Photo && touched.Photo ? (
                  <p className="text-red-500 font-Onest text-xs mt-1 flex justify-center">
                    {t(errors.Photo)}
                  </p>
                ) : null}

                <div className=" mt-3 flex justify-center">
                  {values?.Photo && (
                    <button
                      className="bg-red-500  text-white rounded-md w-80 p-1 font-Onest "
                      onClick={() => setFieldValue('Photo', null)}>
                      {t('photoDetails.photoUpload.remove')}
                    </button>
                  )}
                </div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300" />
              {/* Adhar Card Upload */}
              <div className="sm:p-12">
                <h1 className="mb-2 font-Onest flex justify-center">
                  {t('photoDetails.AadhaarUpload.photo')}
                </h1>
                <div className="flex justify-center">
                  {values?.PDF && adhar ? (
                    <img
                      src={adhar}
                      className="w-80 h-64 rounded-lg justify-center cursor-pointer "
                      alt=""
                    />
                  ) : (
                    <label className="flex flex-col items-center justify-center w-80 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-10 h-10 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold font-Onest">
                            {t('photoDetails.AadhaarUpload.button')}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-Onest">
                          {t('photoDetails.AadhaarUpload.text')}
                        </p>
                      </div>
                      <input
                        id="pdf"
                        type="file"
                        name="PDF"
                        value={values.PDF}
                        onBlur={handleBlur}
                        className="hidden"
                        accept="image/png, image/jpeg, application/pdf"
                        onChange={event => {
                          if (!event?.target?.files) {
                            return;
                          }
                          if (event?.target?.files[0].size / 1024 > 1024) {
                            alert('Maximum file size is 1 mb ');
                            return;
                          }

                          if (
                            event?.target?.files[0].type === 'application/pdf'
                          ) {
                            setAdhar(require('../../assets/pdf.png'));
                            setFieldValue('PDF', event?.target?.files[0]);
                          } else {
                            setAdhar(
                              URL.createObjectURL(event?.target?.files[0]),
                            );
                            setFieldValue('PDF', event?.target?.files[0]);
                          }
                        }}
                      />
                    </label>
                  )}
                </div>
                {errors.PDF && touched.PDF ? (
                  <p className="text-red-500 font-Onest text-xs mt-1 flex justify-center">
                    {t(errors.PDF)}
                  </p>
                ) : null}
                <div className=" mt-3 flex justify-center">
                  {values?.PDF && (
                    <button
                      className="bg-red-500  text-white rounded-md w-80 p-1 font-Onest"
                      onClick={() => setFieldValue('PDF', null)}>
                      {t('photoDetails.AadhaarUpload.remove')}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-red-500 text-white rounded-md sm:w-96 w-full p-1 font-Onest font-bold mt-10`}>
                {t('photoDetails.submitButton.submit')}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PhotoUpload;
