import { TablePagination } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { useTableManagerContext } from '../contexts';

export const Pagination = () => {
  const { page, totalCount, pageSize, handleChangePage, handleChangeRowsPerPage } = useTableManagerContext();

  return (
    <TablePagination
      page={page}
      component="div"
      count={totalCount}
      rowsPerPage={pageSize}
      rowsPerPageOptions={[5, 10, 25]}
      ActionsComponent={TablePaginationActions}
      onPageChange={(_, page) => handleChangePage(page)}
      onRowsPerPageChange={event => handleChangeRowsPerPage(parseInt(event.target.value, 10))}
    />
  );
};
