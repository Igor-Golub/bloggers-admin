import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BaseTableEntity, Listing } from 'shared/ui/listing';
import { ListingApiAdapter } from 'shared/ui/listing/ListingApiAdapter.tsx';
import type { Post } from '../../model';
import { postsTableConfig } from './tableConfig.tsx';

export function PostsTable() {
  const navigation = useNavigate();

  const columns = postsTableConfig({
    onRedirectToBlogDetails: blogId => {
      navigation(`blog/${blogId}`);
    },
  });

  return (
    <ListingApiAdapter
      render={apiProps => (
        <Listing<Post, Post & BaseTableEntity>
          {...apiProps}
          columns={columns}
          listingName="Posts"
          tableDataAdapter={entity => entity}
          listingActions={
            <Button color="inherit" variant="contained" startIcon={<Add />} onClick={() => {}}>
              Add
            </Button>
          }
        />
      )}
    />
  );
}
