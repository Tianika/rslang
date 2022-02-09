import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { SprintFetch } from './types';

const initialState: SprintFetch = {
  level: '1',
  loadingState: LoadingState.Initial
};

//создаем редюсеры
export const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    changeLevel: (state, action) => {
      state.level = action.payload;
    },
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    }
  }
});

export const sprintReducer = sprintSlice.reducer;
//добавить sprintReducer в reducer.ts

export const sprintActions = sprintSlice.actions;
