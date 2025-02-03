import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { DialogTypes, Dialogs } from 'shared/ui/dialog/types.ts';
import { dialogsActions, dialogsSelectors } from '../model/slice.ts';

export function useDialog<Key extends DialogTypes>(type: Key) {
  const dispatch = useAppDispatch();

  const dialogState = useAppSelector(state => dialogsSelectors.dialogStatus(state, type));

  const onOpen = useCallback(
    (data?: Dialogs[Key]['data']) => {
      dispatch(dialogsActions.openDialog({ type, data: data ?? null }));
    },
    [dispatch, type]
  );

  const onClose = useCallback(() => {
    dispatch(dialogsActions.closeDialog({ type }));
  }, [dispatch, type]);

  return {
    ...dialogState,
    onOpen,
    onClose,
  };
}
