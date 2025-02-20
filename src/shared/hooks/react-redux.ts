import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { store } from 'app/store';
import { AppDispatch, RootState } from '../lib/store/types.ts';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<RootState>();
