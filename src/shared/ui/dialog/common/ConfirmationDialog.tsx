import { Button, Typography } from '@mui/material';
import { useDialog } from 'shared/ui/dialog';
import { CommonDialogLayout } from '../CommonDialogLayout';
import { DialogTypes } from '../types.ts';

export function ConfirmationDialog() {
  const { data, onClose } = useDialog(DialogTypes.CommonConfirmation);

  return (
    <CommonDialogLayout
      maxWidth="xs"
      type={DialogTypes.CommonConfirmation}
      content={
        <Typography variant="h6" align="center">
          {data?.confirmationText}
        </Typography>
      }
      actions={
        <>
          <Button
            onClick={() => {
              data?.onConfirm();
              onClose();
            }}>
            Confirm
          </Button>
          <Button onClick={onClose}>Cansel</Button>
        </>
      }
    />
  );
}
