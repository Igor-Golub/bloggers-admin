import { createContext } from 'react';
import type { Dialogs } from 'app/types.ts';
import { DialogTypes } from 'shared/ui/dialog';

type DialogContextValues = { state: Partial<Dialogs> };

type DialogContext = DialogContextValues & {
  onOpen: <Type extends DialogTypes>(type: Type, data: Dialogs[Type]['data']) => void;
  onClose: <Type extends DialogTypes>(type: Type) => void;
};

export const dialogContext = createContext<DialogContext | null>(null);
