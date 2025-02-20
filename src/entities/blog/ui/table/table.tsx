import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DialogTypes, useDialog } from 'shared/ui/dialog';
import { BaseTableEntity, InputTypes, Listing } from 'shared/ui/listing';
import { Pagination } from 'shared/ui/listing/types.ts';
import { useBlog } from '../../hooks/useBlog';
import { Blog, blogApi } from '../../model';
import { blogsTableConfig } from './tableConfig.tsx';

export function BlogsTable() {
  const navigator = useNavigate();

  const { onOpen: handleOpenCreateBlogDialog } = useDialog(DialogTypes.CreateUpdateBlog);

  const [pagination, setPagination] = useState<Pagination>({ page: 1, pageSize: 10, totalCount: 0 });

  const { data, isLoading } = blogApi.useBlogsListQuery({
    pageSize: pagination.pageSize,
    pageNumber: pagination.page,
  });

  const { handleDelete, handleUpdate } = useBlog();

  const columns = blogsTableConfig({
    handleDelete,
    handleUpdate,
  });

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
      listingActions={
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenCreateBlogDialog()}>
          Add
        </Button>
      }
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
            placeholder: 'Search by name',
          },
        },
      ]}
    />
  );
}
