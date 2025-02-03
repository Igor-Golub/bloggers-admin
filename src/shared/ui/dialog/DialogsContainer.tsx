import { Fragment, ReactNode } from 'react';
import { useSystemDialog } from './context/useSystemDialog.ts';
import { DialogTypes } from './types.ts';

interface Props {
  dialogs: Partial<Record<DialogTypes, ReactNode>>;
}

export function DialogsContainer({ dialogs }: Props) {
  const openedDialogs = useSystemDialog();

  return (
    <>
      {openedDialogs.map(type => (
        <Fragment key={type}>{dialogs[type]}</Fragment>
      ))}
    </>
  );
}
