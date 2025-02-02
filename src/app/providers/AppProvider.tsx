import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { MUIThemeProvider } from './theme/ThemeProvider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <MUIThemeProvider>{children}</MUIThemeProvider>
    </Provider>
  );
};
