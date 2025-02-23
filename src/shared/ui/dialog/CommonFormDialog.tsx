import { Close } from '@mui/icons-material';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';
import { ReactNode } from 'react';
import { useDialog } from './context/useDialog.ts';
import { DialogTypes } from './types.ts';

interface Props extends Omit<DialogProps, 'onClose' | 'open' | 'title' | 'content'> {
  type: DialogTypes;
  title?: ReactNode;
  content?: ReactNode;
  actions?: ReactNode;
  onSubmit: VoidFunction;
}

export function CommonFromDialog({ type, title, content, actions, onSubmit, ...other }: Props) {
  const { isOpen, onClose } = useDialog(type);

  return (
    <Dialog open={isOpen} fullWidth maxWidth="md" onClose={onClose} {...other}>
      <form onSubmit={onSubmit}>
        {title && (
          <Stack
            sx={{ paddingRight: '1rem' }}
            direction="row"
            alignItems="center"
            justifyContent="space-between">
            <DialogTitle>{title}</DialogTitle>
            <IconButton size="small" onClick={onClose}>
              <Close />
            </IconButton>
          </Stack>
        )}

        {!!content && <DialogContent>{content}</DialogContent>}
        {!!actions && <DialogActions>{actions}</DialogActions>}
      </form>
    </Dialog>
  );
}
