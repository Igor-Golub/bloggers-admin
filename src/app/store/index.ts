import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'shared/api/baseApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true }).concat(baseApi.middleware),
});
