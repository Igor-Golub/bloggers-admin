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
    show(state, { payload }: PayloadAction<{ notification: Notification }>) {
      return {
        ...state,
        [payload.notification.id]: payload.notification,
      };
    },
    hide(state, { payload }: PayloadAction<{ id: string }>) {
      delete state[payload.id];
    },
  },
}).injectInto(rootReducer);

export const { actions: notificationActions, selectors: notificationSelectors } = notificationSlice;
