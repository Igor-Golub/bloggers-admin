import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { BaseTableEntity, Listing } from 'shared/ui/listing';
import type { Post } from '../../model';
import { postsTableConfig } from './tableConfig.tsx';

export function PostsTable() {
  const columns = postsTableConfig();

  return (
    <Listing<Post, Post & BaseTableEntity>
      columns={columns}
      renderData={[]}
      listingName="Posts"
      tableDataAdapter={(entity, index) => ({
        ...entity,
        renderIndex: index,
      })}
      listingActions={
        <Button color="inherit" variant="contained" startIcon={<Add />} onClick={() => {}}>
          Add
        </Button>
      }
    />
  );
}
