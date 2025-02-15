import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { usePost } from 'entities/post';
import { BaseTableEntity, Listing } from 'shared/ui/listing';
import type { Post } from '../../model';
import { postsTableConfig } from './tableConfig.tsx';

export function PostsTable() {
  const { posts, isLoading } = usePost();

  const navigation = useNavigate();

  const columns = postsTableConfig({
    onRedirectToBlogDetails: blogId => {
      navigation(`blog/${blogId}`);
    },
  });

  return (
    <Listing<Post, Post & BaseTableEntity>
      columns={columns}
      renderData={posts}
      loading={isLoading}
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
