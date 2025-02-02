import { Container, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  header: ReactNode;
  navigationMenu: ReactNode;
  content: ReactNode;
}

export function MainLayout({ header, navigationMenu, content }: Props) {
  return (
    <>
      <CssBaseline />

      {header}

      {navigationMenu}

      <Container
        component="main"
        maxWidth={false}
        sx={{ height: '100vh', width: '100vw', padding: '5rem 1rem 1rem 1rem', margin: 0 }}>
        {content}
      </Container>
    </>
  );
}
