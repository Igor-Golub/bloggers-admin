import { PropsWithChildren } from 'react';
import { BaseTableEntity, FiltersConfiguration, Pagination, PaginationActions } from '../types.ts';
import { ColumnsManagerContextProvider } from './columnsManager';
import { FiltersContextProvider } from './filtersManager';
import { TableManagerContextProvider } from './tableManager';

interface Props<TableEntity extends BaseTableEntity> extends Partial<PaginationActions> {
  tableData: TableEntity[];
  pagination?: Pagination;
  groupBy?: keyof TableEntity;
  filtersConfiguration?: FiltersConfiguration<TableEntity>[];
}

export const Providers = <TableEntity extends BaseTableEntity>({
  children,
  ...other
}: PropsWithChildren<Props<TableEntity>>) => {
  return (
    <FiltersContextProvider>
      <ColumnsManagerContextProvider<TableEntity>>
        <TableManagerContextProvider<TableEntity> {...other}>{children}</TableManagerContextProvider>
      </ColumnsManagerContextProvider>
    </FiltersContextProvider>
  );
};
