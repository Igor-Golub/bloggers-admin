import { CreateBlogBody, blogApi } from 'entities/blog';
import { AppThunk } from 'shared/lib/store/types.ts';

export const createBlog =
  (dto: CreateBlogBody): AppThunk<Promise<void>> =>
  async dispatch => {
    await dispatch(blogApi.endpoints.create.initiate(dto));
    dispatch(blogApi.util.invalidateTags(['Blogs']));
  };
