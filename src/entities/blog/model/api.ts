import { baseApi } from 'shared/api/baseApi';
import { ListResponse } from 'shared/types';
import { Blog, blogSchema } from './schemas';

interface Params {
  sortBy: string;
  pageSize: number;
  pageNumber: number;
  sortDirection: string;
}

export const blogApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    blogsList: query<ListResponse<Blog>, Partial<Params>>({
      query: (params) => ({
        url: 'sa/blogs',
        method: 'GET',
        params
      }),
    }),
    byId: query<Blog, string>({
      query: id => ({
        url: `sa/blogs/${id}`,
        method: 'GET',
      }),
      transformResponse: (response) => {
        return blogSchema.parse(response)
      }
    }),
  }),
  overrideExisting: true,
});
