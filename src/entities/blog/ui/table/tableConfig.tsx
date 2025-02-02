import { Column } from 'shared/ui/listing';
import { Blog } from 'entities/blog';
import { Button, Stack } from '@mui/material';

export function blogsTableConfig(): Array<Column<Blog>> {
  return [
    {
      dataKey: 'name',
      header: 'Name'
    },
    {
      dataKey: 'description',
      header: 'Description'
    },
    {
      dataKey: 'createdAt',
      header: 'Created at'
    },
    {
      dataKey: 'websiteUrl',
      header: 'Website URL'
    },
    {
      dataKey:'isMembership',
      header: 'Membership',
      renderCell: ({ isMembership }) => <>{isMembership ? 'Yes' : 'No'}</>
    },
    {
      header: 'Actions',
      dataKey: 'actions',
      renderCell: () => <Stack direction='row' gap='0.5rem'><Button size='small'>Edit</Button><Button size='small' color='error'>Remove</Button></Stack>
    }
  ]
}