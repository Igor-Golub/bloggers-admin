import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { envConfig } from 'shared/lib/config';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: envConfig.apiURL,
    prepareHeaders: headers => {
      const username = envConfig.adminName;
      const password = envConfig.adminPassword;
      const basicAuth = btoa(`${username}:${password}`);

      headers.set('Authorization', `Basic ${basicAuth}`);
      return headers;
    },
  }),
  tagTypes: ['Blogs', 'Posts'],
  endpoints: () => ({}),
});
