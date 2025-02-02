import { Listing, BaseTableEntity } from 'shared/ui/listing';
import { Blog, blogApi } from '../../model';
import { blogsTableConfig } from './tableConfig.tsx';

export function BlogsTable() {
  const { data } = blogApi.useBlogsListQuery({});

  const columns = blogsTableConfig()

  return <Listing<Blog, Blog & BaseTableEntity>
    columns={columns}
    renderData={data?.items ?? []}
    listingName="Blogs"
    tableDataAdapter={(entity, index) => ({
      ...entity, renderIndex: index
    })} />;
}