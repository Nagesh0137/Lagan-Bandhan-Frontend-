import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../config/api';
import {
  CheckEmailRequestType,
  RegisterRequestType,
  RegisterResponseType,
  VerifyOtpRequestType,
  forgetPasswordRequestType,
} from './types';

// Define a service using a base URL and expected endpoints
export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseUrl,
    timeout: 10000, // 10 seconds timeout
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    doRegister: builder.mutation<RegisterResponseType, RegisterRequestType>({
      query: body => ({
        url: '/user/create',
        method: 'post',
        body,
      }),
    }),
    doLogin: builder.mutation<RegisterResponseType, RegisterRequestType>({
      query: body => ({
        url: '/user/login',
        method: 'post',
        body,
      }),

      transformResponse: (response: RegisterResponseType) => {
        return response;
      },
    }),
    checkEmail: builder.mutation<any, CheckEmailRequestType>({
      query: body => ({
        url: '/user/checkEmail',
        method: 'post',
        body,
      }),
    }),
    verifyOtp: builder.mutation<any, VerifyOtpRequestType>({
      query: body => ({
        url: '/user/verifyOtp',
        method: 'post',
        body,
      }),
    }),
    forgetPassword: builder.mutation<any, forgetPasswordRequestType>({
      query: body => ({
        url: '/user/changeForgotPassword',
        method: 'post',
        body,
      }),
    }),
    makePayment: builder.mutation<any, any>({
      query: body => ({
        url: 'user/makePayment',
        method: 'post',
        body,
      }),
    }),
  }),
});

export const {
  useDoRegisterMutation,
  useDoLoginMutation,
  useCheckEmailMutation,
  useVerifyOtpMutation,
  useMakePaymentMutation,
  useForgetPasswordMutation,
} = registerApi;
