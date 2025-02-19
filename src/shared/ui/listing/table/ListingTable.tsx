import { Paper, Table, TableContainer } from '@mui/material';
import { useMemo } from 'react';
import { useTableManagerContext } from '../contexts';
import { useColumnsManagerContext } from '../contexts/columnsManager';
import { BaseTableEntity, Column, ColumnsConfiguration } from '../types';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';
import { SelectCell } from './innerColumns';

interface Props<TableEntity extends BaseTableEntity> {
  loading: boolean;
  columns: Column<TableEntity>[];
  onRowClick?: (row: TableEntity) => void;
  columnsConfigurator?: ColumnsConfiguration;
  onSelect?: (selectedRowId: string, selectedRows: string[]) => void;
}

export const ListingTable = <TableEntity extends BaseTableEntity>({
  columns,
  onSelect,
  loading,
  onRowClick,
  columnsConfigurator,
}: Props<TableEntity>) => {
  const { selectedRows } = useTableManagerContext();
  const { columnsValues } = useColumnsManagerContext<TableEntity>();

  const innerColumns = useMemo(() => {
    const selectColum: Column<TableEntity> = {
      header: 'Select',
      dataKey: 'select',
      renderCell: entity => <SelectCell entity={entity} onSelect={onSelect} key={`select_${entity.id}`} />,
    };

    return [selectColum, ...columns]
      .filter(column => {
        if (column.dataKey === 'select' && !onSelect) return false;

        return true;
      })
      .filter(({ dataKey }) => columnsValues?.[dataKey] ?? true);
  }, [onSelect, columns, columnsValues]);

  return (
    <Paper elevation={2} sx={{ flex: 1, overflowX: 'auto', border: '1px solid gray' }}>
      <TableContainer sx={{ height: 'calc(100% - 64px)' }}>
        <Table stickyHeader>
          <TableHeader columns={innerColumns} columnsConfigurator={columnsConfigurator} />

          <TableBody loading={loading} columns={innerColumns} onRowClick={onRowClick} />
        </Table>
      </TableContainer>

      <TableFooter isSelected={!!onSelect} selectedRows={selectedRows} />
    </Paper>
  );
};
