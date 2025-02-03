import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NotificationProvider } from 'shared/ui/notification';
import { Header } from './Header.tsx';
import { MainLayout } from './MainLayout.tsx';
import { NavigationMenu } from './NavigationMenu.tsx';

export function Main() {
  const [isDroverOpen, setIsDroverOpen] = useState(false);

  const handleOpen = () => setIsDroverOpen(true);
  const handleClose = () => setIsDroverOpen(false);

  return (
    <>
      <MainLayout
        header={<Header onOpen={handleOpen} />}
        navigationMenu={<NavigationMenu isOpen={isDroverOpen} onClose={handleClose} />}
        content={<Outlet />}
      />
      <NotificationProvider />
    </>
  );
}
