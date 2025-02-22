import { configureStore } from '@reduxjs/toolkit';
import { router } from 'app/router';
import { baseApi } from 'shared/api/baseApi';
import { rootReducer } from 'shared/lib/store/rootReducer.ts';

export const extraArgument = {
  router,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(baseApi.middleware),
});
