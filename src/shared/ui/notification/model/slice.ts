import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { rootReducer } from '../../../lib/store/rootReducer.ts';
import { Notification } from '../types.ts';

const initialState: Record<string, Notification> = {};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  selectors: {
    notifications: sliceState => Object.values(sliceState),
  },
  reducers: {
    show(state, { payload }: PayloadAction<{ notification: Omit<Notification, 'id'> }>) {
      const id = Date.now().toString();

      return {
        ...state,
        [id]: {
          ...payload.notification,
          id,
          type: payload.notification?.type ?? 'success',
          duration: payload.notification?.duration ?? 2000,
        },
      };
    },
    hide(state, { payload }: PayloadAction<{ id: string }>) {
      delete state[payload.id];
    },
  },
}).injectInto(rootReducer);

export const { actions: notificationActions, selectors: notificationSelectors } = notificationSlice;
