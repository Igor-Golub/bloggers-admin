import { Button, Stack } from '@mui/material';
import { Blog } from 'entities/blog';
import { Column } from 'shared/ui/listing';

interface Options {
  handleUpdate: (blogId: string) => void;
  handleDelete: (blogId: string) => void;
}

export function blogsTableConfig(options: Options): Array<Column<Blog>> {
  return [
    {
      dataKey: 'name',
      header: 'Name',
      headerCellProps: {
        align: 'center',
      },
      bodyCellProps: {
        align: 'center',
      },
    },
    {
      dataKey: 'description',
      header: 'Description',
      headerCellProps: {
        align: 'center',
      },
      bodyCellProps: {
        align: 'center',
      },
    },
    {
      dataKey: 'createdAt',
      header: 'Created at',
      headerCellProps: {
        align: 'center',
      },
      bodyCellProps: {
        align: 'center',
      },
    },
    {
      dataKey: 'websiteUrl',
      header: 'Website URL',
      headerCellProps: {
        align: 'center',
      },
      bodyCellProps: {
        align: 'center',
      },
    },
    {
      dataKey: 'isMembership',
      header: 'Membership',
      headerCellProps: {
        align: 'center',
      },
      bodyCellProps: {
        align: 'center',
      },
      renderCell: ({ isMembership }) => <>{isMembership ? 'Yes' : 'No'}</>,
    },
    {
      header: 'Actions',
      dataKey: 'actions',
      headerCellProps: {
        align: 'center',
      },
      bodyCellProps: {
        align: 'center',
      },
      renderCell: entity => (
        <Stack direction="row" gap="0.5rem" justifyContent="center">
          <Button
            size="small"
            onClick={() => {
              options.handleUpdate(entity.id);
            }}>
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            onClick={() => {
              options.handleDelete(entity.id);
            }}>
            Remove
          </Button>
        </Stack>
      ),
    },
  ];
}
