import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import {
  useUpdateInfoMutation,
  useUploadToS3Mutation,
  useGetUserInfoQuery,
} from '../../redux/services/userInfo/api';
import Spinner from '../common/ChangeLanguage/Spinner';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { showToast } from '../../utils/ErrorToast';
import { UpdatesPhotoUpload } from '../../utils/UpdatePhotoSchema';
const initialValues = {
  Photo: '',
  PDF: '',
};

const UpdatePhotoUpload = () => {
  const { t } = useTranslation();
  const [uploadToS3] = useUploadToS3Mutation();
  const [updateInfo] = useUpdateInfoMutation();
  const { data: userData, isLoading: isUserDataLoading } = useGetUserInfoQuery({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const showErroToast = () => showToast('Something went wrong', 'error');

  // Set existing profile photo when user data loads
  useEffect(() => {
    if (userData?.data?.photoDetails?.profilePhoto) {
      setPhoto(userData.data.photoDetails.profilePhoto);
    }
  }, [userData]);
  const { values, errors, handleBlur, handleSubmit, touched, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UpdatesPhotoUpload,
      onSubmit: values => {
        setLoading(true);
        uploadToS3({ file: values?.Photo, type: 'profilePhoto' })
          .unwrap()
          .then(res => {
            //upload document
            if (res?.response_data?.url) {
              updateInfo({
                photoDetails: {
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
            }
          })
          .catch(err => {
            setLoading(false);
            showErroToast();
          });
      },
    });

  if (loading || isUserDataLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header isUserFullyOnboarded />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-Onest mb-2">
              {t('photoDetails.photoUpload.photo')}
            </h1>
            <p className="text-gray-600 font-Onest text-lg">
              Upload your profile photo to complete your profile
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Photo Upload Section */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Photo Preview/Upload Area */}
                  <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
                    {photo ? (
                      <div className="relative group">
                        <div className="aspect-[4/5] w-full max-w-sm mx-auto bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={photo}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            alt="Profile preview"
                          />
                        </div>
                        {/* Edit overlay */}
                        <label className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-2xl cursor-pointer flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <p className="font-semibold">Change Photo</p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            name="Photo"
                            onBlur={handleBlur}
                            className="hidden"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                            onChange={event => {
                              if (!event?.target?.files) {
                                return;
                              }
                              if (event?.target?.files[0].size / 1024 > 5270) {
                                alert('Maximum file size is 5 MB');
                                return;
                              }
                              setPhoto(
                                URL.createObjectURL(event?.target?.files[0]),
                              );
                              setFieldValue('Photo', event?.target?.files[0]);
                            }}
                          />
                        </label>
                      </div>
                    ) : (
                      <label className="block w-full max-w-sm mx-auto">
                        <div className="aspect-[4/5] border-2 border-dashed border-blue-300 rounded-2xl cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 bg-gradient-to-br from-blue-25 to-indigo-25 flex items-center justify-center group">
                          <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                              <svg
                                className="w-8 h-8 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </div>
                            <p className="text-lg font-semibold text-gray-700 mb-2 font-Onest">
                              {t('photoDetails.photoUpload.button')}
                            </p>
                            <p className="text-sm text-gray-500 font-Onest leading-relaxed">
                              {t('photoDetails.photoUpload.text')}
                            </p>
                            <p className="text-xs text-gray-400 mt-2 font-Onest">
                              PNG, JPG, JPEG, WEBP up to 5MB
                            </p>
                          </div>
                        </div>
                        <input
                          id="dropzone-file-initial"
                          type="file"
                          name="Photo"
                          onBlur={handleBlur}
                          className="hidden"
                          accept="image/png, image/jpeg, image/jpg, image/webp"
                          onChange={event => {
                            if (!event?.target?.files) {
                              return;
                            }
                            if (event?.target?.files[0].size / 1024 > 5270) {
                              alert('Maximum file size is 5 MB');
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

                    {/* Error Message */}
                    {errors.Photo && touched.Photo && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 font-Onest text-sm text-center">
                          {t(errors.Photo)}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 w-full lg:pl-8">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 font-Onest">
                        Photo Guidelines
                      </h3>
                      <ul className="space-y-3 text-gray-600 font-Onest">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Use a clear, recent photo of yourself</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Face should be clearly visible</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Good lighting and high quality</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Maximum file size: 5MB</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {(values?.Photo || (photo && photo !== userData?.data?.photoDetails?.profilePhoto)) && (
                    <button
                      type="button"
                      className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-Onest font-medium transition-colors duration-300 flex items-center gap-2"
                      onClick={() => {
                        setFieldValue('Photo', '');
                        // Reset to original photo if it exists, otherwise clear completely
                        setPhoto(userData?.data?.photoDetails?.profilePhoto || null);
                      }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      {values?.Photo ? t('photoDetails.photoUpload.remove') : 'Reset to Original'}
                    </button>
                  )}
                  
                  <button
                    type="submit"
                    disabled={loading || !values?.Photo}
                    className={`px-8 py-3 rounded-xl font-Onest font-semibold transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center ${
                      loading || !values?.Photo
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    }`}>
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        {t('photoDetails.submitButton.submit')}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePhotoUpload;
