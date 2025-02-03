import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'shared/lib/store/types.ts';
import { DialogTypes, Dialogs } from 'shared/ui/dialog/types.ts';

const initialState: Partial<Dialogs> = {};

const dialogSlice = createSlice({
  name: 'dialogs',
  initialState,
  selectors: {
    dialogStatus: (sliceState, key: DialogTypes) => sliceState[key] || { isOpen: false, data: null },
  },
  reducers: {
    openDialog<T extends DialogTypes>(
      state: Partial<Dialogs>,
      { payload }: PayloadAction<{ type: T; data: Dialogs[T]['data'] | null }>
    ) {
      if (!state[payload.type]) {
        state[payload.type] = { isOpen: false, data: null };
      }

      state[payload.type]!.isOpen = true;
      state[payload.type]!.data = payload.data;
    },
    closeDialog<T extends DialogTypes>(state: Partial<Dialogs>, { payload }: PayloadAction<{ type: T }>) {
      if (state[payload.type]) {
        delete state[payload.type];
      }
    },
  },
});

export const selectOpenedDialogs = createSelector([(state: RootState) => state.dialogs], dialogsState =>
  Object.keys(dialogsState).filter(
    (key): key is DialogTypes => dialogsState[key as DialogTypes]?.isOpen === true
  )
);

export const {
  name: dialogsReducerName,
  actions: dialogsActions,
  reducer: dialogsReducer,
  selectors: dialogsSelectors,
} = dialogSlice;
