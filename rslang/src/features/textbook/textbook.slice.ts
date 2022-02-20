import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { TextBookState } from './types';

const initialState: TextBookState = {
  words: [],
  loadingState: LoadingState.Initial,
  aggregatedWords: []
};

//создаем редюсеры
export const textBookSlice = createSlice({
  name: 'textbook',
  initialState,
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload;
    },
    changeLoadingState: (state, action) => {
      state.loadingState = action.payload;
    },
    setAggregatedWords: (state, action) => {
      state.aggregatedWords.push(action.payload);
    }
  }
});

export const textBookReducer = textBookSlice.reducer;

export const textBookActions = textBookSlice.actions;
