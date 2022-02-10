import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalScore: 0,
  words: [],
  checkboxesLevel: 0,
  levelAnswer: 1,
  currentWord: '',
  currentTranslate: '',
  scorePerWord: 10,
  chechboxes: [false, false, false],
  levels: [true, false, false, false]
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
      state.checkboxesLevel += 1;
    },
    upLevelAnswer: (state) => {
      state.levelAnswer += 1;
    },
    upScorePerWord: (state) => {
      state.levelAnswer *= 2;
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
