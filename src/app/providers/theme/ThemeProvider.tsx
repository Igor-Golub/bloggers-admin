import { ThemeProvider, createTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

export const MUIThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'outlined',
          color: 'inherit',
          size: 'small',
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
