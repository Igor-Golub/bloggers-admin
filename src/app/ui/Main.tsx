import { Container, CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Main = ({ children }: PropsWithChildren) => (
  <>
    <CssBaseline />

    <Container
      component="main"
      maxWidth={false}
      sx={{ height: '100vh', width: '100vw', padding: '1rem', margin: 0 }}>
      {children}
    </Container>
  </>
);
