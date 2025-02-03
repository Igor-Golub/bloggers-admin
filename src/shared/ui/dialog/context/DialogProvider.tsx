import { PropsWithChildren, useCallback, useState } from 'react';
import type { Dialogs } from 'app/types.ts';
import { DialogTypes } from 'shared/ui/dialog';
import { dialogContext as DialogContext } from './dialogContext.ts';

export function DialogProvider({ children }: PropsWithChildren) {
  const [contextState, setContextState] = useState<Partial<Dialogs>>({});

  const onOpen = useCallback(<T extends DialogTypes>(type: T, data: Dialogs[T]['data'] | null) => {
    setContextState(prevContextState => ({
      ...prevContextState,
      [type]: {
        data,
        isOpen: true,
      },
    }));
  }, []);

  const onClose = useCallback(<T extends DialogTypes>(type: T) => {
    setContextState(prevState => ({
      ...prevState,
      [type]: null,
    }));
  }, []);

  return (
    <DialogContext.Provider value={{ state: contextState, onOpen, onClose }}>
      {children}
    </DialogContext.Provider>
  );
}
