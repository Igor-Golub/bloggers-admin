import { PropsWithChildren } from 'react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { MUIThemeProvider } from './theme/ThemeProvider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <MUIThemeProvider>
        {children}
      </MUIThemeProvider>
    </Provider>
  );
};