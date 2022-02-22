import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { WordsPageState } from './types';

const initialState: WordsPageState = {
  words: [],
  difficultWords: [],
  learnedWords: [],
  loadingState: LoadingState.Initial
};

//создаем редюсеры
export const wordsPageSlice = createSlice({
  name: 'wordsPage',
  initialState,
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload;
    },
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
    setDifficultWords: (state, action) => {
      state.difficultWords = action.payload;
    },
    setLearnedWords: (state, action) => {
      state.learnedWords = action.payload;
    }
  }
});

export const wordsPageReducer = wordsPageSlice.reducer;

export const wordsPageActions = wordsPageSlice.actions;
