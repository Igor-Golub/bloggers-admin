import { Fragment, ReactNode } from 'react';
import { useAppSelector } from 'shared/hooks';
import { selectOpenedDialogs } from 'shared/ui/dialog/model/slice.ts';
import { DialogTypes } from './types.ts';

interface Props {
  dialogs: Partial<Record<DialogTypes, ReactNode>>;
}

export function DialogsContainer({ dialogs }: Props) {
  const openedDialogs = useAppSelector(selectOpenedDialogs);

  return (
    <>
      {openedDialogs.map(type => (
        <Fragment key={type}>{dialogs[type]}</Fragment>
      ))}
    </>
  );
}
