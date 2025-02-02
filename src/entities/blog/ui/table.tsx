import { blogApi } from 'entities/blog';

export function Table() {
  const {data, isLoading} = blogApi.useBlogsListQuery()

  if(isLoading || !data) return <>Loading</>

  return <>{data.items.map((blog) => <div key={blog.id}>{blog.name}</div>)}</>
}