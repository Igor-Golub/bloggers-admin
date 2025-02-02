import { PropsWithChildren } from 'react';
import { store } from 'app/store';
import { Provider } from 'react-redux';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};