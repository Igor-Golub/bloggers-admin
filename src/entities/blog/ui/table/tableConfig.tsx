import { Blog } from 'entities/blog';
import { Actions } from 'entities/blog/ui/table/cells/actions.tsx';
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
      renderCell: entity => <Actions blogId={entity.id} {...options} />,
    },
  ];
}
