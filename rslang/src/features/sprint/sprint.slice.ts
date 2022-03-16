import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { SprintWordsState } from './types';

const initialState: SprintWordsState = {
  loadingState: LoadingState.Initial,
  words: [],
  userWords: [],
  rightAnswers: [],
  errorAnswers: []
};

export const sprintGameSlice = createSlice({
  name: 'sprint/game',
  initialState,
  reducers: {
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
    setWordsArray: (state, action) => {
      state.words = action.payload;
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
    },
    setUserWords: (state, action) => {
      state.userWords = action.payload;
    },
    resetUserWords: (state) => {
      state.userWords = [];
    }
  }
});

export const sprintGameReducer = sprintGameSlice.reducer;
export const sprintGameActions = sprintGameSlice.actions;
