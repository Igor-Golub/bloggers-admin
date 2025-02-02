import { Stack, Typography } from '@mui/material';
import { Pagination as PaginationComponent } from './Pagination';

interface Props {
  isSelected: boolean;
  selectedRows: string[];
}

export const TableFooter = ({ isSelected, selectedRows }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        borderTop: ({ palette }) => `1px solid ${palette.divider}`,
      }}>
      {isSelected && (
        <Typography component="span" variant="body2">
          Selected: {selectedRows.length}
        </Typography>
      )}

      <PaginationComponent />
    </Stack>
  );
};
