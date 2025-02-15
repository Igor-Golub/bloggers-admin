import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postApi } from 'entities/post';
import { BaseTableEntity, Listing } from 'shared/ui/listing';
import { Pagination } from 'shared/ui/listing/types.ts';
import type { Post } from '../../model';
import { postsTableConfig } from './tableConfig.tsx';

export function PostsTable() {
  const [pagination, setPagination] = useState<Pagination>({ page: 0, pageSize: 5, totalCount: 0 });

  const { data, isLoading } = postApi.usePostsListQuery({
    pageSize: pagination.pageSize,
    pageNumber: pagination.page + 1,
  });

  const navigation = useNavigate();

  const columns = postsTableConfig({
    onRedirectToBlogDetails: blogId => {
      navigation(`blog/${blogId}`);
    },
  });

  return (
    <Listing<Post, Post & BaseTableEntity>
      columns={columns}
      loading={isLoading}
      listingName="Posts"
      pagination={{
        pageSize: data?.pageSize ?? 5,
        totalCount: data?.totalCount ?? 0,
        page: data?.page ? data.page - 1 : 0,
      }}
      renderData={data?.items ?? []}
      onPaginationChanged={nextValue => {
        setPagination(prev => ({ ...prev, ...nextValue }));
      }}
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
