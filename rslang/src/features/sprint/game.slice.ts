import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalScore: 0,
  words: [],
  checkboxesLevel: 0,
  levelAnswer: 1,
  currentWord: '',
  currentTranslate: '',
  scorePerWord: 10,
  checkboxes: [false, false, false]
};

//создаем редюсеры
export const sprintGameSlice = createSlice({
  name: 'sprint/game',
  initialState,
  reducers: {
    changeTotalScore: (state) => {
      state.totalScore += state.scorePerWord;
    },
    upCheckboxesLevel: (state) => {
      if (state.levelAnswer < 4) {
        if (state.checkboxesLevel < 3) {
          state.checkboxesLevel += 1;
        } else {
          state.checkboxesLevel = 0;
          state.levelAnswer += 1;
          if (state.scorePerWord < 80) {
            state.scorePerWord *= 2;
          }
        }

        for (let i = 0; i < 3; i++) {
          state.checkboxes[i] = i < state.checkboxesLevel ? true : false;
        }

        if (state.levelAnswer === 4) {
          state.checkboxes = [true, true, true];
        }
      }
    },
    resetSprintGameState: (state) => {
      state.checkboxesLevel = 0;
      state.levelAnswer = 1;
      state.scorePerWord = 10;
    }
  }
});

export const sprintGameReducer = sprintGameSlice.reducer;
//добавить gameSlice в reducer.ts

export const sprintGameActions = sprintGameSlice.actions;
