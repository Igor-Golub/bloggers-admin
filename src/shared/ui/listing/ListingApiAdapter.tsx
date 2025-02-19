import { ReactNode, useState } from 'react';
import { postApi } from 'entities/post';
import { Pagination, PaginationActions } from 'shared/ui/listing/types.ts';

export const ListingApiAdapter = <Entity extends any>({
  render,
}: {
  render: (
    option: { pagination: Pagination; isLoading: boolean; renderData: Entity[] } & PaginationActions
  ) => ReactNode;
}) => {
  const [pagination, setPagination] = useState<Pagination>({ page: 0, pageSize: 5, totalCount: 0 });

  const { data, isLoading } = postApi.usePostsListQuery({
    pageSize: pagination.pageSize,
    pageNumber: pagination.page + 1,
  });

  const onPaginationChanged = (nextValue: Partial<Pagination>) => {
    setPagination(prev => ({ ...prev, ...nextValue }));
  };

  return (
    <>
      {render({
        isLoading,
        renderData: data?.items ?? [],
        onPaginationChanged,
        pagination: {
          pageSize: data?.pageSize ?? 5,
          totalCount: data?.totalCount ?? 0,
          page: data?.page ? data.page - 1 : 0,
        },
      })}
    </>
  );
};
