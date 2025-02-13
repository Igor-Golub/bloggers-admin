import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { BaseTableEntity, FiltersConfiguration, Pagination } from '../../types.ts';
import { useFiltersManagerContext } from '../filtersManager';
import { tableManagerContext as TableManagerContext } from './tableManagerContext.ts';

interface Props<TableEntity extends BaseTableEntity> {
  tableData: TableEntity[];
  groupBy?: keyof TableEntity;
  filtersConfiguration?: FiltersConfiguration<TableEntity>[];
}

export const TableManagerContextProvider = <TableEntity extends BaseTableEntity>({
  children,
  groupBy,
  tableData,
  filtersConfiguration,
}: PropsWithChildren<Props<TableEntity>>) => {
  const { filtersValues } = useFiltersManagerContext();

  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    limit: 10,
    total: tableData.length,
  });

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

    setPagination(prev => ({ page: 0, limit: prev.limit, total: filteredTableData.length }));

    return filteredTableData;
  }, [tableData, groupBy, filtersValues, filtersConfiguration]);

  const handleChangePage = useCallback((nextValue: number) => {
    setPagination(prev => ({
      ...prev,
      page: nextValue,
    }));
  }, []);

  const handleChangeRowsPerPage = useCallback((nextValue: number) => {
    setPagination(prev => ({
      ...prev,
      page: 0,
      limit: nextValue,
    }));
  }, []);

  const value = useMemo(
    () => ({
      ...pagination,
      selectedRows,
      handleChangePage,
      handleChangeRowsPerPage,
      tableData: tableDataWithGroup,
      handleChangeSelectedRows: setSelectedRows,
    }),
    [pagination, selectedRows, handleChangePage, handleChangeRowsPerPage, tableDataWithGroup]
  );

  return <TableManagerContext.Provider value={value}>{children}</TableManagerContext.Provider>;
};
