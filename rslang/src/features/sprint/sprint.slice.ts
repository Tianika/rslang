import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { SprintWordsState } from './types';

const initialState: SprintWordsState = {
  loadingState: LoadingState.Initial,
  words: []
};

//создаем редюсеры
export const sprintGameSlice = createSlice({
  name: 'sprint/game',
  initialState,
  reducers: {
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
    setWordsArray: (state, action) => {
      state.words = [...action.payload];
    }
  }
});

export const sprintGameReducer = sprintGameSlice.reducer;
//добавить sprintGameSlice в reducer.ts

export const sprintGameActions = sprintGameSlice.actions;
