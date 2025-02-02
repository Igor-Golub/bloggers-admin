import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'app/ui/Header.tsx';
import { NavigationMenu } from 'app/ui/NavigationMenu.tsx';
import { MainLayout } from './MainLayout.tsx';

export function Main() {
  const [isDroverOpen, setIsDroverOpen] = useState(false);

  const handleOpen = () => setIsDroverOpen(true);
  const handleClose = () => setIsDroverOpen(false);

  return (
    <MainLayout
      header={<Header onOpen={handleOpen} />}
      navigationMenu={<NavigationMenu isOpen={isDroverOpen} onClose={handleClose} />}
      content={<Outlet />}
    />
  );
}
