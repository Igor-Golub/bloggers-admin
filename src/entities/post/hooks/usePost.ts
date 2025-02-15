import { postApi } from '../model/api.ts';

export function usePost() {
  const { data, isLoading } = postApi.usePostsListQuery({});

  return {
    posts: data?.items ?? [],
    isLoading,
  };
}
