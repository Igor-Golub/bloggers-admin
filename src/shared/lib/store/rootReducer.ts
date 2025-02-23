import { combineSlices } from '@reduxjs/toolkit';
import { baseApi } from '../../api/baseApi.ts';

export const rootReducer = combineSlices(baseApi);
