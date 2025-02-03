import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'shared/api/baseApi';
import { dialogsReducer, dialogsReducerName } from 'shared/ui/dialog';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [dialogsReducerName]: dialogsReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true }).concat(baseApi.middleware),
});
