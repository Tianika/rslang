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
    changeSprintLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
    setSprintWordsArray: (state, action) => {
      state.words = action.payload;
    },
    addSprintRightAnswers: (state, action) => {
      state.rightAnswers.push(action.payload);
    },
    addSprintErrorAnswers: (state, action) => {
      state.errorAnswers.push(action.payload);
    },
    resetSprintAnswerArrays: (state) => {
      state.rightAnswers = [];
      state.errorAnswers = [];
    }
  }
});

export const sprintGameReducer = sprintGameSlice.reducer;
export const sprintGameActions = sprintGameSlice.actions;
