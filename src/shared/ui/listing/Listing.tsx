import { ReactNode } from 'react';
import { ListingContainer } from './ListingContainer';
import { TableConfigurationPanel } from './configurationPanel/TableConfigurationPanel';
import { Providers } from './contexts';
import { ListingFilters } from './filters/ListingFilters';
import { ListingTable } from './table/ListingTable';
import { TableNameWithActions } from './table/TableNameWithActions';
import { BaseTableEntity, Column, ColumnsConfiguration, FiltersConfiguration } from './types';

interface Props<Entity, TableEntity extends BaseTableEntity> {
  listingName?: string;
  renderData: Entity[];
  withNumber?: boolean;
  loading?: boolean;
  listingActions?: ReactNode;
  groupBy?: keyof TableEntity;
  columns: Column<TableEntity>[];
  onRowClick?: (row: TableEntity) => void;
  columnsConfigurator?: ColumnsConfiguration;
  filtersConfiguration?: FiltersConfiguration<TableEntity>[];
  tableDataAdapter: (entity: Entity, index: number) => TableEntity;
  onSelect?: (selectedRowId: string, selectedRows: string[]) => void;
}

export const Listing = <Entity extends any, TableEntity extends BaseTableEntity>({
  columns,
  groupBy,
  onSelect,
  renderData,
  onRowClick,
  listingName,
  loading = false,
  listingActions,
  tableDataAdapter,
  columnsConfigurator,
  withNumber = false,
  filtersConfiguration,
}: Props<Entity, TableEntity>) => {
  const tableData = renderData.map(tableDataAdapter);

  return (
    <Providers<TableEntity>
      groupBy={groupBy}
      tableData={tableData}
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
