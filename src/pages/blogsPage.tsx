import { ReactNode } from 'react';
import { BlogsTable, CreateBlogDialog, UpdateBlogDialog } from 'entities/blog/ui';
import { DialogTypes, DialogsContainer } from 'shared/ui/dialog';

export function BlogsPage() {
  const dialogs: Partial<Record<DialogTypes, ReactNode>> = {
    [DialogTypes.CreateBlog]: <CreateBlogDialog />,
    [DialogTypes.UpdateBlog]: <UpdateBlogDialog />,
  };

  return (
    <>
      <BlogsTable />
      <DialogsContainer dialogs={dialogs} />
    </>
  );
}
