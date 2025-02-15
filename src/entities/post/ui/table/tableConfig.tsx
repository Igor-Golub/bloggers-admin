import { DynamicFeed } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { Column } from 'shared/ui/listing';
import { ActionsCell } from 'shared/ui/table';
import type { Post } from '../../model';

interface Options {
  onRedirectToBlogDetails: (blogId: string) => void;
}

export function postsTableConfig({ onRedirectToBlogDetails }: Options): Array<Column<Post>> {
  return [
    {
      dataKey: 'title',
      header: 'Title',
    },
    {
      dataKey: 'content',
      header: 'Content',
    },
    {
      dataKey: 'shortDescription',
      header: 'Short Description',
    },
    {
      dataKey: 'createdAt',
      header: 'Created at',
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
        <ActionsCell
          entityId={entity.id}
          ownActionsSlot={() => (
            <Tooltip title="Go to blog details">
              <IconButton
                size="small"
                onClick={() => {
                  onRedirectToBlogDetails(entity.blogId);
                }}>
                <DynamicFeed />
              </IconButton>
            </Tooltip>
          )}
        />
      ),
    },
  ];
}
