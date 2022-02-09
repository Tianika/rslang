import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils';
import { TextBookState } from './types';

const initialState: TextBookState = {
  words: [],
  loadingState: LoadingState.Initial
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
    }
  }
});

export const textBookReducer = textBookSlice.reducer;
//добавить loginReducer в reducer.ts

export const textBookActions = textBookSlice.actions;

// 1) описать типы
// 2) слайс описать начальное состояние
