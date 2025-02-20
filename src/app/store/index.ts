import { configureStore } from '@reduxjs/toolkit';
import { router } from 'app/router';
import { baseApi } from 'shared/api/baseApi';
import { notificationReducer, notificationReducerName } from 'shared/ui/notification';

export const extraArgument = {
  router,
};

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [notificationReducerName]: notificationReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(baseApi.middleware),
});
