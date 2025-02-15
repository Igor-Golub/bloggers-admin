import { baseApi } from 'shared/api/baseApi.ts';
import { ListResponse } from 'shared/types';
import { Post } from '../model';

export const postApi = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    postsList: query<ListResponse<Post>, Partial<any>>({
      query: params => ({
        url: 'sa/posts',
        method: 'GET',
        params,
      }),
    }),
  }),
  overrideExisting: true,
});
