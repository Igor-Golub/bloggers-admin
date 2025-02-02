import { blogApi } from 'entities/blog';

export function useBlog() {
  const { data, isLoading } = blogApi.useBlogsListQuery({});

  const [onDelete] = blogApi.useDeleteMutation({});

  const handleDelete = async (id: string) => {
    try {
      await onDelete(id);
    } catch (error) {
      console.error(error);
    }
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
