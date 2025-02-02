import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

interface Props {
  blogId: string;
  handleUpdate: (blogId: string) => void;
  handleDelete: (blogId: string) => void;
}

export function Actions({ blogId, handleDelete, handleUpdate }: Props) {
  return (
    <Stack direction="row" gap="0.5rem" justifyContent="center">
      <IconButton
        size="small"
        color="primary"
        onClick={event => {
          event.stopPropagation();
          handleUpdate(blogId);
        }}>
        <Edit />
      </IconButton>

      <IconButton
        size="small"
        color="error"
        onClick={event => {
          event.stopPropagation();
          handleDelete(blogId);
        }}>
        <Delete />
      </IconButton>
    </Stack>
  );
}
