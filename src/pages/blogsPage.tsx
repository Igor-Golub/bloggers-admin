import { ReactNode } from 'react';
import { BlogsTable, CreateUpdateBlogDialog } from 'entities/blog/ui';
import { DialogTypes, DialogsContainer } from 'shared/ui/dialog';

export function BlogsPage() {
  const dialogs: Partial<Record<DialogTypes, ReactNode>> = {
    [DialogTypes.CreateUpdateBlog]: <CreateUpdateBlogDialog />,
  };

  return (
    <>
      <BlogsTable />
      <DialogsContainer dialogs={dialogs} />
    </>
  );
}
