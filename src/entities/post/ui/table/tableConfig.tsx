import { Column } from 'shared/ui/listing';
import type { Post } from '../../model';

export function postsTableConfig(): Array<Column<Post>> {
  return [
    {
      dataKey: 'title',
      header: 'Title',
    },
    {
      dataKey: 'createdAt',
      header: 'Created at',
    },
  ];
}
