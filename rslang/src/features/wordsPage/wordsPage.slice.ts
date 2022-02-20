import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
//import { TextBookState } from './types';

const initialState = {
  words: [],
  loadingState: LoadingState.Initial,
  aggregatedWords: []
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
    setAggregatedWords: (state, action) => {
      //state.aggregatedWords.push(action);
    }
  }
});

export const wordsPageReducer = wordsPageSlice.reducer;

export const wordsPageActions = wordsPageSlice.actions;
