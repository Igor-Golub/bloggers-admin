import { AlertColor } from '@mui/material/Alert/Alert';

export interface Notification {
  id: string;
  duration?: number;
  message: string;
  type?: AlertColor;
}
