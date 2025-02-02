import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    headers: {
      Authorization: `Bearer ${String(localStorage.getItem('accessToken'))}`,
    },
  }),
  endpoints: () => ({}),
});
