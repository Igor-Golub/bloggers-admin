import { useContext } from 'react';
import { DialogTypes } from 'shared/ui/dialog';
import { dialogContext } from './dialogContext.ts';

export function useSystemDialog() {
  const context = useContext(dialogContext);

  if (!context) throw new Error('useDialog must be used within the dialog');

  return Object.entries(context.state)
    .filter(([_, state]) => state?.isOpen)
    .map(([type]) => type) as DialogTypes[];
}
