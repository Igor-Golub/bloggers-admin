import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableActions } from 'entities/blog/ui/table/tableActions.tsx';
import { useAppDispatch } from 'shared/hooks';
import { DialogTypes, useDialog } from 'shared/ui/dialog';
import { BaseTableEntity, InputTypes, Listing } from 'shared/ui/listing';
import type { Pagination } from 'shared/ui/listing/types.ts';
import { Blog, blogApi, deleteBlog } from '../../model';
import { blogsTableConfig } from './tableConfig.tsx';

export function BlogsTable() {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const { onOpen: handleOpenCreateBlogDialog } = useDialog(DialogTypes.CreateBlog);
  const { onOpen: handleOpenUpdateBlogDialog } = useDialog(DialogTypes.UpdateBlog);

  const [pagination, setPagination] = useState<Pagination>({ page: 1, pageSize: 10, totalCount: 0 });

  const { data, isLoading } = blogApi.useBlogsListQuery({
    pageSize: pagination.pageSize,
    pageNumber: pagination.page,
  });

  const handleDelete = (id: string) => {
    dispatch(deleteBlog(id));
  };

  const handleUpdate = (id: string) => {
    handleOpenUpdateBlogDialog({ id });
  };

  const columns = blogsTableConfig({ handleDelete, handleUpdate });

  return (
    <Listing<Blog, Blog & BaseTableEntity>
      columns={columns}
      listingName="Blogs"
      loading={isLoading}
      pagination={pagination}
      renderData={data?.items ?? []}
      onPaginationChanged={nextValue => {
        setPagination(prev => ({ ...prev, ...nextValue }));
      }}
      listingActions={<TableActions handleOpenCreateBlogDialog={handleOpenCreateBlogDialog} />}
      tableDataAdapter={entity => entity}
      onRowClick={row => {
        navigator(`/blogs/${row.id}`);
      }}
      filtersConfiguration={[
        {
          fields: ['name'],
          filterValue: 'search',
          inputType: InputTypes.Text,
          inputProps: {
            label: 'Search by name',
            placeholder: 'Search...',
          },
        },
      ]}
    />
  );
}
