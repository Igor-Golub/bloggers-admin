import { blogApi } from 'entities/blog';
import { AppThunk } from 'shared/lib/store/types.ts';
import { notificationActions } from 'shared/ui/notification';

export const deleteBlog =
  (id: string): AppThunk<Promise<void>> =>
  async dispatch => {
    try {
      await dispatch(blogApi.endpoints.delete.initiate(id));
      dispatch(blogApi.util.invalidateTags(['Blogs']));
      dispatch(notificationActions.show({ notification: { message: 'Blog deleted successfully' } }));
    } catch {
      throw new Error('Failed to delete blog');
    }
  };
