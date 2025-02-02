import { blogApi } from 'entities/blog';

interface Props {
  id: string;
}

export function BlogDetails({ id }: Props) {
  const { data, isLoading } = blogApi.useByIdQuery(id);

  if (isLoading) return <>Loading</>;

  return <>{data?.name}</>;
}
