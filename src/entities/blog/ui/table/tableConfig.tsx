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
    },
    {
      dataKey: 'description',
      header: 'Description',
    },
    {
      dataKey: 'createdAt',
      header: 'Created at',
    },
    {
      dataKey: 'websiteUrl',
      header: 'Website URL',
    },
    {
      dataKey: 'isMembership',
      header: 'Membership',
      renderCell: ({ isMembership }) => <>{isMembership ? 'Yes' : 'No'}</>,
    },
    {
      header: 'Actions',
      dataKey: 'actions',
      renderCell: entity => (
        <Stack direction="row" gap="0.5rem">
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
