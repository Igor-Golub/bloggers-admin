import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { DialogProvider } from 'shared/ui/dialog';
import { store } from '../store';
import { MUIThemeProvider } from './theme/ThemeProvider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <MUIThemeProvider>
        <DialogProvider>{children}</DialogProvider>
      </MUIThemeProvider>
    </Provider>
  );
};
