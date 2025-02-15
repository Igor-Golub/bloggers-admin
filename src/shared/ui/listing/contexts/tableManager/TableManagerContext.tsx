import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { BaseTableEntity, FiltersConfiguration, Pagination, PaginationActions } from '../../types.ts';
import { useFiltersManagerContext } from '../filtersManager';
import { tableManagerContext as TableManagerContext } from './tableManagerContext.ts';

interface Props<TableEntity extends BaseTableEntity> extends Partial<PaginationActions> {
  tableData: TableEntity[];
  pagination?: Pagination;
  groupBy?: keyof TableEntity;
  filtersConfiguration?: FiltersConfiguration<TableEntity>[];
}

export const TableManagerContextProvider = <TableEntity extends BaseTableEntity>({
  groupBy,
  children,
  tableData,
  pagination,
  onPaginationChanged,
  filtersConfiguration,
}: PropsWithChildren<Props<TableEntity>>) => {
  const { filtersValues } = useFiltersManagerContext();

  const [paginationState, setPaginationState] = useState<Pagination>(
    pagination ?? {
      page: 0,
      pageSize: 10,
      totalCount: tableData.length,
    }
  );

  useEffect(() => {
    if (pagination) {
      setPaginationState(pagination);
    }
  }, [pagination]);

  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const tableDataWithGroup = useMemo(() => {
    const filteredTableData = filtersConfiguration
      ? tableData.filter(entity =>
          Object.entries(filtersValues).every(([filter, value]) => {
            const configurationByFilterValue = filtersConfiguration.find(
              ({ filterValue }) => filterValue === filter
            );

            if (typeof value === 'boolean' && value) {
              return configurationByFilterValue?.fields.some(
                field => typeof entity?.[field] === 'boolean' && entity?.[field]
              );
            }

            if (typeof value === 'string') {
              return configurationByFilterValue?.fields.some(field =>
                entity?.[field]
                  ?.toString()
                  ?.toLowerCase()
                  ?.includes(value?.toLowerCase() ?? '')
              );
            }

            return true;
          })
        )
      : tableData;

    if (groupBy) {
      const groupedTableData = filteredTableData.reduce(
        (acc, entity) => {
          const key = entity?.[groupBy]?.toString();

          if (!key) return acc;

          if (acc[key]) acc[key].push(entity);
          else acc[key] = [entity];

          return acc;
        },
        {} as Record<string, TableEntity[]>
      );

      return Object.values(groupedTableData).reduce<TableEntity[]>((acc, groupData) => {
        acc.push(...groupData);
        return acc;
      }, []);
    }

    setPaginationState(prev => ({ page: 0, pageSize: prev.pageSize, totalCount: filteredTableData.length }));

    return filteredTableData;
  }, [tableData, groupBy, filtersValues, filtersConfiguration]);

  const handleChangePage = useCallback(
    (nextValue: number) => {
      setPaginationState(prev => ({
        ...prev,
        page: nextValue,
      }));

      if (typeof onPaginationChanged === 'function') onPaginationChanged({ page: nextValue });
    },
    [onPaginationChanged]
  );

  const handleChangeRowsPerPage = useCallback(
    (nextValue: number) => {
      setPaginationState(prev => ({
        ...prev,
        page: 0,
        limit: nextValue,
      }));

      if (typeof onPaginationChanged === 'function') onPaginationChanged({ pageSize: nextValue });
    },
    [onPaginationChanged]
  );

  const value = useMemo(
    () => ({
      ...paginationState,
      selectedRows,
      handleChangePage,
      handleChangeRowsPerPage,
      tableData: tableDataWithGroup,
      handleChangeSelectedRows: setSelectedRows,
    }),
    [paginationState, selectedRows, handleChangePage, handleChangeRowsPerPage, tableDataWithGroup]
  );

  return <TableManagerContext.Provider value={value}>{children}</TableManagerContext.Provider>;
};
