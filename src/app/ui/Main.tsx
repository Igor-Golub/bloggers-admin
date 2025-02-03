import { ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ConfirmationDialog, DialogTypes, DialogsContainer, LoadingDialog } from 'shared/ui/dialog';
import { NotificationProvider } from 'shared/ui/notification';
import { Header } from './Header.tsx';
import { MainLayout } from './MainLayout.tsx';
import { NavigationMenu } from './NavigationMenu.tsx';

export function Main() {
  const [isDroverOpen, setIsDroverOpen] = useState(false);

  const handleOpen = () => setIsDroverOpen(true);
  const handleClose = () => setIsDroverOpen(false);

  const commonDialogs: Partial<Record<DialogTypes, ReactNode>> = {
    [DialogTypes.CommonConfirmation]: <ConfirmationDialog />,
    [DialogTypes.CommonLoading]: <LoadingDialog />,
  };

  return (
    <>
      <MainLayout
        header={<Header onOpen={handleOpen} />}
        navigationMenu={<NavigationMenu isOpen={isDroverOpen} onClose={handleClose} />}
        content={<Outlet />}
      />

      <DialogsContainer dialogs={commonDialogs} />

      <NotificationProvider />
    </>
  );
}
