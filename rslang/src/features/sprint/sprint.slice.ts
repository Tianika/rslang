import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { SprintFetch } from './types';

const initialState: SprintFetch = {
  level: 0,
  isGame: false,
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
    changeGameStatus: (state) => {
      state.isGame = !state.isGame;
    },
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    }
  }
});

export const sprintReducer = sprintSlice.reducer;
//добавить sprintReducer в reducer.ts

export const sprintActions = sprintSlice.actions;
