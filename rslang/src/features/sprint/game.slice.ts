import { createSlice } from '@reduxjs/toolkit';
import { SprintGameState } from './types';

const initialState: SprintGameState = {
  totalScore: 0,
  words: [],
  checkboxesLevel: 0,
  levelAnswer: 1,
  currentWordIndex: 0,
  currentWord: '',
  currentTranslate: '',
  isRightTranslate: true,
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
    resetTotalScore: (state) => {
      state.totalScore = 0;
    },
    upLevelForRightAnswer: (state) => {
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
      state.checkboxes = [false, false, false];
    },
    setWordArray: (state, action) => {
      state.words = action.payload;
    },
    upCurrentWordIndex: (state) => {
      state.currentWordIndex += 1;
    },
    setCurrentWord: (state, action) => {
      state.currentWord = action.payload;
    },
    setCurrentTranslate: (state, action) => {
      state.currentTranslate = action.payload;
    },
    changeIsRightTranslate: (state) => {
      const random = Math.random();
      console.log(random);

      state.isRightTranslate = random < 0.5 ? false : true;
    }
  }
});

export const sprintGameReducer = sprintGameSlice.reducer;
//добавить sprintGameSlice в reducer.ts

export const sprintGameActions = sprintGameSlice.actions;
