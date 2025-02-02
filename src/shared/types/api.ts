export interface ListResponse<Entity> {
  items: Entity[];
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
}
