import { Close } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { useDialog } from './hooks/useDialog.ts';
import { DialogTypes, Dialogs } from './types.ts';

interface Props<Key extends DialogTypes> {
  type: DialogTypes;
  title: (data: Dialogs[Key]['data']) => ReactNode;
  content: (data: Dialogs[Key]['data']) => ReactNode;
  actions: (data: Dialogs[Key]['data']) => ReactNode;
}

export function CommonDialogLayout<Key extends DialogTypes>({ type, title, content, actions }: Props<Key>) {
  const { isOpen, data, onClose } = useDialog(type);

  return (
    <Dialog open={isOpen} fullWidth maxWidth="md" onClose={onClose}>
      <Stack
        sx={{ paddingRight: '1.5rem' }}
        direction="row"
        alignItems="center"
        justifyContent="space-between">
        <DialogTitle>{title(data)}</DialogTitle>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Stack>

      <DialogContent>{content(data)}</DialogContent>
      <DialogActions>{actions(data)}</DialogActions>
    </Dialog>
  );
}
