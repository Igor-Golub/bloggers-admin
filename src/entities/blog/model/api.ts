import { baseApi } from 'shared/api/baseApi';
import { ListResponse } from 'shared/types';
import { Blog } from './types';

export const blogApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    blogsList: query<ListResponse<Blog>, void>({
      query: () => ({
        url: 'blogs',
        method: 'GET',
      }),
    }),
    getById: query<Blog, string>({
      query: id => ({
        url: `blogs/${id}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});
