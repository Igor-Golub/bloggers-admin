import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../../api/baseApi.ts';

export const rootReducer = combineReducers(baseApi);
