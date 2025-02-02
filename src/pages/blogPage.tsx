import { useParams } from 'react-router-dom';
import { BlogDetails } from 'entities/blog/ui';

export function BlogPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return <BlogDetails id={id} />;
}
