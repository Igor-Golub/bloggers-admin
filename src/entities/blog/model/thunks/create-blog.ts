import { CreateBlogBody, blogApi } from 'entities/blog';
import { AppThunk } from 'shared/lib/store/types.ts';
import { notificationActions } from 'shared/ui/notification';

export const createBlog =
  (dto: CreateBlogBody): AppThunk<Promise<void>> =>
  async dispatch => {
    try {
      await dispatch(blogApi.endpoints.create.initiate(dto));
      dispatch(blogApi.util.invalidateTags(['Blogs']));
      dispatch(notificationActions.show({ notification: { message: 'Blog created!' } }));
    } catch {
      throw new Error('Failed to create blog');
    }
  };
