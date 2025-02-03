import { useAppDispatch } from 'shared/hooks';
import { notificationActions } from 'shared/ui/notification/model/slice.ts';
import { Notification } from 'shared/ui/notification/types.ts';

export function useNotification() {
  const dispatch = useAppDispatch();

  const onShow = (notification: Omit<Notification, 'id'>) => {
    dispatch(
      notificationActions.show({
        notification: {
          ...notification,
          id: Date.now().toString(),
          type: notification?.type ?? 'success',
          duration: notification?.duration ?? 3000,
        },
      })
    );
  };

  const onHide = (id: string) => {
    dispatch(notificationActions.hide({ id }));
  };

  return { onShow, onHide };
}
