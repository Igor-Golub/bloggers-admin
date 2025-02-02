import { PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

export const MUIThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};