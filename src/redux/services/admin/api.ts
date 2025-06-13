import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../config/api';
import { AdminRequestType, AdminResponseType } from './types';

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['getUserList'],
  endpoints: builder => ({
    doLogin: builder.mutation<AdminResponseType, AdminRequestType>({
      query: body => ({
        url: '/admin/login',
        method: 'post',
        body,
      }),

      transformResponse: (response: AdminResponseType) => {
        return response;
      },
    }),
    getProfiles: builder.query<any, any>({
      providesTags: ['getUserList'],
      query: reqBody => {
        const { fullName, page, status } = reqBody;

        let body = {
          ...reqBody,
          ...(fullName && { fullName }),
          ...(page && { page }),
          ...(status && { status }),
        };

        return {
          url: '/admin/users?token=' + localStorage.getItem('adminToken'),
          method: 'post',
          body,
        };
      },
    }),
    deleteUser: builder.mutation<any, any>({
      invalidatesTags: ['getUserList'],
      query: body => ({
        url: '/admin/user/delete?token=' + localStorage.getItem('adminToken'),
        method: 'post',
        body,
      }),
    }),
    updateUser: builder.mutation<any, any>({
      invalidatesTags: ['getUserList'],
      query: body => {
        return {
          url: '/admin/user/update?token=' + localStorage.getItem('adminToken'),
          method: 'post',
          body,
        };
      },
    }),
    getDashboard: builder.query<any, any>({
      query: () => {
        return {
          url:
            '/admin/user/getDashboard?token=' +
            localStorage.getItem('adminToken'),
          method: 'get',
        };
      },
    }),
  }),
});

export const {
  useDoLoginMutation,
  useGetProfilesQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetDashboardQuery,
} = adminApi;
