import { RootState } from '../../app/store';

//получаем уровень сложности
export const selectedGroup = (state: RootState) => {
  return state.sprint.level;
};

//запущена ли игра
export const sprintGameStatus = (state: RootState) => {
  return state.sprint.isGame;
};

//получаем статус соединения с сервером
export const sprintStatusSelector = (state: RootState) => {
  return state.sprint.loadingState;
};

//общее количество очков
export const getScore = (state: RootState) => {
  return state.sprintGame.totalScore;
};

//количество очков за слово
export const getScorePerLevel = (state: RootState) => {
  return state.sprintGame.scorePerWord;
};

//уровень игры
export const getLevel = (state: RootState) => {
  return state.sprintGame.levelAnswer;
};
