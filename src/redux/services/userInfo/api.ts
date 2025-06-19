  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  import { baseUrl } from '../../../config/api';
  import {
    ImageRequest,
    UserDetailsRequest,
    UserInfoResponseType,
  } from './types';

  // Define a service using a base URL and expected endpoints

  export const userInfo = createApi({
    reducerPath: 'userInfo',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['getUserInfo'],
    endpoints: builder => ({
      getUserInfo: builder.query<UserInfoResponseType, any>({
        query: () => ({
          url: '/user/info?token=' + localStorage.getItem('token'),
        }),
        providesTags: ['getUserInfo'],
        transformResponse: (response: UserInfoResponseType) => {
          localStorage.setItem(
            'gender',
            response?.data?.userDetails?.personalDetails?.gender,
          );
          if (!response?.data?.userDetails) {
            return { ...response?.data, redirectTo: 'userDetails' };
          }
          if (!response?.data?.photoDetails) {
            return { ...response?.data, redirectTo: 'photoUpload' };
          }
          return response;
        },
      }),
      updateInfo: builder.mutation<UserInfoResponseType, UserDetailsRequest>({
        query: body => ({
          url: '/user/updateUser?token=' + localStorage.getItem('token'),
          method: 'post',
          body,
        }),
        invalidatesTags: ['getUserInfo'],
      }),
      uploadToS3: builder.mutation<any, ImageRequest>({
        query: ({ file, type }) => {
          const bodyFormData = new FormData();
          bodyFormData.append(type, file);
          return {
            url: '/upload',
            method: 'post',
            body: bodyFormData,
          };
        },
      }),
      getProfiles: builder.query<any, any>({
        query: reqBody => {
          const gender = localStorage.getItem('gender');
          const { fullName, selectedAge, selectedIncomeRange, page } = reqBody;

          let body = {
            ...reqBody,
            ...(gender && { gender: gender === 'Male' ? 'Female' : 'Male' }),
            ...(fullName && { fullName }),
            ...(selectedAge && { age: selectedAge }),
            ...(selectedIncomeRange && { income: selectedIncomeRange }),
            page,
          };

          return {
            url: '/user/getProfile?token=' + localStorage.getItem('token'),
            method: 'post',
            body,
          };
        },
      }),
      changePassword: builder.mutation<any, any>({
        query: body => ({
          url: '/user/changePassword?token=' + localStorage.getItem('token'),
          method: 'post',
          body,
        }),
      }),
      deleteUserProfile: builder.mutation<any, any>({
        query: body => ({
          url: '/user/deleteUserProfile?token=' + localStorage.getItem('token'),
          method: 'post',
          body,
        }),
        invalidatesTags: ['getUserInfo'],
      }),
      ReportUserProfile:builder.mutation<any, any>({
        query: body => ({
          url: '/report/create?token='+ localStorage.getItem('token'),
          method: 'post',
          body,
        }),
      }),
    }),
  
  });

  export const {
    useGetUserInfoQuery,
    useUpdateInfoMutation,
    useUploadToS3Mutation,
    useGetProfilesQuery,
    useChangePasswordMutation,
    useDeleteUserProfileMutation,
    useReportUserProfileMutation,
  } = userInfo;
