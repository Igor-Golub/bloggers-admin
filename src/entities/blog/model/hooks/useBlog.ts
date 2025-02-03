import { blogApi } from 'entities/blog';
import { DialogTypes, useDialog } from 'shared/ui/dialog';
import { useNotification } from 'shared/ui/notification';

export function useBlog() {
  const { onShow } = useNotification();
  const { onOpen } = useDialog(DialogTypes.CommonConfirmation);

  const { data, isLoading } = blogApi.useBlogsListQuery({});
  const [onDelete] = blogApi.useDeleteMutation({});

  const handleDelete = (id: string) => {
    onOpen({
      confirmationText: 'Are you want to Delete blog?',
      onConfirm: async () => {
        try {
          await onDelete(id);
          onShow({ message: 'Blog deleted!' });
        } catch (error) {
          onShow({ message: 'Blog not deleted!', type: 'error' });
          console.error(error);
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
