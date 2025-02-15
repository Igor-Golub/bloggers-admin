import { ReactNode } from 'react';
import { ListingContainer } from './ListingContainer';
import { TableConfigurationPanel } from './configurationPanel/TableConfigurationPanel';
import { Providers } from './contexts';
import { ListingFilters } from './filters/ListingFilters';
import { ListingTable } from './table/ListingTable';
import { TableNameWithActions } from './table/TableNameWithActions';
import {
  BaseTableEntity,
  Column,
  ColumnsConfiguration,
  FiltersConfiguration,
  Pagination,
  PaginationActions,
} from './types';

interface Actions<TableEntity extends BaseTableEntity> extends PaginationActions {
  onRowClick: (row: TableEntity) => void;
  onSelect: (selectedRowId: string, selectedRows: string[]) => void;
}

interface Props<Entity, TableEntity extends BaseTableEntity> extends Partial<Actions<TableEntity>> {
  loading?: boolean;
  listingName?: string;
  renderData: Entity[];
  withNumber?: boolean;
  pagination?: Pagination;
  listingActions?: ReactNode;
  groupBy?: keyof TableEntity;
  columns: Column<TableEntity>[];
  columnsConfigurator?: ColumnsConfiguration;
  filtersConfiguration?: FiltersConfiguration<TableEntity>[];
  tableDataAdapter: (entity: Entity, index: number) => TableEntity;
}

export const Listing = <Entity extends any, TableEntity extends BaseTableEntity>({
  columns,
  groupBy,
  onSelect,
  renderData,
  onRowClick,
  listingName,
  pagination,
  loading = false,
  listingActions,
  tableDataAdapter,
  onPaginationChanged,
  columnsConfigurator,
  withNumber = false,
  filtersConfiguration,
}: Props<Entity, TableEntity>) => {
  const tableData = renderData.map(tableDataAdapter);

  return (
    <Providers<TableEntity>
      groupBy={groupBy}
      tableData={tableData}
      pagination={pagination}
      onPaginationChanged={onPaginationChanged}
      filtersConfiguration={filtersConfiguration}>
      <ListingContainer>
        <TableNameWithActions listingName={listingName} listingActions={listingActions} />

        {filtersConfiguration && <ListingFilters<TableEntity> configuration={filtersConfiguration} />}

        {columnsConfigurator && <TableConfigurationPanel<TableEntity> columns={columns} />}

        <ListingTable<TableEntity>
          loading={loading}
          columns={columns}
          onSelect={onSelect}
          onRowClick={onRowClick}
          withNumber={withNumber}
          columnsConfigurator={columnsConfigurator}
        />
      </ListingContainer>
    </Providers>
  );
};
