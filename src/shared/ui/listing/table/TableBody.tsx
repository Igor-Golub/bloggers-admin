import { TableBody as MUITableBody, TableCell, TableRow } from '@mui/material';
import { Fragment, SyntheticEvent, useMemo } from 'react';
import { useTableManagerContext } from '../contexts';
import { BaseTableEntity, Column } from '../types';

interface Props<TableEntity extends BaseTableEntity> {
  loading: boolean;
  columns: Column<TableEntity>[];
  onRowClick?: (row: TableEntity) => void;
}

export const TableBody = <TableEntity extends BaseTableEntity>({
  loading,
  columns,
  onRowClick,
}: Props<TableEntity>) => {
  const { page, limit } = useTableManagerContext();
  const { tableData } = useTableManagerContext<TableEntity>();

  const tableDataWithPagination = useMemo(
    () => (limit > 0 ? tableData.slice(page * limit, page * limit + limit) : tableData),
    [limit, page, tableData]
  );

  const handleRowClick = (event: SyntheticEvent, row: TableEntity) => {
    if (typeof onRowClick !== 'function') return;

    event.stopPropagation();

    onRowClick(row);
  };

  return (
    <MUITableBody>
      {loading ? (
        <TableRow>
          <TableCell colSpan={columns.length}>Loading</TableCell>
        </TableRow>
      ) : (
        tableDataWithPagination.map((row, rowIndex) => (
          <Fragment key={row.id}>
            <TableRow
              onClick={event => {
                handleRowClick(event, row);
              }}
              sx={{
                '&:hover': {
                  cursor: onRowClick ? 'pointer' : 'default',
                  opacity: onRowClick ? 0.7 : 1,
                },
              }}>
              {columns.map(({ dataKey, renderCell, bodyCellProps = {} }) => (
                <TableCell key={`${row.id}_${dataKey.toString()}`} {...bodyCellProps}>
                  {renderCell?.(row, rowIndex) ?? row[dataKey]}
                </TableCell>
              ))}
            </TableRow>
          </Fragment>
        ))
      )}
    </MUITableBody>
  );
};
