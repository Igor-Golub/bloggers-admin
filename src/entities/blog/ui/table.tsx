import { blogApi } from 'entities/blog';
import { Table } from 'shared/ui/table';

export function BlogsTable() {
  const {data, isLoading} = blogApi.useBlogsListQuery()

  if(isLoading || !data) return <>Loading</>

  return <Table columns={['name', 'description', 'createdAt', 'websiteUrl']} data={data.items} />
}