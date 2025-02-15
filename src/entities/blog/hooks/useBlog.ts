import { DialogTypes, useDialog } from 'shared/ui/dialog';
import { useNotification } from 'shared/ui/notification';
import { blogApi } from '../model/api.ts';

export function useBlog() {
  const { onShow } = useNotification();
  const { onOpen } = useDialog(DialogTypes.CommonConfirmation);

  const { data, isLoading } = blogApi.useBlogsListQuery({});
  const [onDelete] = blogApi.useDeleteMutation({});

  const handleDelete = (id: string) => {
    onOpen({
      confirmationText: 'Are you want to Delete blog?',
      onConfirm: async () => {
        const result = await onDelete(id);

        if ('error' in result) {
          onShow({ message: 'Blog not deleted!', type: 'error' });
          console.error(result.error);
        } else {
          onShow({ message: 'Blog deleted!' });
        }
      },
    });
  };

  const handleUpdate = (id: string) => {
    console.log(id);
  };

  return {
    blogs: data?.items ?? [],
    isLoading,
    handleDelete,
    handleUpdate,
  };
}
