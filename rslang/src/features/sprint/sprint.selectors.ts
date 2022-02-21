import { RootState } from '../../app/store';

//статус загрузки
export const loadingStatus = (state: RootState) => {
  return state.sprintGame.loadingState;
};

//массив слов
export const wordsSelector = (state: RootState) => {
  return state.sprintGame.words;
};

//правильные ответы
export const rightAnswersSelector = (state: RootState) => {
  return state.sprintGame.rightAnswers;
};

//неправильные ответы
export const errorAnswersSelector = (state: RootState) => {
  return state.sprintGame.errorAnswers;
};
