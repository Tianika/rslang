import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { SprintWordsState } from './types';

const initialState: SprintWordsState = {
  loadingState: LoadingState.Initial,
  words: [],
  rightAnswers: [],
  errorAnswers: []
};

//создаем редюсеры
export const audioCallGameSlice = createSlice({
  name: 'sprint/game',
  initialState,
  reducers: {
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
    setWordsArray: (state, action) => {
      state.words = [...action.payload];
    },
    addRightAnswers: (state, action) => {
      state.rightAnswers.push(action.payload);
    },
    addErrorAnswers: (state, action) => {
      state.errorAnswers.push(action.payload);
    },
    resetAnswerArrays: (state) => {
      state.rightAnswers = [];
      state.errorAnswers = [];
    }
  }
});

export const sprintGameReducer = audioCallGameSlice.reducer;
//добавить sprintGameSlice в reducer.ts

export const sprintGameActions = audioCallGameSlice.actions;
