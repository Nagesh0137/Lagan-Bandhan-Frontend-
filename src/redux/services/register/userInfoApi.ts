import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../config/api';

export const userInfoApi = createApi({
  reducerPath: 'userInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getUserByMobile: builder.query<any, string>({
      query: (mobileNumber) => ({
        url: `/user/getByMobile`,
        method: 'POST',
        body: { mobileNumber },
      }),
    }),
  }),
});

export const { useGetUserByMobileQuery } = userInfoApi;
