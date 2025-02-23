import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

interface Props {
  handleOpenCreateBlogDialog: VoidFunction;
}

export const TableActions = ({ handleOpenCreateBlogDialog }: Props) => {
  return (
    <Button color="inherit" variant="contained" startIcon={<Add />} onClick={handleOpenCreateBlogDialog}>
      Add
    </Button>
  );
};
