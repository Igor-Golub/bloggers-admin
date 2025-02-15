import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DialogTypes, useDialog } from 'shared/ui/dialog';
import { BaseTableEntity, InputTypes, Listing } from 'shared/ui/listing';
import { useBlog } from '../../hooks/useBlog';
import { Blog } from '../../model';
import { blogsTableConfig } from './tableConfig.tsx';

export function BlogsTable() {
  const navigator = useNavigate();

  const { onOpen: handleOpenCreateBlogDialog } = useDialog(DialogTypes.CreateUpdateBlog);

  const { blogs, isLoading, handleDelete, handleUpdate } = useBlog();

  const columns = blogsTableConfig({
    handleDelete,
    handleUpdate,
  });

  return (
    <Listing<Blog, Blog & BaseTableEntity>
      columns={columns}
      listingName="Blogs"
      loading={isLoading}
      renderData={blogs}
      listingActions={
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenCreateBlogDialog()}>
          Add
        </Button>
      }
      tableDataAdapter={(entity, index) => ({
        ...entity,
        renderIndex: index,
      })}
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
