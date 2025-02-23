import { baseApi } from 'shared/api/baseApi';
import { ListResponse } from 'shared/types';
import { Blog, CreateBlogBody, UpdateBlogBody, blogSchema } from './schemas';

interface Params {
  sortBy: string;
  pageSize: number;
  pageNumber: number;
  sortDirection: string;
}

export const blogApi = baseApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    blogsList: query<ListResponse<Blog>, Partial<Params>>({
      query: params => ({
        url: 'sa/blogs',
        method: 'GET',
        params,
      }),
      providesTags: ['Blogs'],
    }),
    byId: query<Blog, string>({
      query: id => ({
        url: `sa/blogs/${id}`,
        method: 'GET',
      }),
      transformResponse: response => blogSchema.parse(response),
      providesTags: ['Blogs'],
    }),
    create: mutation<Blog, CreateBlogBody>({
      query: body => ({
        url: `sa/blogs`,
        method: 'POST',
        body,
      }),
      transformResponse: response => blogSchema.parse(response),
    }),
    update: mutation<Blog, UpdateBlogBody>({
      query: ({ id, ...body }) => ({
        url: `sa/blogs/${id}`,
        method: 'PUT',
        body,
      }),
      transformResponse: response => blogSchema.parse(response),
    }),
    delete: mutation<void, string>({
      query: id => ({
        url: `sa/blogs/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: true,
});
