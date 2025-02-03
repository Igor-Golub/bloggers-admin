import { Typography } from '@mui/material';
import { CommonDialogLayout } from '../CommonDialogLayout';
import { DialogTypes } from '../types.ts';

export function LoadingDialog() {
  return (
    <CommonDialogLayout
      maxWidth="xs"
      type={DialogTypes.CommonLoading}
      content={<Typography>Loading...</Typography>}
    />
  );
}
