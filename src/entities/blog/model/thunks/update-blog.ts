import { UpdateBlogBody, blogApi } from 'entities/blog';
import { AppThunk } from 'shared/lib/store/types.ts';
import { notificationActions } from 'shared/ui/notification';

export const updateBlog =
  (dto: UpdateBlogBody): AppThunk<Promise<void>> =>
  async dispatch => {
    try {
      await dispatch(blogApi.endpoints.update.initiate(dto));
      dispatch(blogApi.util.invalidateTags(['Blogs']));
      dispatch(notificationActions.show({ notification: { message: 'Blog updated!' } }));
    } catch {
      throw new Error('Failed to update blog');
    }
  };
