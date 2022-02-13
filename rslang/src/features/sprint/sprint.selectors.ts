import { RootState } from '../../app/store';

//статус загрузки
export const loadingStatus = (state: RootState) => {
  return state.sprintGame.loadingState;
};

//общее количество очков
export const totalScoreSelector = (state: RootState) => {
  return state.sprintGame.totalScore;
};

//количество очков за слово
export const scorePerLevelSelector = (state: RootState) => {
  return state.sprintGame.scorePerWord;
};

//уровень игры
export const levelSelector = (state: RootState) => {
  return state.sprintGame.levelAnswer;
};

//чекбоксы
export const checkboxesSelector = (state: RootState) => {
  return state.sprintGame.checkboxes;
};

//получить текущее слово
export const currentWordSelector = (state: RootState) => {
  return state.sprintGame.currentWord;
};

//получить текущий перевод
export const currentTranslateSelector = (state: RootState) => {
  return state.sprintGame.currentTranslate;
};

//получить текущее слово
export const wordSelector = (state: RootState) => {
  return state.sprintGame.words[state.sprintGame.currentWordIndex];
};

//правильный ли перевод выводится на экран
export const isRightTranslateSelector = (state: RootState) => {
  return state.sprintGame.isRightTranslate;
};

//текущий индекс слова в массиве
export const currentIndex = (state: RootState) => {
  return state.sprintGame.currentWordIndex;
};
