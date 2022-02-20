import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { WordsPageState } from './types';

const initialState: WordsPageState = {
  words: [],
  aggregatedWords: [],
  loadingState: LoadingState.Initial
};
//TODO добавить тип

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
    setAggregatedWords: (state, action) => {
      //state.aggregatedWords.push(action.payload);
    }
  }
});

export const wordsPageReducer = wordsPageSlice.reducer;

export const wordsPageActions = wordsPageSlice.actions;
