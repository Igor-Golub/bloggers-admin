import { CheckboxProps, SelectProps, TableCellProps, TextFieldProps } from '@mui/material';
import { ReactNode } from 'react';

export interface BaseTableEntity extends Record<string, string | number | boolean | undefined> {
  id: string;
}

export interface Actions<TableEntity extends BaseTableEntity> extends PaginationActions {
  onRowClick: (row: TableEntity) => void;
  onSelect: (selectedRowId: string, selectedRows: string[]) => void;
}

export interface ListingProps<Entity, TableEntity extends BaseTableEntity>
  extends Partial<Actions<TableEntity>> {
  loading?: boolean;
  listingName?: string;
  renderData: Entity[];
  pagination?: Pagination;
  listingActions?: ReactNode;
  groupBy?: keyof TableEntity;
  columns: Column<TableEntity>[];
  columnsConfigurator?: ColumnsConfiguration;
  filtersConfiguration?: FiltersConfiguration<TableEntity>[];
  tableDataAdapter: (entity: Entity, index: number) => TableEntity;
}

export interface Column<TableEntity> {
  header: string;
  headerComponent?: ReactNode;
  bodyCellProps?: TableCellProps;
  headerCellProps?: TableCellProps;
  dataKey: keyof TableEntity | string;
  renderCell?: (entity: TableEntity, rowIndex: number) => ReactNode;
}

export interface Pagination {
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface PaginationActions {
  onPaginationChanged: (nextValue: Partial<Pagination>) => void;
}

export enum InputTypes {
  Text = 'text',
  Select = 'select',
  Checkbox = 'checkbox',
}

type InputPropsByType = {
  [InputTypes.Text]: Omit<TextFieldProps, 'value' | 'onChange'>;
  [InputTypes.Select]: Omit<SelectProps, 'value' | 'onChange'> & {
    options: { label: string; value: string }[];
  };
  [InputTypes.Checkbox]: Omit<CheckboxProps, 'value' | 'onChange'> & {
    label: string;
  };
};

export type FiltersConfiguration<TableEntity extends BaseTableEntity> = {
  [K in InputTypes]: {
    inputType: K;
    filterValue: string;
    fields: (keyof TableEntity)[];
    inputProps: InputPropsByType[K];
  };
}[InputTypes];

export type FilterComponentsMapper = Record<InputTypes, (inputProps: any, filterValue: any) => any>;

export type ColumnsConfiguration = {
  canHideColumn: boolean;
};
