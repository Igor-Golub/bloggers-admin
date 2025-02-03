import { useContext } from 'react';
import { Dialogs } from 'app/types.ts';
import { DialogTypes } from 'shared/ui/dialog';
import { dialogContext } from './dialogContext.ts';

export function useDialog<Key extends DialogTypes>(type: Key) {
  const context = useContext(dialogContext);

  if (!context) throw new Error('useDialog must be used within the dialog');

  return {
    isOpen: context.state[type]?.isOpen ?? false,
    onClose: () => context.onClose(type),
    data: (context.state[type]?.data as Dialogs[Key]['data']) ?? null,
    onOpen: (data: Dialogs[Key]['data']) => context.onOpen(type, data),
  };
}
