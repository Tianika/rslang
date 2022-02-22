import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { AudioWordsState } from './types';

const initialState: AudioWordsState = {
  loadingState: LoadingState.Initial,
  words: [],
  rightAnswers: [],
  errorAnswers: [],
  fakeWords: []
};

//создаем редюсеры
export const audioGameSlice = createSlice({
  name: 'audio/game',
  initialState,
  reducers: {
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
    setWordsArray: (state, action) => {
      state.words = action.payload;
    },
    setFakeWordsArray: (state, action) => {
      state.fakeWords = action.payload;
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

export const audioGameReducer = audioGameSlice.reducer;
export const audioGameActions = audioGameSlice.actions;
