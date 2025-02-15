import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  entityId: string;
  handleUpdate?: (entityId: string) => void;
  handleDelete?: (entityId: string) => void;
  ownActionsSlot?: (entityId: string) => ReactNode;
}

export function Actions({ entityId, handleDelete, handleUpdate, ownActionsSlot }: Props) {
  return (
    <Stack direction="row" gap="0.5rem" justifyContent="center">
      {ownActionsSlot && ownActionsSlot(entityId)}

      {handleUpdate && (
        <IconButton
          size="small"
          color="primary"
          onClick={event => {
            event.stopPropagation();
            handleUpdate(entityId);
          }}>
          <Edit />
        </IconButton>
      )}

      {handleDelete && (
        <IconButton
          size="small"
          color="error"
          onClick={event => {
            event.stopPropagation();
            handleDelete(entityId);
          }}>
          <Delete />
        </IconButton>
      )}
    </Stack>
  );
}
