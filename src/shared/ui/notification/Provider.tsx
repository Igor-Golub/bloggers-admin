import { Alert, Snackbar } from '@mui/material';
import { useAppSelector } from 'shared/hooks';
import { useNotification } from 'shared/ui/notification/hooks/useNotification.ts';
import { notificationSelectors } from 'shared/ui/notification/model';

export function Provider() {
  const { onHide } = useNotification();
  const notifications = useAppSelector(notificationSelectors.notifications);

  return (
    <>
      {notifications.map(({ id, type, duration, message }) => (
        <Snackbar
          open
          key={id}
          autoHideDuration={duration}
          onClose={() => onHide(id)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert
            severity={type}
            variant="filled"
            onClose={() => onHide(id)}
            sx={{ width: '100%', minWidth: '20rem' }}>
            {message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}
