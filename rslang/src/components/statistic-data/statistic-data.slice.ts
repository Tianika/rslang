import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  optional: {}
};

//создаем редюсеры
export const getStatisticSlice = createSlice({
  name: 'getStatistic',
  initialState,
  reducers: {
    getStatistic: (state, action) => {
      state.optional = action.payload;
    }
  }
});

export const getStatisticReducer = getStatisticSlice.reducer;
//добавить sprintGameSlice в reducer.ts

export const getStatisticActions = getStatisticSlice.actions;
