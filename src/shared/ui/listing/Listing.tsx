import { ListingContainer } from './ListingContainer';
import { TableConfigurationPanel } from './configurationPanel/TableConfigurationPanel';
import { Providers } from './contexts';
import { ListingFilters } from './filters/ListingFilters';
import { ListingTable } from './table/ListingTable';
import { TableNameWithActions } from './table/TableNameWithActions';
import { BaseTableEntity, ListingProps } from './types';

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
  filtersConfiguration,
}: ListingProps<Entity, TableEntity>) => {
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
          columnsConfigurator={columnsConfigurator}
        />
      </ListingContainer>
    </Providers>
  );
};
